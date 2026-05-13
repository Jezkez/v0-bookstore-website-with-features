'use client'

import Link from 'next/link'
import { MainLayout } from '@/components/layout/MainLayout'
import { BookCard } from '@/components/books/BookCard'
import { Button } from '@/components/ui/button'
import { ArrowRight, BookOpen, Sparkles, TrendingUp } from 'lucide-react'
import books from '@/data/books.json'
import categories from '@/data/categories.json'
import authors from '@/data/authors.json'

const featuredBooks = books.filter(b => b.featured).slice(0, 8)
const newReleases = books.slice(0, 6)
const bestSellers = books.slice(2, 8)

const featuredCategories = categories.filter(c => c.featured).slice(0, 6)

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Discover Your Next <span className="text-primary">Great Read</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                From timeless classics to trending manga, explore thousands of books at Re:Book. New, pre-loved, and rare editions—all in one place.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="/categories/fiction">
                  <Button size="lg" className="gap-2">
                    <BookOpen className="w-4 h-4" />
                    Browse Books
                  </Button>
                </Link>
                <Link href="/account/reading-challenges">
                  <Button size="lg" variant="outline">
                    Reading Challenges
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:grid grid-cols-2 gap-4">
              {[
                { icon: Sparkles, label: '10K+ Books', desc: 'New & Pre-loved' },
                { icon: TrendingUp, label: 'Best Sellers', desc: 'Trending Now' },
                { icon: BookOpen, label: 'Community', desc: 'Book Lovers' },
                { icon: ArrowRight, label: 'Express', desc: 'Fast Shipping' },
              ].map((item, i) => (
                <div key={i} className="bg-card p-6 rounded-lg border border-border text-center">
                  <item.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-bold text-sm">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Browse by Category</h2>
          <p className="text-muted-foreground">Find your next adventure in any genre</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {featuredCategories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.slug}`}
              className="group bg-card rounded-lg border border-border p-6 text-center hover:border-primary hover:shadow-lg transition text-foreground"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition">{category.icon}</div>
              <h3 className="font-bold text-sm mb-1 text-foreground">{category.name}</h3>
              <p className="text-xs text-muted-foreground">{category.subcategories.length} subcats</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Releases</h2>
            <p className="text-muted-foreground">Handpicked by our readers</p>
          </div>
          <Link href="/categories">
            <Button variant="outline" className="gap-2">
              View All <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {featuredBooks.map((book) => (
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
              condition={book.condition as 'new' | 'pre-loved'}
              format={book.format}
              variant="grid"
            />
          ))}
        </div>
      </section>

      {/* New Releases */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">New Releases</h2>
            <p className="text-muted-foreground">Just added to our collection</p>
          </div>
          <Link href="/categories">
            <Button variant="outline" className="gap-2">
              View All <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {newReleases.map((book) => (
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
              condition={book.condition as 'new' | 'pre-loved'}
              format={book.format}
              variant="list"
            />
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Best Sellers</h2>
              <p className="text-muted-foreground">Most loved by our community</p>
            </div>
            <Link href="/categories">
              <Button variant="outline" className="gap-2">
                View All <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bestSellers.map((book) => (
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
                condition={book.condition as 'new' | 'pre-loved'}
                format={book.format}
                variant="tile"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-r from-primary to-accent rounded-lg p-12 text-primary-foreground text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Re:Book Community</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Get personalized recommendations, track your reading goals, earn rewards, and connect with fellow book lovers.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/signup">
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-gray-100">
                Create Account
              </Button>
            </Link>
            <Link href="/account/reading-challenges">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                Start a Challenge
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* More to Explore */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">More to Explore</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Reading Challenges',
              description: 'Set goals and track your reading progress throughout the year.',
              icon: TrendingUp,
              href: '/account/reading-challenges',
            },
            {
              title: 'Rewards Program',
              description: 'Earn points on every purchase and redeem them for exclusive perks.',
              icon: Sparkles,
              href: '/account/rewards',
            },
            {
              title: 'Sell Your Books',
              description: 'Give your books a second life and earn money with Re:Book.',
              icon: BookOpen,
              href: '/sell',
            },
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <Link key={i} href={item.href}>
                <div className="bg-card rounded-lg border border-border p-6 hover:border-primary hover:shadow-lg transition cursor-pointer">
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    </MainLayout>
  )
}
