import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        className={cn(
          // Base styles
          'inline-flex items-center justify-center rounded-full font-montserrat font-semibold text-button transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          // Variants
          {
            'bg-color-3 text-light hover:bg-color-3/90 focus-visible:ring-color-3': variant === 'primary',
            'bg-light text-dark hover:bg-light/90 focus-visible:ring-light': variant === 'secondary',
            'border-2 border-light text-light bg-transparent hover:bg-light hover:text-dark focus-visible:ring-light': variant === 'outline',
          },
          // Sizes
          {
            'h-10 px-6 py-2 text-sm': size === 'sm',
            'h-12 px-8 py-3': size === 'md',
            'h-14 px-10 py-4 text-base': size === 'lg',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export { Button }