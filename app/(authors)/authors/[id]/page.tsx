'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MainLayout } from '@/components/layout/MainLayout'
import { BookCard } from '@/components/books/BookCard'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Heart, Share2, Globe, Twitter, Instagram } from 'lucide-react'
import authors from '@/data/authors.json'
import books from '@/data/books.json'
import series from '@/data/series.json'

export default function AuthorPage({ params }: { params: { id: string } }) {
  const author = authors.find(a => a.id === params.id)
  const authorBooks = books.filter(b => b.authorId === params.id)
  const authorSeries = series.filter(s => s.authorId === params.id)
  const [isFollowing, setIsFollowing] = useState(false)

  if (!author) {
    return (
      <MainLayout>
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold">Author not found</h1>
        </div>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Author Hero */}
        <div className="mb-12 pb-8 border-b">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Author Image */}
            <div className="md:col-span-1 text-center">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mx-auto mb-6 flex items-center justify-center">
                <div className="text-6xl">📸</div>
              </div>
              <h1 className="text-3xl font-bold mb-2">{author.name}</h1>
              <p className="text-lg text-muted-foreground mb-4">{author.followers.toLocaleString()} followers</p>
              
              <div className="space-y-3">
                <Button
                  size="lg"
                  className="w-full"
                  onClick={() => setIsFollowing(!isFollowing)}
                  variant={isFollowing ? "outline" : "default"}
                >
                  {isFollowing ? 'Following' : 'Follow Author'}
                </Button>
                <Button size="lg" variant="outline" className="w-full">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 justify-center mt-6">
                {author.website && (
                  <Link href={author.website} target="_blank">
                    <Button variant="ghost" size="icon">
                      <Globe className="w-5 h-5" />
                    </Button>
                  </Link>
                )}
                {author.twitter && (
                  <Link href={author.twitter} target="_blank">
                    <Button variant="ghost" size="icon">
                      <Twitter className="w-5 h-5" />
                    </Button>
                  </Link>
                )}
                {author.instagram && (
                  <Link href={author.instagram} target="_blank">
                    <Button variant="ghost" size="icon">
                      <Instagram className="w-5 h-5" />
                    </Button>
                  </Link>
                )}
              </div>
            </div>

            {/* Author Bio */}
            <div className="md:col-span-2">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">About</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">{author.bio}</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 p-6 bg-secondary/5 rounded-lg">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground uppercase font-semibold">Books</p>
                  <p className="text-2xl font-bold">{authorBooks.length}</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground uppercase font-semibold">Followers</p>
                  <p className="text-2xl font-bold">{(author.followers / 1000).toFixed(0)}K</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground uppercase font-semibold">Series</p>
                  <p className="text-2xl font-bold">{authorSeries.length}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Series Section */}
        {authorSeries.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Book Series</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {authorSeries.map(s => {
                const seriesBooks = books.filter(b => b.seriesId === s.id)
                return (
                  <div key={s.id} className="bg-card rounded-lg border border-border p-6 hover:border-primary transition">
                    <h3 className="text-lg font-bold mb-2">{s.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{s.description}</p>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{seriesBooks.length} books</Badge>
                      <Link href={`/search?series=${s.id}`}>
                        <Button variant="outline" size="sm">View Series</Button>
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        )}

        {/* Books Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Books by {author.name}</h2>
          {authorBooks.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {authorBooks.map(book => (
                <BookCard
                  key={book.id}
                  id={book.id}
                  title={book.title}
                  author={book.author}
                  price={book.price}
                  originalPrice={book.originalPrice}
                  image={book.coverImage}
                  rating={book.rating}
                  reviews={book.reviews}
                  variant="grid"
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No books available</p>
            </div>
          )}
        </section>

        {/* Similar Authors */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Similar Authors</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {authors.filter(a => a.id !== author.id).slice(0, 3).map(similarAuthor => (
              <Link
                key={similarAuthor.id}
                href={`/authors/${similarAuthor.id}`}
                className="bg-card rounded-lg border border-border p-6 hover:border-primary hover:shadow-lg transition"
              >
                <div className="w-24 h-24 rounded-full bg-primary/20 mx-auto mb-4" />
                <h3 className="font-bold text-center mb-1">{similarAuthor.name}</h3>
                <p className="text-xs text-muted-foreground text-center">{similarAuthor.followers.toLocaleString()} followers</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  )
}
