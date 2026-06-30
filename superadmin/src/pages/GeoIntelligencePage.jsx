import calendarIcon from '../assets/Geo_intelligence/Calendar.svg'
import downIcon from '../assets/Geo_intelligence/Down.svg'
import indiaMapReference from '../assets/Geo_intelligence/india-map-reference.png'

const filterTabs = ['Practitioners', 'Patients', 'Revenue', 'Tests']

const platformRows = [
  ['1', 'Bengaluru', '52', '1,840', '4,210'],
  ['2', 'Mumbai', '44', '1,620', '3,840'],
  ['3', 'Delhi NCR', '38', '1,420', '3,210'],
  ['4', 'Hyderabad', '31', '1,180', '2,640'],
  ['5', 'Chennai', '28', '980', '2,190'],
]

const platformLabels = ['Rank', 'City', 'Practitioners', 'Patients', 'Tests']

const hotspots = [
  { city: 'Bengaluru', growth: '+18%', tone: 'purple' },
  { city: 'Hyderabad', growth: '+32%', tone: 'blue' },
  { city: 'Pune', growth: '+12%', tone: 'green' },
  { city: 'Tier 2 Cities', growth: '+24%', tone: 'green' },
]

const distributionRows = [
  ['Bengaluru', 'Karthik', '22', '14', '9', '5', '2', '52', '1,840'],
  ['Mumbai', 'Aditi', '28', '20', '12', '7', '3', '60', '2,300'],
  ['Delhi', 'Rajesh', '35', '18', '15', '9', '4', '70', '3,100'],
  ['Bengaluru', 'Karthik', '22', '14', '9', '5', '2', '52', '1,840'],
  ['Chennai', 'Priya', '30', '16', '10', '6', '2', '55', '2,500'],
]

export function GeoIntelligencePage() {
  return (
    <main className="content geo-page">
      <header className="geo-heading">
        <h1>Geo Intelligence</h1>
      </header>

      <section className="geo-filters" aria-label="Geo intelligence filters">
        <strong>Filters</strong>
        <div className="geo-filter-tabs" role="list" aria-label="Metric">
          {filterTabs.map((tab) => (
            <button key={tab} className={`geo-filter-tab ${tab === 'Practitioners' ? 'active' : ''}`} type="button">
              {tab}
            </button>
          ))}
        </div>

        <div className="geo-filter-controls">
          <label className="geo-date-label">
            <span>From</span>
            <span className="geo-date-control">
              <span>01-01-2026</span>
              <img src={calendarIcon} alt="" aria-hidden="true" />
            </span>
          </label>
          <label className="geo-date-label">
            <span>To</span>
            <span className="geo-date-control">
              <span>01-05-2026</span>
              <img src={calendarIcon} alt="" aria-hidden="true" />
            </span>
          </label>
          <button className="geo-select" type="button">
            <span>All Admins</span>
            <img src={downIcon} alt="" aria-hidden="true" />
          </button>
          <button className="geo-select" type="button">
            <span>All Roles</span>
            <img src={downIcon} alt="" aria-hidden="true" />
          </button>
        </div>
      </section>

      <section className="geo-main-grid" aria-label="Practitioner distribution and platform configuration">
        <div className="geo-section geo-map-section">
          <h2>INDIA - PRACTITIONER DISTRIBUTION</h2>
          <div className="geo-map-card">
            <img
              className="india-map-reference"
              src={indiaMapReference}
              alt="India practitioner distribution map with city legend"
            />
          </div>
        </div>

        <div className="geo-section geo-side-section">
          <h2>PLATFORM CONFIGURATION</h2>
          <section className="geo-panel geo-ranking-card" aria-label="Platform configuration rankings">
            <div className="geo-ranking-table" role="table">
              <div className="geo-ranking-row geo-ranking-head" role="row">
                <span>RANK</span>
                <span>CITY</span>
                <span>PRACTITIONERS</span>
                <span>PATIENTS</span>
                <span>TESTS</span>
              </div>
              {platformRows.map((row) => (
                <div className="geo-ranking-row" role="row" key={row[0]}>
                  {row.map((cell, index) => (
                    <span key={`${row[0]}-${cell}`} data-label={platformLabels[index]} className={index === 1 ? 'geo-city-cell' : ''}>
                      {cell}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </section>

          <section className="geo-panel geo-hotspots" aria-label="Growth hotspots">
            <div className="geo-hotspot-heading">
              <h3>Growth Hotspots</h3>
              <p>Cities with highest MOM practitioner growth</p>
            </div>
            <div className="geo-hotspot-list">
              {hotspots.map((item) => (
                <div className="geo-hotspot-row" key={item.city}>
                  <span>{item.city}</span>
                  <strong className={`geo-growth-pill geo-growth-${item.tone}`}>{item.growth}</strong>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="geo-panel geo-distribution-card" aria-label="City practitioner distribution table">
        <div className="geo-distribution-table" role="table">
          <div className="geo-distribution-row geo-distribution-head" role="row">
            <span>CITY</span>
            <span>ADMIN</span>
            <span>DOCTORS</span>
            <span>NUTRITIONISTS</span>
            <span>LIFESTYLE</span>
            <span>GENETIC</span>
            <span>MENTAL HEALTH</span>
            <span>TOTAL</span>
            <span>PATIENTS</span>
          </div>
          {distributionRows.map((row, rowIndex) => (
            <article className="geo-distribution-row" role="row" key={`${row[0]}-${row[1]}-${rowIndex}`}>
              <span data-label="City">{row[0]}</span>
              <span data-label="Admin">
                <strong className="geo-admin-pill">{row[1]}</strong>
              </span>
              {row.slice(2).map((cell, index) => (
                <b key={`${row[0]}-${rowIndex}-${index}`} data-label={distributionLabels[index]}>
                  {cell}
                </b>
              ))}
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

const distributionLabels = ['Doctors', 'Nutritionists', 'Lifestyle', 'Genetic', 'Mental Health', 'Total', 'Patients']
