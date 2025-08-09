'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'

const navItems = [
  { label: 'ABOUT ME', href: '#about' },
  { label: 'PORTFOLIO', href: '#portfolio' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'SERVICES', href: '#services' },
  { label: 'TESTIMONIALS', href: '#testimonials' },
]

export const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full">
      <div className="glass-morphism mx-4 mt-4 rounded-[40px] px-6 lg:px-14 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="font-montserrat font-semibold text-light text-sm">
              ERICA JONES
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="font-montserrat font-medium text-light/60 text-sm tracking-tight leading-normal hover:text-light transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <Button variant="secondary">
              GET IN TOUCH
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col gap-1 w-6 h-6"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-full h-0.5 bg-light transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`w-full h-0.5 bg-light transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-light transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 pt-6 border-t border-light/20">
            <div className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="font-montserrat font-medium text-light/60 text-sm tracking-tight leading-normal hover:text-light transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-4">
                <Button variant="secondary" className="w-full">
                  GET IN TOUCH
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}