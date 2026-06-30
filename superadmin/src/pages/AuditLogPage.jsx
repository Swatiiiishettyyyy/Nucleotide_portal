import { Icon } from '../components/ui/Icon'

const filterTabs = ['All', 'Logins', 'Inboards', 'Payouts', 'Edits', 'Alerts']

const auditRows = [
  {
    timestamp: '20 May 2026 • 09:14',
    admin: 'Karthik',
    adminTone: 'green',
    action: 'Practitioner Onboarded',
    details: 'Dr. Ananya Krishnamurthy • Bengaluru • DoctorA',
    ip: '49.36.x.x',
    risk: 'Low',
    riskTone: 'low',
    strong: true,
  },
  {
    timestamp: '22 July 2025 • 11:45',
    admin: 'Jordan',
    adminTone: 'purple',
    action: 'Payout Processed',
    details: '₹8400 - Meera Joshi (HDFC **** 2391)',
    ip: '10.0.0.2',
    risk: 'Medium',
    riskTone: 'medium',
  },
  {
    timestamp: '30 September 2024 • 17:00',
    admin: 'Morgan',
    adminTone: 'green',
    action: 'Bank Details Changed',
    details: 'Dr. Ananya Krishnamurthy • Bengaluru • DoctorA',
    ip: '192.0.2.4',
    risk: 'High',
    riskTone: 'high',
  },
  {
    timestamp: '15 June 2027 • 14:30',
    admin: 'Alex',
    adminTone: 'blue',
    action: 'Commission Override',
    details: 'Dr. Ananya Krishnamurthy • Bengaluru • DoctorA',
    ip: '192.168.1.1',
    risk: 'Low',
    riskTone: 'low',
  },
  {
    timestamp: '5 August 2028 • 08:15',
    admin: 'Taylor',
    adminTone: 'green',
    action: 'Practitioner Onboarded',
    details: 'Dr. Ananya Krishnamurthy • Bengaluru • DoctorA',
    ip: '172.16.254.3',
    risk: 'Low',
    riskTone: 'low',
  },
]

export function AuditLogPage() {
  return (
    <main className="content audit-log-page">
      <header className="audit-heading">
        <h1>Audit Log</h1>
      </header>

      <section className="audit-filters" aria-label="Audit filters">
        <strong>Filters</strong>
        <div className="audit-filter-tabs" role="list" aria-label="Audit type">
          {filterTabs.map((tab) => (
            <button
              className={`audit-filter-tab ${tab === 'All' ? 'active' : ''}`}
              key={tab}
              type="button"
            >
              {tab}
            </button>
          ))}
        </div>
        <label className="audit-date-label">
          <span>From</span>
          <span className="audit-date-control">
            <span>01-01-2026</span>
            <Icon name="calendar" size="xs" />
          </span>
        </label>
        <label className="audit-date-label">
          <span>To</span>
          <span className="audit-date-control">
            <span>01-05-2026</span>
            <Icon name="calendar" size="xs" />
          </span>
        </label>
        <button className="audit-admin-select" type="button">
          <span>All Admins</span>
        </button>
        <button className="audit-filter-chevron" type="button" aria-label="Expand filters">
          <span></span>
        </button>
      </section>

      <section className="audit-table-card" aria-label="Audit log entries">
        <div className="audit-table" role="table">
          <div className="audit-row audit-table-head" role="row">
            <span role="columnheader">TIMESTAMP</span>
            <span role="columnheader">ADMIN</span>
            <span role="columnheader">ACTION`</span>
            <span role="columnheader">DETAILS</span>
            <span role="columnheader">IP ADDRESS</span>
            <span role="columnheader">RISK</span>
          </div>
          {auditRows.map((row) => (
            <article className={`audit-row ${row.strong ? 'audit-row-strong' : ''}`} role="row" key={`${row.timestamp}-${row.admin}`}>
              <span data-label="Timestamp">{row.timestamp}</span>
              <span data-label="Admin">
                <span className={`audit-admin-pill audit-admin-${row.adminTone}`}>{row.admin}</span>
              </span>
              <span data-label="Action">{row.action}</span>
              <span data-label="Details">{row.details}</span>
              <span data-label="IP Address">{row.ip}</span>
              <span data-label="Risk">
                <span className={`audit-risk-pill audit-risk-${row.riskTone}`}>{row.risk}</span>
              </span>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
