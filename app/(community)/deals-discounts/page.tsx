'use client'

import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Zap, Tag, TrendingDown, Clock, Gift } from 'lucide-react'

interface Deal {
  id: string
  type: 'flash' | 'seasonal' | 'bulk' | 'clearance'
  title: string
  description: string
  discount: number
  code?: string
  validUntil: string
  categories?: string[]
}

const deals: Deal[] = [
  {
    id: '1',
    type: 'flash',
    title: 'Flash Sale: Sci-Fi Books',
    description: 'All science fiction titles on sale for limited time',
    discount: 35,
    code: 'SCIFI35',
    validUntil: 'Dec 25, 2024',
    categories: ['Science Fiction', 'Futurism']
  },
  {
    id: '2',
    type: 'seasonal',
    title: 'Holiday Bundle Special',
    description: 'Buy 3, get 1 free on selected Christmas books',
    discount: 25,
    validUntil: 'Dec 31, 2024',
    categories: ['Classics', 'Holiday']
  },
  {
    id: '3',
    type: 'bulk',
    title: 'Book Club Discounts',
    description: 'Order 10+ copies and save 20% on orders',
    discount: 20,
    validUntil: 'Ongoing',
  },
  {
    id: '4',
    type: 'clearance',
    title: 'Pre-Loved Book Clearance',
    description: 'Gently used books marked down up to 50%',
    discount: 50,
    validUntil: 'Ongoing',
    categories: ['Pre-Loved', 'Various']
  },
  {
    id: '5',
    type: 'flash',
    title: 'Manga Monday Sale',
    description: 'Every Monday: 30% off manga and manhwa',
    discount: 30,
    code: 'MANGA30',
    validUntil: 'Every Monday',
    categories: ['Manga', 'Manhwa']
  },
  {
    id: '6',
    type: 'seasonal',
    title: 'New Year, New Reads',
    description: 'Start 2025 with 20% off on self-help & goal books',
    discount: 20,
    code: 'NEWYEAR20',
    validUntil: 'Jan 15, 2025',
    categories: ['Self-Help', 'Non-Fiction']
  }
]

function getTypeIcon(type: string) {
  switch (type) {
    case 'flash':
      return <Zap className="w-5 h-5" />
    case 'seasonal':
      return <Gift className="w-5 h-5" />
    case 'bulk':
      return <Tag className="w-5 h-5" />
    case 'clearance':
      return <TrendingDown className="w-5 h-5" />
    default:
      return <Tag className="w-5 h-5" />
  }
}

function getTypeBadgeColor(type: string) {
  switch (type) {
    case 'flash':
      return 'bg-red-100 text-red-800'
    case 'seasonal':
      return 'bg-green-100 text-green-800'
    case 'bulk':
      return 'bg-blue-100 text-blue-800'
    case 'clearance':
      return 'bg-yellow-100 text-yellow-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

export default function DealsDiscountsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Deals & Discounts</h1>
          <p className="text-muted-foreground">Save big on your favorite books with our latest offers</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {['all', 'flash', 'seasonal', 'bulk', 'clearance'].map(type => (
            <Button
              key={type}
              variant={type === 'all' ? 'default' : 'outline'}
              size="sm"
              className="capitalize whitespace-nowrap"
            >
              {type === 'all' ? 'All Deals' : type}
            </Button>
          ))}
        </div>

        {/* Deals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {deals.map(deal => (
            <Card key={deal.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <Badge className={`${getTypeBadgeColor(deal.type)} capitalize`}>
                    {deal.type}
                  </Badge>
                  <span className="text-3xl font-bold text-primary">{deal.discount}%</span>
                </div>
                <CardTitle className="line-clamp-2">{deal.title}</CardTitle>
                <CardDescription>{deal.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {deal.categories && (
                  <div className="flex flex-wrap gap-1">
                    {deal.categories.map(cat => (
                      <Badge key={cat} variant="outline" className="text-xs">
                        {cat}
                      </Badge>
                    ))}
                  </div>
                )}

                <div className="border-t pt-4">
                  {deal.code && (
                    <div className="bg-secondary p-3 rounded-lg mb-3">
                      <p className="text-xs text-muted-foreground">Code</p>
                      <code className="font-mono font-bold text-lg">{deal.code}</code>
                    </div>
                  )}

                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Clock className="w-4 h-4" />
                    Valid until: {deal.validUntil}
                  </div>

                  <Link href={`/categories${deal.categories?.[0] ? `/${deal.categories[0].toLowerCase().replace(' ', '-')}` : ''}`}>
                    <Button className="w-full">Shop Now</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <Card className="bg-primary text-primary-foreground">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Get Exclusive Deals</CardTitle>
            <CardDescription className="text-primary-foreground/80">
              Subscribe to our newsletter for early access to sales and special offers
            </CardDescription>
          </CardHeader>
          <CardContent className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2 rounded-lg text-foreground"
              />
              <Button variant="secondary">Subscribe</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
