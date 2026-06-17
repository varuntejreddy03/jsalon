type Props = { className?: string; size?: number };

export function Logo({ className = "", size = 44 }: Props) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="J Salon Unisex"
      >
        {/* Stylized serif J */}
        <path
          d="M36 6 H46 V40 C46 50 40 56 30 56 C22 56 16 52 14 44 L22 41 C23 46 26 48 30 48 C34 48 36 45 36 40 V6 Z"
          fill="#b8860b"
        />
        <rect x="28" y="6" width="26" height="3" fill="#b8860b" />
      </svg>
      <div className="leading-none">
        <div className="font-display text-base sm:text-lg font-semibold tracking-wide text-off-white">
          SALON
        </div>
        <div className="font-accent text-[10px] sm:text-xs text-gold tracking-[0.3em]">
          UNISEX
        </div>
      </div>
    </div>
  );
}

export function LettermarkJ({ size = 280, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="jgold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f5d080" />
          <stop offset="50%" stopColor="#d4a843" />
          <stop offset="100%" stopColor="#b8860b" />
        </linearGradient>
      </defs>
      <path
        d="M118 20 H148 V130 C148 162 128 180 100 180 C72 180 52 168 46 142 L74 132 C77 148 86 154 100 154 C114 154 118 144 118 130 V20 Z"
        fill="url(#jgold)"
      />
      <rect x="92" y="20" width="80" height="8" fill="url(#jgold)" />
    </svg>
  );
}
