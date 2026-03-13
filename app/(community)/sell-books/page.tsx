'use client'

import MainLayout from '@/components/layout/MainLayout'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

export default function SellBooksPage() {
  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-primary mb-4">Sell Your Books</h1>
          <p className="text-xl text-muted-foreground">Turn your pre-loved books into store credit or cash</p>
        </div>

        {/* How It Works */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 text-center">
            <div className="text-5xl mb-4">1️⃣</div>
            <h3 className="font-bold text-foreground mb-2">List Your Books</h3>
            <p className="text-sm text-muted-foreground">Use our app to scan ISBNs or search titles</p>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-5xl mb-4">2️⃣</div>
            <h3 className="font-bold text-foreground mb-2">Get an Instant Quote</h3>
            <p className="text-sm text-muted-foreground">We offer fair prices for books in good condition</p>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-5xl mb-4">3️⃣</div>
            <h3 className="font-bold text-foreground mb-2">Ship for Free</h3>
            <p className="text-sm text-muted-foreground">We provide a prepaid shipping label</p>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-5xl mb-4">4️⃣</div>
            <h3 className="font-bold text-foreground mb-2">Get Paid</h3>
            <p className="text-sm text-muted-foreground">Receive store credit or cash in your account</p>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Why Sell */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Why Sell with Re:Book?</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary">✓</span>
                <span>Fair prices for your books</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">✓</span>
                <span>Free shipping both ways</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">✓</span>
                <span>Quick turnaround (5-7 days)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">✓</span>
                <span>Store credit or cash payout</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">✓</span>
                <span>Environmentally friendly</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">✓</span>
                <span>No hassle, no minimum</span>
              </li>
            </ul>
          </Card>

          {/* Pricing Guide */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Typical Offers</h2>
            <div className="space-y-4 text-muted-foreground">
              <div className="border-b pb-4">
                <p className="font-semibold text-foreground mb-1">Newer Bestsellers</p>
                <p className="text-sm">Up to 50% of original retail price</p>
              </div>
              <div className="border-b pb-4">
                <p className="font-semibold text-foreground mb-1">Recent Releases</p>
                <p className="text-sm">20-40% of original retail price</p>
              </div>
              <div className="border-b pb-4">
                <p className="font-semibold text-foreground mb-1">Classics & Older Books</p>
                <p className="text-sm">5-15% of original retail price</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Collectibles & Rare Books</p>
                <p className="text-sm">Custom quotes based on condition</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Book Condition Guide */}
        <Card className="p-8 mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Book Condition Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="border rounded p-4">
              <p className="font-bold text-foreground mb-2">Like New</p>
              <p className="text-sm text-muted-foreground">Unread, no markings or damage</p>
            </div>
            <div className="border rounded p-4">
              <p className="font-bold text-foreground mb-2">Good</p>
              <p className="text-sm text-muted-foreground">Light wear, minimal notes, intact binding</p>
            </div>
            <div className="border rounded p-4">
              <p className="font-bold text-foreground mb-2">Fair</p>
              <p className="text-sm text-muted-foreground">Noticeable wear, some notes, readable</p>
            </div>
            <div className="border rounded p-4">
              <p className="font-bold text-foreground mb-2">Poor</p>
              <p className="text-sm text-muted-foreground">Heavy wear, extensive notes, acceptable</p>
            </div>
          </div>
        </Card>

        {/* CTA */}
        <Card className="p-12 bg-primary/10 text-center mb-8">
          <h3 className="text-3xl font-bold text-foreground mb-4">Ready to Sell?</h3>
          <p className="text-muted-foreground mb-6">Start listing your books and earn money today</p>
          <Button size="lg" className="gap-2">
            Get Started
            <span>→</span>
          </Button>
        </Card>

        {/* FAQ */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
          
          <Card className="p-6">
            <h3 className="font-bold text-foreground mb-2">Do you buy all books?</h3>
            <p className="text-muted-foreground">We buy most books in readable condition. Some textbooks and very old books may not qualify. We'll let you know after you submit your list.</p>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold text-foreground mb-2">How long does it take to get paid?</h3>
            <p className="text-muted-foreground">Once we receive and inspect your books, payment is processed within 5-7 business days. You'll get an email confirmation.</p>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold text-foreground mb-2">Can I get cash instead of store credit?</h3>
            <p className="text-muted-foreground">Yes! You can choose to receive payment via PayPal, direct deposit, or store credit. Store credit gets you a 10% bonus.</p>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold text-foreground mb-2">What if I'm not happy with the offer?</h3>
            <p className="text-muted-foreground">If you don't like the quote, you can decline and we'll return your books free of charge. No obligation!</p>
          </Card>
        </div>
      </div>
    </MainLayout>
  )
}
