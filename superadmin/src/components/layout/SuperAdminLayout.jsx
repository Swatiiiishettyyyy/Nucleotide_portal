import { useState } from 'react'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'

export function SuperAdminLayout({ activePage, onNavigate, onOnboardAdmin, children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  function handleNavigate(label) {
    onNavigate(label)
    setSidebarOpen(false)
  }

  return (
    <div className={`app-shell ${sidebarOpen ? 'sidebar-visible' : ''}`}>
      <Navbar
        onMenuToggle={() => setSidebarOpen((value) => !value)}
        onOnboardAdmin={onOnboardAdmin}
      />
      <div className="dashboard">
        <Sidebar activePage={activePage} onNavigate={handleNavigate} />
        {sidebarOpen && (
          <div className="sidebar-backdrop" onClick={() => setSidebarOpen(false)} aria-hidden="true" />
        )}
        {children}
      </div>
    </div>
  )
}
