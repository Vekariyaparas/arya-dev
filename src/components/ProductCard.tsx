import type { Product } from '../data/products'

type ProductCardProps = {
  product: Product
  onViewDetails: (product: Product) => void
}

function ProductCard({ product, onViewDetails }: ProductCardProps) {
  return (
    <article className="group min-w-0 overflow-hidden rounded-[28px] border border-primary/10 bg-white shadow-[0_16px_40px_rgba(17,129,58,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_50px_rgba(17,129,58,0.12)]">
      <div className="relative h-52 overflow-hidden sm:h-60">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#123d29]/80 via-[#123d29]/25 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
          {product.category}
        </span>
      </div>

      <div className="space-y-4 p-5 sm:p-6">
        <div>
          <p className="font-poppins text-[10px] font-semibold uppercase tracking-[0.26em] text-brandColor/90">
            {product.technicalName}
          </p>
          <h3 className="mt-2 wrap-break-word font-poppinsBold text-xl font-bold leading-tight tracking-[-0.03em] text-primary sm:text-2xl">
            {product.name}
          </h3>
        </div>

        <p className="font-poppins text-sm leading-7 text-primary/70">{product.description}</p>

        <div className="space-y-2 rounded-2xl bg-[#f5f8f2] p-3">
          <div className="flex items-center justify-between gap-3 font-poppins text-[10px] font-semibold uppercase tracking-[0.18em] text-primary/60">
            <span>Packing</span>
          </div>
          <div className="flex flex-wrap gap-2 text-xs text-primary/75">
            {product.packSizes.map((size) => (
              <span key={size} className="rounded-full bg-white px-2.5 py-1 font-medium">
                {size}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
          <span className="wrap-break-word font-poppins text-[10px] font-semibold uppercase tracking-[0.18em] text-primary/65">
            {product.dose}
          </span>
          <button
            type="button"
            onClick={() => onViewDetails(product)}
            className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 font-poppins text-[10px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-brandColor sm:w-auto"
          >
            View details
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
