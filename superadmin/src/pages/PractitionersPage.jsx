import { useState } from 'react'
import { Avatar } from '../components/ui/Avatar'
import { StatusBadge } from '../components/ui/StatusBadge'
import { KycBadge } from '../components/ui/KycBadge'
import { practitionersByAdmin } from '../features/admins/data/admins'
import { PractitionerDetailDrawer } from '../features/practitioners/components/PractitionerDetailDrawer'
import calendarIcon from '../assets/Manage_admin/Calendar.svg'
import fileExportIcon from '../assets/Manage_admin/file-export.svg'
import frameIcon from '../assets/Manage_admin/Frame.svg'
import frame1Icon from '../assets/Manage_admin/Frame-1.svg'
import downIcon from '../assets/Manage_admin/Down.svg'
import iconSa1 from '../assets/Manage_admin/Icon set 2_sa-1.svg'
import iconSa2 from '../assets/Manage_admin/Icon set 2_sa-2.svg'
import iconSa3 from '../assets/Manage_admin/Icon set 2_sa-3.svg'
import iconSa4 from '../assets/Manage_admin/Icon set 2_sa-4.svg'
import iconSa5 from '../assets/Manage_admin/Icon set 2_sa-5.svg'
import iconSa6 from '../assets/Manage_admin/Icon set 2_sa-6.svg'
import iconSa7 from '../assets/Manage_admin/Icon set 2_sa-7.svg'

const specialtyColors = {
  Cardiology:    'purple',
  Neurology:     'teal',
  Oncology:      'blue',
  Genetics:      'green',
  Endocrinology: 'orange',
  Dermatology:   'pink',
  Pathology:     'gray',
}

const toneMap = { purple: 'purple', teal: 'teal', blue: 'blue', green: 'purple', orange: 'teal', pink: 'blue', gray: 'purple' }

function getInitials(name) {
  return name.split(' ').filter(Boolean).map(w => w[0]).join('').slice(0, 2).toUpperCase()
}

function summaryForPractitioners(practitioners) {
  const totalPatients = practitioners.reduce((s, p) => s + parseInt(p.patients.replace(/,/g, ''), 10), 0)
  const totalBlood    = practitioners.reduce((s, p) => s + parseInt(p.bloodTests.replace(/,/g, ''), 10), 0)
  const totalGenetic  = practitioners.reduce((s, p) => s + parseInt(p.geneticTests.replace(/,/g, ''), 10), 0)
  return [
    { label: 'Total Practitioners', value: practitioners.length.toString(), sub: 'Under this admin', icon: iconSa1, color: 'purple' },
    { label: 'Total Patients',      value: totalPatients.toLocaleString('en-IN'), sub: 'Combined load',  icon: iconSa2, color: 'teal' },
    { label: 'Blood Tests',         value: totalBlood.toLocaleString('en-IN'),    sub: 'Tests ordered',  icon: iconSa3, color: 'blue' },
    { label: 'Genetic Tests',       value: totalGenetic.toLocaleString('en-IN'),  sub: 'Tests ordered',  icon: iconSa4, color: 'green' },
  ]
}

/* ── All-Practitioners view (sidebar nav) ───────────────────── */
function AllPractitionersView() {
  const [activePill, setActivePill] = useState('all')
  const [selectedPractitioner, setSelectedPractitioner] = useState(null)

  const allPractitioners = [
    {
      id: 'all-1',
      initials: 'CK',
      name: 'Karthik Subramaniam',
      email: 'karthik@nucleotide.health',
      role: 'Doctor',
      admin: 'Karthik',
      region: 'Bengaluru',
      patients: '124',
      bloodTests: '64',
      geneticTests: '34',
      commission: '₹42,800',
      status: 'Active',
    },
    {
      id: 'all-2',
      initials: 'CK',
      name: 'Meera Joshi',
      email: 'karthik@nucleotide.health',
      role: 'Nutritionist',
      admin: 'Priya',
      region: 'Mumbai',
      patients: '86',
      bloodTests: '44',
      geneticTests: '12',
      commission: '₹24,400',
      status: 'Active',
    },
    {
      id: 'all-3',
      initials: 'CK',
      name: 'Karthik Subramaniam',
      email: 'karthik@nucleotide.health',
      role: 'Doctor',
      admin: 'Karthik',
      region: 'Bengaluru',
      patients: '124',
      bloodTests: '64',
      geneticTests: '34',
      commission: '₹42,800',
      status: 'Active',
    },
    {
      id: 'all-4',
      initials: 'CK',
      name: 'Karthik Subramaniam',
      email: 'karthik@nucleotide.health',
      role: 'Doctor',
      admin: 'Karthik',
      region: 'Bengaluru',
      patients: '124',
      bloodTests: '64',
      geneticTests: '34',
      commission: '₹42,800',
      status: 'Pending Verify',
    },
    {
      id: 'all-5',
      initials: 'CK',
      name: 'Karthik Subramaniam',
      email: 'karthik@nucleotide.health',
      role: 'Doctor',
      admin: 'Karthik',
      region: 'Bengaluru',
      patients: '124',
      bloodTests: '64',
      geneticTests: '34',
      commission: '₹42,800',
      status: 'Pending Verify',
    },
  ]

  const filterPills = [
    { key: 'all', label: 'All time (247)' },
    { key: 'active', label: 'Active (4)' },
    { key: 'pending', label: 'Pending Verify (2)' },
    { key: 'suspended', label: 'Suspended (0)' },
  ]

  const filtered = activePill === 'all'
    ? allPractitioners
    : activePill === 'pending'
      ? allPractitioners.filter(p => p.status === 'Pending Verify')
      : allPractitioners.filter(p => p.status.toLowerCase() === activePill)

  return (
    <>
      <main className="content all-practitioners-page">
        <div className="page-title all-practitioners-title">
          <div>
            <h1>All Practitioners</h1>
          </div>
        </div>

        <section className="filters all-practitioners-filters" aria-label="Practitioner filters">
          <div className="filter-group">
            <strong className="filter-heading">Filters</strong>
            <div className="filter-pills">
              {filterPills.map((pill) => (
                <button
                  key={pill.key}
                  className={`filter-pill ${activePill === pill.key ? 'active' : ''}`}
                  type="button"
                  onClick={() => setActivePill(pill.key)}
                >
                  {pill.label}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-controls">
            <label className="date-label">
              <span>From</span>
              <div className="date-input-wrap">
                <input type="text" defaultValue="01-01-2026" aria-label="From date" />
                <img src={calendarIcon} alt="" aria-hidden="true" className="date-icon" />
              </div>
            </label>
            <label className="date-label">
              <span>To</span>
              <div className="date-input-wrap">
                <input type="text" defaultValue="01-05-2026" aria-label="To date" />
                <img src={calendarIcon} alt="" aria-hidden="true" className="date-icon" />
              </div>
            </label>
            <div className="select-wrap">
              <select aria-label="Region" defaultValue="all">
                <option value="all">All Regions</option>
                <option value="bengaluru">Bengaluru</option>
                <option value="chennai">Chennai</option>
                <option value="mumbai">Mumbai</option>
                <option value="pune">Pune</option>
                <option value="hyderabad">Hyderabad</option>
              </select>
              <img src={downIcon} alt="" aria-hidden="true" className="select-chevron" />
            </div>
            <button className="secondary-button export-button" type="button">Export</button>
          </div>
        </section>

        <section className="table-card all-practitioners-card" aria-label="Practitioners list">
          <div className="pr-table all-pr-table" role="table">
            <div className="pr-table-row all-pr-row pr-table-head" role="row">
              <span>Practitioner</span>
              <span>Role</span>
              <span>Admin</span>
              <span>Region</span>
              <span>Patients</span>
              <span>Blood Tests</span>
              <span>Genetic Tests</span>
              <span>Commission</span>
            </div>

            {filtered.length === 0 ? (
              <div className="pr-empty">No practitioners match this filter.</div>
            ) : filtered.map((p) => (
              <article className="pr-table-row all-pr-row pr-row" role="row" key={p.id}>
                <div className="admin-identity">
                  <Avatar initials={p.initials} tone="purple" />
                  <div>
                    <strong>{p.name}</strong>
                    <span>{p.email}</span>
                  </div>
                </div>

                <span data-label="Role">{p.role}</span>
                <span data-label="Admin">{p.admin}</span>
                <span data-label="Region">{p.region}</span>
                <b data-label="Patients">{p.patients}</b>
                <b data-label="Blood Tests">{p.bloodTests}</b>
                <b data-label="Genetic Tests">{p.geneticTests}</b>
                <b data-label="Commission">{p.commission}</b>
              </article>
            ))}
          </div>
        </section>
      </main>

      <PractitionerDetailDrawer
        practitioner={selectedPractitioner}
        onClose={() => setSelectedPractitioner(null)}
      />
    </>
  )
}

/* ── Admin-drill-down view (clicking practitioner count) ─────── */
function AdminPractitionersView({ admin, onBack }) {
  const [selectedPractitioner, setSelectedPractitioner] = useState(null)
  const [activePill, setActivePill] = useState('all')

  const allPractitioners = practitionersByAdmin[admin.id] ?? []

  const filtered = activePill === 'all'
    ? allPractitioners
    : allPractitioners.filter((p) => p.status.toLowerCase().replace(' ', '-') === activePill)

  const stats = summaryForPractitioners(allPractitioners)

  const pills = [
    { key: 'all',            label: 'All' },
    { key: 'active',         label: `Active (${allPractitioners.filter(p => p.status === 'Active').length})` },
    { key: 'pending-verify', label: `Pending Verify (${allPractitioners.filter(p => p.status === 'Pending Verify').length})` },
    { key: 'suspended',      label: `Suspended (${allPractitioners.filter(p => p.status === 'Suspended').length})` },
  ]

  return (
    <>
      <main className="content">
        <div className="pr-breadcrumb">
          <button className="pr-back-btn" type="button" onClick={onBack}>
            <svg viewBox="0 0 24 24" className="icon icon-sm" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19 12H5M11 6l-6 6 6 6" />
            </svg>
            Manage Admins
          </button>
          <span className="pr-breadcrumb-sep" aria-hidden="true">/</span>
          <span className="pr-breadcrumb-cur">Practitioners</span>
        </div>

        <div className="page-title">
          <div className="pr-title-group">
            <div className="pr-admin-badge">
              <Avatar initials={admin.initials} size="md" />
              <div>
                <h1>Practitioners</h1>
                <p className="page-subtitle">
                  Under <strong>{admin.name}</strong> · {admin.region}
                </p>
              </div>
            </div>
          </div>
          <div className="list-actions">
            <button className="secondary-button" type="button">
              <img src={fileExportIcon} alt="" aria-hidden="true" className="btn-icon" />
              Export CSV
            </button>
            <button className="primary-button" type="button">
              <img src={frameIcon} alt="" aria-hidden="true" className="btn-icon btn-icon-white" />
              Add Practitioner
            </button>
          </div>
        </div>

        <div className="summary-cards">
          {stats.map((s) => (
            <div className={`stat-card stat-card-${s.color}`} key={s.label}>
              <div className="stat-card-icon">
                <img src={s.icon} alt="" aria-hidden="true" className="stat-icon-img" />
              </div>
              <div className="stat-card-body">
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
                <span className="stat-sub">{s.sub}</span>
              </div>
            </div>
          ))}
        </div>

        <section className="filters" aria-label="Practitioner filters">
          <div className="filter-group">
            <strong className="filter-heading">Filters</strong>
            <div className="filter-pills">
              {pills.map((p) => (
                <button
                  key={p.key}
                  className={`filter-pill ${activePill === p.key ? 'active' : ''}`}
                  type="button"
                  onClick={() => setActivePill(p.key)}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>
          <div className="filter-controls">
            <label className="date-label">
              <span>From</span>
              <div className="date-input-wrap">
                <input type="date" defaultValue="2025-01-01" />
                <img src={calendarIcon} alt="" aria-hidden="true" className="date-icon" />
              </div>
            </label>
            <label className="date-label">
              <span>To</span>
              <div className="date-input-wrap">
                <input type="date" defaultValue="2025-12-31" />
                <img src={calendarIcon} alt="" aria-hidden="true" className="date-icon" />
              </div>
            </label>
            <div className="select-wrap">
              <select aria-label="Specialty" defaultValue="all">
                <option value="all">All Specialties</option>
                <option value="cardiology">Cardiology</option>
                <option value="neurology">Neurology</option>
                <option value="oncology">Oncology</option>
                <option value="genetics">Genetics</option>
                <option value="endocrinology">Endocrinology</option>
                <option value="dermatology">Dermatology</option>
                <option value="pathology">Pathology</option>
              </select>
              <img src={downIcon} alt="" aria-hidden="true" className="select-chevron" />
            </div>
          </div>
        </section>

        <div className="table-section-header">
          <div>
            <h2>Practitioners list</h2>
            <p>All practitioners under {admin.name} across {admin.region}.</p>
          </div>
        </div>

        <section className="table-card" aria-label="Practitioners list">
          <div className="pr-table" role="table">
            <div className="pr-table-row pr-table-head" role="row">
              <span></span>
              <span>Practitioner</span>
              <span>Specialty</span>
              <span>Mobile</span>
              <span>Patients</span>
              <span>Blood Tests</span>
              <span>Genetic Tests</span>
              <span>Sales</span>
              <span>Status</span>
              <span>KYC</span>
              <span>Actions</span>
            </div>

            {filtered.length === 0 ? (
              <div className="pr-empty">No practitioners match this filter.</div>
            ) : filtered.map((p) => (
              <article className="pr-table-row pr-row" role="row" key={p.id}>
                <button
                  className="arrow-button"
                  type="button"
                  aria-label={`View ${p.name}`}
                  onClick={() => setSelectedPractitioner(p)}
                >
                  <img src={frame1Icon} alt="" aria-hidden="true" className="arrow-btn-icon" />
                </button>

                <div className="admin-identity">
                  <Avatar initials={p.initials} tone={toneMap[specialtyColors[p.specialty]] ?? 'purple'} />
                  <div>
                    <strong>{p.name}</strong>
                    <span>{p.email}</span>
                  </div>
                </div>

                <span data-label="Specialty">
                  <span className={`specialty-chip specialty-${specialtyColors[p.specialty] ?? 'gray'}`}>
                    {p.specialty}
                  </span>
                </span>

                <span data-label="Mobile">{p.mobile}</span>
                <b data-label="Patients">{p.patients}</b>
                <b data-label="Blood Tests">{p.bloodTests}</b>
                <b data-label="Genetic Tests">{p.geneticTests}</b>
                <b data-label="Sales" className="col-sales">{p.sales}</b>
                <span data-label="Status"><StatusBadge status={p.status} /></span>

                <div className="kyc-cell" data-label="KYC">
                  {p.kyc.map((k) => <KycBadge key={k} label={k} />)}
                </div>

                <div className="row-actions">
                  <button type="button" className="action-detail" onClick={() => setSelectedPractitioner(p)}>
                    <img src={iconSa5} alt="" aria-hidden="true" className="action-icon" />
                    Detail
                  </button>
                  <button className="action-approve" type="button">
                    <img src={iconSa6} alt="" aria-hidden="true" className="action-icon action-icon-white" />
                    Approve
                  </button>
                  <button className="action-suspend" type="button">
                    <img src={iconSa7} alt="" aria-hidden="true" className="action-icon action-icon-white" />
                    Suspend
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <PractitionerDetailDrawer
        practitioner={selectedPractitioner}
        onClose={() => setSelectedPractitioner(null)}
      />
    </>
  )
}

/* ── Router ─────────────────────────────────────────────────── */
export function PractitionersPage({ admin, onBack }) {
  if (admin) return <AdminPractitionersView admin={admin} onBack={onBack} />
  return <AllPractitionersView />
}
