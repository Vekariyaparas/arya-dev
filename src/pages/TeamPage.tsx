const teamMembers = [
  {
    name: 'Gautam Pipalva',
    role: 'Company Director',
    focus: 'Formulation and product development',
    initials: 'GP',
    image: '/team-gautam.svg',
    description:
      'Leads formulation and product development with practical agricultural knowledge, technical direction, and a focus on dependable crop solutions.',
  },
  {
    name: 'Pravin Danger',
    role: 'Company Director',
    focus: 'Marketing and product development',
    initials: 'PD',
    image: '/team-pravin.svg',
    description:
      'Connects product development with market understanding, building strong partnerships and helping bring Aryadev solutions to the right customers.',
  },
  {
    name: 'Paras Vekariya',
    role: 'Quality Team',
    focus: 'Testing and process consistency',
    initials: 'PV',
    image: '/team-paras.svg',
    description:
      'Protects every quality standard through careful testing, documentation, and attention to consistency from raw material to finished product.',
  },
  {
    name: 'Sunil Kubavat',
    role: 'Customer Support',
    focus: 'Partnerships and service',
    initials: 'SK',
    image: '/team-sunil.svg',
    description:
      'Builds lasting relationships by listening carefully, responding clearly, and keeping the needs of farmers and partners at the centre.',
  },
  {
    name: 'Sardar',
    role: 'Manufacturing Team',
    focus: 'Production and operations',
    initials: 'SA',
    image: '/team-sardar.svg',
    description:
      'Turns thoughtful formulations into reliable products through disciplined processes, responsible manufacturing, and coordinated execution.',
  },
]

const teamPrinciples = ['Work with purpose', 'Learn continuously', 'Deliver with care']

const impactStats = [
  {
    value: '500+',
    label: 'Happy customers',
    detail: 'Trusted partnerships built through responsive service.',
    accent: 'bg-[#11813a]',
  },
  {
    value: '25+',
    label: 'People on our team',
    detail: 'Committed minds working together with purpose.',
    accent: 'bg-[#397b9a]',
  },
  {
    value: '50+',
    label: 'Quality products',
    detail: 'Dependable solutions for changing crop needs.',
    accent: 'bg-[#b47627]',
  },
]

function TeamPage() {
  return (
    <section className="mx-auto w-full max-w-7xl space-y-10 px-4 py-8 sm:px-6 md:py-12">
      <div className="relative overflow-hidden rounded-4xl border border-primary/10 bg-[#123d29] p-6 text-white sm:p-8 md:p-12">
        <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-limeGreen/20 blur-3xl" />
        <div className="relative z-10 max-w-3xl">
          <p className="font-poppins text-[11px] font-semibold uppercase tracking-[0.32em] text-limeGreen sm:text-sm">
            Our team
          </p>
          <h1 className="mt-4 font-poppinsBold text-3xl font-bold leading-[1.08] sm:text-4xl md:text-5xl">
            People who turn quality into progress.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            Aryadev Chemicals is powered by people who bring technical knowledge, process discipline,
            and genuine care to every part of the work. Together, we create solutions that agriculture
            can rely on.
          </p>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <article
            key={member.name}
            className="group overflow-hidden rounded-[26px] border border-primary/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brandColor/30 hover:shadow-[0_18px_35px_rgba(17,129,58,0.1)] focus-within:-translate-y-1 focus-within:border-brandColor/30 focus-within:shadow-[0_18px_35px_rgba(17,129,58,0.1)]"
          >
            <div className="relative h-52 overflow-hidden bg-[#e7f2e6]">
              <img
                src={member.image}
                alt={`${member.name}, ${member.role}`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 font-poppins text-[10px] font-semibold uppercase tracking-[0.16em] text-brandColor backdrop-blur-sm">
                {member.initials}
              </span>
            </div>
            <div className="p-5 sm:p-6">
              <p className="font-poppins text-[10px] font-semibold uppercase tracking-[0.2em] text-brandColor">
                {member.role}
              </p>
              <h2 className="mt-3 font-poppinsBold text-xl font-bold leading-tight tracking-[0.01em] text-primary">
                {member.name}
              </h2>
              <p className="mt-2 text-sm font-semibold leading-6 text-primary/60">{member.focus}</p>
              <p className="mt-4 text-sm leading-7 text-primary/70">{member.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="grid gap-6 rounded-[28px] border border-primary/10 bg-[#edf5ef] p-6 sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="font-poppins text-[11px] font-semibold uppercase tracking-[0.28em] text-brandColor">
            How we work
          </p>
          <h2 className="mt-4 font-poppinsBold text-2xl font-bold leading-tight text-primary sm:text-3xl">
            One team, one standard.
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {teamPrinciples.map((principle, index) => (
            <div key={principle} className="rounded-2xl bg-white p-4">
              <span className="font-poppinsBold text-2xl font-bold text-brandColor">0{index + 1}</span>
              <p className="mt-3 text-sm font-semibold leading-6 text-primary">{principle}</p>
            </div>
          ))}
        </div>
      </div>

      <section className="relative overflow-hidden rounded-[28px] bg-[#123d29] p-6 text-white sm:p-8 md:p-10">
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full border-34 border-limeGreen/15" />
        <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-[#55a83d]/20 blur-3xl" />
        <div className="relative z-10">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="font-poppins text-[11px] font-semibold uppercase tracking-[0.28em] text-limeGreen">
                Growing together
              </p>
              <h2 className="mt-4 max-w-2xl font-poppinsBold text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
                The people, partnerships, and products behind our progress.
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-white/65 sm:text-right">
              Every number represents a relationship we work hard to earn and keep.
            </p>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {impactStats.map((stat, index) => (
              <article
                key={stat.label}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.07] p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/13 sm:p-6"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`absolute inset-y-0 left-0 w-1 ${stat.accent}`} />
                <div className="flex items-start justify-between gap-4">
                  <p className="font-poppinsBold text-4xl font-bold tracking-tight text-white transition-transform duration-300 group-hover:scale-105 sm:text-5xl">
                    {stat.value}
                  </p>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-sm text-limeGreen">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-poppins text-sm font-bold uppercase tracking-[0.14em] text-limeGreen">
                  {stat.label}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-6 text-white/65">{stat.detail}</p>
                <div className="mt-6 h-px w-full bg-white/15">
                  <div className={`h-px w-1/3 ${stat.accent} transition-all duration-500 group-hover:w-full`} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </section>
  )
}

export default TeamPage
