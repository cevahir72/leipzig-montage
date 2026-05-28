"use client";

const brands = [
  {
    name: "Leipziger Volkszeitung",
    svg: (
      <svg viewBox="0 0 150 50" className="h-10 w-auto text-[#1a1a1a]" fill="none">
        <rect x="0" y="4" width="32" height="42" rx="4" stroke="currentColor" strokeWidth="1.8" />
        <line x1="6" y1="16" x2="26" y2="16" stroke="currentColor" strokeWidth="2" />
        <line x1="6" y1="24" x2="26" y2="24" stroke="currentColor" strokeWidth="2" strokeDasharray="3 2" />
        <line x1="6" y1="32" x2="20" y2="32" stroke="currentColor" strokeWidth="2" strokeDasharray="3 2" />
        <text x="42" y="22" fill="currentColor" fontSize="13" fontWeight="800" fontFamily="system-ui">Leipziger</text>
        <text x="42" y="38" fill="currentColor" fontSize="13" fontWeight="800" fontFamily="system-ui">Volkszeitung</text>
      </svg>
    ),
  },
  {
    name: "Höllen Sprudel",
    svg: (
      <svg viewBox="0 0 150 50" className="h-10 w-auto text-[#1a1a1a]" fill="none">
        <path d="M16 14C10 22 6 30 6 36a10 10 0 0 0 20 0c0-6-4-14-10-22z" stroke="currentColor" strokeWidth="1.8" />
        <line x1="10" y1="36" x2="22" y2="36" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
        <text x="34" y="22" fill="currentColor" fontSize="13" fontWeight="800" fontFamily="system-ui">Höllen</text>
        <text x="34" y="38" fill="currentColor" fontSize="13" fontWeight="800" fontFamily="system-ui">Sprudel</text>
      </svg>
    ),
  },
  {
    name: "Bundesverwaltungsgericht",
    svg: (
      <svg viewBox="0 0 150 50" className="h-10 w-auto text-[#1a1a1a]" fill="none">
        <polygon points="16,6 24,14 24,38 8,38 8,14" stroke="currentColor" strokeWidth="1.8" />
        <rect x="10" y="38" width="12" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <text x="34" y="22" fill="currentColor" fontSize="11" fontWeight="800" fontFamily="system-ui">Bundesverwaltungs</text>
        <text x="34" y="38" fill="currentColor" fontSize="11" fontWeight="800" fontFamily="system-ui">gericht</text>
      </svg>
    ),
  },
  {
    name: "OBI",
    svg: (
      <svg viewBox="0 0 100 50" className="h-10 w-auto text-[#1a1a1a]" fill="none">
        <rect x="2" y="6" width="40" height="38" rx="6" stroke="currentColor" strokeWidth="2.5" />
        <rect x="8" y="12" width="28" height="26" rx="4" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.08" />
        <text x="52" y="30" fill="currentColor" fontSize="20" fontWeight="900" fontFamily="system-ui">OBI</text>
      </svg>
    ),
  },
  {
    name: "Leipziger Community",
    svg: (
      <svg viewBox="0 0 150 50" className="h-10 w-auto text-[#1a1a1a]" fill="none">
        <circle cx="14" cy="20" r="10" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="24" cy="32" r="10" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="14" cy="20" r="3" fill="currentColor" />
        <circle cx="24" cy="32" r="3" fill="currentColor" />
        <text x="42" y="22" fill="currentColor" fontSize="13" fontWeight="800" fontFamily="system-ui">Leipziger</text>
        <text x="42" y="38" fill="currentColor" fontSize="13" fontWeight="800" fontFamily="system-ui">Community</text>
      </svg>
    ),
  },
  {
    name: "Softline Gruppe",
    svg: (
      <svg viewBox="0 0 150 50" className="h-10 w-auto text-[#1a1a1a]" fill="none">
        <polygon points="16,10 30,10 36,25 30,40 16,40 10,25" stroke="currentColor" strokeWidth="1.8" />
        <line x1="16" y1="25" x2="30" y2="25" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="23" cy="20" r="2" fill="currentColor" />
        <circle cx="23" cy="30" r="2" fill="currentColor" />
        <text x="44" y="22" fill="currentColor" fontSize="13" fontWeight="800" fontFamily="system-ui">Softline</text>
        <text x="44" y="38" fill="currentColor" fontSize="13" fontWeight="800" fontFamily="system-ui">Gruppe</text>
      </svg>
    ),
  },
  {
    name: "Bundesagentur für Arbeit",
    svg: (
      <svg viewBox="0 0 150 50" className="h-10 w-auto text-[#1a1a1a]" fill="none">
        <circle cx="16" cy="18" r="8" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4 42c0-8 5.3-14 12-14s12 6 12 14" stroke="currentColor" strokeWidth="1.8" />
        <text x="34" y="22" fill="currentColor" fontSize="11" fontWeight="800" fontFamily="system-ui">Bundesagentur</text>
        <text x="34" y="38" fill="currentColor" fontSize="11" fontWeight="800" fontFamily="system-ui">für Arbeit</text>
      </svg>
    ),
  },
];

export default function LogoSlider() {
  return (
    <div className="bg-white w-full overflow-hidden">
      <div className="marquee-track" style={{ height: "120px", padding: "0" }}>
        {[...brands, ...brands].map((brand, i) => (
          <div
            key={`${brand.name}-${i}`}
            className="h-full flex items-center justify-center px-10 flex-shrink-0"
          >
            {brand.svg}
          </div>
        ))}
      </div>
    </div>
  );
}
