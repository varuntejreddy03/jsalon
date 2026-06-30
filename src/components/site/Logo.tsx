import logoSrc from "@/assets/jsalon-logo.png";

type Props = { className?: string; size?: number };

export function Logo({ className = "", size = 48 }: Props) {
  return (
    <img
      src={logoSrc}
      alt="J Salon Unisex"
      className={`object-contain block ${className}`}
      style={{ height: size, width: "auto" }}
    />
  );
}

export function LettermarkJ({
  size = 280,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <img
      src={logoSrc}
      alt="J Salon Unisex"
      className={`object-contain block ${className}`}
      style={{ width: size, height: "auto" }}
    />
  );
}
