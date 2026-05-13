'use client'

import Link from 'next/link'
import { MainLayout } from '@/components/layout/MainLayout'
import { BookCard } from '@/components/books/BookCard'
import { Button } from '@/components/ui/button'
import { CheckCircle2, Filter, Download } from 'lucide-react'
import books from '@/data/books.json'

// Sample read books - would come from user data in production
const readBooks = books.filter(b => b.featured).slice(0, 8)

export default function BooksReadPage() {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
            <CheckCircle2 className="w-8 h-8 text-primary" />
            Books I've Read
          </h1>
          <p className="text-muted-foreground">
            {readBooks.length} books marked as read
          </p>
        </div>

        {/* Filter & Actions */}
        <div className="flex gap-3 mb-8 flex-wrap">
          <Button variant="outline" className="gap-2">
            <Filter className="w-4 h-4" />
            Filter by Genre
          </Button>
          <Button variant="outline" className="gap-2">
            <Filter className="w-4 h-4" />
            Filter by Year
          </Button>
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Export List
          </Button>
        </div>

        {readBooks.length > 0 ? (
          <>
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { label: 'Total Read', value: readBooks.length },
                { label: 'Avg Rating', value: '4.5★' },
                { label: 'Total Pages', value: '5,240' },
                { label: 'This Year', value: '12' },
              ].map((stat, i) => (
                <div key={i} className="bg-card rounded-lg border border-border p-6 text-center">
                  <p className="text-muted-foreground text-sm mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Books Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {readBooks.map((book) => (
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
                  <div className="absolute top-2 left-2 bg-green-500 text-white rounded-full p-1">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <CheckCircle2 className="w-16 h-16 mx-auto text-muted-foreground mb-4 opacity-50" />
            <h2 className="text-2xl font-bold mb-2">No books marked as read yet</h2>
            <p className="text-muted-foreground mb-6">Start marking books as read to track your reading journey!</p>
            <Link href="/categories">
              <Button>Discover Books</Button>
            </Link>
          </div>
        )}
      </div>
    </MainLayout>
  )
}
