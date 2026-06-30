import { Fragment, useState } from 'react'
import { Avatar } from '../../../components/ui/Avatar'
import { admins } from '../data/admins'
import doctorIcon from '../../../assets/Expanded_admin/Dashboard icons-1.svg'
import nutritionIcon from '../../../assets/Expanded_admin/Dashboard icons.svg'
import lifestyleIcon from '../../../assets/Expanded_admin/test-tube-02.svg'
import geneticIcon from '../../../assets/Expanded_admin/Dashboard icons-2.svg'

const expandedStats = [
  { value: '18', label: 'Doctors', color: 'purple', icon: doctorIcon },
  { value: '11', label: 'Nutritionists', color: 'green', icon: nutritionIcon },
  { value: '7', label: 'Lifestyle', color: 'orange', icon: lifestyleIcon },
  { value: '4', label: 'Genetic Counselors', color: 'blue', icon: geneticIcon },
]

export function AdminTable({ onPractitionersClick }) {
  const [expandedAdminId, setExpandedAdminId] = useState(admins[0]?.id ?? null)
  const figmaAdmins = admins.map((admin) => ({
    ...admins[0],
    id: admin.id,
  }))

  function toggleExpanded(adminId) {
    setExpandedAdminId((current) => current === adminId ? null : adminId)
  }

  return (
    <section className="table-card manage-admins-table-card" aria-label="Available admins">
      <div className="admin-table" role="table">
        <div className="table-row table-head" role="row">
          <span>View</span>
          <span>Admin Name</span>
          <span>Region</span>
          <span>Mobile</span>
          <span>Practitioners</span>
          <span>Patients</span>
          <span>Blood Tests</span>
          <span>Genetic Tests</span>
        </div>

        {figmaAdmins.map((admin) => {
          const isExpanded = expandedAdminId === admin.id

          return (
            <Fragment key={admin.id}>
              <article className={`table-row admin-row ${isExpanded ? 'admin-row-expanded' : ''}`} role="row">
                <button
                  className={`arrow-button admin-expand-button ${isExpanded ? 'is-expanded' : ''}`}
                  type="button"
                  aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${admin.name}`}
                  aria-expanded={isExpanded}
                  onClick={() => toggleExpanded(admin.id)}
                >
                  <svg viewBox="0 0 20 20" className="arrow-btn-icon" aria-hidden="true">
                    <path d="M7 4.5 12.5 10 7 15.5" />
                  </svg>
                </button>

                <div className="admin-identity">
                  <Avatar initials="CK" />
                  <div>
                    <strong>{admin.name}</strong>
                    <span>{admin.email}</span>
                  </div>
                </div>

                <span data-label="Region">{admin.region}</span>
                <span data-label="Mobile">{admin.mobile.replace(/\s/g, '')}</span>
                <b data-label="Practitioners">
                  <button
                    type="button"
                    className="practitioners-link"
                    onClick={() => onPractitionersClick(admin)}
                    aria-label={`View ${admin.practitioners} practitioners under ${admin.name}`}
                  >
                    {admin.practitioners}
                  </button>
                </b>
                <b data-label="Patients">{admin.patients}</b>
                <b data-label="Blood Tests">{admin.bloodTests}</b>
                <b data-label="Genetic Tests">{admin.geneticTests}</b>
              </article>

              {isExpanded && <AdminExpandedStats admin={admin} />}
            </Fragment>
          )
        })}
      </div>
    </section>
  )
}

function AdminExpandedStats({ admin }) {
  const performanceStats = [
    { value: admin.patients, label: 'Total Patients' },
    { value: admin.bloodTests.replace('3,741', '3,721'), label: 'Blood Tests' },
    { value: admin.geneticTests, label: 'Genetic Tests' },
    { value: '54', label: 'Net Profit' },
  ]

  return (
    <section className="admin-expanded-panel" aria-label={`${admin.name} expanded stats`}>
      <div className="admin-expanded-specialties">
        {expandedStats.map((stat) => (
          <article className={`expanded-specialty expanded-specialty-${stat.color}`} key={stat.label}>
            <img src={stat.icon} alt="" aria-hidden="true" />
            <div>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          </article>
        ))}
      </div>
      <div className="admin-expanded-metrics">
        {performanceStats.map((stat) => (
          <article className="expanded-metric" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </div>
    </section>
  )
}
