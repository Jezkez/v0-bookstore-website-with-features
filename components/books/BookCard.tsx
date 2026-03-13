'use client'

import Link from 'next/link'
import { Heart, ShoppingCart, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useState } from 'react'

interface BookCardProps {
  id: string
  title: string
  author: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  reviews: number
  condition?: 'new' | 'pre-loved'
  format?: string
  category?: string
  variant?: 'grid' | 'list' | 'tile'
}

export function BookCard({
  id,
  title,
  author,
  price,
  originalPrice,
  image,
  rating,
  reviews,
  condition = 'new',
  format = 'hardcover',
  category,
  variant = 'grid',
}: BookCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0

  if (variant === 'list') {
    return (
      <div className="flex gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary transition">
        <div className="flex-shrink-0 w-24 h-32 bg-muted rounded relative overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-xs text-muted-foreground">
            Book Cover
          </div>
        </div>
        
        <div className="flex-1">
          <Link href={`/books/${id}`}>
            <h3 className="font-bold text-lg hover:text-primary transition line-clamp-2">{title}</h3>
          </Link>
          <p className="text-sm text-muted-foreground mb-2">{author}</p>
          
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-primary text-primary" />
              <span className="text-sm font-medium">{rating}</span>
            </div>
            <span className="text-xs text-muted-foreground">({reviews} reviews)</span>
            {condition === 'pre-loved' && (
              <Badge variant="secondary" className="text-xs">Pre-loved</Badge>
            )}
          </div>
          
          <p className="text-xs text-muted-foreground mb-3">{format}</p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-primary">${price.toFixed(2)}</span>
              {originalPrice && (
                <>
                  <span className="text-sm line-through text-muted-foreground">${originalPrice.toFixed(2)}</span>
                  <Badge variant="destructive" className="text-xs">{discount}% off</Badge>
                </>
              )}
            </div>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => setIsWishlisted(!isWishlisted)}
              >
                <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-destructive text-destructive' : ''}`} />
              </Button>
              <Button size="sm">
                <ShoppingCart className="w-4 h-4 mr-1" />
                Add
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (variant === 'tile') {
    return (
      <Link href={`/books/${id}`}>
        <div className="bg-card rounded-lg border border-border overflow-hidden hover:border-primary hover:shadow-lg transition h-full flex flex-col">
          <div className="relative pt-full bg-muted rounded-t overflow-hidden flex items-center justify-center h-48 bg-gradient-to-br from-primary/20 to-accent/20">
            <div className="w-full h-full flex items-center justify-center text-xs text-muted-foreground">
              Book Cover
            </div>
            {discount > 0 && (
              <div className="absolute top-2 right-2 bg-destructive text-destructive-foreground px-2 py-1 rounded text-xs font-bold">
                -{discount}%
              </div>
            )}
            {condition === 'pre-loved' && (
              <div className="absolute top-2 left-2">
                <Badge variant="secondary" className="text-xs">Pre-loved</Badge>
              </div>
            )}
          </div>
          
          <div className="p-4 flex-1 flex flex-col">
            <h3 className="font-bold line-clamp-2 mb-1 hover:text-primary">{title}</h3>
            <p className="text-sm text-muted-foreground mb-3 flex-shrink-0">{author}</p>
            
            <div className="flex items-center gap-2 mb-4 flex-shrink-0">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-primary text-primary" />
                <span className="text-sm font-medium">{rating}</span>
              </div>
              <span className="text-xs text-muted-foreground">({reviews})</span>
            </div>
            
            <div className="mt-auto">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg font-bold text-primary">${price.toFixed(2)}</span>
                {originalPrice && (
                  <span className="text-xs line-through text-muted-foreground">${originalPrice.toFixed(2)}</span>
                )}
              </div>
              
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1"
                  onClick={(e) => {
                    e.preventDefault()
                    setIsWishlisted(!isWishlisted)
                  }}
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-destructive text-destructive' : ''}`} />
                </Button>
                <Button
                  size="sm"
                  className="flex-1"
                  onClick={(e) => e.preventDefault()}
                >
                  <ShoppingCart className="w-4 h-4 mr-1" />
                  Add
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  // Default Grid view
  return (
    <Link href={`/books/${id}`}>
      <div className="bg-card rounded-lg border border-border overflow-hidden hover:border-primary hover:shadow-lg transition">
        <div className="relative aspect-[2/3] bg-muted flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
          <div className="text-xs text-muted-foreground">Book Cover</div>
          {discount > 0 && (
            <div className="absolute top-2 right-2 bg-destructive text-destructive-foreground px-2 py-1 rounded text-xs font-bold">
              -{discount}%
            </div>
          )}
          {condition === 'pre-loved' && (
            <div className="absolute top-2 left-2">
              <Badge variant="secondary" className="text-xs">Pre-loved</Badge>
            </div>
          )}
        </div>
        
        <div className="p-3">
          <h3 className="font-bold text-sm line-clamp-2 mb-1 hover:text-primary">{title}</h3>
          <p className="text-xs text-muted-foreground mb-2">{author}</p>
          
          <div className="flex items-center gap-1 mb-3">
            <Star className="w-3 h-3 fill-primary text-primary" />
            <span className="text-xs font-medium">{rating}</span>
            <span className="text-xs text-muted-foreground">({reviews})</span>
          </div>
          
          <div className="flex items-center gap-2 mb-3">
            <span className="text-base font-bold text-primary">${price.toFixed(2)}</span>
            {originalPrice && (
              <span className="text-xs line-through text-muted-foreground">${originalPrice.toFixed(2)}</span>
            )}
          </div>
          
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              className="flex-1"
              onClick={(e) => {
                e.preventDefault()
                setIsWishlisted(!isWishlisted)
              }}
            >
              <Heart className={`w-3 h-3 ${isWishlisted ? 'fill-destructive text-destructive' : ''}`} />
            </Button>
            <Button
              size="sm"
              className="flex-1"
              onClick={(e) => e.preventDefault()}
            >
              <ShoppingCart className="w-3 h-3" />
            </Button>
          </div>
        </div>
      </div>
    </Link>
  )
}
