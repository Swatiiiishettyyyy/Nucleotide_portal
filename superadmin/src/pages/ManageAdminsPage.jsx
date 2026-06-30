import { AdminDetailDrawer } from '../features/admins/components/AdminDetailDrawer'
import { AdminFilters } from '../features/admins/components/AdminFilters'
import { AdminTable } from '../features/admins/components/AdminTable'
import fileExportIcon from '../assets/Manage_admin/file-export.svg'
import frameIcon from '../assets/Manage_admin/Frame.svg'

export function ManageAdminsPage({ selectedAdmin, onAdminSelect, onDrawerClose, onPractitionersClick }) {
  return (
    <>
      <main className="content manage-admins-page">
        <header className="manage-admins-heading">
          <h1>Manage Admins</h1>
        </header>

        <div className="manage-admins-list-heading">
          <div>
            <h2>Available admins list</h2>
            <p>Track your monthly progress and find topics to engage with.</p>
          </div>
          <div className="list-actions">
            <button className="secondary-button" type="button">
              <img src={fileExportIcon} alt="" aria-hidden="true" className="btn-icon" />
              Export CSV
            </button>
            <button className="primary-button" type="button">
              <img src={frameIcon} alt="" aria-hidden="true" className="btn-icon btn-icon-white" />
              Onboard Admin
            </button>
          </div>
        </div>

        <AdminFilters />

        <AdminTable onSelect={onAdminSelect} onPractitionersClick={onPractitionersClick} />
      </main>

      <AdminDetailDrawer admin={selectedAdmin} onClose={onDrawerClose} />
    </>
  )
}
