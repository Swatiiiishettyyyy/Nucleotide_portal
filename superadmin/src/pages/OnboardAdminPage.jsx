import { useState } from 'react'

/* ── Onboard admin assets ── */
import checkIcon    from '../assets/onboard_admin/checkmark-circle-02.svg'
import alertIcon    from '../assets/onboard_admin/alert.svg'
import calendarIcon from '../assets/onboard_admin/Calendar.svg'
import downIcon     from '../assets/onboard_admin/Down.svg'

/* ── Verify step assets (Onbaord_verfication folder) ── */
import verifiedCircle from '../assets/Onbaord_verfication/Frame-1.svg'
import mobileVerifIcon from '../assets/Onbaord_verfication/Icon set 2_sa-9.svg'
import emailVerifIcon  from '../assets/Onbaord_verfication/mail.svg'
import aadhaarVerifIcon from '../assets/Onbaord_verfication/Icon set 2_sa-1.svg'
import faceVerifIcon   from '../assets/Onbaord_verfication/Face.svg'


import { Avatar } from '../components/ui/Avatar'

/* ─────────────────────────────────────────────────────────────── */
/*  Shared static data                                             */
/* ─────────────────────────────────────────────────────────────── */

const STEPS = ['Profile', 'Verify', 'Access', 'Bank', 'Review']

const PENDING_VERIFICATIONS = [
  {
    id: 1,
    initials: 'SG',
    title: 'Full Body Checkup – Basic',
    subtitle: 'Ananya Sharma -Self',
    badges: [
      { label: 'Mobile',  done: true  },
      { label: 'Email',   done: true  },
      { label: 'Aadhaar', done: false },
      { label: 'Face',    done: false },
    ],
  },
  {
    id: 2,
    initials: 'SG',
    title: 'Full Body Checkup – Basic',
    subtitle: 'Ananya Sharma -Self',
    badges: [
      { label: 'Mobile',  done: true  },
      { label: 'Email',   done: true  },
      { label: 'Aadhaar', done: true  },
      { label: 'Face',    done: false },
    ],
  },
]

const RECENT_ADMINS = [
  { initials: 'KS', name: 'Karthik Subramaniam', role: 'Regional Admin', onboarded: 'Onboarded Jan 2026', tone: 'purple' },
  { initials: 'PN', name: 'Priya Nambiar',        role: 'Regional Admin', onboarded: 'Onboarded Feb 2026', tone: 'teal'   },
  { initials: 'AR', name: 'Arjun Reddy',           role: 'City Admin',    onboarded: 'Onboarded Apr 2026', tone: 'blue'   },
]

const CHECKLIST = [
  { text: 'Collect complete personal details including PAN & Aadhaar',                 done: true  },
  { text: 'Verify Mobile OTP, Email OTP, Aadhaar OTP & Face photo — all 4 mandatory',  done: true  },
  { text: 'Set access permissions based on admin role and region',                      done: true  },
  { text: 'Collect verified bank details for commission payouts',                       done: true  },
  { text: 'Assian revenue and practitioner taraets for accountability',                 done: false },
  { text: 'Share Admin Code securely — required for 2FA bank changes',                  done: false },
]

/* ─────────────────────────────────────────────────────────────── */
/*  Small shared helpers                                           */
/* ─────────────────────────────────────────────────────────────── */

function KycBadge({ label, done }) {
  return (
    <span className={`onboard-kyc-badge ${done ? 'done' : 'pending'}`}>
      {done && (
        <svg viewBox="0 0 16 16" aria-hidden="true" className="kyc-check">
          <path d="M3 8.5 6 11.5 13 5" stroke="currentColor" strokeWidth="1.5"
            strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      )}
      {label}
    </span>
  )
}

function FormActions({ onBack, onNext, nextLabel = 'Continue' }) {
  return (
    <div className={`onboard-form-actions ${onBack ? 'onboard-form-actions-split' : ''}`}>
      {onBack && (
        <button className="secondary-button onboard-back-btn" type="button" onClick={onBack}>
          Back
        </button>
      )}
      <button className="primary-button" type="button" onClick={onNext}>
        {nextLabel}
      </button>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────── */
/*  Step 1 — Profile                                              */
/* ─────────────────────────────────────────────────────────────── */

function ProfileStep({ onNext }) {
  return (
    <div className="onboard-form">
      <div>
        <h2 className="onboard-form-title">Admin Profile</h2>
        <p className="onboard-form-subtitle">Enter the new admin's personal and professional details,</p>
      </div>

      <fieldset className="onboard-fieldset">
        <legend className="onboard-fieldset-legend">PERSONAL DETAILS</legend>
        <div className="onboard-field-row">
          <div className="onboard-field">
            <label className="onboard-label">Full Name*</label>
            <input className="onboard-input" type="text" defaultValue="Rajesh Iyer" />
          </div>
          <div className="onboard-field">
            <label className="onboard-label">Date of Birth</label>
            <div className="onboard-input-icon">
              <input className="onboard-input" type="text" placeholder="dd-mm-yyyy" />
              <img src={calendarIcon} alt="" aria-hidden="true" className="onboard-input-suffix" />
            </div>
          </div>
        </div>
        <div className="onboard-field-row">
          <div className="onboard-field">
            <label className="onboard-label">Mobile Number *</label>
            <input className="onboard-input" type="tel" defaultValue="990 470 3101" />
          </div>
          <div className="onboard-field">
            <label className="onboard-label">Email address *</label>
            <input className="onboard-input" type="email" defaultValue="rajesh@nucleotide.health" />
          </div>
        </div>
        <div className="onboard-field">
          <label className="onboard-label">Home address *</label>
          <input className="onboard-input" type="text" placeholder="Street, Area, City, PIN" />
        </div>
      </fieldset>

      <fieldset className="onboard-fieldset">
        <legend className="onboard-fieldset-legend">PROFESSIONAL DETAILS</legend>
        <div className="onboard-field-row">
          <div className="onboard-field">
            <label className="onboard-label">Admin Role *</label>
            <div className="onboard-select-wrap">
              <select className="onboard-select">
                <option value="">Select role</option>
                <option>Regional Admin</option>
                <option>City Admin</option>
              </select>
              <img src={downIcon} alt="" aria-hidden="true" className="onboard-select-arrow" />
            </div>
          </div>
          <div className="onboard-field">
            <label className="onboard-label">Assigned Region *</label>
            <div className="onboard-select-wrap">
              <select className="onboard-select">
                <option value="">Select region</option>
                <option>North</option>
                <option>South</option>
                <option>East</option>
                <option>West</option>
              </select>
              <img src={downIcon} alt="" aria-hidden="true" className="onboard-select-arrow" />
            </div>
          </div>
        </div>
        <div className="onboard-field-row">
          <div className="onboard-field">
            <label className="onboard-label">PAN Number *</label>
            <input className="onboard-input" type="text" placeholder="ABCDE1234F" />
          </div>
          <div className="onboard-field">
            <label className="onboard-label">Aadhaar Number *</label>
            <input className="onboard-input" type="text" placeholder="xxxx xxxx xxxx" />
          </div>
        </div>
      </fieldset>

      <fieldset className="onboard-fieldset">
        <legend className="onboard-fieldset-legend">TARGETS & KPIS</legend>
        <div className="onboard-field-row">
          <div className="onboard-field">
            <label className="onboard-label">Monthly Practitioner Target</label>
            <input className="onboard-input" type="number" placeholder="e.g. 10" />
          </div>
          <div className="onboard-field">
            <label className="onboard-label">Monthly Patient Target</label>
            <input className="onboard-input" type="number" placeholder="e.g. 200" />
          </div>
        </div>
      </fieldset>

      <FormActions onNext={onNext} nextLabel="Continue to Verification" />
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────── */
/*  Step 2 — Verify                                               */
/* ─────────────────────────────────────────────────────────────── */

const VERIFY_ROWS = [
  {
    key:     'mobile',
    icon:    mobileVerifIcon,
    iconBg:  'verif-icon-teal',
    title:   'Mobile Number OTP',
    subtitle: 'OTP sent & verified automatically',
    done:    true,
  },
  {
    key:     'email',
    icon:    emailVerifIcon,
    iconBg:  'verif-icon-orange',
    title:   'Email Address OTP',
    subtitle: null,
    done:    false,
  },
  {
    key:     'aadhaar',
    icon:    aadhaarVerifIcon,
    iconBg:  'verif-icon-orange',
    title:   'Aadhaar Verification',
    subtitle: 'OTP to Aadhaar-linked mobile number',
    done:    false,
  },
  {
    key:     'face',
    icon:    faceVerifIcon,
    iconBg:  'verif-icon-orange',
    title:   'Face Photo Verification',
    subtitle: 'Live selfie match with Aadhaar photo',
    done:    false,
  },
]

const VERIF_STATUS_BADGES = [
  { label: 'Mobile',  done: true  },
  { label: 'Email',   done: false },
  { label: 'Aadhaar', done: false },
  { label: 'Face',    done: false },
]

function VerifyStep({ onBack, onNext }) {
  return (
    <div className="onboard-form">
      <div className="verif-rows">
        {VERIFY_ROWS.map((row) => (
          <div key={row.key} className={`verif-row ${row.done ? 'verif-row-done' : ''}`}>
            <div className={`verif-row-icon ${row.iconBg}`}>
              <img src={row.icon} alt="" aria-hidden="true" className="verif-row-icon-img" />
            </div>
            <div className="verif-row-body">
              <p className="verif-row-title">{row.title}</p>
              <p className="verif-row-sub">
                {row.key === 'email'
                  ? <>6-digit OTP to <strong>admin@nucleotide.health</strong></>
                  : row.subtitle}
              </p>
            </div>
            {row.done ? (
              <div className="verif-row-actions">
                <span className="verif-verified-badge">Verified</span>
                <img src={verifiedCircle} alt="Verified" className="verif-check-img" />
              </div>
            ) : (
              <button className="secondary-button verif-verify-btn" type="button">Verify</button>
            )}
          </div>
        ))}
      </div>

      <div className="verif-status-box">
        <p className="verif-status-title">Verification Status</p>
        <p className="verif-status-sub">Mobile only verified</p>
        <div className="onboard-verif-badges">
          {VERIF_STATUS_BADGES.map((b) => <KycBadge key={b.label} {...b} />)}
        </div>
      </div>

      <FormActions onBack={onBack} onNext={onNext} nextLabel="Continue to Access" />
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────── */
/*  Step 3 — Access                                               */
/* ─────────────────────────────────────────────────────────────── */

const PORTAL_ACCESS_ITEMS = [
  { key: 'onboard-pract',  label: 'Onboard Practitioners',       desc: 'Can onboard doctors, nutritionists, coaches, counselors', checked: true  },
  { key: 'view-reports',   label: 'View Test Reports',           desc: 'Access to all patient reports in their region',           checked: true  },
  { key: 'view-earnings',  label: 'View Own Earnings & CommissionA', desc: 'Cannot see other admins earnings',                   checked: true  },
  { key: 'process-payouts',label: 'Process Payouts',             desc: 'Can approve and process practitioner commission payouts', checked: false },
  { key: 'manage-tests',   label: 'Manage Test Packages',        desc: 'Can edit pricing and add new test packages',              checked: false },
]

const NOTIFICATION_ITEMS = [
  { key: 'daily-revenue',  label: 'Daily revenue summary email',    checked: true  },
  { key: 'new-pract',      label: 'New practitioner onboarded alert', checked: true  },
  { key: 'payout-notif',  label: 'Payout processing notifications', checked: true  },
  { key: 'login-alerts',   label: 'Suspicious login alerts',         checked: true  },
]

function AccessCheckbox({ checked, onChange }) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      onClick={onChange}
      className={`access-checkbox ${checked ? 'access-checkbox-on' : ''}`}
    >
      {checked && (
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="access-checkbox-check">
          <path d="M3 8.5 6.5 12 13 5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  )
}

function NotifCheckbox({ checked, onChange }) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      onClick={onChange}
      className={`notif-checkbox ${checked ? 'notif-checkbox-on' : ''}`}
    >
      {checked && (
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="access-checkbox-check">
          <path d="M3 8.5 6.5 12 13 5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  )
}

function AccessStep({ onBack, onNext }) {
  const [portalState, setPortalState] = useState(() =>
    Object.fromEntries(PORTAL_ACCESS_ITEMS.map(i => [i.key, i.checked]))
  )
  const [notifState, setNotifState] = useState(() =>
    Object.fromEntries(NOTIFICATION_ITEMS.map(i => [i.key, i.checked]))
  )

  return (
    <div className="onboard-form">
      <div>
        <h2 className="onboard-form-title">Access &amp; Permissions</h2>
        <p className="onboard-form-subtitle">Configure what the admin can see and do on the platform.</p>
      </div>

      {/* Portal Access */}
      <div className="access-block">
        <p className="access-block-label">PORTAL ACCESS</p>
        <div className="access-item-list">
          {PORTAL_ACCESS_ITEMS.map(item => (
            <div key={item.key} className="access-item-row">
              <AccessCheckbox
                checked={portalState[item.key]}
                onChange={() => setPortalState(p => ({ ...p, [item.key]: !p[item.key] }))}
              />
              <div className="access-item-body">
                <p className="access-item-label">{item.label}</p>
                <p className="access-item-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Notification Preferences */}
      <div className="access-block">
        <p className="access-block-label">NOTIFICATION PREFERENCES</p>
        <div className="notif-list">
          {NOTIFICATION_ITEMS.map(item => (
            <div key={item.key} className="notif-row">
              <span className="notif-label">{item.label}</span>
              <NotifCheckbox
                checked={notifState[item.key]}
                onChange={() => setNotifState(p => ({ ...p, [item.key]: !p[item.key] }))}
              />
            </div>
          ))}
        </div>
      </div>

      <FormActions onBack={onBack} onNext={onNext} nextLabel="Continue to Bank" />
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────── */
/*  Step 4 — Bank                                                 */
/* ─────────────────────────────────────────────────────────────── */

function BankStep({ onBack, onNext }) {
  return (
    <div className="onboard-form">
      <div>
        <h2 className="onboard-form-title">Bank &amp; Payout Details</h2>
        <p className="onboard-form-subtitle">Admin commission will be credited to this account monthly.</p>
      </div>

      {/* Bank account section */}
      <div className="bank-section-card">
        <p className="bank-section-label">BANK ACCOUNT</p>

        <div className="onboard-field">
          <label className="onboard-label">Account Holder Name</label>
          <input className="onboard-input" type="text" placeholder="As per bank records" />
        </div>

        <div className="onboard-field-row">
          <div className="onboard-field">
            <label className="onboard-label">Account Number</label>
            <input className="onboard-input" type="text" placeholder="Account number" />
          </div>
          <div className="onboard-field">
            <label className="onboard-label">Confirm Account Number</label>
            <input className="onboard-input" type="text" placeholder="Confirm number" />
          </div>
        </div>

        <div className="onboard-field-row">
          <div className="onboard-field">
            <label className="onboard-label">IFSC Code</label>
            <input className="onboard-input" type="text" placeholder="HDFC0001234" />
          </div>
          <div className="onboard-field">
            <label className="onboard-label">Bank Name</label>
            <input className="onboard-input" type="text" placeholder="HDFC Banka" />
          </div>
        </div>

        <p className="bank-section-label bank-section-label-tax">TAX DETAILS</p>

        <div className="onboard-field-row">
          <div className="onboard-field">
            <label className="onboard-label">PAN Number</label>
            <input className="onboard-input" type="text" placeholder="ABCDE1234F" />
          </div>
          <div className="onboard-field">
            <label className="onboard-label">GST Number (optional)</label>
            <input className="onboard-input" type="text" placeholder="27ABCDE1234FIZ5" />
          </div>
        </div>
      </div>

      {/* Warning banner */}
      <div className="bank-warning-banner">
        <div className="bank-warning-bar" />
        <div className="bank-warning-content">
          <img src={alertIcon} alt="" aria-hidden="true" className="bank-warning-icon" />
          <p className="bank-warning-text">
            Bank details can only be changed later via OTP + Admin Security Code (24).
          </p>
        </div>
      </div>

      {/* Full-width split actions */}
      <div className="bank-form-actions">
        <button className="secondary-button" type="button" onClick={onBack}>Back</button>
        <button className="primary-button" type="button" onClick={onNext}>Review &amp; Create</button>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────── */
/*  Step 5 — Review                                               */
/* ─────────────────────────────────────────────────────────────── */

const REVIEW_SUMMARY_ROWS = [
  { label: 'Commission Rate', value: 'Platform default (8% blood, 10% genetic)' },
  { label: 'Bank Account',    value: 'HDFC ••••2391' },
  { label: 'Access Level',    value: 'Regional Admin (3 of 5 permissions)A' },
]

const REVIEW_KYC_BADGES = [
  { label: 'Mobile',  done: true },
  { label: 'Email',   done: true },
  { label: 'Aadhaar', done: true },
  { label: 'Face',    done: true },
]

function ReviewStep({ onBack, onDone }) {
  return (
    <div className="onboard-form">
      <div>
        <h2 className="onboard-form-title">Review &amp; Create Account</h2>
        <p className="onboard-form-subtitle">Admin commission will be credited to this account monthly.</p>
      </div>

      {/* Admin summary card */}
      <div className="review-summary-card">
        <div className="review-admin-info">
          <p className="review-admin-name">Arjun Patel</p>
          <p className="review-admin-meta">Regional Admin Bengaluru</p>
          <p className="review-admin-id">33646</p>
        </div>
        <div className="onboard-verif-badges">
          {REVIEW_KYC_BADGES.map(b => <KycBadge key={b.label} {...b} />)}
        </div>

        <div className="review-checklist-section">
          <p className="review-checklist-label">ONBOARDING CHECKLIST</p>
          <div className="review-checklist-table">
            {REVIEW_SUMMARY_ROWS.map(row => (
              <div key={row.label} className="review-checklist-row">
                <span className="review-row-label">{row.label}</span>
                <span className="review-row-value">{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Alert banner */}
      <div className="review-alert-banner">
        <div className="review-alert-bar" />
        <div className="review-alert-content">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="review-alert-icon">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="#E53935" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 8V12" stroke="#E53935" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 16h.01" stroke="#E53935" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="review-alert-text">
            <p className="review-alert-primary">Auto-generated Admin Code: NUCL-ADM-2026-DL</p>
            <p className="review-alert-secondary">SMS + Email sent on account creation.</p>
          </div>
        </div>
      </div>

      <FormActions onBack={onBack} onNext={onDone} nextLabel="Create Admin Account" />
    </div>
  )
}

/* ─────────────────────────────────────────────────────────────── */
/*  Right sidebar — shared across all steps                       */
/* ─────────────────────────────────────────────────────────────── */

function RightSidebar() {
  return (
    <aside className="onboard-sidebar">
      <p className="onboard-section-label">PLATFORM CONFIGURATION</p>

      <div className="onboard-config-card">
        <h3 className="onboard-config-heading">PENDING VERIFICATIONS ({PENDING_VERIFICATIONS.length})</h3>
        <div className="onboard-verif-list">
          {PENDING_VERIFICATIONS.map((v) => (
            <div key={v.id} className="onboard-verif-item">
              <Avatar initials={v.initials} size="lg" tone="purple" />
              <div className="onboard-verif-body">
                <p className="onboard-verif-title">{v.title}</p>
                <p className="onboard-verif-sub">{v.subtitle}</p>
                <div className="onboard-verif-badges">
                  {v.badges.map((b) => <KycBadge key={b.label} {...b} />)}
                </div>
              </div>
              <button className="primary-button onboard-review-btn" type="button">Review</button>
            </div>
          ))}
        </div>
      </div>

      <div className="onboard-config-card">
        <h3 className="onboard-config-heading">RECENTLY ONBOARDED ADMINS</h3>
        <div className="onboard-recent-list">
          {RECENT_ADMINS.map((a) => (
            <div key={a.name} className="onboard-recent-item">
              <Avatar initials={a.initials} size="lg" tone={a.tone} />
              <div className="onboard-recent-body">
                <p className="onboard-recent-name">{a.name}</p>
                <p className="onboard-recent-role">{a.role} • {a.onboarded}</p>
              </div>
              <span className="onboard-active-badge">Active</span>
            </div>
          ))}
        </div>
      </div>

      <div className="onboard-config-card">
        <h3 className="onboard-config-heading">ONBOARDING CHECKLIST</h3>
        <ul className="onboard-checklist">
          {CHECKLIST.map((item, i) => (
            <li key={i} className="onboard-checklist-item">
              <img
                src={item.done ? checkIcon : alertIcon}
                alt={item.done ? 'Done' : 'Pending'}
                className="onboard-checklist-icon"
              />
              <span className={item.done ? '' : 'onboard-checklist-pending'}>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

/* ─────────────────────────────────────────────────────────────── */
/*  Main page                                                      */
/* ─────────────────────────────────────────────────────────────── */

export function OnboardAdminPage() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <main className="content onboard-admin-page">
      <h1 className="onboard-admin-title">Onboard New Admin</h1>

      <div className="onboard-admin-grid">
        {/* ── Left column ── */}
        <section className="onboard-section">
          <p className="onboard-section-label">ONBOARDING</p>

          <div className="onboard-card">
            {/* Stepper */}
            <div className="onboard-steps">
              {STEPS.map((step, i) => (
                <div key={step} className="onboard-step-item">
                  <div className={`onboard-step-circle ${i === activeStep ? 'active' : i < activeStep ? 'done' : ''} ${activeStep === STEPS.length - 1 ? 'done' : ''}`}>
                    {i + 1}
                  </div>
                  <span className={`onboard-step-label ${i === activeStep ? 'active' : ''}`}>{step}</span>
                </div>
              ))}
            </div>

            {/* Step content */}
            {activeStep === 0 && <ProfileStep onNext={() => setActiveStep(1)} />}
            {activeStep === 1 && <VerifyStep  onBack={() => setActiveStep(0)} onNext={() => setActiveStep(2)} />}
            {activeStep === 2 && <AccessStep  onBack={() => setActiveStep(1)} onNext={() => setActiveStep(3)} />}
            {activeStep === 3 && <BankStep    onBack={() => setActiveStep(2)} onNext={() => setActiveStep(4)} />}
            {activeStep === 4 && <ReviewStep  onBack={() => setActiveStep(3)} onDone={() => setActiveStep(4)} />}
          </div>
        </section>

        <RightSidebar />
      </div>
    </main>
  )
}
