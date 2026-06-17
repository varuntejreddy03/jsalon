import logoLight from "@/assets/jsalon-logo.png.asset.json";
import logoDark from "@/assets/jsalon-logo-dark.png.asset.json";

type Variant = "onDark" | "onLight";
type Props = { className?: string; size?: number; variant?: Variant };

export function Logo({ className = "", size = 44, variant = "onDark" }: Props) {
  const src = variant === "onDark" ? logoDark.url : logoLight.url;
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={src}
        alt="J Salon Unisex"
        height={size}
        className="object-contain block"
        style={{
          height: size,
          width: "auto",
          filter:
            "drop-shadow(0 0 14px rgba(184,134,11,0.35)) drop-shadow(0 2px 6px rgba(0,0,0,0.35))",
        }}
      />
    </div>
  );
}

/**
 * Large brand mark for hero/about sections.
 */
export function LettermarkJ({
  size = 280,
  className = "",
  variant = "onDark",
}: {
  size?: number;
  className?: string;
  variant?: Variant;
}) {
  const src = variant === "onDark" ? logoDark.url : logoLight.url;
  return (
    <img
      src={src}
      alt="J Salon Unisex"
      className={`object-contain block ${className}`}
      style={{
        width: size,
        height: "auto",
        filter:
          "drop-shadow(0 8px 30px rgba(184,134,11,0.4)) drop-shadow(0 0 60px rgba(184,134,11,0.18))",
      }}
    />
  );
}
