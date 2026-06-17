import logoAsset from "@/assets/jsalon-logo.png.asset.json";

type Props = { className?: string; size?: number };

export function Logo({ className = "", size = 44 }: Props) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logoAsset.url}
        alt="J Salon Unisex"
        width={size}
        height={size}
        className="object-contain"
        style={{
          height: size,
          width: "auto",
          filter:
            "drop-shadow(0 0 12px rgba(184,134,11,0.25)) brightness(1.05)",
        }}
      />
    </div>
  );
}

/**
 * Large brand mark for hero/about sections.
 * Renders the full uploaded logo (J + SALON + UNISEX).
 */
export function LettermarkJ({
  size = 280,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <img
      src={logoAsset.url}
      alt="J Salon Unisex"
      width={size}
      height={size}
      className={`object-contain ${className}`}
      style={{
        width: size,
        height: "auto",
        filter:
          "drop-shadow(0 8px 30px rgba(184,134,11,0.35)) drop-shadow(0 0 60px rgba(184,134,11,0.15))",
      }}
    />
  );
}
