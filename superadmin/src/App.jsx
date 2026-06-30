import { useState } from 'react'
import './App.css'
import { SuperAdminLayout } from './components/layout/SuperAdminLayout'
import { ManageAdminsPage } from './pages/ManageAdminsPage'
import { PractitionersPage } from './pages/PractitionersPage'
import { AllPatientsPage } from './pages/AllPatientsPage'
import { PlatformSettingsPage } from './pages/PlatformSettingsPage'
import { AuditLogPage } from './pages/AuditLogPage'
import { GeoIntelligencePage } from './pages/GeoIntelligencePage'
import { CommissionConfigPage } from './pages/CommissionConfigPage'
import { OnboardAdminPage } from './pages/OnboardAdminPage'
import { DashboardPage } from './pages/DashboardPage'
import { RevenueAndProfitsPage } from './pages/RevenueAndProfitsPage'
import { TestAnalyticsPage }    from './pages/TestAnalyticsPage'

function App() {
  const [selectedAdmin, setSelectedAdmin]           = useState(null)
  const [practitionersAdmin, setPractitionersAdmin] = useState(null)
  const [activePage, setActivePage]                 = useState('Dashboard')

  function handleNavigate(label) {
    setActivePage(label)
    setSelectedAdmin(null)
    setPractitionersAdmin(null)
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
    if (activePage === 'Onboard Admin') {
      return <OnboardAdminPage />
    }
    if (activePage === 'Dashboard') {
      return <DashboardPage />
    }
    if (activePage === 'Revenue & Profits') {
      return <RevenueAndProfitsPage />
    }
    if (activePage === 'Test Analytics') {
      return <TestAnalyticsPage />
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
    <SuperAdminLayout
      activePage={currentNavLabel}
      onNavigate={handleNavigate}
      onOnboardAdmin={() => handleNavigate('Onboard Admin')}
    >
      {renderPage()}
    </SuperAdminLayout>
  )
}

export default App
