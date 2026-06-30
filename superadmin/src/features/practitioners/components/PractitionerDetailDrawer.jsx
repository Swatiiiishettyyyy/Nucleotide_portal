import { Avatar } from '../../../components/ui/Avatar'
import { StatusBadge } from '../../../components/ui/StatusBadge'
import iconSa8  from '../../../assets/Manage_admin/Icon set 2_sa-8.svg'
import iconSa9  from '../../../assets/Manage_admin/Icon set 2_sa-9.svg'
import iconSa10 from '../../../assets/Manage_admin/Icon set 2_sa-10.svg'
import iconSa   from '../../../assets/Manage_admin/Icon set 2_sa.svg'
import notifIcon   from '../../../assets/Manage_admin/notification-01.svg'
import calendarIcon from '../../../assets/Manage_admin/Calendar.svg'

const kycSteps = ['Mobile', 'Email', 'Aadhaar', 'Face']
const kycIcons = { Mobile: iconSa8, Email: iconSa9, Aadhaar: iconSa10, Face: iconSa }

export function PractitionerDetailDrawer({ practitioner: p, onClose }) {
  if (!p) return null

  return (
    <>
      <div className="drawer-backdrop" onClick={onClose} aria-hidden="true" />
      <aside className="drawer" role="complementary" aria-label={`Details for ${p.name}`}>

        <div className="drawer-header">
          <div className="drawer-title-group">
            <Avatar initials={p.initials} size="lg" />
            <div>
              <h3 className="drawer-name">{p.name}</h3>
              <div className="pr-drawer-meta">
                <span className="pr-specialty-label">{p.specialty}</span>
                <StatusBadge status={p.status} />
              </div>
            </div>
          </div>
          <button className="drawer-close" type="button" onClick={onClose} aria-label="Close details">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="icon icon-sm" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="drawer-body">

          {/* Contact */}
          <section className="drawer-section">
            <h4 className="drawer-section-title">Contact</h4>
            <ul className="drawer-info-list">
              <li>
                <img src={iconSa9}    alt="" aria-hidden="true" className="drawer-info-icon" />
                <span>{p.email}</span>
              </li>
              <li>
                <img src={iconSa8}    alt="" aria-hidden="true" className="drawer-info-icon" />
                <span>{p.mobile}</span>
              </li>
              <li>
                <img src={notifIcon}  alt="" aria-hidden="true" className="drawer-info-icon" />
                <span>{p.clinic}</span>
              </li>
              <li>
                <img src={calendarIcon} alt="" aria-hidden="true" className="drawer-info-icon" />
                <span>Joined {p.joinedDate}</span>
              </li>
            </ul>
          </section>

          {/* KYC */}
          <section className="drawer-section">
            <h4 className="drawer-section-title">KYC Verification</h4>
            <div className="kyc-list">
              {kycSteps.map((step) => {
                const done = p.kyc.includes(step)
                return (
                  <div className={`kyc-step ${done ? 'kyc-done' : 'kyc-pending'}`} key={step}>
                    <span className="kyc-check">
                      {done ? (
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="icon icon-xs" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      ) : (
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="icon icon-xs" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 6 6 18M6 6l12 12" />
                        </svg>
                      )}
                    </span>
                    <img src={kycIcons[step]} alt="" aria-hidden="true" className="kyc-step-icon" />
                    <span>{step}</span>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Performance */}
          <section className="drawer-section">
            <h4 className="drawer-section-title">Performance</h4>
            <div className="drawer-stats">
              <div className="drawer-stat">
                <span className="drawer-stat-val">{p.patients}</span>
                <span className="drawer-stat-lbl">Patients</span>
              </div>
              <div className="drawer-stat">
                <span className="drawer-stat-val">{p.bloodTests}</span>
                <span className="drawer-stat-lbl">Blood Tests</span>
              </div>
              <div className="drawer-stat">
                <span className="drawer-stat-val">{p.geneticTests}</span>
                <span className="drawer-stat-lbl">Genetic Tests</span>
              </div>
              <div className="drawer-stat">
                <span className="drawer-stat-val">{p.sales}</span>
                <span className="drawer-stat-lbl">Sales</span>
              </div>
            </div>
          </section>

          {/* Actions */}
          <div className="drawer-actions">
            <button className="primary-button drawer-btn" type="button">Approve</button>
            <button className="danger-button drawer-btn" type="button">Suspend</button>
          </div>

        </div>
      </aside>
    </>
  )
}
