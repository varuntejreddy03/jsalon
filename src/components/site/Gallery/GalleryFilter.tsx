type Category = "All" | "Hair" | "Color" | "Skin" | "Nails" | "Bridal";

type Props = {
  active: Category;
  onChange: (c: Category) => void;
};

const TABS: Category[] = ["All", "Hair", "Color", "Skin", "Nails", "Bridal"];

export function GalleryFilter({ active, onChange }: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-3">
      {TABS.map((t) => (
        <button
          key={t}
          onClick={() => onChange(t)}
          className={`px-5 py-2 rounded-sm border text-sm font-accent tracking-widest uppercase transition-all ${
            active === t
              ? "bg-gold text-black-deep border-gold"
              : "border-gold/30 text-off-white hover:border-gold hover:text-gold"
          }`}
        >
          {t}
        </button>
      ))}
    </div>
  );
}

export type { Category };
