import { Button } from '@/components/ui/Button'
import Image from 'next/image'

export const AboutMeSection = () => {
  return (
    <section className="relative w-full px-6 lg:px-14 py-12 lg:py-24 bg-light">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 xl:gap-32">
        {/* Left side - Profile Image */}
        <div className="relative flex-shrink-0 order-2 lg:order-1">
          {/* Background gradient effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-light via-color-2 via-color-3 to-color-1 rounded-[500px] blur-[28px] scale-105 opacity-80" />
          
          {/* Profile image container */}
          <div className="relative z-10 w-64 h-80 sm:w-80 sm:h-96 lg:w-[432px] lg:h-[696px] rounded-[500px] overflow-hidden shadow-2xl">
            <div className="w-full h-full bg-gradient-to-b from-color-2 to-color-3 flex items-center justify-center">
              <div className="text-white text-6xl font-bold">EJ</div>
            </div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="flex-1 order-1 lg:order-2 text-center lg:text-left">
          <div className="flex flex-col gap-6 lg:gap-10 max-w-lg lg:max-w-none">
            {/* Section Header */}
            <div className="flex flex-col gap-2 lg:gap-4">
              <div className="font-montserrat font-bold text-color-3/80 text-tagline uppercase tracking-wider">
                ABOUT
              </div>
              <h2 className="font-montserrat font-medium text-dark text-headline-2 leading-tight">
                CRAFTING UNIQUE BRAND EXPERIENCES SINCE 2014
              </h2>
            </div>

            {/* Description */}
            <p className="font-montserrat text-dark/80 text-paragraph leading-relaxed">
              With a Visual Arts degree, my journey began in graphic design, 
              crafting logos and marketing materials. Video editing followed, 
              where meticulous attention to detail set my work apart, and I 
              ventured into 3D modeling for immersive experiences.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <Button variant="outline" size="lg" className="border-dark text-dark hover:bg-dark hover:text-light">
                SCHEDULE A CALL
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 hidden lg:block">
        <div className="w-3 h-3 bg-color-3 rounded-full animate-pulse" />
      </div>
      <div className="absolute bottom-20 left-10 hidden lg:block">
        <div className="w-2 h-2 bg-color-2 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  )
}