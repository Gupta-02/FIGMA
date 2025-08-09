import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Freelancer Portfolio - Erica Jones',
  description: 'A young creative designer based in San Diego specializing in graphic design, video editing, and 3D animation.',
  keywords: 'freelancer, designer, graphic design, video editing, 3D animation, portfolio',
  authors: [{ name: 'Erica Jones' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-light">
        {children}
      </body>
    </html>
  )
}