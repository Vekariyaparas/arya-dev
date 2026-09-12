import type { Product } from '../data/products'

type ProductModalProps = {
  product: Product | null
  onClose: () => void
}

function ProductModal({ product, onClose }: ProductModalProps) {
  if (!product) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/70 p-2 backdrop-blur-sm sm:p-4">
      <div className="relative max-h-[calc(100dvh-1rem)] w-full max-w-5xl overflow-hidden rounded-xl bg-white shadow-[0_25px_80px_rgba(0,0,0,0.15)] sm:max-h-[90vh]">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-2 top-2 z-20 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/85 text-lg font-bold text-primary transition hover:bg-white sm:right-4 sm:top-4 sm:h-10 sm:w-10"
          aria-label="Close product details"
        >
          ×
        </button>

        <div className="grid max-h-[calc(100dvh-1rem)] overflow-y-auto lg:max-h-[90vh] lg:grid-cols-[1.1fr_1.4fr]">
          <div className="relative min-h-56 bg-[#edf4eb] sm:min-h-65">
            <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-[#123d29]/75 via-[#123d29]/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-5">
              <p className="font-poppins text-[10px] font-semibold uppercase tracking-[0.25em] text-limeGreen">
                {product.category}
              </p>
              <h3 className="mt-2 font-poppinsBold text-2xl font-bold">{product.name}</h3>
            </div>
          </div>

          <div className="min-w-0 space-y-6 p-4 sm:p-7">
            <div>
              <p className="font-poppins text-[10px] font-semibold uppercase tracking-[0.26em] text-brandColor">
                {product.technicalName}
              </p>
              <h4 className="mt-3 font-poppinsBold text-3xl font-bold leading-tight text-primary">
                {product.name}
              </h4>
            </div>

            <p className="text-base leading-7 text-primary/75">{product.description}</p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-[#f5f8f2] p-4">
                <p className="font-poppins text-[10px] font-semibold uppercase tracking-[0.22em] text-primary/55">
                  Packing
                </p>
                <p className="mt-2 text-base font-semibold text-primary">{product.packing}</p>
              </div>
              <div className="rounded-2xl bg-[#f5f8f2] p-4">
                <p className="font-poppins text-[10px] font-semibold uppercase tracking-[0.22em] text-primary/55">
                  Dose
                </p>
                <p className="mt-2 text-base font-semibold text-primary">{product.dose}</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-primary/10 p-4">
                <p className="font-poppins text-[10px] font-semibold uppercase tracking-[0.22em] text-primary/55">
                  Size available
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.packSizes.map((size) => (
                    <span key={size} className="rounded-full bg-[#edf4eb] px-2.5 py-1 text-xs font-semibold text-primary">
                      {size}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-primary/10 p-4">
                <p className="font-poppins text-[10px] font-semibold uppercase tracking-[0.22em] text-primary/55">
                  Availability
                </p>
                <p className="mt-3 text-sm font-semibold leading-6 text-primary">{product.availability}</p>
              </div>
            </div>

            <div className="rounded-2xl border border-primary/10 p-4">
              <p className="font-poppins text-[10px] font-semibold uppercase tracking-[0.22em] text-primary/55">
                Best suited crops
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.crops.map((crop) => (
                  <span key={crop} className="rounded-full bg-brandColor/10 px-3 py-1.5 text-xs font-semibold text-brandColor">
                    {crop}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-[#123d29] p-4 text-white">
              <p className="font-poppins text-[10px] font-semibold uppercase tracking-[0.22em] text-limeGreen">
                Key benefits
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-white/80">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-limeGreen" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal
