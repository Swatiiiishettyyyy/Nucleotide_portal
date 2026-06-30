import { Avatar } from '../ui/Avatar'
import { Logo } from './Logo'

export function Navbar({ onMenuToggle, onOnboardAdmin }) {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <button className="menu-toggle" type="button" onClick={onMenuToggle} aria-label="Toggle navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <Logo />
      </div>
      <div className="nav-actions">
        <label className="search">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="search-icon">
            <circle cx="10.5" cy="10.5" r="6.5" />
            <path d="m16 16 4 4" />
          </svg>
          <input aria-label="Search" placeholder="Search admins, cities, practitioners..." />
        </label>
        <button className="round-action" type="button" aria-label="Notifications">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6.8 10.2a5.2 5.2 0 0 1 10.4 0v3.7l1.6 2.4H5.2l1.6-2.4z" />
            <path d="M10 19a2.2 2.2 0 0 0 4 0" />
          </svg>
          <span className="notif-dot"></span>
        </button>
        <button className="primary-button" type="button" onClick={onOnboardAdmin}>
          <span aria-hidden="true">+</span>
          Onboard Admin
        </button>
        <Avatar initials="CK" />
      </div>
    </header>
  )
}
