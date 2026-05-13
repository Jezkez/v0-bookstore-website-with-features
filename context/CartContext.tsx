'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

export interface CartItem {
  bookId: string
  quantity: number
  price: number
}

interface CartContextType {
  items: CartItem[]
  addItem: (bookId: string, quantity: number, price: number) => void
  removeItem: (bookId: string) => void
  updateQuantity: (bookId: string, quantity: number) => void
  clearCart: () => void
  total: number
  itemCount: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  useEffect(() => {
    const saved = localStorage.getItem('cart')
    if (saved) {
      try {
        setItems(JSON.parse(saved))
      } catch (e) {
        console.error('Failed to load cart:', e)
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items))
  }, [items])

  const addItem = (bookId: string, quantity: number, price: number) => {
    setItems(prev => {
      const existing = prev.find(item => item.bookId === bookId)
      if (existing) {
        return prev.map(item =>
          item.bookId === bookId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [...prev, { bookId, quantity, price }]
    })
  }

  const removeItem = (bookId: string) => {
    setItems(prev => prev.filter(item => item.bookId !== bookId))
  }

  const updateQuantity = (bookId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(bookId)
    } else {
      setItems(prev =>
        prev.map(item =>
          item.bookId === bookId ? { ...item, quantity } : item
        )
      )
    }
  }

  const clearCart = () => {
    setItems([])
  }

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart, total, itemCount }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}
