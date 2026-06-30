import { Icon } from '../components/ui/Icon'
import profilePhoto from '../assets/platform_settings/Ellipse 465.png'

const profileRows = [
  {
    left: { label: 'Mobile Number *', value: '990 470 3101', verified: true },
    right: { label: 'Enter code to verify mobile number', value: '*****', action: 'Verify' },
  },
  {
    left: { label: 'Email address *', value: 'rajesh@nucleotide.health', verified: true },
    right: { label: 'Enter code to verify email', value: '*****', action: 'Verify' },
  },
  {
    left: { label: 'Aadhaar Number', value: '1111 1111 1111 1111', verified: true },
    right: { label: 'Enter mobile code to verify Aadhaar', value: '*****', action: 'Verify' },
  },
]

const configFields = [
  { label: 'Platform Name', value: 'Nucleotide Health Intelligence' },
  { label: 'Support Email', value: 'support@nucleotide.health' },
  { label: 'Max Admins Allowed', value: '20' },
  { label: '2FA Enforcement', value: 'All users (mandatory)' },
]

const verificationItems = [
  { icon: 'phone', title: 'Mobile', detail: '+91 9800012345' },
  { icon: 'mail', title: 'Email', detail: 'rajesh@nucleotide.health' },
  { icon: 'id-card', title: 'Aadhaar', detail: '**** **** 9900' },
  { icon: 'face', title: 'Face Photo', detail: '98.4% confidence & Aadhaar matched' },
]

export function PlatformSettingsPage() {
  return (
    <main className="content platform-settings-page">
      <header className="settings-heading">
        <h1>Platform Settings</h1>
      </header>

      <section className="settings-grid" aria-label="Platform settings">
        <div className="settings-section">
          <h2>SUPER ADMIN PROFILE</h2>
          <div className="settings-card profile-editor-card">
            <div className="settings-panel">
              <div className="profile-form-stack">
                <FieldBlock field={{ label: 'Full Name', value: 'Rajesh Iyer', wide: true }} />
                {profileRows.map((row) => (
                  <div className="profile-form-row" key={row.left.label}>
                    <FieldBlock field={row.left} />
                    <FieldBlock field={row.right} />
                  </div>
                ))}
              </div>

              <div className="photo-upload-row">
                <div className="photo-avatar" aria-hidden="true">
                  <img src={profilePhoto} alt="" />
                  <span className="camera-dot">
                    <Icon name="camera" size="xs" />
                  </span>
                </div>
                <strong>Upload your photo</strong>
              </div>

              <div className="settings-actions">
                <button className="primary-button compact-button" type="button">Save Profile</button>
              </div>
            </div>
          </div>
        </div>

        <div className="settings-section">
          <h2>PLATFORM CONFIGURATION</h2>
          <div className="settings-card config-card">
            <div className="settings-panel">
              <div className="config-form-grid">
                {configFields.map((field) => (
                  <FieldBlock key={field.label} field={field} />
                ))}
              </div>
              <div className="settings-actions">
                <button className="primary-button compact-button" type="button">Save Settings</button>
              </div>
            </div>
          </div>
        </div>

        <div className="settings-section">
          <h2>SUPER ADMIN PROFILE</h2>
          <div className="settings-card verification-card">
            {verificationItems.map((item) => (
              <article className="verification-row" key={item.title}>
                <span className="verification-icon" aria-hidden="true">
                  <Icon name={item.icon} size="sm" />
                </span>
                <span className="verification-copy">
                  <strong>{item.title}</strong>
                  <span>{item.detail}</span>
                </span>
                <span className="verified-pill">Verified</span>
                <span className="check-ring" aria-label="Verified">
                  <Icon name="check" size="md" />
                </span>
              </article>
            ))}
          </div>
        </div>

        <div className="settings-section">
          <h2>SUPER ADMIN SECURITY CODE</h2>
          <div className="settings-card security-card">
            <div className="security-heading">
              <h3>Security Code</h3>
              <p>Required for all critical platform operations</p>
            </div>
            <div className="security-code-box">
              <span>Keep this secure</span>
              <div className="security-code-line">
                <span aria-hidden="true"></span>
                <strong>NUCL-DRA-2024</strong>
                <Icon name="eye-off" size="md" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function FieldBlock({ field }) {
  return (
    <div className={`settings-field ${field.wide ? 'settings-field-wide' : ''} ${field.action ? 'settings-field-with-action' : ''}`}>
      <span>{field.label}</span>
      <span className="settings-input">
        <strong>{field.value}</strong>
        {field.verified && (
          <span className="inline-check" aria-label="Verified">
            <Icon name="check" size="xs" />
          </span>
        )}
      </span>
      {field.action && (
        <button className="primary-button verify-button" type="button">{field.action}</button>
      )}
    </div>
  )
}
