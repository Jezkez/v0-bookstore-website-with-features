'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useTheme } from '@/context/ThemeContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Moon, Sun, ShoppingCart, User, Menu, X, Search } from 'lucide-react'

export function Header() {
  const { theme, toggleTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border">
      <div className="w-full bg-primary text-primary-foreground text-center text-sm py-2">
        Free shipping on orders over $50 • Welcome to Re:Book
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4 mb-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
              Re
            </div>
            <span className="font-bold text-lg text-foreground hidden sm:inline">Re:Book</span>
          </Link>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-auto gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search books, authors, ISBN..."
                className="pl-10 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Link href={searchQuery ? `/search?q=${searchQuery}` : '/search'}>
              <Button variant="default" className="px-6">Search</Button>
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </Button>
            <Button variant="ghost" size="icon" asChild className="hidden sm:inline-flex">
              <Link href="/wishlist">
                <span className="sr-only">Wishlist</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hidden sm:inline-flex">
              <Link href="/cart">
                <ShoppingCart className="w-4 h-4" />
                <span className="sr-only">Shopping Cart</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hidden sm:inline-flex">
              <Link href="/account">
                <User className="w-4 h-4" />
                <span className="sr-only">My Account</span>
              </Link>
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mb-4">
          <div className="relative flex gap-2">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="text"
              placeholder="Search books..."
              className="pl-10 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Link href={searchQuery ? `/search?q=${searchQuery}` : '/search'}>
              <Button size="sm">Search</Button>
            </Link>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link href="/categories/fiction" className="text-sm font-medium hover:text-primary transition">
            Fiction
          </Link>
          <Link href="/categories/science-fiction" className="text-sm font-medium hover:text-primary transition">
            Sci-Fi
          </Link>
          <Link href="/categories/manga" className="text-sm font-medium hover:text-primary transition">
            Manga
          </Link>
          <Link href="/categories/manhwa" className="text-sm font-medium hover:text-primary transition">
            Manhwa
          </Link>
          <Link href="/categories/classics" className="text-sm font-medium hover:text-primary transition">
            Classics
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:text-primary transition">
            Blog
          </Link>
          <Link href="/help" className="text-sm font-medium hover:text-primary transition">
            Help
          </Link>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden flex flex-col gap-3 pt-4 border-t border-border">
            <Link href="/categories/fiction" className="text-sm font-medium hover:text-primary transition py-2">
              Fiction
            </Link>
            <Link href="/categories/manga" className="text-sm font-medium hover:text-primary transition py-2">
              Manga
            </Link>
            <Link href="/categories/manhwa" className="text-sm font-medium hover:text-primary transition py-2">
              Manhwa
            </Link>
            <Link href="/account/wishlist" className="text-sm font-medium hover:text-primary transition py-2">
              Wishlist
            </Link>
            <Link href="/cart" className="text-sm font-medium hover:text-primary transition py-2">
              Cart
            </Link>
            <Link href="/account" className="text-sm font-medium hover:text-primary transition py-2">
              My Account
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-primary transition py-2">
              Blog
            </Link>
            <Link href="/help" className="text-sm font-medium hover:text-primary transition py-2">
              Help
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
