type PageBannerProps = {
  title: string
  subtitle?: string
}

const PageBanner = ({ title, subtitle }: PageBannerProps) => {
  return (
    <div className="relative h-64 bg-amber-900">
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-serif mb-4">{title}</h1>
          {subtitle && <p className="text-xl">{subtitle}</p>}
        </div>
      </div>
    </div>
  )
}

export default PageBanner 