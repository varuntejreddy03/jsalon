type Props = { count?: number; className?: string };

export function Particles({ count = 28, className = "" }: Props) {
  const items = Array.from({ length: count });
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {items.map((_, i) => {
        const size = 1 + Math.random() * 3;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const delay = Math.random() * 6;
        const duration = 6 + Math.random() * 8;
        return (
          <span
            key={i}
            className="absolute rounded-full bg-gold-shine"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              top: `${top}%`,
              boxShadow: `0 0 ${size * 4}px rgba(245, 208, 128, 0.8)`,
              animation: `shimmer-drift ${duration}s ease-in-out ${delay}s infinite`,
              opacity: 0.5,
            }}
          />
        );
      })}
    </div>
  );
}


