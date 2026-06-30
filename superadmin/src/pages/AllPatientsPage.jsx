import { useState } from 'react'
import { Avatar } from '../components/ui/Avatar'
import calendarIcon from '../assets/Manage_admin/Calendar.svg'
import downIcon from '../assets/Manage_admin/Down.svg'

const patientRows = [
  {
    id: 'pt1',
    initials: 'CK',
    name: 'Rohan Mehta',
    mobile: '+91 98765 43210',
    referredBy: 'Dr. Ananya K.',
    admin: 'Karthik',
    city: 'Bengaluru',
    testsTaken: 'Blood + Genetic',
    dateJoined: '12 May 2025',
    status: 'Active',
  },
  {
    id: 'pt2',
    initials: 'CK',
    name: 'Priya Sharma',
    mobile: '+91 98765 43210',
    referredBy: 'Dr. Ananya K.',
    admin: 'Karthik',
    city: 'Bengaluru',
    testsTaken: 'Blood + Genetic',
    dateJoined: '12 May 2025',
    status: 'Pending',
  },
  {
    id: 'pt3',
    initials: 'CK',
    name: 'Alex Johnson',
    mobile: '+91 12345 67890',
    referredBy: 'Dr. Priya S.',
    admin: 'Vikram',
    city: 'Mumbai',
    testsTaken: 'DNA + Health',
    dateJoined: '15 June 2026',
    status: 'Active',
  },
  {
    id: 'pt4',
    initials: 'CK',
    name: 'Alex Johnson',
    mobile: '+91 12345 67890',
    referredBy: 'Dr. Priya S.',
    admin: 'Vikram',
    city: 'Mumbai',
    testsTaken: 'DNA + Health',
    dateJoined: '15 June 2026',
    status: 'Active',
  },
  {
    id: 'pt5',
    initials: 'CK',
    name: 'Alex Johnson',
    mobile: '+91 12345 67890',
    referredBy: 'Dr. Priya S.',
    admin: 'Vikram',
    city: 'Mumbai',
    testsTaken: 'DNA + Health',
    dateJoined: '15 June 2026',
    status: 'Active',
  },
]

const filterPills = [
  { key: 'all', label: 'All time (2417)' },
  { key: 'active', label: 'Active (4)' },
  { key: 'test-completed', label: 'Test Completed' },
]

const statusClass = {
  Active: 'ap-status-active',
  Pending: 'ap-status-pending',
}

export function AllPatientsPage() {
  const [activePill, setActivePill] = useState('all')

  return (
    <main className="content all-patients-page">
      <div className="ap-heading-row">
        <h1>All Patients</h1>
      </div>

      <section className="ap-filterbar" aria-label="Patient filters">
        <strong className="ap-filter-label">Filters</strong>
        <div className="ap-filter-pills">
          {filterPills.map((pill) => (
            <button
              key={pill.key}
              type="button"
              className={`ap-filter-pill ${activePill === pill.key ? 'active' : ''}`}
              onClick={() => setActivePill(pill.key)}
            >
              {pill.label}
            </button>
          ))}
        </div>

        <div className="ap-date-group">
          <span className="ap-date-label">From</span>
          <button className="ap-date-control" type="button">
            <span>01-01-2026</span>
            <img src={calendarIcon} alt="" aria-hidden="true" className="ap-cal-icon" />
          </button>
          <span className="ap-date-label">To</span>
          <button className="ap-date-control" type="button">
            <span>01-05-2026</span>
            <img src={calendarIcon} alt="" aria-hidden="true" className="ap-cal-icon" />
          </button>
        </div>

        <div className="ap-filter-right">
          <button className="ap-select-control ap-admin-control" type="button">
            <span>All Admins</span>
            <img src={downIcon} alt="" aria-hidden="true" className="ap-chevron" />
          </button>
          <button className="ap-select-control" type="button">
            <span>All Cities</span>
            <img src={downIcon} alt="" aria-hidden="true" className="ap-chevron" />
          </button>
          <button className="ap-export-btn" type="button">Export</button>
        </div>
      </section>

      <section className="ap-table-card" aria-label="Patient list">
        <div className="ap-table-scroll">
          <table className="ap-table">
            <thead>
              <tr>
                <th>Patient</th>
                <th>Mobile</th>
                <th>Referred By</th>
                <th>Admin</th>
                <th>City</th>
                <th>Tests Taken</th>
                <th>Date Joined</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {patientRows.map((patient) => (
                <tr key={patient.id}>
                  <td>
                    <div className="ap-patient-cell">
                      <Avatar initials={patient.initials} tone="purple" />
                      <span>{patient.name}</span>
                    </div>
                  </td>
                  <td className="ap-strong">{patient.mobile}</td>
                  <td className="ap-strong">{patient.referredBy}</td>
                  <td>
                    <span className="ap-admin-badge">{patient.admin}</span>
                  </td>
                  <td className="ap-city-cell">{patient.city}</td>
                  <td className="ap-strong">{patient.testsTaken}</td>
                  <td className="ap-strong">{patient.dateJoined}</td>
                  <td>
                    <span className={`ap-status ${statusClass[patient.status]}`}>
                      {patient.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}
