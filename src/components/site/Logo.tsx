type Variant = "onDark" | "onLight";
type Props = { className?: string; size?: number; variant?: Variant };

export function Logo({ className = "", size = 44, variant = "onDark" }: Props) {
  const color = variant === "onDark" ? "#D4A843" : "#1A1A1A";
  return (
    <div className={`flex items-center ${className}`}>
      <span
        className="font-display font-bold leading-none select-none"
        style={{
          fontSize: size * 0.6,
          color,
          filter:
            "drop-shadow(0 0 14px rgba(184,134,11,0.35)) drop-shadow(0 2px 6px rgba(0,0,0,0.35))",
        }}
      >
        J<span className="font-accent text-[0.4em] tracking-[0.2em] ml-1 uppercase">Salon</span>
      </span>
    </div>
  );
}

export function LettermarkJ({
  size = 280,
  className = "",
}: {
  size?: number;
  className?: string;
  variant?: Variant;
}) {
  return (
    <span
      className={`font-display font-bold leading-none select-none text-gold ${className}`}
      style={{
        fontSize: size * 0.7,
        filter:
          "drop-shadow(0 8px 30px rgba(184,134,11,0.4)) drop-shadow(0 0 60px rgba(184,134,11,0.18))",
      }}
    >
      J
    </span>
  );
}
