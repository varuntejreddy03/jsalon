type Props = { children: React.ReactNode; className?: string };

export function SectionLabel({ children, className = "" }: Props) {
  return (
    <span
      className={`inline-block font-accent text-xs sm:text-sm text-gold tracking-[0.3em] uppercase ${className}`}
    >
      {children}
    </span>
  );
}

export function GoldDivider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`mx-auto h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent ${className}`}
    />
  );
}
