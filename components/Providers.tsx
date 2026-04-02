'use client'

import { ThemeProvider } from '@/context/ThemeContext'
import { CartProvider } from '@/context/CartContext'
import { AuthProvider } from '@/context/AuthContext'
import { ReviewsProvider } from '@/context/ReviewsContext'
import { WishlistProvider } from '@/context/WishlistContext'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <ReviewsProvider>
            <WishlistProvider>
              {children}
            </WishlistProvider>
          </ReviewsProvider>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}
