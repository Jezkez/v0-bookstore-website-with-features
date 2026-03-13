'use client'

import Link from 'next/link'
import { useState } from 'react'
import { MainLayout } from '@/components/layout/MainLayout'
import { BookCard } from '@/components/books/BookCard'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Star, Heart, ShoppingCart, Share2, BookOpen, Award, Info } from 'lucide-react'
import books from '@/data/books.json'
import authors from '@/data/authors.json'
import series from '@/data/series.json'

const mockReviews = [
  {
    id: '1',
    author: 'Sarah M.',
    rating: 5,
    date: '2024-03-01',
    title: 'Absolutely amazing!',
    content: 'This book completely changed my perspective on life. The characters are deeply relatable and the story is beautifully crafted.',
    verified: true,
    helpful: 234,
  },
  {
    id: '2',
    author: 'John D.',
    rating: 4,
    date: '2024-02-15',
    title: 'Great read',
    content: 'A wonderful book with compelling narrative. Highly recommend for anyone looking for meaningful fiction.',
    verified: true,
    helpful: 145,
  },
  {
    id: '3',
    author: 'Emma L.',
    rating: 5,
    date: '2024-02-01',
    title: 'Life-changing',
    content: 'I read this in one sitting. Couldn\'t put it down. Every page resonated with me.',
    verified: false,
    helpful: 89,
  },
]

export default function BookDetailPage({ params }: { params: { id: string } }) {
  const book = books.find(b => b.id === params.id)
  const bookAuthor = authors.find(a => a.id === book?.authorId)
  const bookSeries = book?.seriesId ? series.find(s => s.id === book.seriesId) : null
  const relatedBooks = books.filter(b =>
    b.id !== book?.id && (
      b.authorId === book?.authorId ||
      b.seriesId === book?.seriesId ||
      b.category === book?.category
    )
  ).slice(0, 4)

  const [isWishlisted, setIsWishlisted] = useState(false)
  const [quantity, setQuantity] = useState(1)

  if (!book || !bookAuthor) {
    return (
      <MainLayout>
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold">Book not found</h1>
        </div>
      </MainLayout>
    )
  }

  const discount = book.originalPrice ? Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100) : 0

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">Home</Link>
          {' / '}
          <Link href={`/categories/${book.category}`} className="hover:text-primary">
            {book.category}
          </Link>
          {' / '}
          <span>{book.title}</span>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Book Cover & Basic Info */}
          <div className="md:col-span-1">
            <div className="w-full aspect-[2/3] bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg border border-border mb-6 flex items-center justify-center text-muted-foreground">
              Book Cover Image
            </div>

            {/* Price & Actions */}
            <div className="space-y-4 sticky top-24">
              <div>
                <div className="flex items-end gap-3 mb-2">
                  <span className="text-3xl font-bold text-primary">${book.price.toFixed(2)}</span>
                  {book.originalPrice && (
                    <>
                      <span className="line-through text-muted-foreground">${book.originalPrice.toFixed(2)}</span>
                      <Badge className="ml-auto">{discount}% off</Badge>
                    </>
                  )}
                </div>
                {book.inStock ? (
                  <p className="text-sm text-green-600 font-semibold">In Stock</p>
                ) : (
                  <p className="text-sm text-destructive font-semibold">Out of Stock</p>
                )}
              </div>

              {/* Quantity & Cart */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 border border-border rounded">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    −
                  </Button>
                  <span className="flex-1 text-center">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </Button>
                </div>

                <Button className="w-full" size="lg" disabled={!book.inStock}>
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>

                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                >
                  <Heart className={`w-4 h-4 mr-2 ${isWishlisted ? 'fill-destructive text-destructive' : ''}`} />
                  {isWishlisted ? 'Remove from' : 'Add to'} Wishlist
                </Button>
              </div>

              {/* Share */}
              <Button variant="outline" className="w-full">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>

              {/* Formats & Editions */}
              <div className="pt-4 border-t">
                <p className="text-sm font-semibold mb-3">Available Formats:</p>
                <div className="space-y-2">
                  {['hardcover', 'paperback', 'ebook', 'audiobook'].map(format => (
                    <Button
                      key={format}
                      variant={book.format === format ? 'default' : 'outline'}
                      className="w-full justify-start text-left capitalize"
                      size="sm"
                    >
                      {format}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Book Details */}
          <div className="md:col-span-2 space-y-8">
            {/* Title & Metadata */}
            <div>
              <h1 className="text-4xl font-bold mb-2">{book.title}</h1>
              <Link href={`/authors/${bookAuthor.id}`} className="text-lg text-primary hover:underline">
                by {bookAuthor.name}
              </Link>

              {bookSeries && (
                <div className="mt-2">
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Part of: {bookSeries.name}
                  </Link>
                </div>
              )}

              {/* Rating */}
              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-primary text-primary" />
                  <span className="text-2xl font-bold">{book.rating}</span>
                </div>
                <div className="text-muted-foreground">
                  <p className="text-sm">{book.reviews.toLocaleString()} reviews</p>
                </div>
              </div>
            </div>

            {/* Key Information */}
            <div className="grid grid-cols-2 gap-4 p-6 bg-secondary/5 rounded-lg">
              <div>
                <p className="text-xs text-muted-foreground uppercase font-semibold">ISBN</p>
                <p className="font-mono">{book.isbn}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase font-semibold">Format</p>
                <p className="capitalize">{book.format}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase font-semibold">Pages</p>
                <p>{book.pages}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase font-semibold">Language</p>
                <p>{book.language}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase font-semibold">Published</p>
                <p>{new Date(book.publishedDate).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase font-semibold">Condition</p>
                <p className="capitalize">{book.condition}</p>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-xl font-bold mb-3">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">{book.description}</p>
            </div>

            {/* Awards */}
            {book.awards.length > 0 && (
              <div>
                <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Awards & Recognition
                </h2>
                <div className="space-y-2">
                  {book.awards.map(award => (
                    <div key={award} className="flex items-center gap-2">
                      <Badge variant="secondary">{award}</Badge>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-12" />

        {/* Author Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">About the Author</h2>
          <div className="bg-card rounded-lg border border-border p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <div className="w-32 h-32 rounded-full bg-primary/20 mb-4" />
                <h3 className="text-xl font-bold mb-2">{bookAuthor.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{bookAuthor.followers.toLocaleString()} followers</p>
                <Button className="w-full">Follow Author</Button>
              </div>
              <div className="md:col-span-2">
                <p className="text-muted-foreground leading-relaxed mb-6">{bookAuthor.bio}</p>
                <div className="flex gap-4 flex-wrap">
                  {bookAuthor.website && (
                    <Link href={bookAuthor.website} target="_blank">
                      <Button variant="outline" size="sm">Website</Button>
                    </Link>
                  )}
                  {bookAuthor.twitter && (
                    <Link href={bookAuthor.twitter} target="_blank">
                      <Button variant="outline" size="sm">Twitter</Button>
                    </Link>
                  )}
                  {bookAuthor.instagram && (
                    <Link href={bookAuthor.instagram} target="_blank">
                      <Button variant="outline" size="sm">Instagram</Button>
                    </Link>
                  )}
                </div>
                <div className="mt-6">
                  <h4 className="font-bold mb-3">More by {bookAuthor.name}</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {books.filter(b => b.authorId === bookAuthor.id && b.id !== book.id).slice(0, 3).map(b => (
                      <BookCard
                        key={b.id}
                        id={b.id}
                        title={b.title}
                        author={b.author}
                        price={b.price}
                        image={b.coverImage}
                        rating={b.rating}
                        reviews={b.reviews}
                        variant="grid"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Reviews</h2>
          
          {/* Review Stats */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-card rounded-lg border border-border p-8">
              <p className="text-sm text-muted-foreground mb-2">Average Rating</p>
              <div className="flex items-end gap-3 mb-4">
                <span className="text-4xl font-bold">{book.rating}</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < Math.round(book.rating) ? 'fill-primary text-primary' : 'text-muted'}`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{book.reviews.toLocaleString()} reviews</p>
            </div>

            <div className="bg-card rounded-lg border border-border p-8">
              <Button className="w-full" size="lg">Write a Review</Button>
              <p className="text-xs text-muted-foreground text-center mt-4">Share your thoughts about this book</p>
            </div>
          </div>

          {/* Individual Reviews */}
          <div className="space-y-4">
            {mockReviews.map(review => (
              <div key={review.id} className="bg-card rounded-lg border border-border p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold">{review.author}</h4>
                      {review.verified && (
                        <Badge variant="secondary" className="text-xs">Verified Purchase</Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < review.rating ? 'fill-primary text-primary' : 'text-muted'}`}
                          />
                        ))}
                      </div>
                      <span>{new Date(review.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">Report</Button>
                </div>

                <h5 className="font-bold mb-2">{review.title}</h5>
                <p className="text-muted-foreground mb-4">{review.content}</p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <Button variant="ghost" size="sm" className="gap-2">
                    <span>👍</span> Helpful ({review.helpful})
                  </Button>
                  <Button variant="ghost" size="sm">
                    Not Helpful
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Related Books */}
        {relatedBooks.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedBooks.map(relatedBook => (
                <BookCard
                  key={relatedBook.id}
                  id={relatedBook.id}
                  title={relatedBook.title}
                  author={relatedBook.author}
                  price={relatedBook.price}
                  originalPrice={relatedBook.originalPrice}
                  image={relatedBook.coverImage}
                  rating={relatedBook.rating}
                  reviews={relatedBook.reviews}
                  variant="grid"
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </MainLayout>
  )
}
