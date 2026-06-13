import logoImg from '../../assets/logo.png'

/**
 * Brand mark for NS ENTERPRISES.
 * Combines the transparent chair + leaf logo with the serif wordmark + tagline.
 */
export default function Logo({ variant = 'dark', compact = false }) {
  const wordColor = variant === 'light' ? 'text-ivory-50' : 'text-walnut-900'
  const tagColor = variant === 'light' ? 'text-ivory-200/70' : 'text-walnut-500/80'

  return (
    <div className="flex items-center gap-3 select-none">
      <div className="relative flex h-11 w-11 items-center justify-center">
        <img
          src={logoImg}
          alt="NS Enterprises Logo"
          className="h-full w-full object-contain"
          style={{ filter: variant === 'light' ? 'brightness(0) invert(1)' : undefined }}
        />
      </div>
      {!compact && (
        <div className="flex flex-col leading-none">
          <span className={`font-display text-lg font-bold tracking-wide ${wordColor}`}>
            NS ENTERPRISES
          </span>
          <span
            className={`mt-1 text-[0.6rem] font-medium uppercase tracking-luxe ${tagColor}`}
          >
            Luxury Furnitures
          </span>
        </div>
      )}
    </div>
  )
}

