import { Button } from '@/components/ui/Button'

export const HeroBannerSection = () => {
  return (
    <section className="relative w-full px-6 lg:px-14 py-12 lg:py-24 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-color-3 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-color-2 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 flex flex-col items-start gap-6 lg:gap-10 max-w-5xl">
        {/* Tagline */}
        <div className="font-montserrat font-bold text-light text-tagline">
          👋 HEY, I AM ERICA
        </div>

        {/* Main Headline */}
        <h1 className="font-montserrat font-medium gradient-text text-hero-xl lg:text-hero-xl leading-none max-w-4xl">
          A YOUNG CREATIVE DESIGNER BASED IN SAN DIEGO
        </h1>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-start gap-4 lg:gap-6 mt-4">
          <Button variant="outline" size="lg">
            MY WORKS
          </Button>
          <Button variant="secondary" size="lg">
            LET&apos;S TALK
          </Button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <div className="w-4 h-4 bg-color-3 rounded-full animate-pulse" />
      </div>
      <div className="absolute top-1/3 right-20 hidden lg:block">
        <div className="w-2 h-2 bg-color-2 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </section>
  )
}