'use client'

import Link from 'next/link'
import { MainLayout } from '@/components/layout/MainLayout'
import { BookCard } from '@/components/books/BookCard'
import { Button } from '@/components/ui/button'
import { Heart, ShoppingCart, Trash2, Share2 } from 'lucide-react'
import books from '@/data/books.json'

// Sample wishlist - would come from user data in production
const wishlistBooks = books.filter(b => b.featured).slice(0, 6)

export default function WishlistPage() {
  const totalValue = wishlistBooks.reduce((sum, book) => sum + book.price, 0)

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">My Wishlist</h1>
          <p className="text-muted-foreground">
            {wishlistBooks.length} books saved · Total value: ${totalValue.toFixed(2)}
          </p>
        </div>

        {wishlistBooks.length > 0 ? (
          <>
            {/* Action Buttons */}
            <div className="flex gap-3 mb-8 flex-wrap">
              <Button className="gap-2">
                <ShoppingCart className="w-4 h-4" />
                Add All to Cart
              </Button>
              <Button variant="outline" className="gap-2">
                <Share2 className="w-4 h-4" />
                Share Wishlist
              </Button>
              <Button variant="outline" className="gap-2">
                <Heart className="w-4 h-4" />
                Download List
              </Button>
            </div>

            {/* Books Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {wishlistBooks.map((book) => (
                <div key={book.id} className="relative group">
                  <BookCard
                    id={book.id}
                    title={book.title}
                    author={book.author}
                    price={book.price}
                    originalPrice={book.originalPrice}
                    image={book.coverImage}
                    rating={book.rating}
                    reviews={book.reviews}
                    condition={book.condition as 'new' | 'pre-loved'}
                    format={book.format}
                    variant="grid"
                  />
                  <button className="absolute top-2 right-2 bg-background/80 hover:bg-background rounded-full p-2 opacity-0 group-hover:opacity-100 transition">
                    <Trash2 className="w-4 h-4 text-destructive" />
                  </button>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <Heart className="w-16 h-16 mx-auto text-muted-foreground mb-4 opacity-50" />
            <h2 className="text-2xl font-bold mb-2">Your wishlist is empty</h2>
            <p className="text-muted-foreground mb-6">Start adding books you want to read!</p>
            <Link href="/categories">
              <Button>Browse Books</Button>
            </Link>
          </div>
        )}
      </div>
    </MainLayout>
  )
}
