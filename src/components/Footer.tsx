import logo from '../assets/Logo.png'

function Footer() {
  return (
    <footer className="bg-[#0f172a] text-slate-200">
      <div className="mx-auto grid min-w-0 gap-8 px-4 py-10 sm:gap-10 md:grid-cols-3 md:px-8">
        <div className="space-y-4 md:col-span-1">
          <div className="flex items-center gap-2">
            <img src={logo} alt="AryaDev Chemicals" className="h-12 w-16 shrink-0 object-contain" />
            <h1 className="font-poppinsBold text-base font-bold tracking-wide sm:text-xl">
              <span
                className="block bg-linear-to-r from-brandColor to-limeGreen bg-clip-text text-transparent no-underline decoration-transparent underline-offset-0"
                style={{
                  WebkitTextStroke: "0.5px white",
                  paintOrder: "stroke fill",
                  textDecoration: 'none',
                }}
              >
                ARYADEV
              </span>

              <span
                className="block bg-linear-to-r from-brandColor to-limeGreen bg-clip-text text-transparent no-underline decoration-transparent underline-offset-0"
                style={{
                  WebkitTextStroke: "0.5px white",
                  paintOrder: "stroke fill",
                  textDecoration: 'none',
                }}
              >
                CHEMICALS
              </span>
            </h1>
          </div>

          <p className="max-w-sm text-sm leading-7 text-slate-300">
            Empowering healthier growth through trusted crop solutions, modern
            farming support, and sustainable agricultural expertise.
          </p>
        </div>
        
        <div>
          <div className="space-y-3 text-sm leading-7 text-slate-300">
            <p>GSTIN No.: 07AABCA0000Z1Z1</p>
            <p>License No.: 07/ABC/00000Z1Z1</p>
            <p className="wrap-break-word">Office Address: A-F/F-5, Shiddheshwar Heritage, Nr. Bhavans Party Plot, Ajwa-Waghodia Ring Road, Vadodara-390019</p>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-limeGreen">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li><a href="/" className="transition hover:text-white">Home</a></li>
            <li><a href="/product" className="transition hover:text-white">Products</a></li>
            <li><a href="/about" className="transition hover:text-white">About</a></li>
            <li><a href="/team" className="transition hover:text-white">Our Team</a></li>
            <li><a href="/contact" className="transition hover:text-white">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-700">
        <div className="mx-auto flex flex-col items-center justify-between gap-2 px-4 py-3 text-center text-xs text-slate-400 sm:text-sm md:flex-row md:px-8 md:text-left">
          <p>© 2026 Aryadev Chemicals. All rights reserved.</p>
          <p>Designed for better chemical solutions.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
