import { useState } from 'react'
import { Avatar } from '../components/ui/Avatar'
import { patients, patientSummaryStats } from '../features/patients/data/patients'
import calendarIcon from '../assets/Manage_admin/Calendar.svg'
import fileExportIcon from '../assets/Manage_admin/file-export.svg'
import frameIcon from '../assets/Manage_admin/Frame.svg'
import downIcon from '../assets/Manage_admin/Down.svg'

const statusMeta = {
  Active:   { cls: 'badge-active',    label: 'Active'   },
  Pending:  { cls: 'badge-pending',   label: 'Pending'  },
  Inactive: { cls: 'badge-suspended', label: 'Inactive' },
}

const genderTone = { Male: 'blue', Female: 'purple' }

const statColors = {
  purple: { bg: 'rgba(139,92,246,0.08)',  accent: 'var(--brand-dark)' },
  teal:   { bg: 'rgba(65,201,179,0.10)',  accent: '#0d7a6f'           },
  blue:   { bg: 'rgba(59,130,246,0.09)',  accent: '#1565c0'           },
  green:  { bg: 'rgba(67,160,71,0.10)',   accent: '#2e7d32'           },
}

export function AllPatientsPage() {
  const [activePill, setActivePill]   = useState('all')
  const [selectedPatient, setSelectedPatient] = useState(null)

  const counts = {
    active:   patients.filter(p => p.status === 'Active').length,
    pending:  patients.filter(p => p.status === 'Pending').length,
    inactive: patients.filter(p => p.status === 'Inactive').length,
  }

  const pills = [
    { key: 'all',      label: `All (${patients.length})` },
    { key: 'active',   label: `Active (${counts.active})` },
    { key: 'pending',  label: `Pending (${counts.pending})` },
    { key: 'inactive', label: `Inactive (${counts.inactive})` },
  ]

  const filtered = activePill === 'all'
    ? patients
    : patients.filter(p => p.status.toLowerCase() === activePill)

  return (
    <>
      <main className="content all-patients-page">

        {/* ── Title bar ── */}
        <div className="page-title">
          <div>
            <h1>All Patients</h1>
            <p className="page-subtitle">Platform-wide patient registry across all regions.</p>
          </div>
          <div className="list-actions">
            <button className="secondary-button" type="button">
              <img src={fileExportIcon} alt="" aria-hidden="true" className="btn-icon" />
              Export CSV
            </button>
            <button className="primary-button" type="button">
              <img src={frameIcon} alt="" aria-hidden="true" className="btn-icon btn-icon-white" />
              Add Patient
            </button>
          </div>
        </div>

        {/* ── Summary cards ── */}
        <div className="summary-cards">
          {patientSummaryStats.map((s) => (
            <div
              key={s.label}
              className="pat-stat-card"
              style={{ '--pat-stat-bg': statColors[s.color].bg, '--pat-stat-accent': statColors[s.color].accent }}
            >
              <div className="pat-stat-dot" aria-hidden="true" />
              <div className="pat-stat-body">
                <span className="pat-stat-value">{s.value}</span>
                <span className="pat-stat-label">{s.label}</span>
                <span className="pat-stat-sub">{s.sub}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Filters ── */}
        <section className="filters all-patients-filters" aria-label="Patient filters">
          <div className="filter-group">
            <strong className="filter-heading">Filters</strong>
            <div className="filter-pills">
              {pills.map((p) => (
                <button
                  key={p.key}
                  type="button"
                  className={`filter-pill ${activePill === p.key ? 'active' : ''}`}
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
                <input type="date" defaultValue="2026-01-01" />
                <img src={calendarIcon} alt="" aria-hidden="true" className="date-icon" />
              </div>
            </label>
            <label className="date-label">
              <span>To</span>
              <div className="date-input-wrap">
                <input type="date" defaultValue="2026-06-30" />
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

        {/* ── Table ── */}
        <div className="table-section-header">
          <div>
            <h2>Patient list</h2>
            <p>All patients enrolled across every admin and practitioner.</p>
          </div>
        </div>

        <section className="table-card all-patients-card" aria-label="Patient list">
          <div className="pat-table" role="table">
            {/* Head */}
            <div className="pat-row pat-head" role="row">
              <span>Patient</span>
              <span>Age / Gender</span>
              <span>Mobile</span>
              <span>Region</span>
              <span>Practitioner</span>
              <span>Specialty</span>
              <span>Blood Tests</span>
              <span>Genetic Tests</span>
              <span>Last Visit</span>
              <span>Reports</span>
              <span>Status</span>
            </div>

            {filtered.length === 0 ? (
              <div className="pr-empty">No patients match this filter.</div>
            ) : filtered.map((p) => (
              <article
                className="pat-row pat-data-row"
                role="row"
                key={p.id}
                onClick={() => setSelectedPatient(p)}
              >
                <div className="admin-identity">
                  <Avatar initials={p.initials} tone={genderTone[p.gender] ?? 'purple'} />
                  <div>
                    <strong>{p.name}</strong>
                    <span>{p.email}</span>
                  </div>
                </div>

                <span data-label="Age / Gender">
                  <span className="pat-age">{p.age}y</span>
                  <span className={`pat-gender pat-gender-${p.gender.toLowerCase()}`}>{p.gender}</span>
                </span>

                <span data-label="Mobile">{p.mobile}</span>
                <span data-label="Region">{p.region}</span>

                <span data-label="Practitioner" className="pat-practitioner">
                  {p.practitioner}
                </span>

                <span data-label="Specialty">
                  <span className={`specialty-chip specialty-${specialtyColor(p.specialty)}`}>
                    {p.specialty}
                  </span>
                </span>

                <b data-label="Blood Tests">{p.bloodTests}</b>
                <b data-label="Genetic Tests">{p.geneticTests}</b>

                <span data-label="Last Visit" className="pat-date">{p.lastVisit}</span>
                <b data-label="Reports">{p.reports}</b>

                <span data-label="Status">
                  <span className={`status-badge ${statusMeta[p.status]?.cls ?? ''}`}>
                    {statusMeta[p.status]?.label ?? p.status}
                  </span>
                </span>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* ── Patient detail drawer ── */}
      {selectedPatient && (
        <>
          <div className="drawer-backdrop" onClick={() => setSelectedPatient(null)} aria-hidden="true" />
          <aside className="drawer" role="complementary" aria-label={`Details for ${selectedPatient.name}`}>
            <div className="drawer-header">
              <div className="drawer-title-group">
                <Avatar initials={selectedPatient.initials} tone={genderTone[selectedPatient.gender] ?? 'purple'} size="lg" />
                <div>
                  <h3 className="drawer-name">{selectedPatient.name}</h3>
                  <div className="pr-drawer-meta">
                    <span className="pr-specialty-label">{selectedPatient.age}y · {selectedPatient.gender}</span>
                    <span className={`status-badge ${statusMeta[selectedPatient.status]?.cls ?? ''}`}>
                      {statusMeta[selectedPatient.status]?.label ?? selectedPatient.status}
                    </span>
                  </div>
                </div>
              </div>
              <button className="drawer-close" type="button" onClick={() => setSelectedPatient(null)} aria-label="Close">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="icon icon-sm" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="drawer-body">
              <section className="drawer-section">
                <h4 className="drawer-section-title">Contact</h4>
                <ul className="drawer-info-list">
                  <li><span className="pat-drawer-icon">✉</span><span>{selectedPatient.email}</span></li>
                  <li><span className="pat-drawer-icon">📱</span><span>{selectedPatient.mobile}</span></li>
                  <li><span className="pat-drawer-icon">📍</span><span>{selectedPatient.region}</span></li>
                </ul>
              </section>

              <section className="drawer-section">
                <h4 className="drawer-section-title">Assigned Practitioner</h4>
                <div className="pat-drawer-practitioner">
                  <strong>{selectedPatient.practitioner}</strong>
                  <span className={`specialty-chip specialty-${specialtyColor(selectedPatient.specialty)}`}>
                    {selectedPatient.specialty}
                  </span>
                </div>
              </section>

              <section className="drawer-section">
                <h4 className="drawer-section-title">Activity</h4>
                <div className="drawer-stats">
                  <div className="drawer-stat">
                    <span className="drawer-stat-val">{selectedPatient.bloodTests}</span>
                    <span className="drawer-stat-lbl">Blood Tests</span>
                  </div>
                  <div className="drawer-stat">
                    <span className="drawer-stat-val">{selectedPatient.geneticTests}</span>
                    <span className="drawer-stat-lbl">Genetic Tests</span>
                  </div>
                  <div className="drawer-stat">
                    <span className="drawer-stat-val">{selectedPatient.reports}</span>
                    <span className="drawer-stat-lbl">Reports</span>
                  </div>
                  <div className="drawer-stat">
                    <span className="drawer-stat-val">{selectedPatient.lastVisit}</span>
                    <span className="drawer-stat-lbl">Last Visit</span>
                  </div>
                </div>
              </section>

              <div className="drawer-actions">
                <button className="primary-button drawer-btn" type="button">View Reports</button>
                <button className="danger-button drawer-btn" type="button">Deactivate</button>
              </div>
            </div>
          </aside>
        </>
      )}
    </>
  )
}

function specialtyColor(specialty) {
  const map = {
    Cardiology: 'purple', Neurology: 'teal', Oncology: 'blue',
    Genetics: 'green', Endocrinology: 'orange', Dermatology: 'pink', Pathology: 'gray',
  }
  return map[specialty] ?? 'gray'
}
