import { useEffect, useState } from 'react'
import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import HeroBanner from './components/HeroBanner'
import PageLoader from './components/PageLoader'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import TeamPage from './pages/TeamPage'
import logo from './assets/Logo.png'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/product', label: 'Product' },
  { to: '/about', label: 'About' },
  { to: '/team', label: 'Our Team' },
  { to: '/contact', label: 'Contact' },
]

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  const navClassName = ({ isActive }: { isActive: boolean }) =>
    `group relative py-0.5 font-poppins text-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-center after:rounded-full after:bg-limeGreen after:transition-transform after:duration-300 after:ease-out sm:text-base ${
      isActive
        ? 'text-limeGreen after:scale-x-100'
        : 'text-white/90 after:scale-x-0 hover:text-limeGreen hover:after:scale-x-100'
    }`

  return (
    <div className="flex min-h-screen w-full min-w-0 flex-col font-body">
      <PageLoader key={location.pathname} />
      <div>
        <header
          className={`fixed inset-x-0 top-0 z-50 motion-safe:animate-[headerReveal_0.7s_ease-out] transition-all duration-300 ${
            isScrolled ? 'bg-primary/50 shadow-[0_3px_18px_white] backdrop-blur-sm' : 'bg-transparent'
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-3 py-3 sm:px-4 md:px-8">
            <div className="min-w-0 flex items-center gap-2">
              <img src={logo} alt="AryaDev Chemicals" className="h-9 w-12 shrink-0 object-contain sm:h-12 sm:w-16" />
              <h1 className="min-w-0 font-poppinsBold text-[10px] font-bold tracking-wide sm:text-xl">
                <span
                  className="block bg-linear-to-r from-brandColor to-limeGreen bg-clip-text text-transparent no-underline decoration-transparent underline-offset-0"
                  style={{
                    WebkitTextStroke: '0.5px white',
                    paintOrder: 'stroke fill',
                    textDecoration: 'none',
                  }}
                >
                  ARYADEV
                </span>

                <span
                  className="block bg-linear-to-r from-brandColor to-limeGreen bg-clip-text text-transparent no-underline decoration-transparent underline-offset-0"
                  style={{
                    WebkitTextStroke: '0.5px white',
                    paintOrder: 'stroke fill',
                    textDecoration: 'none',
                  }}
                >
                  CHEMICALS
                </span>
              </h1>
            </div>

            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((value) => !value)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/15 lg:hidden"
            >
              <span className="sr-only">Open menu</span>
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>

            <nav className="hidden items-center gap-4 lg:flex xl:gap-6">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} className={navClassName}>
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>

          {isMenuOpen && (
            <nav className="mx-3 rounded-2xl border border-white/10 bg-primary/85 p-3 shadow-lg backdrop-blur-sm lg:hidden">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `rounded-lg px-3 py-2 text-sm font-semibold tracking-wide transition ${
                        isActive ? 'bg-white/10 text-limeGreen' : 'text-white/90 hover:bg-white/5 hover:text-limeGreen'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </nav>
          )}
        </header>

        <HeroBanner />
      </div>

      <main className="mx-auto w-full min-w-0 max-w-7xl px-3 py-6 sm:px-4 sm:py-8 md:px-8 md:py-10 lg:px-0">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
