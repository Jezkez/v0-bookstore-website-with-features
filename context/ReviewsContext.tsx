'use client'

import React, { createContext, useContext, useState } from 'react'

export interface Review {
  id: string
  bookId: string
  userId: string
  userName: string
  rating: number
  title: string
  content: string
  verifiedPurchase: boolean
  date: string
  helpful: number
}

interface ReviewsContextType {
  reviews: Review[]
  addReview: (review: Omit<Review, 'id'>) => void
  updateReview: (id: string, review: Partial<Review>) => void
  deleteReview: (id: string) => void
  getBookReviews: (bookId: string) => Review[]
}

const ReviewsContext = createContext<ReviewsContextType | undefined>(undefined)

export function ReviewsProvider({ children }: { children: React.ReactNode }) {
  const [reviews, setReviews] = useState<Review[]>([])

  const addReview = (review: Omit<Review, 'id'>) => {
    const newReview: Review = {
      ...review,
      id: Math.random().toString(),
    }
    setReviews([...reviews, newReview])
  }

  const updateReview = (id: string, updatedReview: Partial<Review>) => {
    setReviews(reviews.map(r => r.id === id ? { ...r, ...updatedReview } : r))
  }

  const deleteReview = (id: string) => {
    setReviews(reviews.filter(r => r.id !== id))
  }

  const getBookReviews = (bookId: string) => {
    return reviews.filter(r => r.bookId === bookId)
  }

  return (
    <ReviewsContext.Provider value={{ reviews, addReview, updateReview, deleteReview, getBookReviews }}>
      {children}
    </ReviewsContext.Provider>
  )
}

export function useReviews() {
  const context = useContext(ReviewsContext)
  if (context === undefined) {
    throw new Error('useReviews must be used within a ReviewsProvider')
  }
  return context
}
