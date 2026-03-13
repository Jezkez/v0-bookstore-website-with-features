'use client'

import Link from 'next/link'
import { MainLayout } from '@/components/layout/MainLayout'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import categories from '@/data/categories.json'

export default function CategoriesPage() {
  const featuredCategories = categories.filter(c => c.featured)
  const otherCategories = categories.filter(c => !c.featured)

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Browse All Categories</h1>
          <p className="text-lg text-muted-foreground">
            Explore our extensive collection of books across all genres and formats.
          </p>
        </div>

        {/* Featured Categories */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Featured Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCategories.map((category) => (
              <Link
                key={category.id}
                href={`/categories/${category.slug}`}
                className={`group relative overflow-hidden rounded-lg p-8 text-white transition hover:shadow-xl bg-gradient-to-br ${category.backgroundColor}`}
              >
                <div className="relative z-10">
                  <div className="text-5xl mb-4">{category.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                  <p className="text-sm opacity-90 mb-4 line-clamp-2">{category.description}</p>
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    Explore <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* All Categories Grid */}
        <div>
          <h2 className="text-2xl font-bold mb-6">All Categories</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...featuredCategories, ...otherCategories].map((category) => (
              <Link
                key={category.id}
                href={`/categories/${category.slug}`}
                className="bg-card rounded-lg border border-border p-6 hover:border-primary hover:shadow-lg transition group cursor-pointer"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition text-center">{category.icon}</div>
                <h3 className="font-bold text-center mb-2 group-hover:text-primary transition">{category.name}</h3>
                <p className="text-xs text-muted-foreground text-center">
                  {category.subcategories.length} subcategories
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
