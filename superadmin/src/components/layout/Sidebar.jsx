import { navSections } from '../../data/navigation'
import { Icon } from '../ui/Icon'

export function Sidebar({ activePage, onNavigate }) {
  const progressProfile = activePage === 'Audit Log' || activePage === 'Geo Intelligence' || activePage === 'Commission Config' || activePage === 'Manage Admins'

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
                  <Icon name={item.icon} />
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
