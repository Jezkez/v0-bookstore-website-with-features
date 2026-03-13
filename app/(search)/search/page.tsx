'use client'

import { useState, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { MainLayout } from '@/components/layout/MainLayout'
import { BookCard } from '@/components/books/BookCard'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Grid3x3, List, LayoutGrid, Search, QrCode } from 'lucide-react'
import books from '@/data/books.json'
import categories from '@/data/categories.json'
import authors from '@/data/authors.json'

export default function SearchPage() {
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get('q') || ''
  
  const [searchQuery, setSearchQuery] = useState(initialQuery)
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'tile'>('grid')
  const [searchTab, setSearchTab] = useState('all')
  
  // Advanced filters
  const [advancedOpen, setAdvancedOpen] = useState(false)
  const [advancedFilters, setAdvancedFilters] = useState({
    author: '',
    isbn: '',
    category: '',
    condition: 'all',
    format: 'all',
    language: 'all',
    minPrice: 0,
    maxPrice: 100,
    minRating: 0,
  })

  // Perform search
  const searchResults = useMemo(() => {
    const query = searchQuery.toLowerCase()
    if (!query && !searchTab) return { books: [], authors: [], categories: [] }

    const bookResults = books.filter(book => {
      const matchesQuery = !query ||
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query) ||
        book.isbn.includes(query)
      
      const matchesAuthor = !advancedFilters.author ||
        book.author.toLowerCase().includes(advancedFilters.author.toLowerCase())
      
      const matchesISBN = !advancedFilters.isbn ||
        book.isbn.includes(advancedFilters.isbn)
      
      const matchesCategory = !advancedFilters.category ||
        book.category === advancedFilters.category
      
      const matchesCondition = advancedFilters.condition === 'all' ||
        book.condition === advancedFilters.condition
      
      const matchesFormat = advancedFilters.format === 'all' ||
        book.format === advancedFilters.format
      
      const matchesLanguage = advancedFilters.language === 'all' ||
        book.language === advancedFilters.language
      
      const matchesPrice = book.price >= advancedFilters.minPrice &&
        book.price <= advancedFilters.maxPrice
      
      const matchesRating = book.rating >= advancedFilters.minRating

      return matchesQuery && matchesAuthor && matchesISBN && matchesCategory &&
        matchesCondition && matchesFormat && matchesLanguage && matchesPrice && matchesRating
    })

    const authorResults = authors.filter(author =>
      !query || author.name.toLowerCase().includes(query)
    )

    const categoryResults = categories.filter(cat =>
      !query || cat.name.toLowerCase().includes(query) ||
      cat.description.toLowerCase().includes(query)
    )

    return { books: bookResults, authors: authorResults, categories: categoryResults }
  }, [searchQuery, advancedFilters, searchTab])

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-6">Search Books</h1>
          
          {/* Main Search Bar */}
          <div className="flex gap-2 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search by title, author, or ISBN..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 text-base"
              />
            </div>
            <Button size="lg" className="px-8">Search</Button>
            <Button size="lg" variant="outline">
              <QrCode className="w-5 h-5" />
            </Button>
          </div>

          {/* Advanced Search Toggle */}
          <Button
            variant="outline"
            onClick={() => setAdvancedOpen(!advancedOpen)}
            className="mb-4"
          >
            {advancedOpen ? '− Advanced Search' : '+ Advanced Search'}
          </Button>

          {/* Advanced Search Panel */}
          {advancedOpen && (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-card border border-border rounded-lg mb-6">
              <div>
                <label className="text-sm font-semibold mb-2 block">Author</label>
                <Input
                  placeholder="Author name"
                  value={advancedFilters.author}
                  onChange={(e) => setAdvancedFilters({ ...advancedFilters, author: e.target.value })}
                />
              </div>

              <div>
                <label className="text-sm font-semibold mb-2 block">ISBN</label>
                <Input
                  placeholder="ISBN number"
                  value={advancedFilters.isbn}
                  onChange={(e) => setAdvancedFilters({ ...advancedFilters, isbn: e.target.value })}
                />
              </div>

              <div>
                <label className="text-sm font-semibold mb-2 block">Category</label>
                <select
                  value={advancedFilters.category}
                  onChange={(e) => setAdvancedFilters({ ...advancedFilters, category: e.target.value })}
                  className="w-full px-3 py-2 rounded border border-border bg-background text-sm"
                >
                  <option value="">All Categories</option>
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-semibold mb-2 block">Condition</label>
                <select
                  value={advancedFilters.condition}
                  onChange={(e) => setAdvancedFilters({ ...advancedFilters, condition: e.target.value })}
                  className="w-full px-3 py-2 rounded border border-border bg-background text-sm"
                >
                  <option value="all">All Conditions</option>
                  <option value="new">New</option>
                  <option value="pre-loved">Pre-Loved</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-semibold mb-2 block">Format</label>
                <select
                  value={advancedFilters.format}
                  onChange={(e) => setAdvancedFilters({ ...advancedFilters, format: e.target.value })}
                  className="w-full px-3 py-2 rounded border border-border bg-background text-sm"
                >
                  <option value="all">All Formats</option>
                  <option value="hardcover">Hardcover</option>
                  <option value="paperback">Paperback</option>
                  <option value="ebook">eBook</option>
                  <option value="audiobook">Audiobook</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-semibold mb-2 block">Language</label>
                <select
                  value={advancedFilters.language}
                  onChange={(e) => setAdvancedFilters({ ...advancedFilters, language: e.target.value })}
                  className="w-full px-3 py-2 rounded border border-border bg-background text-sm"
                >
                  <option value="all">All Languages</option>
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                  <option value="German">German</option>
                  <option value="Japanese">Japanese</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-semibold mb-2 block">Min Price: ${advancedFilters.minPrice}</label>
                <Input
                  type="range"
                  min="0"
                  max="100"
                  value={advancedFilters.minPrice}
                  onChange={(e) => setAdvancedFilters({ ...advancedFilters, minPrice: parseInt(e.target.value) })}
                />
              </div>

              <div>
                <label className="text-sm font-semibold mb-2 block">Max Price: ${advancedFilters.maxPrice}</label>
                <Input
                  type="range"
                  min="0"
                  max="100"
                  value={advancedFilters.maxPrice}
                  onChange={(e) => setAdvancedFilters({ ...advancedFilters, maxPrice: parseInt(e.target.value) })}
                />
              </div>

              <div>
                <label className="text-sm font-semibold mb-2 block">Min Rating</label>
                <select
                  value={advancedFilters.minRating}
                  onChange={(e) => setAdvancedFilters({ ...advancedFilters, minRating: parseFloat(e.target.value) })}
                  className="w-full px-3 py-2 rounded border border-border bg-background text-sm"
                >
                  <option value="0">Any rating</option>
                  <option value="3">3★+</option>
                  <option value="3.5">3.5★+</option>
                  <option value="4">4★+</option>
                  <option value="4.5">4.5★+</option>
                </select>
              </div>

              <Button
                variant="outline"
                onClick={() => setAdvancedFilters({
                  author: '',
                  isbn: '',
                  category: '',
                  condition: 'all',
                  format: 'all',
                  language: 'all',
                  minPrice: 0,
                  maxPrice: 100,
                  minRating: 0,
                })}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>

        {/* Results */}
        {searchQuery || Object.values(advancedFilters).some(v => v !== 'all' && v !== 0 && v !== '') ? (
          <>
            <Tabs value={searchTab} onValueChange={setSearchTab} className="w-full">
              <TabsList className="mb-6 w-full justify-start">
                <TabsTrigger value="all">All Results ({searchResults.books.length + searchResults.authors.length + searchResults.categories.length})</TabsTrigger>
                <TabsTrigger value="books">Books ({searchResults.books.length})</TabsTrigger>
                <TabsTrigger value="authors">Authors ({searchResults.authors.length})</TabsTrigger>
                <TabsTrigger value="categories">Categories ({searchResults.categories.length})</TabsTrigger>
              </TabsList>

              {/* All Results Tab */}
              <TabsContent value="all" className="space-y-6">
                {searchResults.books.length > 0 && (
                  <div>
                    <h2 className="text-xl font-bold mb-4">Books</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {searchResults.books.slice(0, 8).map(book => (
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
                  </div>
                )}

                {searchResults.authors.length > 0 && (
                  <div>
                    <h2 className="text-xl font-bold mb-4">Authors</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                      {searchResults.authors.map(author => (
                        <Link
                          key={author.id}
                          href={`/authors/${author.id}`}
                          className="p-4 bg-card rounded-lg border border-border hover:border-primary transition"
                        >
                          <div className="w-12 h-12 rounded-full bg-primary/20 mb-3" />
                          <h3 className="font-bold">{author.name}</h3>
                          <p className="text-sm text-muted-foreground">{author.followers.toLocaleString()} followers</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </TabsContent>

              {/* Books Tab */}
              <TabsContent value="books">
                <div className="flex justify-between items-center mb-6">
                  <p className="text-muted-foreground">Found {searchResults.books.length} books</p>
                  <div className="flex gap-1 border border-border rounded p-1">
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('grid')}
                    >
                      <Grid3x3 className="w-4 h-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('list')}
                    >
                      <List className="w-4 h-4" />
                    </Button>
                    <Button
                      variant={viewMode === 'tile' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('tile')}
                    >
                      <LayoutGrid className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                {searchResults.books.length > 0 ? (
                  <div className={
                    viewMode === 'grid'
                      ? 'grid grid-cols-2 md:grid-cols-4 gap-4'
                      : viewMode === 'list'
                      ? 'space-y-4'
                      : 'grid grid-cols-1 md:grid-cols-2 gap-6'
                  }>
                    {searchResults.books.map(book => (
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
                        variant={viewMode}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-lg">No books found matching your search.</p>
                  </div>
                )}
              </TabsContent>

              {/* Authors Tab */}
              <TabsContent value="authors">
                {searchResults.authors.length > 0 ? (
                  <div className="grid md:grid-cols-3 gap-4">
                    {searchResults.authors.map(author => (
                      <Link
                        key={author.id}
                        href={`/authors/${author.id}`}
                        className="p-6 bg-card rounded-lg border border-border hover:border-primary transition"
                      >
                        <div className="w-16 h-16 rounded-full bg-primary/20 mb-4" />
                        <h3 className="font-bold text-lg">{author.name}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{author.followers.toLocaleString()} followers</p>
                        <Button size="sm" variant="outline" className="w-full">View Profile</Button>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-lg">No authors found.</p>
                  </div>
                )}
              </TabsContent>

              {/* Categories Tab */}
              <TabsContent value="categories">
                {searchResults.categories.length > 0 ? (
                  <div className="grid md:grid-cols-3 gap-4">
                    {searchResults.categories.map(cat => (
                      <Link
                        key={cat.id}
                        href={`/categories/${cat.slug}`}
                        className="p-6 bg-card rounded-lg border border-border hover:border-primary transition group"
                      >
                        <div className="text-4xl mb-3 group-hover:scale-110 transition">{cat.icon}</div>
                        <h3 className="font-bold text-lg">{cat.name}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">{cat.description}</p>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-lg">No categories found.</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </>
        ) : (
          <div className="text-center py-16">
            <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <p className="text-xl font-semibold mb-2">Start Searching</p>
            <p className="text-muted-foreground">Enter a search query or use advanced filters to find books</p>
          </div>
        )}
      </div>
    </MainLayout>
  )
}
