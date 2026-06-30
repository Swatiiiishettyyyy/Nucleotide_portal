import { useState } from 'react'
import calendarIcon from '../assets/Dashboard/Calendar.svg'
import downIcon     from '../assets/Manage_admin/Down.svg'

const TEST_FILTERS = ['All tests', 'Blood Tests', 'Genetic Tests']

const metrics = [
  { dot: '#43a047', label: 'TOTAL TESTS',           value: '24,180', change: '+2,140 this month',  changeColor: '#43a047' },
  { dot: '#00acc1', label: 'BLOOD TESTS',            value: '16,920', change: '70% of total',       changeColor: '#00acc1' },
  { dot: '#212121', label: 'GENETIC TESTS',          value: '7,260',  change: '30% total',          changeColor: '#212121' },
  { dot: '#f4511e', label: 'AVG TESTS / PRACTITIONER', value: '97.9', change: 'Growing 8% month',   changeColor: '#43a047' },
]

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']

const LINE_DATA = {
  revenue:     [30,  60,  100, 160, 280, 500],
  bloodTests:  [20,  100, 250, 310, 370, 490],
  geneticTests:[15,  25,  45,  70,  100, 190],
}

const topPackages = [
  { name: 'Comprehensive Blood Panel', type: 'Blood', markers: '80 markers', badge: '+18%', badgeColor: '#8b5cf6' },
  { name: 'Basic Health Panel',        type: 'Blood', markers: '80 markers', badge: '+12%', badgeColor: '#43a047' },
  { name: 'Diabetes Management',       type: 'Blood', markers: '80 markers', badge: '+32%', badgeColor: '#00acc1' },
]

function FilterBar({ active, onSelect }) {
  return (
    <div className="ta-filterbar">
      <span className="ta-filterbar-label">Filters</span>
      <div className="ta-filter-pills">
        {TEST_FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            className={`ta-filter-pill${active === f ? ' active' : ''}`}
            onClick={() => onSelect(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="ta-date-group">
        <span className="ta-date-label">From</span>
        <label className="ta-date-control">
          <span>01-01-2026</span>
          <img src={calendarIcon} alt="" aria-hidden="true" className="ta-cal-icon" />
        </label>
        <span className="ta-date-label">To</span>
        <label className="ta-date-control">
          <span>01-05-2026</span>
          <img src={calendarIcon} alt="" aria-hidden="true" className="ta-cal-icon" />
        </label>
      </div>

      <div className="ta-filter-right">
        <div className="ta-select-wrap">
          <span>All Admins</span>
          <img src={downIcon} alt="" aria-hidden="true" className="ta-chevron" />
        </div>
      </div>
    </div>
  )
}

function MetricCards() {
  return (
    <div className="ta-metrics">
      {metrics.map((m) => (
        <div key={m.label} className="ta-metric-card">
          <div className="ta-metric-header">
            <span className="ta-metric-dot" style={{ background: m.dot }} />
            <span className="ta-metric-label">{m.label}</span>
          </div>
          <div className="ta-metric-value">{m.value}</div>
          <div className="ta-metric-change" style={{ color: m.changeColor }}>
            {m.change}
          </div>
        </div>
      ))}
    </div>
  )
}

function TestLineChart() {
  const padL  = 36
  const padB  = 28
  const padT  = 10
  const w     = 480
  const h     = 200
  const chartW = w - padL
  const chartH = h - padB - padT
  const maxVal = 520
  const yTicks = [500, 200, 100, 50, 0]

  function toX(i) {
    return padL + (i / (MONTHS.length - 1)) * chartW
  }
  function toY(v) {
    return padT + chartH - (v / maxVal) * chartH
  }
  function makePath(data) {
    return data.map((v, i) => `${i === 0 ? 'M' : 'L'}${toX(i).toFixed(1)} ${toY(v).toFixed(1)}`).join(' ')
  }

  return (
    <div className="ta-line-chart-wrap">
      <svg
        viewBox={`0 0 ${w} ${h}`}
        className="ta-line-svg"
        aria-label="Monthly Test Volume Trend"
        preserveAspectRatio="xMidYMid meet"
      >
        {yTicks.map((tick) => {
          const y = toY(tick)
          return (
            <g key={tick}>
              <line x1={padL} x2={w} y1={y} y2={y} stroke="#e8e8ee" strokeWidth="0.7" />
              <text x={padL - 4} y={y + 4} textAnchor="end" fontSize="9" fill="#9e9e9e">
                {tick}
              </text>
            </g>
          )
        })}

        {MONTHS.map((m, i) => (
          <text key={m} x={toX(i)} y={h - 4} textAnchor="middle" fontSize="9" fill="#9e9e9e">
            {m}
          </text>
        ))}

        <path d={makePath(LINE_DATA.revenue)}     fill="none" stroke="#8b5cf6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d={makePath(LINE_DATA.bloodTests)}   fill="none" stroke="#f4a22d" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d={makePath(LINE_DATA.geneticTests)} fill="none" stroke="#43a047" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      <div className="ta-chart-legend">
        <span className="ta-legend-item"><span className="ta-legend-dot" style={{ background: '#8b5cf6' }} />Revenue</span>
        <span className="ta-legend-item"><span className="ta-legend-dot" style={{ background: '#f4a22d' }} />Blood Test</span>
        <span className="ta-legend-item"><span className="ta-legend-dot" style={{ background: '#43a047' }} />Genetic Test</span>
      </div>
    </div>
  )
}

function TopPackages() {
  return (
    <div className="ta-packages-list">
      {topPackages.map((pkg) => (
        <div key={pkg.name} className="ta-package-row">
          <div className="ta-package-info">
            <strong className="ta-package-name">{pkg.name}</strong>
            <span className="ta-package-meta">{pkg.type} &bull; {pkg.markers}</span>
          </div>
          <span className="ta-package-badge" style={{ background: pkg.badgeColor }}>
            {pkg.badge}
          </span>
        </div>
      ))}
    </div>
  )
}

export function TestAnalyticsPage() {
  const [activeFilter, setActiveFilter] = useState('All tests')

  return (
    <main className="content ta-page">
      <div className="ta-heading-row">
        <h1 className="ta-heading">Test Analytics</h1>
      </div>

      <FilterBar active={activeFilter} onSelect={setActiveFilter} />
      <MetricCards />

      <div className="ta-charts-row">
        <div className="ta-panel ta-panel-line">
          <div className="ta-panel-header">
            <h2 className="ta-panel-title">Monthly Test Volume Trend</h2>
            <p className="ta-panel-sub">View the breakdown for the month May 2026</p>
          </div>
          <TestLineChart />
        </div>

        <div className="ta-panel ta-panel-packages">
          <div className="ta-panel-header">
            <h2 className="ta-panel-title">Top Test Packages</h2>
            <p className="ta-panel-sub">Cities with highest MOM practitioner growth</p>
          </div>
          <TopPackages />
        </div>
      </div>
    </main>
  )
}
