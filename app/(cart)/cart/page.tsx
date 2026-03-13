'use client'

import Link from 'next/link'
import { MainLayout } from '@/components/layout/MainLayout'
import { Button } from '@/components/ui/button'
import { useCart } from '@/context/CartContext'
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react'
import books from '@/data/books.json'

export default function CartPage() {
  const { items, removeItem, updateQuantity, total } = useCart()

  const cartItems = items.map(item => ({
    ...item,
    book: books.find(b => b.id === item.bookId),
  })).filter(item => item.book)

  const subtotal = total
  const shipping = subtotal > 50 ? 0 : 9.99
  const tax = subtotal * 0.08
  const finalTotal = subtotal + shipping + tax

  if (cartItems.length === 0) {
    return (
      <MainLayout>
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
            <h1 className="text-3xl font-bold mb-2">Your cart is empty</h1>
            <p className="text-muted-foreground mb-8">Start shopping to add books to your cart</p>
            <Link href="/categories">
              <Button size="lg">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {cartItems.map(item => (
                <div key={item.bookId} className="flex gap-4 p-4 bg-card rounded-lg border border-border">
                  {/* Book Image */}
                  <div className="w-24 h-32 flex-shrink-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">Cover</span>
                  </div>

                  {/* Book Details */}
                  <div className="flex-1">
                    <Link href={`/books/${item.bookId}`}>
                      <h3 className="font-bold hover:text-primary transition">{item.book?.title}</h3>
                    </Link>
                    <p className="text-sm text-muted-foreground mb-3">{item.book?.author}</p>

                    <div className="flex items-center justify-between">
                      <p className="font-semibold">${item.price.toFixed(2)} each</p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 border border-border rounded">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => updateQuantity(item.bookId, item.quantity - 1)}
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => updateQuantity(item.bookId, item.quantity + 1)}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>

                      {/* Total */}
                      <p className="font-bold min-w-24 text-right">${(item.price * item.quantity).toFixed(2)}</p>

                      {/* Remove Button */}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.bookId)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Continue Shopping */}
            <Link href="/categories">
              <Button variant="outline" className="w-full mt-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Continue Shopping
              </Button>
            </Link>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-card rounded-lg border border-border p-6 space-y-4">
              <h2 className="text-xl font-bold">Order Summary</h2>

              <div className="space-y-3 pb-3 border-b">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal ({cartItems.reduce((sum, i) => sum + i.quantity, 0)} items)</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>
                    {shipping === 0 ? (
                      <span className="text-green-600 font-semibold">FREE</span>
                    ) : (
                      `$${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="text-xs text-muted-foreground">
                    Free shipping on orders over $50
                  </p>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tax (estimated)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>${finalTotal.toFixed(2)}</span>
              </div>

              <Link href="/checkout">
                <Button className="w-full" size="lg">
                  Proceed to Checkout
                </Button>
              </Link>

              <Button variant="outline" className="w-full">
                Apply Coupon Code
              </Button>

              {/* Trust Badges */}
              <div className="pt-4 border-t space-y-2 text-xs text-muted-foreground text-center">
                <p>✓ Secure Checkout</p>
                <p>✓ Money-Back Guarantee</p>
                <p>✓ Free Returns</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
