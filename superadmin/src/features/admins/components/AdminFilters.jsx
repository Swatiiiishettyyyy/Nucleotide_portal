import calendarIcon from '../../../assets/Manage_admin/Calendar.svg'
import downIcon from '../../../assets/Manage_admin/Down.svg'

export function AdminFilters() {
  return (
    <section className="filters" aria-label="Admin filters">
      <div className="filter-group">
        <strong className="filter-heading">Filters</strong>
        <div className="filter-pills">
          <button className="filter-pill active" type="button">All time</button>
          <button className="filter-pill" type="button">Active (4)</button>
          <button className="filter-pill" type="button">Pending Verify (2)</button>
          <button className="filter-pill" type="button">Suspended (0)</button>
        </div>
      </div>
      <div className="filter-controls">
        <label className="date-label">
          <span>From</span>
          <div className="date-input-wrap">
            <input type="text" defaultValue="01-01-2026" />
            <img src={calendarIcon} alt="" aria-hidden="true" className="date-icon" />
          </div>
        </label>
        <label className="date-label">
          <span>To</span>
          <div className="date-input-wrap">
            <input type="text" defaultValue="01-05-2026" />
            <img src={calendarIcon} alt="" aria-hidden="true" className="date-icon" />
          </div>
        </label>
        <div className="select-wrap">
          <select aria-label="Region" defaultValue="all">
            <option value="all">All Regions</option>
            <option value="bengaluru">Bengaluru</option>
            <option value="chennai">Chennai</option>
            <option value="mumbai">Mumbai</option>
            <option value="pune">Pune</option>
            <option value="hyderabad">Hyderabad</option>
          </select>
          <img src={downIcon} alt="" aria-hidden="true" className="select-chevron" />
        </div>
      </div>
    </section>
  )
}
