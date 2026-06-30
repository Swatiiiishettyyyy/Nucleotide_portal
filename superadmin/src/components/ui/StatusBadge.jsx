const statusClassNames = {
  Active: 'badge-active',
  'Pending Verify': 'badge-pending',
  Suspended: 'badge-suspended',
}

export function StatusBadge({ status }) {
  return <span className={`status-badge ${statusClassNames[status] ?? ''}`}>{status}</span>
}
