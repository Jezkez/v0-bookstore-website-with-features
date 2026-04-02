'use client'

import React, { createContext, useContext, useState } from 'react'

interface WishlistContextType {
  wishlists: string[]
  addToWishlist: (bookId: string) => void
  removeFromWishlist: (bookId: string) => void
  isInWishlist: (bookId: string) => boolean
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined)

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [wishlists, setWishlists] = useState<string[]>([])

  const addToWishlist = (bookId: string) => {
    if (!wishlists.includes(bookId)) {
      setWishlists([...wishlists, bookId])
    }
  }

  const removeFromWishlist = (bookId: string) => {
    setWishlists(wishlists.filter(id => id !== bookId))
  }

  const isInWishlist = (bookId: string) => {
    return wishlists.includes(bookId)
  }

  return (
    <WishlistContext.Provider value={{ wishlists, addToWishlist, removeFromWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const context = useContext(WishlistContext)
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider')
  }
  return context
}
