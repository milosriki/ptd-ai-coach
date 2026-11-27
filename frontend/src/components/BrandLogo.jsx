// PTD AI Coach brand mark & horizontal lockup (ptdcoach.ai).
// Navy 1 · Pure Ice identity: glossy royal-cobalt apex chevron + Pure Ice kinetic bar & AI node
// matching the native app icon. Never mirrored in RTL.

/** Precision geometric brand mark (`height` px high). */
export function BrandMark({ height = 24, color, className, style }) {
  const mono = !!color
  return (
    <svg
      className={className}
      viewBox="0 0 44 44"
      width={height}
      height={height}
      aria-hidden="true"
      focusable="false"
      style={{ flex: 'none', display: 'inline-block', ...style }}
    >
      {!mono && (
        <defs>
          <linearGradient id="ptd-mark-bg" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#3B6EFF" />
            <stop offset="52%" stopColor="#1D42D8" />
            <stop offset="100%" stopColor="#122B9C" />
          </linearGradient>
          <linearGradient id="ptd-mark-rim" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#A5F3FC" stopOpacity="0.62" />
            <stop offset="100%" stopColor="#7CC4FF" stopOpacity="0.12" />
          </linearGradient>
        </defs>
      )}
      <rect
        x="2"
        y="2"
        width="40"
        height="40"
        rx="11"
        fill={mono ? color : 'url(#ptd-mark-bg)'}
      />
      {!mono && (
        <rect
          x="2.75"
          y="2.75"
          width="38.5"
          height="38.5"
          rx="10.25"
          fill="none"
          stroke="url(#ptd-mark-rim)"
          strokeWidth="1.25"
        />
      )}
      <path
        d="M12.5 29.5 L22 12.5 L31.5 29.5"
        fill="none"
        stroke={mono ? '#0B1220' : '#FFFFFF'}
        strokeWidth="4.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="17.25" y="23.5" width="9.5" height="3.2" rx="1.6" fill={mono ? '#0B1220' : '#7CC4FF'} />
      <circle cx="22" cy="31.5" r="2.5" fill={mono ? '#0B1220' : '#7CC4FF'} />
    </svg>
  )
}

/**
 * Full brand lockup: precision mark + "PTD" + Pure Ice "AI" + "Coach".
 * Theme-adaptive contrast (pure white + Pure Ice on Midnight Navy; deep navy + Royal Cobalt on White).
 */
export default function BrandLogo({ size = 34, as: Tag = 'span', className = '', style }) {
  return (
    <Tag className={('brand-lockup ' + className).trim()} dir="ltr" style={{ fontSize: size, ...style }}>
      <BrandMark className="brand-lockup-mark" height={Math.round(size * 1.02)} />
      <span className="brand-lockup-ptd">PTD</span>
      <span className="brand-lockup-ai">AI</span>
      <span className="brand-lockup-coach">Coach</span>
    </Tag>
  )
}
