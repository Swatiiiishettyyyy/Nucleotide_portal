import { useState } from 'react'
import './App.css'
import { Navbar } from './components/layout/Navbar'
import { Sidebar } from './components/layout/Sidebar'
import { ManageAdminsPage } from './pages/ManageAdminsPage'
import { PractitionersPage } from './pages/PractitionersPage'
import { AllPatientsPage } from './pages/AllPatientsPage'
import { PlatformSettingsPage } from './pages/PlatformSettingsPage'
import { AuditLogPage } from './pages/AuditLogPage'
import { GeoIntelligencePage } from './pages/GeoIntelligencePage'
import { CommissionConfigPage } from './pages/CommissionConfigPage'

function App() {
  const [selectedAdmin, setSelectedAdmin]           = useState(null)
  const [sidebarOpen, setSidebarOpen]               = useState(false)
  const [practitionersAdmin, setPractitionersAdmin] = useState(null)
  const [activePage, setActivePage]                 = useState('Geo Intelligence')

  function handleNavigate(label) {
    setActivePage(label)
    setSelectedAdmin(null)
    setPractitionersAdmin(null)
    setSidebarOpen(false)
  }

  function handlePractitionersClick(admin) {
    setSelectedAdmin(null)
    setPractitionersAdmin(admin)
    setActivePage('Manage Admins')
  }

  function renderPage() {
    if (activePage === 'All Practitioners' && !practitionersAdmin) {
      return <PractitionersPage admin={null} onBack={null} />
    }
    if (practitionersAdmin) {
      return (
        <PractitionersPage
          admin={practitionersAdmin}
          onBack={() => setPractitionersAdmin(null)}
        />
      )
    }
    if (activePage === 'All Patients') {
      return <AllPatientsPage />
    }
    if (activePage === 'Platform Settings') {
      return <PlatformSettingsPage />
    }
    if (activePage === 'Audit Log') {
      return <AuditLogPage />
    }
    if (activePage === 'Geo Intelligence') {
      return <GeoIntelligencePage />
    }
    if (activePage === 'Commission Config') {
      return <CommissionConfigPage />
    }
    return (
      <ManageAdminsPage
        selectedAdmin={selectedAdmin}
        onAdminSelect={setSelectedAdmin}
        onDrawerClose={() => setSelectedAdmin(null)}
        onPractitionersClick={handlePractitionersClick}
      />
    )
  }

  const currentNavLabel = practitionersAdmin
    ? 'Manage Admins'
    : activePage

  return (
    <div className={`app-shell ${sidebarOpen ? 'sidebar-visible' : ''}`}>
      <Navbar onMenuToggle={() => setSidebarOpen((v) => !v)} />
      <div className="dashboard">
        <Sidebar activePage={currentNavLabel} onNavigate={handleNavigate} />
        {sidebarOpen && (
          <div className="sidebar-backdrop" onClick={() => setSidebarOpen(false)} aria-hidden="true" />
        )}
        {renderPage()}
      </div>
    </div>
  )
}

export default App
