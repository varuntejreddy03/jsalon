import type { GalleryItem } from "../data";

type Props = {
  items: GalleryItem[];
  onOpen?: (i: number) => void;
};

export function MasonryGrid({ items, onOpen }: Props) {
  return (
    <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 [column-fill:_balance]">
      {items.map((item, i) => (
        <button
          key={i}
          type="button"
          onClick={() => onOpen?.(i)}
          className="group relative block w-full overflow-hidden rounded-sm break-inside-avoid focus:outline-none focus:ring-2 focus:ring-gold"
        >
          <img
            src={item.src}
            alt={item.alt}
            loading="lazy"
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black-deep via-black-deep/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-left">
            <span className="font-accent text-[10px] text-gold tracking-wider uppercase">
              {item.category}
            </span>
            <p className="font-display text-sm text-off-white mt-1">{item.alt}</p>
          </div>
        </button>
      ))}
    </div>
  );
}


