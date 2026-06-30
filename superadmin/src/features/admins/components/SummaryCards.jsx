import iconSa1 from '../../../assets/Manage_admin/Icon set 2_sa-1.svg'
import iconSa2 from '../../../assets/Manage_admin/Icon set 2_sa-2.svg'
import iconSa3 from '../../../assets/Manage_admin/Icon set 2_sa-3.svg'
import iconSa4 from '../../../assets/Manage_admin/Icon set 2_sa-4.svg'
import { summaryStats } from '../data/admins'

const assetIcons = {
  purple: iconSa1,
  teal:   iconSa2,
  blue:   iconSa3,
  green:  iconSa4,
}

export function SummaryCards() {
  return (
    <div className="summary-cards">
      {summaryStats.map((stat) => (
        <div className={`stat-card stat-card-${stat.color}`} key={stat.label}>
          <div className="stat-card-icon">
            <img src={assetIcons[stat.color]} alt="" aria-hidden="true" className="stat-icon-img" />
          </div>
          <div className="stat-card-body">
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
            <span className="stat-sub">{stat.sub}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
