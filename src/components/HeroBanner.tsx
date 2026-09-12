import { useLocation } from 'react-router-dom'
import homeHero from '../images/Home.png'
import productHero from '../images/Product.png'

const heroContent = {
  '/': {
    eyebrow: 'AryaDev Chemicals',
    title: 'Better Formulations. Stronger Agriculture.',
    image: homeHero,
  },
  '/product': {
    eyebrow: 'Our products',
    title: 'Agricultural Solutions. Built on Quality.',
    image: productHero,
  },
  '/about': {
    eyebrow: 'About AryaDev',
    title: 'Trusted Expertise for Healthier Harvests.',
    image:
      'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1800&q=85',
  },
  '/contact': {
    eyebrow: 'Contact us',
    title: 'Let’s grow something better together',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=85',
  },
  '/team': {
    eyebrow: 'Our team',
    title: 'People who turn quality into progress',
    image: '/team-gautam.svg',
  },
} as const

function HeroBanner() {
  const { pathname } = useLocation()
  const content = heroContent[pathname as keyof typeof heroContent] ?? heroContent['/']

  return (
    <section
      className="relative flex min-h-72 items-end overflow-hidden bg-cover bg-center px-4 pb-8 pt-28 sm:min-h-92 sm:pb-12 md:min-h-108 md:px-8 md:pb-16"
      style={{ backgroundImage: `url('${content.image}')` }}
    >
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative z-10 mx-auto w-full max-w-7xl text-white">
        <p className="site-eyebrow mb-3 text-limeGreen sm:text-sm">
          {content.eyebrow}
        </p>
        <h1 className="site-title max-w-3xl wrap-break-word text-3xl text-white sm:text-4xl md:text-6xl">
          {content.title}
        </h1>
      </div>
    </section>
  )
}

export default HeroBanner