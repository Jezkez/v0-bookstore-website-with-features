'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { MainLayout } from '@/components/layout/MainLayout'
import { BookCard } from '@/components/books/BookCard'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowUp, Grid3x3, List, LayoutGrid } from 'lucide-react'
import books from '@/data/books.json'
import categories from '@/data/categories.json'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories.find(c => c.slug === params.slug)
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'tile'>('grid')
  const [sortBy, setSortBy] = useState<'relevant' | 'newest' | 'price-low' | 'price-high' | 'rating'>('relevant')
  const [filterOpen, setFilterOpen] = useState(true)
  
  // Filters
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 })
  const [selectedConditions, setSelectedConditions] = useState<string[]>(['new'])
  const [selectedFormats, setSelectedFormats] = useState<string[]>([])
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>(['English'])
  const [minRating, setMinRating] = useState(0)

  if (!category) {
    return (
      <MainLayout>
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold">Category not found</h1>
          <Link href="/categories">
            <Button className="mt-4">Back to Categories</Button>
          </Link>
        </div>
      </MainLayout>
    )
  }

  // Filter and sort books
  const filteredBooks = useMemo(() => {
    let filtered = books.filter(book => {
      const categoryMatch = String(book.category) === String(category.id)
      
      const priceMatch = book.price >= priceRange.min && book.price <= priceRange.max
      const conditionMatch = selectedConditions.length === 0 || selectedConditions.includes(book.condition)
      const formatMatch = selectedFormats.length === 0 || selectedFormats.includes(book.format)
      const languageMatch = selectedLanguages.length === 0 || selectedLanguages.includes(book.language || 'English')
      const ratingMatch = book.rating >= minRating

      return categoryMatch && priceMatch && conditionMatch && formatMatch && languageMatch && ratingMatch
    })

    // Sort
    switch (sortBy) {
      case 'newest':
        return filtered.sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
      case 'price-low':
        return filtered.sort((a, b) => a.price - b.price)
      case 'price-high':
        return filtered.sort((a, b) => b.price - a.price)
      case 'rating':
        return filtered.sort((a, b) => b.rating - a.rating)
      default:
        return filtered
    }
  }, [category, priceRange, selectedConditions, selectedFormats, selectedLanguages, minRating, sortBy])

  const toggleCondition = (condition: string) => {
    setSelectedConditions(prev =>
      prev.includes(condition) ? prev.filter(c => c !== condition) : [...prev, condition]
    )
  }

  const toggleFormat = (format: string) => {
    setSelectedFormats(prev =>
      prev.includes(format) ? prev.filter(f => f !== format) : [...prev, format]
    )
  }

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Category Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-3xl">{category.icon}</span>
            <h1 className="text-4xl font-bold">{category.name}</h1>
          </div>
          <p className="text-lg text-muted-foreground mb-4">{category.description}</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="flex items-center justify-between md:hidden">
                <h3 className="font-bold">Filters</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setFilterOpen(!filterOpen)}
                >
                  {filterOpen ? '−' : '+'}
                </Button>
              </div>

              {filterOpen && (
                <>
                  {/* Price Range */}
                  <div className="hidden md:block">
                    <h4 className="font-bold mb-4">Price Range</h4>
                    <div className="space-y-3">
                      <div>
                        <Label className="text-xs">Min: ${priceRange.min}</Label>
                        <Input
                          type="range"
                          min="0"
                          max="100"
                          value={priceRange.min}
                          onChange={(e) => setPriceRange({ ...priceRange, min: parseInt(e.target.value) })}
                          className="w-full"
                        />
                      </div>
                      <div>
                        <Label className="text-xs">Max: ${priceRange.max}</Label>
                        <Input
                          type="range"
                          min="0"
                          max="100"
                          value={priceRange.max}
                          onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) })}
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Condition */}
                  <div className="hidden md:block">
                    <h4 className="font-bold mb-4">Condition</h4>
                    <div className="space-y-3">
                      {['new', 'pre-loved'].map(condition => (
                        <div key={condition} className="flex items-center gap-2">
                          <Checkbox
                            id={condition}
                            checked={selectedConditions.includes(condition)}
                            onCheckedChange={() => toggleCondition(condition)}
                          />
                          <Label htmlFor={condition} className="text-sm capitalize cursor-pointer">
                            {condition === 'pre-loved' ? 'Pre-Loved' : 'New'}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Format */}
                  <div className="hidden md:block">
                    <h4 className="font-bold mb-4">Format</h4>
                    <div className="space-y-3">
                      {['hardcover', 'paperback', 'ebook', 'audiobook'].map(format => (
                        <div key={format} className="flex items-center gap-2">
                          <Checkbox
                            id={format}
                            checked={selectedFormats.includes(format)}
                            onCheckedChange={() => toggleFormat(format)}
                          />
                          <Label htmlFor={format} className="text-sm capitalize cursor-pointer">
                            {format}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="hidden md:block">
                    <h4 className="font-bold mb-4">Minimum Rating</h4>
                    <div className="space-y-2">
                      {[0, 3, 3.5, 4, 4.5].map(rating => (
                        <div key={rating} className="flex items-center gap-2">
                          <input
                            type="radio"
                            id={`rating-${rating}`}
                            name="rating"
                            value={rating}
                            checked={minRating === rating}
                            onChange={(e) => setMinRating(parseFloat(e.target.value))}
                            className="rounded"
                          />
                          <Label htmlFor={`rating-${rating}`} className="text-sm cursor-pointer">
                            {rating === 0 ? 'All ratings' : `${rating}★+`}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Clear Filters */}
                  <Button
                    variant="outline"
                    className="w-full hidden md:block"
                    onClick={() => {
                      setPriceRange({ min: 0, max: 100 })
                      setSelectedConditions(['new'])
                      setSelectedFormats([])
                      setSelectedLanguages(['English'])
                      setMinRating(0)
                    }}
                  >
                    Clear Filters
                  </Button>
                </>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Top Bar */}
            <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
              <p className="text-sm text-muted-foreground">
                Showing {filteredBooks.length} results
              </p>

              <div className="flex items-center gap-2">
                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-3 py-2 rounded border border-border text-sm bg-background"
                >
                  <option value="relevant">Most Relevant</option>
                  <option value="newest">Newest First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>

                {/* View Mode */}
                <div className="flex gap-1 border border-border rounded p-1">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    title="Grid view"
                  >
                    <Grid3x3 className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    title="List view"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'tile' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('tile')}
                    title="Tile view"
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Books Grid/List */}
            {filteredBooks.length > 0 ? (
              <div className={
                viewMode === 'grid'
                  ? 'grid grid-cols-2 md:grid-cols-3 gap-4'
                  : viewMode === 'list'
                  ? 'space-y-4'
                  : 'grid grid-cols-1 md:grid-cols-2 gap-6'
              }>
                {filteredBooks.map(book => (
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
                    variant={viewMode}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg font-semibold mb-2">No books found</p>
                <p className="text-muted-foreground mb-6">Try adjusting your filters</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setPriceRange({ min: 0, max: 100 })
                    setSelectedConditions(['new'])
                    setSelectedFormats([])
                    setSelectedLanguages(['English'])
                    setMinRating(0)
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
