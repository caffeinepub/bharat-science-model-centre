const BRANDS = [
  { name: "Blue Star", src: "/assets/uploads/blue-star-logo-1.png" },
  { name: "VWR", src: "/assets/uploads/VWR-2.png" },
  { name: "Sigma-Aldrich", src: "/assets/uploads/images-3.png" },
  {
    name: "CDH",
    src: "/assets/uploads/cdh-organic-compound-31-08-2021-2340-240406232-7m0k9-4.jpg",
  },
  { name: "HiMedia", src: "/assets/uploads/images-1--5.png" },
  { name: "Merck", src: "/assets/uploads/Mkgaa768x432-6.jpeg" },
  {
    name: "Hanna Instruments",
    src: "/assets/uploads/Logo-Hannah-Instruments-Trimmed-01-7.png",
  },
  { name: "Rankem", src: "/assets/uploads/RANKEM-8.jpeg" },
  { name: "Olympus", src: "/assets/uploads/olympus-vector-logo-9.webp" },
  {
    name: "Fisher Scientific",
    src: "/assets/uploads/fisher-scientific-vector-logo-10.png",
  },
  { name: "Qualigens", src: "/assets/uploads/QUALIGENS-11.jpg" },
  { name: "Finar", src: "/assets/uploads/finar-chemicals-aankleshwar-12.jpg" },
  { name: "Remi", src: "/assets/uploads/REMI-13.jpeg" },
  { name: "PolyLab", src: "/assets/uploads/POLYLAB-14.jpg" },
  { name: "Loba Chemie", src: "/assets/uploads/LOBA-15.jpeg" },
  { name: "Kerro", src: "/assets/uploads/Screenshot-2025-03-01-202208-16.png" },
  {
    name: "Kimberly-Clark",
    src: "/assets/uploads/kimberly-clark_1628851432-17.jpg",
  },
  { name: "NCP", src: "/assets/uploads/NUMEX-18.png" },
  { name: "Tarsons", src: "/assets/uploads/tarsons-19.png" },
];

export default function BrandsMarquee() {
  return (
    <section className="py-12 bg-[oklch(0.96_0.008_220)] border-y border-[oklch(0.91_0.01_220)]">
      <div className="text-center mb-8">
        <p className="text-[oklch(0.56_0.09_185)] text-xs font-semibold uppercase tracking-widest mb-1">
          Our Partners
        </p>
        <h2 className="text-xl md:text-2xl font-bold text-[oklch(0.22_0.005_240)]">
          Brands We Deal In
        </h2>
      </div>

      <div className="overflow-hidden" data-ocid="brands.section">
        <div className="brands-track flex gap-8">
          {[...BRANDS, ...BRANDS].map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex-shrink-0 bg-white rounded-lg shadow-sm p-3 flex items-center justify-center"
              style={{ minWidth: 140, height: 80 }}
            >
              <img
                src={brand.src}
                alt={brand.name}
                style={{
                  height: 56,
                  width: "auto",
                  maxWidth: 120,
                  objectFit: "contain",
                }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
