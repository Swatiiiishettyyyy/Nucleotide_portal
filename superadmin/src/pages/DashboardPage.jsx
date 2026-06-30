import calendarIcon from '../assets/Dashboard/Calendar.svg'
import activityFlagIcon from '../assets/Dashboard/Frame.svg'

const topFilters = ['All time', 'This month', 'Q1 2026', 'Last 3 Months']
const geoFilters = ['Full Geo View', 'This month', 'Q1 2026', 'Last 3 Months']

const metrics = [
  { label: 'Total Admins', value: '6', change: '+2 this month', tone: 'green' },
  { label: 'Practitioners', value: '247', change: '+18 this month', tone: 'cyan' },
  { label: 'Total Patients', value: '8,412', change: '+632 this month', tone: 'brown' },
  { label: 'Gross Revenue', value: '₹2.8Cr', change: '+38L this month', tone: 'orange' },
  { label: 'Net Profit', value: '₹1.9Cr', change: '68% margin', tone: 'purple', mutedChange: true },
  { label: 'Tests Completed', value: '₹24,180', change: '+2,140 this month', tone: 'violet' },
]

const doctorRows = [
  { initials: 'AK', name: 'Dr. Ananya Krishnamurthy', amount: '₹32.8L', practitioners: '42 practitioners' },
  { initials: 'AS', name: 'Dr. Anjali Srinivasan', amount: '₹28.5L', practitioners: '35 practitioners' },
  { initials: 'AV', name: 'Dr. Anika Veeramani', amount: '₹45.1L', practitioners: '58 practitioners' },
]

const roleBars = [
  { label: 'Doctors', value: 66 },
  { label: 'Nutritionists', value: 34 },
  { label: 'Lifestyle', value: 47 },
  { label: 'Genetic', value: 54 },
  { label: 'Mental', value: 31 },
]

const activityItems = [
  { title: 'Admin Karthik onboarded 3 doctors', meta: 'Bengaluru region - 1h ago', icon: activityFlagIcon },
  { title: '₹4.2L revenue recorded', meta: 'Admin Priya - Mumbai - 3h ago', symbol: '₹' },
  { title: 'New Admin verification pending', meta: 'Platform-wide - Today', icon: activityFlagIcon },
]

const cities = [
  { count: '52', city: 'Bengaluru' },
  { count: '44', city: 'Mumbai' },
  { count: '38', city: 'Delhi NCR' },
  { count: '31', city: 'Hyderabad' },
  { count: '54', city: 'Other cities' },
]

function DashboardFilters({ filters, active = filters[0] }) {
  return (
    <section className="dash-filterbar" aria-label="Dashboard filters">
      <strong>Filters</strong>
      <div className="dash-filter-pills">
        {filters.map((filter) => (
          <button key={filter} className={`dash-filter-pill ${filter === active ? 'active' : ''}`} type="button">
            {filter}
          </button>
        ))}
      </div>
      <div className="dash-date-group">
        <label className="dash-date-field">
          <span>From</span>
          <span className="dash-date-control">
            <span>01-01-2025</span>
            <img src={calendarIcon} alt="" aria-hidden="true" />
          </span>
        </label>
        <label className="dash-date-field">
          <span>To</span>
          <span className="dash-date-control">
            <span>01-01-2025</span>
            <img src={calendarIcon} alt="" aria-hidden="true" />
          </span>
        </label>
      </div>
    </section>
  )
}

function LineChart() {
  return (
    <div className="dash-line-chart" aria-label="Revenue, cost and net profit chart">
      <svg viewBox="0 0 560 250" role="img" aria-labelledby="line-chart-title" preserveAspectRatio="none">
        <title id="line-chart-title">Revenue, cost and net profit from January through June</title>
        {[0, 1, 2, 3].map((line) => (
          <line key={line} className="dash-chart-gridline" x1="70" x2="540" y1={35 + line * 50} y2={35 + line * 50} />
        ))}
        <path className="dash-line dash-line-revenue" d="M100 150 L165 132 L230 132 L295 88 L360 56 L425 28" />
        <path className="dash-line dash-line-cost" d="M100 195 L165 184 L230 92 L295 92 L360 62 L425 40" />
        <path className="dash-line dash-line-profit" d="M100 198 L165 198 L230 184 L295 150 L360 150 L425 92" />
        <g className="dash-chart-axis">
          {['500', '200', '100', '50', '0'].map((tick, index) => (
            <text key={tick} x="20" y={38 + index * 40}>{tick}</text>
          ))}
          {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month, index) => (
            <text key={month} x={95 + index * 65} y="235">{month}</text>
          ))}
        </g>
      </svg>
      <div className="dash-chart-legend">
        <span><i className="legend-dot revenue" />Revenue</span>
        <span><i className="legend-dot cost" />Cost</span>
        <span><i className="legend-dot profit" />Net Profit</span>
      </div>
    </div>
  )
}

export function DashboardPage() {
  return (
    <main className="content dashboard-page">
      <header className="dashboard-heading">
        <h1>Dashboard</h1>
      </header>

      <section className="dashboard-section-heading">
        <h2>Platform Overview</h2>
        <p>Track your monthly progress and find topics to engage with.</p>
      </section>

      <DashboardFilters filters={topFilters} />

      <section className="dash-metrics" aria-label="Platform metrics">
        {metrics.map((metric) => (
          <article className="dash-metric" key={metric.label}>
            <div className="dash-metric-label">
              <i className={`dash-dot dash-dot-${metric.tone}`} aria-hidden="true" />
              <span>{metric.label}</span>
            </div>
            <strong>{metric.value}</strong>
            <span className={metric.mutedChange ? 'dash-change muted' : 'dash-change'}>{metric.change}</span>
          </article>
        ))}
      </section>

      <section className="dash-chart-grid" aria-label="Financial and test breakdowns">
        <article className="dash-panel dash-revenue-panel">
          <h2>Revenue, Cost & Net Profit</h2>
          <p>View the breakdown for the month May 2026</p>
          <LineChart />
        </article>

        <article className="dash-panel dash-breakdown-panel">
          <h2>Monthly Breakdown</h2>
          <p>View the breakdown for the month May 2026</p>
          <div className="dash-donut-wrap">
            <div className="dash-donut" aria-hidden="true" />
            <div className="dash-donut-legend">
              <span><i className="blood" />Blood Tests (64)</span>
              <span><i className="genetic" />Genetic Tests (34)</span>
              <span><i className="addons" />Add-ons (18)</span>
            </div>
          </div>
        </article>
      </section>

      <section className="dash-lower-grid" aria-label="Revenue, role and activity details">
        <article className="dash-panel dash-list-panel">
          <h3>Revenue, Cost & Net Profit</h3>
          <div className="doctor-list">
            {doctorRows.map((doctor) => (
              <div className="doctor-row" key={doctor.name}>
                <span className="doctor-avatar">{doctor.initials}</span>
                <span className="doctor-name">{doctor.name}</span>
                <span className="doctor-value">
                  <strong>{doctor.amount}</strong>
                  <small>{doctor.practitioners}</small>
                </span>
              </div>
            ))}
          </div>
        </article>

        <article className="dash-panel dash-role-panel">
          <h3>Practitioners by Role</h3>
          <div className="role-chart">
            <div className="role-gridlines" aria-hidden="true" />
            {roleBars.map((role) => (
              <div className="role-bar-item" key={role.label}>
                <span className="role-bar" style={{ '--bar-value': `${role.value}%` }} />
                <small>{role.label}</small>
              </div>
            ))}
          </div>
        </article>

        <article className="dash-panel dash-activity-panel">
          <h3>Platform Activity</h3>
          <div className="activity-list">
            {activityItems.map((item) => (
              <div className="activity-row" key={item.title}>
                <span className="activity-icon">
                  {item.icon ? <img src={item.icon} alt="" aria-hidden="true" /> : item.symbol}
                </span>
                <span>
                  <strong>{item.title}</strong>
                  <small>{item.meta}</small>
                </span>
              </div>
            ))}
          </div>
        </article>
      </section>

      <DashboardFilters filters={geoFilters} />

      <section className="geo-summary">
        <div className="geo-summary-heading">
          <div>
            <h2>Geographic Distribution — Practitioners</h2>
            <p>Track your monthly progress and find topics to engage with.</p>
          </div>
          <button type="button" className="secondary-button geo-view-button">Full Geo View</button>
        </div>
        <div className="city-stats" aria-label="Geographic practitioner counts">
          {cities.map((city) => (
            <article className="city-stat" key={city.city}>
              <strong>{city.count}</strong>
              <span>{city.city}</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
