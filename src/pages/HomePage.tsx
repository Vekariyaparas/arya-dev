import { useEffect, useState } from 'react'


const principles = [
  {
    number: '01',
    title: 'Our Vision',
    summary:
      'To become a trusted name in agricultural solutions and sustainable progress.',
    detail:
      'To establish Aryadev Chemicals as a respected and trusted organization in the agricultural industry by delivering quality-driven formulations, fostering innovation, and creating lasting value for customers, farming communities, and the environment.',
    accent: 'from-[#11813A] to-[#55A83D]',
  },
  {
    number: '02',
    title: 'Our Mission',
    summary:
      'Delivering quality agricultural solutions through innovation and excellence.',
    detail:
      'Our mission is to manufacture and deliver reliable agricultural products through quality-focused processes, continuous formulation improvement, and responsible manufacturing practices. We strive to meet the evolving needs of modern agriculture while building lasting customer relationships and delivering meaningful value to our partners.',
    accent: 'from-[#397B9A] to-[#55AFC0]',
  },
  {
    number: '03',
    title: 'Our Values',
    summary:
      'Integrity, quality, and innovation at the heart of everything we do.',
    detail:
      'Our values are rooted in integrity, customer commitment, scientific excellence, and continuous improvement. We believe in maintaining high standards of quality, fostering responsible innovation, and building transparent, long-term partnerships while respecting the communities and natural resources connected to agriculture.',
    accent: 'from-[#B47627] to-[#D6A348]',
  },
]

const commitments = [
  { value: '01', label: 'Quality first' },
  { value: '02', label: 'Responsible innovation' },
  { value: '03', label: 'People and safety' },
]

const productCategories = [
  {
    name: 'INSECTICIDES',
    description: 'Targeted protection against crop-damaging insects.',
    image:
      'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=1200&q=85',
    tone: 'from-[#123d29]/90 to-[#11813A]/25',
  },
  {
    name: 'FUNGICIDES',
    description: 'Reliable defense for healthier, stronger crops.',
    image:
      'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1200&q=85',
    tone: 'from-[#123d29]/90 to-[#397B9A]/25',
  },
  {
    name: 'HERBICIDES',
    description: 'Smart weed management for cleaner growing fields.',
    image:
      'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=85',
    tone: 'from-[#123d29]/90 to-[#B47627]/25',
  },
  {
    name: 'PGR',
    description: 'Supporting balanced growth from seed to harvest.',
    image:
      'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=1200&q=85',
    tone: 'from-[#123d29]/90 to-[#55AFC0]/25',
  },
]

const productSlideCount = Math.ceil(productCategories.length / 2)

function HomePage() {
  const [activePrinciple, setActivePrinciple] = useState(0)
  const [activeProductSlide, setActiveProductSlide] = useState(0)
  const activeContent = principles[activePrinciple]
  const visibleProductSlide = Math.min(activeProductSlide, productSlideCount - 1)

  useEffect(() => {
    const productSlider = window.setInterval(() => {
      setActiveProductSlide((current) => (current + 1) % productSlideCount)
    }, 4500)

    return () => window.clearInterval(productSlider)
  }, [])

  return (
    <section className="mx-auto w-full max-w-7xl space-y-12 px-4 py-8 sm:px-6 md:space-y-16 md:py-14 lg:px-0">
      <div className="difference-bg relative w-full max-w-5xl overflow-hidden rounded-2xl border border-primary/5 bg-white/60 p-4 shadow-[0_18px_50px_rgba(17,129,58,0.08)] sm:p-6 md:p-8">
        <div className="pointer-events-none absolute -left-8 top-6 h-20 w-20 rounded-full bg-brandColor/10 blur-2xl animate-float-slow sm:h-28 sm:w-28" />
        <div className="pointer-events-none absolute -right-2 -top-2 h-16 w-16 rounded-full bg-limeGreen/20 blur-2xl animate-float-delayed sm:right-4 sm:h-20 sm:w-20" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(17,129,58,0.12),transparent_42%)]" />

        <div className="relative z-10">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-brandColor sm:text-sm">
            The AryaDev difference
          </p>
          <h2 className="text-2xl font-bold leading-tight text-primary sm:text-3xl md:text-5xl">
            Where quality meets innovation, and partnerships grow.
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-primary/70 sm:text-base sm:leading-8 md:mt-5 md:text-lg">
            At Aryadev Chemicals, we combine agricultural formulation expertise, quality-focused manufacturing, and a commitment to innovation to deliver dependable solutions for modern agriculture.
          </p>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-primary/70 sm:text-base sm:leading-8 md:mt-5 md:text-lg">
            Our approach is built on three core principles: consistent quality, responsible manufacturing, and long-term partnerships.
          </p>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-primary/70 sm:text-base sm:leading-8 md:mt-5 md:text-lg">
            From product development to customer service, we strive to create lasting value for the agricultural community and contribute to a more productive and sustainable future.
          </p>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-primary/70 sm:text-base sm:leading-8 md:mt-5 md:text-lg">
            Quality in every formulation. Trust in every partnership.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
        <div className="grid gap-3">
          {principles.map((principle, index) => {
            const isActive = activePrinciple === index

            return (
              <button
                type="button"
                key={principle.title}
                onClick={() => setActivePrinciple(index)}
                className={`principle-card group relative overflow-hidden rounded-xl border p-4 text-left transition-all duration-300 sm:p-5 md:p-6 ${
                  isActive
                    ? 'border-brandColor bg-primary font-semibold text-white -translate-y-1'
                    : 'border-primary/10 bg-white text-primary hover:-translate-y-1 hover:border-brandColor/40'
                }`}
                aria-pressed={isActive}
              >
                <span className={`absolute inset-y-0 left-0 w-1 bg-linear-to-b ${principle.accent}`} />
                <span
                  className={`mb-6 block font-poppins text-[11px] font-bold tracking-[0.3em] ${
                    isActive ? 'text-limeGreen' : 'text-primary/40'
                  }`}
                >
                  {principle.number}
                </span>
                <span className="block font-poppinsBold text-xl font-bold tracking-[0.02em]">
                  {principle.title}
                </span>
                <span
                  className={`mt-2 block text-sm leading-6 ${
                    isActive ? 'text-white/75' : 'text-primary/65'
                  }`}
                >
                  {principle.summary}
                </span>
                <span
                  className={`mt-5 inline-block font-poppins text-[11px] font-bold uppercase tracking-[0.2em] transition-transform duration-300 group-hover:translate-x-1 ${
                    isActive ? 'text-limeGreen' : 'text-brandColor'
                  }`}
                >
                  Explore +
                </span>
              </button>
            )
          })}
        </div>

        <article className="relative flex min-h-88 flex-col justify-between overflow-hidden rounded-xl bg-[#e7efe5] p-5 sm:p-7 md:p-10">
          <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full border-32 border-white/60 sm:h-56 sm:w-56" />
          <div className="relative z-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-brandColor sm:text-sm">
              0{activePrinciple + 1} / 03
            </p>
            <h3 className="mt-6 max-w-lg text-2xl font-bold leading-tight text-primary sm:mt-8 sm:text-3xl md:text-4xl">
              {activeContent.title}
            </h3>
            <p className="mt-4 max-w-xl text-base leading-7 text-primary/75 sm:mt-6 sm:text-lg sm:leading-8">
              {activeContent.detail}
            </p>
          </div>
          <div className="relative z-10 mt-10 flex items-center justify-between border-t border-primary/15 pt-5 sm:mt-12">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/50 sm:text-xs">
              Driven by purpose
            </span>
            <span className="h-3 w-3 rounded-full bg-brandColor shadow-[0_0_0_6px_#11813A20]" />
          </div>
        </article>
      </div>

      <div className="grid grid-cols-1 border-y border-primary/10 py-7 sm:grid-cols-3">
        {commitments.map((commitment, index) => (
          <div
            key={commitment.label}
            className={`commitment-card group relative overflow-hidden border-primary/10 py-3 transition-all duration-300 ease-out sm:px-6 ${
              index > 0 ? 'sm:border-l' : ''
            }`}
            style={{ animationDelay: `${index * 0.35}s` }}
          >
            <div className="relative z-10 flex items-center gap-4 font-poppins">
              <span className="text-sm font-bold tracking-[0.2em] text-brandColor transition-transform duration-300 group-hover:scale-110">
                {commitment.value}
              </span>
              <span className="text-sm font-semibold uppercase tracking-[0.14em] text-primary/75 transition-colors duration-300 group-hover:text-primary">
                {commitment.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto w-full font-poppins font-medium lg:w-[70%]">
        <div className="mb-7 flex items-end justify-between gap-5">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-brandColor sm:text-sm">
              Explore our range
            </p>
            <h2 className="font-poppinsBold text-2xl font-bold leading-tight text-primary sm:text-3xl md:text-4xl">
              Solutions for every growing season.
            </h2>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${visibleProductSlide * 100}%)` }}
          >
            {Array.from({ length: productSlideCount }, (_, slide) => (
              <div key={slide} className="grid w-full shrink-0 gap-4 sm:grid-cols-2">
                {productCategories.slice(slide * 2, slide * 2 + 2).map((product) => (
                  <article key={product.name}>
                    <div className="group relative h-64 overflow-hidden rounded-xl bg-primary sm:h-80 md:h-90">
                      <img
                        src={product.image}
                        alt={`${product.name.toLowerCase()} crop protection products in use`}
                        className="absolute inset-0 h-4/6 w-full rounded-xl object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className={`absolute inset-0 rounded-xl bg-linear-to-t ${product.tone}`} />
                      <div className="absolute inset-x-0 bottom-0 p-2 text-white md:p-3">
                        <p className="mb-1 font-poppins text-[10px] font-semibold uppercase tracking-[0.25em] text-limeGreen sm:text-xs">
                          Aryadev Chemicals
                        </p>
                        <h3 className="font-poppinsBold text-lg font-bold tracking-wide sm:text-xl md:text-2xl">{product.name}</h3>
                        <p className="mt-1 max-w-xs font-poppins text-xs font-medium leading-6 text-white/80 sm:text-sm">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div className="flex gap-2" aria-label="Product slide navigation">
            {[0, 1].map((slide) => (
              <button
                type="button"
                key={slide}
                onClick={() => setActiveProductSlide(slide)}
                aria-label={`Show product slide ${slide + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  visibleProductSlide === slide ? 'w-9 bg-brandColor' : 'w-3 bg-primary/20'
                }`}
              />
            ))}
          </div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary/40">
            {String(visibleProductSlide + 1).padStart(2, '0')} / {String(productSlideCount).padStart(2, '0')}
          </span>
        </div>
      </div>
    </section>
  )
}

export default HomePage
