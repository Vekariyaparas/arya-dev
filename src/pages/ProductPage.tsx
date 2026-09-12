import { useEffect, useRef, useState } from 'react'
import ProductCard from '../components/ProductCard'
import ProductModal from '../components/ProductModal'
import { products } from '../data/products'
import type { Product } from '../data/products'

const productFilters = [
  { id: 'all', label: 'All products', matches: () => true },
  {
    id: 'crop-protection',
    label: 'Crop protection',
    matches: (product: Product) => ['Insecticide', 'Fungicide', 'Herbicide'].includes(product.category),
  },
  {
    id: 'plant-growth',
    label: 'Plant growth',
    matches: (product: Product) => product.category === 'Plant Growth Regulator',
  },
  {
    id: 'soil-nutrition',
    label: 'Soil & nutrition',
    matches: (product: Product) => ['Micronutrient', 'Soil Conditioner'].includes(product.category),
  },
]

function ProductPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [activeFilter, setActiveFilter] = useState('all')
  const [visibleProductCount, setVisibleProductCount] = useState(3)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const loadMoreRef = useRef<HTMLDivElement | null>(null)
  const selectedFilter = productFilters.find((filter) => filter.id === activeFilter) ?? productFilters[0]
  const filteredProducts = products.filter(selectedFilter.matches)
  const visibleProducts = filteredProducts.slice(0, visibleProductCount)

  useEffect(() => {
    setVisibleProductCount(3)
  }, [activeFilter])

  useEffect(() => {
    const loadMoreTarget = loadMoreRef.current

    if (!loadMoreTarget || visibleProductCount >= filteredProducts.length) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleProductCount((current) => Math.min(current + 3, filteredProducts.length))
        }
      },
      { rootMargin: '240px' },
    )

    observer.observe(loadMoreTarget)
    return () => observer.disconnect()
  }, [filteredProducts.length, visibleProductCount])

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 480)

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-1 py-6 sm:px-0 md:py-10">
        <div className="mb-8 md:mb-12">
          <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.32em] text-brandColor sm:text-sm">
            Our product range
          </p>
          <h1 className="text-center font-poppinsBold text-3xl font-bold leading-[1.1] tracking-[-0.03em] text-primary sm:text-4xl md:text-5xl">
            Quality Formulations for Every Growing Season.
          </h1>
        </div>

        <div className="mb-8 rounded-3xl border border-primary/10 bg-[#edf5ef] p-3 sm:p-4">
          <div className="flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible" role="group" aria-label="Filter products by use">
            {productFilters.map((filter) => {
              const isActive = activeFilter === filter.id

              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  aria-pressed={isActive}
                  className={`shrink-0 rounded-2xl px-4 py-3 text-left font-poppins text-xs font-bold uppercase tracking-[0.12em] transition-all duration-300 sm:px-5 ${
                    isActive
                      ? 'bg-primary text-white shadow-[0_8px_18px_rgba(18,61,41,0.18)]'
                      : 'bg-white text-primary/65 hover:-translate-y-0.5 hover:text-primary'
                  }`}
                >
                  {filter.label}
                </button>
              )
            })}
          </div>
          <div className="mt-3 flex items-center justify-between gap-3 px-2 text-xs text-primary/55">
            <span>Showing {visibleProducts.length} of {filteredProducts.length} products</span>
            <span className="hidden font-semibold uppercase tracking-[0.16em] sm:inline">Curated for your crop needs</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} onViewDetails={setSelectedProduct} />
          ))}
        </div>

        {visibleProductCount < filteredProducts.length && (
          <div ref={loadMoreRef} className="flex h-24 items-center justify-center" aria-label="Loading more products">
            <span className="h-2 w-2 animate-bounce rounded-full bg-brandColor [animation-delay:-0.2s]" />
            <span className="mx-1 h-2 w-2 animate-bounce rounded-full bg-brandColor" />
            <span className="h-2 w-2 animate-bounce rounded-full bg-brandColor [animation-delay:0.2s]" />
          </div>
        )}
      </section>

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-5 right-5 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl text-white shadow-[0_12px_24px_rgba(18,61,41,0.24)] transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:bg-brandColor sm:bottom-8 sm:right-8 ${
          showBackToTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        <span aria-hidden="true">↑</span>
      </button>
    </>
  )
}

export default ProductPage
