export function Icon({ name, size = 'md' }) {
  return (
    <svg className={`icon icon-${size}`} viewBox="0 0 24 24" aria-hidden="true">
      {name === 'grid' && (
        <>
          <rect x="4" y="4" width="6" height="6" rx="1.2" />
          <rect x="14" y="4" width="6" height="6" rx="1.2" />
          <rect x="4" y="14" width="6" height="6" rx="1.2" />
          <rect x="14" y="14" width="6" height="6" rx="1.2" />
        </>
      )}
      {name === 'users' && (
        <>
          <circle cx="9" cy="8" r="3" />
          <path d="M3.8 19c.7-3.1 2.5-4.7 5.2-4.7s4.5 1.6 5.2 4.7" />
          <path d="M15.2 10.8a2.7 2.7 0 1 0-1-5.2" />
          <path d="M15.8 14.4c2.2.2 3.7 1.7 4.4 4.6" />
        </>
      )}
      {name === 'user-list' && (
        <>
          <circle cx="8" cy="7.5" r="3" />
          <path d="M3.4 18.5c.7-3.1 2.2-4.6 4.6-4.6s3.9 1.5 4.6 4.6" />
          <path d="M15 8h5M15 12h4M15 16h5" />
        </>
      )}
      {name === 'target' && (
        <>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="3.8" />
          <path d="M12 2.8v3.1M12 18.1v3.1M2.8 12h3.1M18.1 12h3.1" />
        </>
      )}
      {name === 'wallet' && (
        <>
          <path d="M4 7.5h15.4v11H4z" />
          <path d="M4 7.5l11.8-2.8 1.1 2.8" />
          <path d="M16 13h3.4" />
        </>
      )}
      {name === 'network' && (
        <>
          <circle cx="7" cy="7" r="2.8" />
          <circle cx="17" cy="7" r="2.8" />
          <circle cx="12" cy="17" r="2.8" />
          <path d="m9 8.6 2.1 5.5M15 8.6l-2.1 5.5" />
        </>
      )}
      {name === 'radar' && (
        <>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 12 18 8" />
        </>
      )}
      {name === 'globe' && (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M3.5 12h17M12 3c2.2 2.3 3.4 5.3 3.4 9s-1.2 6.7-3.4 9M12 3c-2.2 2.3-3.4 5.3-3.4 9s1.2 6.7 3.4 9" />
        </>
      )}
      {name === 'chart' && (
        <>
          <rect x="4" y="11" width="3.5" height="7" rx="1" />
          <rect x="10.25" y="7" width="3.5" height="11" rx="1" />
          <rect x="16.5" y="4" width="3.5" height="14" rx="1" />
        </>
      )}
      {name === 'group' && (
        <>
          <circle cx="8" cy="8" r="3" />
          <circle cx="16" cy="9" r="2.5" />
          <path d="M3.5 19c.7-3 2.2-4.5 4.5-4.5s3.8 1.5 4.5 4.5" />
          <path d="M13.4 15.1c2.3.1 3.8 1.4 4.6 3.9" />
        </>
      )}
      {name === 'settings' && (
        <>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 3.5v2.2M12 18.3v2.2M4.6 7.7l1.9 1.1M17.5 15.2l1.9 1.1M4.6 16.3l1.9-1.1M17.5 8.8l1.9-1.1" />
        </>
      )}
      {name === 'commission' && (
        <>
          <circle cx="12" cy="12" r="3.8" />
          <path d="M12 9.8v4.4M9.8 12h4.4" />
          <path d="M4.4 9a8.4 8.4 0 0 1 2.3-3.3l-.2-2.2 2.3.7A8.4 8.4 0 0 1 17 5.4" />
          <path d="M19.6 15a8.4 8.4 0 0 1-2.3 3.3l.2 2.2-2.3-.7A8.4 8.4 0 0 1 7 18.6" />
        </>
      )}
      {name === 'file' && (
        <>
          <path d="M6.5 4h7.2l3.8 3.8V20h-11z" />
          <path d="M13.5 4v4h4M9 12h6M9 16h5" />
        </>
      )}
      {name === 'cog' && (
        <>
          <circle cx="12" cy="12" r="3.2" />
          <path d="M12 3.5v2M12 18.5v2M5.9 5.9l1.4 1.4M16.7 16.7l1.4 1.4M3.5 12h2M18.5 12h2M5.9 18.1l1.4-1.4M16.7 7.3l1.4-1.4" />
        </>
      )}
      {name === 'close' && <path d="M18 6 6 18M6 6l12 12" />}
      {name === 'arrow-right' && <path d="M5 12h14M13 6l6 6-6 6" />}
      {name === 'check' && <path d="M20 6 9 17l-5-5" />}
      {name === 'phone' && (
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 4.2 2 2 0 0 1 5.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.6a2 2 0 0 1-.5 2.1L9.1 9.5a16 16 0 0 0 5.4 5.4l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.6 2.6.7A2 2 0 0 1 22 16.9z" />
      )}
      {name === 'mail' && (
        <>
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-10 7L2 7" />
        </>
      )}
      {name === 'map-pin' && (
        <>
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </>
      )}
      {name === 'calendar' && (
        <>
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </>
      )}
      {name === 'camera' && (
        <>
          <path d="M7.5 7.5 9 5.5h6l1.5 2H19a2 2 0 0 1 2 2V17a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.5a2 2 0 0 1 2-2z" />
          <circle cx="12" cy="13" r="3" />
        </>
      )}
      {name === 'id-card' && (
        <>
          <rect x="3.5" y="5" width="17" height="14" rx="2" />
          <circle cx="9" cy="11" r="2" />
          <path d="M6.8 16c.4-1.6 1.1-2.4 2.2-2.4s1.8.8 2.2 2.4M14 10h3.5M14 14h4" />
        </>
      )}
      {name === 'face' && (
        <>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M9 10.5h.1M15 10.5h.1M8.7 14.2c1.8 2 4.8 2 6.6 0" />
        </>
      )}
      {name === 'eye-off' && (
        <>
          <path d="m3 3 18 18M9.5 5.4A9.8 9.8 0 0 1 12 5c5 0 8.5 5 8.5 7a5.7 5.7 0 0 1-1.5 2.6M6.2 6.8C4.5 8.1 3.5 10.2 3.5 12c0 2 3.5 7 8.5 7 1.2 0 2.3-.3 3.3-.8" />
          <path d="M10.2 10.2a2.6 2.6 0 0 0 3.6 3.6" />
        </>
      )}
    </svg>
  )
}
