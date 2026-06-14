"use client";

const logos = [
  { id: 1, src: "/Logos/OBI.webp", alt: "OBI" },
  { id: 2, src: "/Logos/softline.webp", alt: "Softline" },
  { id: 3, src: "/Logos/leipziger-volkszeitung.webp", alt: "Leipziger Volkszeitung" },
  { id: 4, src: "/Logos/Bundesverwaltungsgericht.svg.webp", alt: "Bundesverwaltungsgericht" },
  { id: 5, src: "/Logos/bundesagentur-fur-arbeit.webp", alt: "Bundesagentur für Arbeit" },
];

export default function LogoSlider() {
  return (
    <div className="bg-white w-full overflow-hidden border-b border-outline-variant">
      <div className="marquee-track" style={{ height: "100px", padding: "0" }}>
        {[...logos, ...logos].map((item, i) => (
          <div
            key={`${item.id}-${i}`}
            className="h-full flex items-center justify-center px-8 flex-shrink-0"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="max-h-[55px] w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

