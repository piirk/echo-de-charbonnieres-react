type PageBannerProps = {
  title: string
  subtitle?: string
}

const PageBanner = ({ title, subtitle }: PageBannerProps) => {
  return (
    <div className="w-full bg-amber-900">
      <div className="relative w-full h-64">
        <div className="absolute inset-0 bg-black/40">
          <div className="container mx-auto h-full px-4 flex flex-col justify-center items-center text-center">
            <h1 className="text-5xl font-serif text-white mb-4">{title}</h1>
            {subtitle && (
              <p className="text-xl text-white/90">{subtitle}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageBanner 