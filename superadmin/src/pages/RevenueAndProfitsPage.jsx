import { useState } from 'react'
import calendarIcon   from '../assets/Dashboard/Calendar.svg'
import downIcon       from '../assets/Manage_admin/Down.svg'
import fileExportIcon from '../assets/Manage_admin/file-export.svg'
import chart4Icon     from '../assets/Dashboard/chart 4.svg'
import ellipse1       from '../assets/Dashboard/Ellipse 1.svg'
import ellipse1_1     from '../assets/Dashboard/Ellipse 1-1.svg'
import ellipse1_2     from '../assets/Dashboard/Ellipse 1-2.svg'
import ellipse1_3     from '../assets/Dashboard/Ellipse 1-3.svg'
import ellipse1_4     from '../assets/Dashboard/Ellipse 1-4.svg'

const TIME_FILTERS = ['All time', '7 Days', '1 Month', '6 Months', '1 Year']

const summaryMetrics = [
  { dot: '#43a047', label: 'GROSS REVENUE', value: '₹2.8Cr', changeText: '22% vs last period', changeColor: '#43a047' },
  { dot: '#00acc1', label: 'TOTAL COGS', value: '₹0.9Cr', changeText: '32% of revenue', changeColor: '#00acc1' },
  { dot: '#212121', label: 'NET PROFIT', value: '₹1.9Cr', changeText: '68% margin', changeColor: '#212121' },
  { dot: '#f4511e', label: 'COMMISSION PAID', value: '₹18.4L', changeText: 'To 247 practitioners', changeColor: '#f4511e' },
  { dot: '#8b5cf6', label: 'AVG REVENUE/ADMIN', value: '₹46.7L', changeText: 'Per 3-month period', changeColor: '#8b5cf6' },
]

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
const ADMINS = [
  { name: 'Karthik', color: '#8b5cf6' },
  { name: 'Priya',   color: '#f4511e' },
  { name: 'Sanjay',  color: '#00acc1' },
  { name: 'Arjun',   color: '#4e342e' },
]

const BAR_DATA = [
  [1.5, 0.5, 0.3, 0.4],
  [1.2, 0.8, 0.6, 0.5],
  [2.0, 0.9, 0.7, 0.5],
  [1.1, 0.7, 1.4, 1.1],
  [1.4, 0.5, 1.0, 1.1],
  [1.6, 0.3, 0.5, 0.4],
]
const BAR_MAX = 2.0
const Y_TICKS = [2, 1.5, 1, 0.5, 0]

const breakdownTable = Array.from({ length: 5 }, () => ({
  initials: 'CK',
  color: '#8b5cf6',
  name: 'Karthik Subramaniam',
  region: 'Bengaluru',
  practitioners: 42,
  patients: 1284,
  bloodTests: 3741,
  geneticTests: 1608,
  grossRevenue: '₹48.2L',
  cogs: '₹15.4L',
  netProfit: '₹32.8L',
  commission: '₹4.8L',
}))

function FilterBar({ active, onSelect }) {
  return (
    <div className="rnp-filterbar">
      <span className="rnp-filterbar-label">Filters</span>
      <div className="rnp-filter-pills">
        {TIME_FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            className={`rnp-filter-pill${active === f ? ' active' : ''}`}
            onClick={() => onSelect(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="rnp-date-group">
        <span className="rnp-date-label">From</span>
        <label className="rnp-date-control">
          <span>01-01-2026</span>
          <img src={calendarIcon} alt="" aria-hidden="true" className="rnp-cal-icon" />
        </label>
        <span className="rnp-date-label">To</span>
        <label className="rnp-date-control">
          <span>01-05-2026</span>
          <img src={calendarIcon} alt="" aria-hidden="true" className="rnp-cal-icon" />
        </label>
      </div>

      <div className="rnp-filter-right">
        <div className="rnp-select-wrap">
          <span>All Admins</span>
          <img src={downIcon} alt="" aria-hidden="true" className="rnp-chevron" />
        </div>
        <button type="button" className="rnp-export-btn">
          <span>Export</span>
        </button>
      </div>
    </div>
  )
}

function SummaryMetrics() {
  return (
    <div className="rnp-metrics">
      {summaryMetrics.map((m) => (
        <div key={m.label} className="rnp-metric-card">
          <div className="rnp-metric-header">
            <span className="rnp-metric-dot" style={{ background: m.dot }} />
            <span className="rnp-metric-label">{m.label}</span>
          </div>
          <div className="rnp-metric-value">{m.value}</div>
          <div className="rnp-metric-change" style={{ color: m.changeColor }}>
            {m.changeText}
          </div>
        </div>
      ))}
    </div>
  )
}

function AdminBarChart() {
  const barW = 10
  const gap = 4
  const groupGap = 24
  const groupW = ADMINS.length * barW + (ADMINS.length - 1) * gap
  const totalW = MONTHS.length * groupW + (MONTHS.length - 1) * groupGap
  const chartH = 160
  const padL = 28
  const padB = 24

  return (
    <div className="rnp-bar-chart-wrap">
      <svg
        viewBox={`0 0 ${totalW + padL} ${chartH + padB}`}
        className="rnp-bar-svg"
        aria-label="Revenue by Admin (Monthly)"
        preserveAspectRatio="xMidYMid meet"
      >
        {Y_TICKS.map((tick, i) => {
          const y = (chartH / (Y_TICKS.length - 1)) * i
          return (
            <g key={tick}>
              <line x1={padL} x2={totalW + padL} y1={y} y2={y} stroke="#e0e0e0" strokeWidth="0.5" />
              <text x={padL - 4} y={y + 4} textAnchor="end" fontSize="8" fill="#9e9e9e">
                {tick === 0 ? '0' : `${tick}L`}
              </text>
            </g>
          )
        })}

        {MONTHS.map((month, mi) => {
          const groupX = padL + mi * (groupW + groupGap)
          return (
            <g key={month}>
              {ADMINS.map((admin, ai) => {
                const val = BAR_DATA[mi][ai]
                const barH = (val / BAR_MAX) * chartH
                const x = groupX + ai * (barW + gap)
                const y = chartH - barH
                return <rect key={admin.name} x={x} y={y} width={barW} height={barH} rx="2" fill={admin.color} />
              })}
              <text x={groupX + groupW / 2} y={chartH + padB - 4} textAnchor="middle" fontSize="9" fill="#9e9e9e">
                {month}
              </text>
            </g>
          )
        })}
      </svg>

      <div className="rnp-chart-legend">
        {ADMINS.map((a) => (
          <span key={a.name} className="rnp-legend-item">
            <span className="rnp-legend-dot" style={{ background: a.color }} />
            {a.name}
          </span>
        ))}
      </div>
    </div>
  )
}

function TestTypeDonut() {
  return (
    <div className="rnp-donut-wrap">
      <img src={chart4Icon} alt="Revenue by Test Type donut chart" className="rnp-donut-img" />
      <div className="rnp-donut-legend">
        <span className="rnp-legend-item">
          <span className="rnp-legend-dot" style={{ background: '#8b5cf6' }} />
          Blood Tests (64)
        </span>
        <span className="rnp-legend-item">
          <span className="rnp-legend-dot" style={{ background: '#f4a22d' }} />
          Genetic Tests (34)
        </span>
        <span className="rnp-legend-item">
          <span className="rnp-legend-dot" style={{ background: '#7ad3ff' }} />
          Add-ons (18)
        </span>
      </div>
    </div>
  )
}

const TABLE_COLS = [
  { key: 'admin', label: 'ADMIN' },
  { key: 'region', label: 'REGION' },
  { key: 'practitioners', label: 'PRACTITIONERS' },
  { key: 'patients', label: 'PATIENTS' },
  { key: 'bloodTests', label: 'BLOOD TESTS' },
  { key: 'geneticTests', label: 'GENETIC TESTS' },
  { key: 'grossRevenue', label: 'GROSS REVENUE' },
  { key: 'cogs', label: 'COGS' },
  { key: 'netProfit', label: 'NET PROFIT' },
  { key: 'commission', label: 'COMMISSION' },
]

function BreakdownTable() {
  return (
    <div className="rnp-table-section">
      <h2 className="rnp-section-title">Revenue Breakdown per Admin</h2>
      <div className="rnp-table-card">
        <div className="rnp-table-scroll">
          <table className="rnp-table">
            <thead>
              <tr className="rnp-thead-row">
                {TABLE_COLS.map((c) => <th key={c.key} className="rnp-th">{c.label}</th>)}
              </tr>
            </thead>
            <tbody>
              {breakdownTable.map((row, i) => (
                <tr key={i} className="rnp-tr">
                  <td className="rnp-td">
                    <div className="rnp-admin-cell">
                      <span className="rnp-avatar" style={{ background: `${row.color}22`, color: row.color }}>
                        {row.initials}
                      </span>
                      <span className="rnp-admin-name">{row.name}</span>
                    </div>
                  </td>
                  <td className="rnp-td"><span className="rnp-region-badge">{row.region}</span></td>
                  <td className="rnp-td">{row.practitioners}</td>
                  <td className="rnp-td">{row.patients.toLocaleString()}</td>
                  <td className="rnp-td">{row.bloodTests.toLocaleString()}</td>
                  <td className="rnp-td">{row.geneticTests.toLocaleString()}</td>
                  <td className="rnp-td rnp-td-strong">{row.grossRevenue}</td>
                  <td className="rnp-td rnp-td-danger">{row.cogs}</td>
                  <td className="rnp-td rnp-td-success">{row.netProfit}</td>
                  <td className="rnp-td">{row.commission}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export function RevenueAndProfitsPage() {
  const [activeFilter, setActiveFilter] = useState('All time')

  return (
    <main className="content rnp-page">
      <div className="rnp-heading-row">
        <h1 className="rnp-heading">Revenue &amp; Profits</h1>
      </div>

      <FilterBar active={activeFilter} onSelect={setActiveFilter} />
      <SummaryMetrics />

      <div className="rnp-charts-row">
        <div className="rnp-panel rnp-panel-bar">
          <div className="rnp-panel-header">
            <h2 className="rnp-panel-title">Revenue by Admin (Monthly)</h2>
            <p className="rnp-panel-sub">View the breakdown for the month May 2026</p>
          </div>
          <AdminBarChart />
        </div>

        <div className="rnp-panel rnp-panel-donut">
          <div className="rnp-panel-header">
            <h2 className="rnp-panel-title">Revenue by Test Type</h2>
            <p className="rnp-panel-sub">View the breakdown for the month May 2026</p>
          </div>
          <TestTypeDonut />
        </div>
      </div>

      <BreakdownTable />
    </main>
  )
}
