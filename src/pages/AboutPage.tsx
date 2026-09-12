const values = [
  'Agriculture First',
  'Quality and Consistency',
  'Research and Innovation',
  'Integrity and Transparency',
  'Responsible Growth',
  'Continuous Improvement',
]

const highlights = [
  {
    title: 'Our story',
    description:
      'Our journey is built on consistent quality, continuous improvement, responsible manufacturing, and trusted partnerships. As agriculture evolves, we remain committed to developing reliable formulations and advancing solutions that help build a stronger future for farming.',
  },
  {
    title: 'What we do',
    description:
      'From raw material selection to formulation and quality-focused manufacturing, we work to maintain consistency, encourage innovation, and deliver products that support the evolving needs of the agricultural industry.',
  },
  {
    title: 'Why it matters',
    description:
      'Through quality-focused manufacturing, responsible practices, and continuous improvement, we aim to support farmers, strengthen partnerships, and contribute to the progress of modern agriculture.',
  },
]

const pillars = [
  'Crop Protection Solutions',
  'Crop Health and Growth Support',
  'Formulation and Technical Expertise',
  'Quality Control and Process Discipline',
  'Product Development and Innovation',
  'Responsible Manufacturing',
]

const networkStates = [
  { name: 'Gujarat', short: 'GJ', position: 'left-[18%] top-[49%]', color: 'bg-[#55a83d]' },
  { name: 'Rajasthan', short: 'RJ', position: 'left-[38%] top-[25%]', color: 'bg-[#11813a]' },
  { name: 'Madhya Pradesh', short: 'MP', position: 'left-[47%] top-[48%]', color: 'bg-[#397b9a]' },
  { name: 'Maharashtra', short: 'MH', position: 'left-[39%] top-[72%]', color: 'bg-[#b47627]' },
  { name: 'Chhattisgarh', short: 'CG', position: 'left-[66%] top-[61%]', color: 'bg-[#55afc0]' },
]

const storyImages = [
  {
    title: 'Field care',
    image:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Farm science',
    image:
      'https://images.unsplash.com/photo-1464226184884-faiserf?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Trusted growth',
    image:
      'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=900&q=80',
  },
]

function AboutPage() {
  return (
    <section className="mx-auto w-full max-w-7xl space-y-10 px-4 py-8 sm:px-6 md:py-12">
      <div className="relative overflow-hidden rounded-4xl border border-primary/10 bg-[#edf5ef] p-6 sm:p-8 md:p-12">
        <div className="absolute -left-8 top-8 h-28 w-28 rounded-full bg-brandColor/10 blur-3xl" />
        <div className="absolute -right-8 bottom-6 h-32 w-32 rounded-full bg-limeGreen/20 blur-3xl" />

        <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-4xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-brandColor sm:text-sm">
              About Aryadev Chemicals
            </p>
            <h1 className="font-poppinsBold text-3xl font-bold leading-[1.08] tracking-[-0.03em] text-primary sm:text-4xl md:text-5xl">
              Growing agriculture. Advancing solutions. Building a better future.
            </h1>
            <ul className="list-disc space-y-1 pl-5 mt-2">
              <li>Delivering dependable solutions for the changing needs of modern agriculture.</li>
              <li>Focusing on precision, consistency, and quality at every stage of manufacturing.</li>
              <li>Encouraging research, innovation, and continuous product improvement.</li>
              <li>Following responsible practices to support people, agriculture, and the environment.</li>
              <li>Creating value through efficient processes and customer-focused solutions.</li>
              <li>Strengthening partnerships through transparency, trust, and dependable service.</li>
              <li>Supporting the agricultural ecosystem with practical and sustainable solutions.</li>
            </ul>

          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {storyImages.map((item) => (
              <div
                key={item.title}
                className="group overflow-hidden rounded-[22px] border border-primary/10 bg-white shadow-[0_16px_30px_rgba(19,61,41,0.08)]"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brandColor">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {highlights.map((item) => (
          <article
            key={item.title}
            className="group rounded-[26px] border border-primary/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(17,129,58,0.08)] sm:p-6"
          >
            <p className="font-poppins text-[10px] font-semibold uppercase tracking-[0.24em] text-brandColor">
              {item.title}
            </p>
            <p className="mt-4 text-base leading-7 text-primary/75">{item.description}</p>
          </article>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[28px] border border-primary/10 bg-white p-6 sm:p-8">
          <p className="font-poppins text-[11px] font-semibold uppercase tracking-[0.28em] text-brandColor">
            Who we are
          </p>
          <h2 className="mt-4 font-poppinsBold text-2xl font-bold leading-tight text-primary sm:text-3xl">
            A commitment to agriculture and quality.
          </h2>
          <p className="mt-5 text-base leading-8 text-primary/75">
            At Aryadev Chemicals, we believe agriculture is more than an industry—it is the foundation of food security, livelihoods, and economic growth. Our team is committed to manufacturing and formulating agricultural products with a strong focus on quality control, technical development, and process consistency.
          </p>
          <p className="mt-4 text-base leading-8 text-primary/75">
            From sourcing raw materials to quality testing, packaging, and final dispatch, we understand that every stage plays an important role in delivering dependable products. Our goal is to develop agricultural solutions that are practical, consistent, and aligned with the evolving needs of farmers, distributors, and the market.
          </p>
          <p className="mt-4 text-base leading-8 text-primary/75">
            Through responsible manufacturing, continuous improvement, and a customer-focused approach, we strive to build lasting relationships and contribute to the progress of modern agriculture.
          </p>
        </div>

        <div className="rounded-[28px] border border-primary/10 bg-[#123d29] p-6 text-white sm:p-8">
          <p className="font-poppins text-[11px] font-semibold uppercase tracking-[0.28em] text-limeGreen">
            Our values
          </p>
          <ul className="mt-5 space-y-3">
            {values.map((value) => (
              <li key={value} className="flex items-start gap-3 text-base leading-7 text-white/85">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-limeGreen" />
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rounded-[28px] border border-primary/10 bg-white p-6 sm:p-8">
        <p className="font-poppins text-[11px] font-semibold uppercase tracking-[0.28em] text-brandColor">
          What we do
        </p>
        <h2 className="mt-4 font-poppinsBold text-2xl font-bold leading-tight text-primary sm:text-3xl">
          Agricultural product manufacturing and formulation.
        </h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar}
              className="rounded-2xl bg-[#f5f8f2] p-4 text-sm font-medium leading-7 text-primary/75"
            >
              {pillar}
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-8 rounded-[28px] border border-primary/10 bg-[#eef5ee] p-6 sm:p-8 lg:grid-cols-[1fr_0.72fr] lg:items-center">
        <div>
          <p className="font-poppins text-[11px] font-semibold uppercase tracking-[0.28em] text-brandColor">
            Our philosophy
          </p>
          <h2 className="mt-4 font-poppinsBold text-2xl font-bold leading-tight text-primary sm:text-3xl">
            Quality is not a step. It is our standard.
          </h2>
          <p className="mt-5 max-w-4xl text-base leading-8 text-primary/75">
            We believe quality should be built into every stage of manufacturing. From raw material
            selection to formulation, process control, quality testing, packaging, and final product
            evaluation, each step plays a critical role in ensuring consistency and reliability. Our
            goal is not just to manufacture more products, but to manufacture better products that
            create real value for agriculture.
          </p>
        </div>

        <div className="overflow-hidden rounded-[22px] border border-primary/10 bg-white shadow-[0_16px_30px_rgba(19,61,41,0.08)]">
          <img
            src="/quality-testing.svg"
            alt="Quality testing for agricultural products"
            className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-72"
          />
        </div>
      </div>

      <section className="relative overflow-hidden rounded-[28px] bg-[#f2f7ef] p-5 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-limeGreen/15 blur-3xl" />
        <div className="relative z-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="font-poppins text-[11px] font-semibold uppercase tracking-[0.28em] text-brandColor">
              Our network
            </p>
            <h2 className="mt-4 max-w-xl font-poppinsBold text-3xl font-bold leading-[1.08] text-primary sm:text-4xl md:text-5xl">
              Stronger presence for a healthier agriculture.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-primary/75 sm:text-lg">
              Our distribution network connects Aryadev Chemicals with key agricultural regions,
              helping quality products reach farmers and partners efficiently.
            </p>

            <div className="mt-7 rounded-2xl border border-primary/10 bg-white/75 p-4 shadow-[0_14px_30px_rgba(19,61,41,0.06)] sm:p-5">
              <p className="font-poppins text-xs font-bold uppercase tracking-[0.2em] text-brandColor">
                Connected states
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {networkStates.map((state) => (
                  <span
                    key={state.name}
                    className="inline-flex items-center gap-2 rounded-full bg-[#e7f2e5] px-3 py-2 text-sm font-semibold text-primary"
                  >
                    <span className={`h-2 w-2 rounded-full ${state.color}`} />
                    {state.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-7 grid grid-cols-3 gap-3 border-t border-primary/15 pt-5">
              {[
                ['05', 'Network states'],
                ['01', 'Growing purpose'],
                ['24/7', 'Partner focus'],
              ].map(([value, label]) => (
                <div key={label}>
                  <p className="font-poppinsBold text-xl font-bold text-primary sm:text-2xl">{value}</p>
                  <p className="mt-1 text-xs leading-5 text-primary/60">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-90 overflow-hidden rounded-3xl bg-[#dfeadd] p-4 shadow-[0_20px_45px_rgba(19,61,41,0.1)] sm:min-h-110 sm:p-6">
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85"
              alt="Green agricultural field representing Aryadev's distribution network"
              className="absolute inset-0 h-full w-full object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,247,239,0.25),rgba(18,61,41,0.62))]" />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.35)_1px,transparent_1px)] bg-size-[32px_32px] opacity-30" />

            <div className="relative h-full min-h-82 sm:min-h-98">
              <div className="absolute left-[49%] top-[46%] flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-primary/90 text-center text-[10px] font-bold uppercase tracking-[0.16em] text-white shadow-[0_0_0_12px_rgba(85,168,61,0.18)] sm:h-24 sm:w-24 sm:text-xs">
                Aryadev
                <br />
                Chemicals
              </div>

              {networkStates.map((state, index) => (
                <div key={state.name} className={`absolute ${state.position} group`}>
                  <span className="absolute left-1/2 top-1/2 h-px w-20 origin-left -translate-y-1/2 bg-white/55 sm:w-28" />
                  <span className={`relative flex h-10 w-10 items-center justify-center rounded-full border-2 border-white ${state.color} text-xs font-bold text-white shadow-lg transition-transform duration-300 group-hover:scale-125`}>
                    {state.short}
                  </span>
                  <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/90 px-2 py-1 text-[10px] font-bold text-primary shadow-sm">
                    {state.name}
                  </span>
                  <span
                    className="absolute inset-0 animate-ping rounded-full border border-white/70"
                    style={{ animationDelay: `${index * 0.35}s` }}
                  />
                </div>
              ))}

              {/* <div className="absolute bottom-4 left-4 rounded-xl bg-white/85 px-3 py-2 text-xs font-semibold text-primary backdrop-blur-sm sm:bottom-6 sm:left-6">
                Reliable partnerships across growing regions
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default AboutPage
