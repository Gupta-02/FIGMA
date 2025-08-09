import { HeroBannerSection } from '@/components/sections/HeroBannerSection'
import { AboutMeSection } from '@/components/sections/AboutMeSection'
import { NavigationBar } from '@/components/layout/NavigationBar'

export default function Home() {
  return (
    <main className="bg-light min-h-screen">
      <div className="max-w-[1440px] mx-auto bg-dark overflow-hidden">
        <NavigationBar />
        <HeroBannerSection />
        <AboutMeSection />
      </div>
    </main>
  )
}