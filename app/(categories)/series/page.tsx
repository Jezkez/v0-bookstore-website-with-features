'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search, BookOpen } from 'lucide-react'
import seriesData from '@/data/series.json'

interface Series {
  id: string
  name: string
  author: string
  description: string
  bookCount: number
  totalBooks: number
  image: string
  latestBook: string
  latestBookYear: number
}

export default function SeriesPage() {
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState<'name' | 'books' | 'author'>('name')

  const filtered = (seriesData as Series[]).filter(series =>
    series.name.toLowerCase().includes(search.toLowerCase()) ||
    series.author.toLowerCase().includes(search.toLowerCase())
  )

  const sorted = [...filtered].sort((a, b) => {
    switch (sortBy) {
      case 'books':
        return b.totalBooks - a.totalBooks
      case 'author':
        return a.author.localeCompare(b.author)
      case 'name':
      default:
        return a.name.localeCompare(b.name)
    }
  })

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Book Series</h1>
          <p className="text-muted-foreground">Browse complete book series and collections</p>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search series or author..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="px-4 py-2 border rounded-lg bg-background"
          >
            <option value="name">Sort by Name</option>
            <option value="books">Sort by Books</option>
            <option value="author">Sort by Author</option>
          </select>
        </div>

        {/* Series Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sorted.map(series => (
            <Card key={series.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-24 h-36 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="line-clamp-2">{series.name}</CardTitle>
                    <CardDescription>by {series.author}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {series.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-secondary p-3 rounded-lg">
                    <p className="text-muted-foreground">Total Books</p>
                    <p className="font-bold text-lg">{series.totalBooks}</p>
                  </div>
                  <div className="bg-secondary p-3 rounded-lg">
                    <p className="text-muted-foreground">Latest</p>
                    <p className="font-bold">{series.latestBookYear}</p>
                  </div>
                </div>

                <Link href={`/series/${series.id}`}>
                  <Button className="w-full">View Series</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {sorted.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No series found matching your search</p>
          </div>
        )}
      </div>
    </div>
  )
}
