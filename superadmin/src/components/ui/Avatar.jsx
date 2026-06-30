export function Avatar({ initials = 'CK', tone = 'purple', size = 'md' }) {
  return <span className={`avatar avatar-${tone} avatar-${size}`}>{initials}</span>
}
