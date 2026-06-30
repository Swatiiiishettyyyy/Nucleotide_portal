import { navSections } from '../../data/navigation'
import dashboardIcon from '../../assets/Dashboard/Icon set 2_sa-10.svg'
import manageAdminsIcon from '../../assets/Dashboard/Icon set 2_sa-9.svg'
import onboardAdminIcon from '../../assets/Dashboard/Icon set 2_sa-8.svg'
import revenueIcon from '../../assets/Dashboard/Icon set 2_sa-7.svg'
import practitionersIcon from '../../assets/Dashboard/Icon set 2_sa-6.svg'
import geoIcon from '../../assets/Dashboard/Icon set 2_sa-5.svg'
import testAnalyticsIcon from '../../assets/Dashboard/Icon set 2_sa-4.svg'
import allPatientsIcon from '../../assets/Dashboard/Icon set 2_sa-3.svg'
import commissionIcon from '../../assets/Dashboard/Icon set 2_sa-2.svg'
import auditIcon from '../../assets/Dashboard/Icon set 2_sa-1.svg'
import settingsIcon from '../../assets/Dashboard/Icon set 2_sa.svg'

const navIcons = {
  Dashboard: dashboardIcon,
  'Manage Admins': manageAdminsIcon,
  'Onboard Admin': onboardAdminIcon,
  'Revenue & Profits': revenueIcon,
  'All Practitioners': practitionersIcon,
  'Geo Intelligence': geoIcon,
  'Test Analytics': testAnalyticsIcon,
  'All Patients': allPatientsIcon,
  'Commission Config': commissionIcon,
  'Audit Log': auditIcon,
  'Platform Settings': settingsIcon,
}

export function Sidebar({ activePage, onNavigate }) {
  const progressProfile = activePage === 'Audit Log' || activePage === 'Geo Intelligence' || activePage === 'Commission Config' || activePage === 'Manage Admins' || activePage === 'All Practitioners' || activePage === 'All Patients'

  return (
    <aside className="sidebar" aria-label="Super admin navigation">
      <div className="sidebar-scroll">
        <p className="role-label">SUPER ADMIN</p>
        {navSections.map((section) => (
          <section className="nav-section" key={section.title}>
            <h2 className="nav-section-title">{section.title}</h2>
            <div className="nav-list">
              {section.items.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  className={`nav-item ${activePage === item.label ? 'active' : ''}`}
                  onClick={() => onNavigate(item.label)}
                >
                  <img className="nav-icon" src={navIcons[item.label]} alt="" aria-hidden="true" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>
      <div className={`profile-card ${progressProfile ? 'profile-card-audit' : ''}`}>
        <div className="profile-info">
          <strong>{progressProfile ? 'Dr. Ananya Krishnamurthy' : 'Rajesh tyer'}</strong>
          <span>{progressProfile ? 'MD, Internal Medicine' : 'Nucleotide HQ'}</span>
        </div>
        <span className="role-chip">{progressProfile ? 'In Progress' : 'Super Admin'}</span>
      </div>
    </aside>
  )
}
