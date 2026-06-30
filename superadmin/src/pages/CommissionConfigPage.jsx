const rateFields = [
  {
    label: 'Blood Test Commission (Default %)',
    value: '8',
    helper: '% of test price (allowed range: 5-15%)',
    compact: true,
  },
  {
    label: 'Genetic Test Commission (Default %)',
    value: '10',
    helper: '% of test price (allowed range: 8-18%)',
    compact: true,
  },
  {
    label: 'Patient Referral Discount (%)',
    value: '5',
    helper: 'Applied to all coupon codes',
    compact: true,
  },
  {
    label: 'Payout Cycle',
    value: 'Monthly (1st of month)',
  },
  {
    label: 'Max Admins Allowed',
    value: '2000',
  },
]

const overrideRows = [
  { admin: 'Karthik (Bengaluru)', blood: '7', genetic: '10', status: 'Default', tone: 'default' },
  { admin: 'Aisha (Mumbai)', blood: '8', genetic: '12', status: 'Override', tone: 'override' },
  { admin: 'Karthik (Bengaluru)', blood: '7', genetic: '10', status: 'Default', tone: 'default' },
  { admin: 'Ravi (Delhi)', blood: '6', genetic: '9', status: 'Default', tone: 'default' },
]

export function CommissionConfigPage() {
  return (
    <main className="content commission-page">
      <header className="commission-heading">
        <h1>Commission Configuration</h1>
      </header>

      <section className="commission-card commission-rates-card" aria-labelledby="platform-rates-title">
        <div className="commission-card-heading">
          <h2 id="platform-rates-title">Platform Commission Rates</h2>
          <p>These are the default commission rates applied to all practitioners. Admins can override per-practitioner rates within allowed limits.</p>
        </div>

        <div className="commission-rate-form">
          {rateFields.map((field) => (
            <label className={`commission-field ${field.compact ? 'commission-field-compact' : ''}`} key={field.label}>
              <span>{field.label}</span>
              <span className="commission-field-row">
                <input type="text" defaultValue={field.value} aria-label={field.label} />
                {field.helper && <strong>{field.helper}</strong>}
              </span>
            </label>
          ))}
        </div>

        <div className="commission-action-row commission-action-rates">
          <button className="primary-button commission-save-button" type="button">Save Platform Rates</button>
        </div>
      </section>

      <section className="commission-card commission-override-card" aria-labelledby="admin-override-title">
        <div className="commission-card-heading">
          <h2 id="admin-override-title">Admin Commission Override</h2>
          <p>These are the default commission rates applied to all practitioners. Admins can override per-practitioner rates within allowed limits.</p>
        </div>

        <div className="commission-table-wrap">
          <div className="commission-table" role="table">
            <div className="commission-row commission-head" role="row">
              <span>ADMIN</span>
              <span>BLOOD %</span>
              <span>GENETIC %</span>
              <span>OVERRIDE</span>
            </div>

            {overrideRows.map((row, index) => (
              <article className="commission-row" role="row" key={`${row.admin}-${index}`}>
                <b data-label="Admin">{row.admin}</b>
                <span data-label="Blood %">
                  <input className="commission-small-input" type="text" defaultValue={row.blood} aria-label={`${row.admin} blood commission`} />
                </span>
                <span data-label="Genetic %">
                  <input className="commission-small-input" type="text" defaultValue={row.genetic} aria-label={`${row.admin} genetic commission`} />
                </span>
                <span data-label="Override">
                  <strong className={`commission-status commission-status-${row.tone}`}>{row.status}</strong>
                </span>
              </article>
            ))}
          </div>
        </div>

        <div className="commission-action-row commission-action-overrides">
          <button className="primary-button commission-save-button" type="button">Save Overrides</button>
        </div>
      </section>
    </main>
  )
}
