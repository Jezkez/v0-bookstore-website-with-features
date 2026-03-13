'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MainLayout } from '@/components/layout/MainLayout'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useCart } from '@/context/CartContext'
import { ArrowLeft, CheckCircle } from 'lucide-react'
import books from '@/data/books.json'

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart()
  const [step, setStep] = useState<'shipping' | 'payment' | 'confirm'>('shipping')
  const [orderPlaced, setOrderPlaced] = useState(false)

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    shippingMethod: 'standard',
  })

  const cartItems = items.map(item => ({
    ...item,
    book: books.find(b => b.id === item.bookId),
  })).filter(item => item.book)

  const subtotal = total
  const shipping = subtotal > 50 ? 0 : 9.99
  const tax = subtotal * 0.08
  const finalTotal = subtotal + shipping + tax

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handlePlaceOrder = () => {
    setOrderPlaced(true)
    clearCart()
    setStep('confirm')
  }

  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <MainLayout>
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
          <Link href="/categories">
            <Button size="lg">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Continue Shopping
            </Button>
          </Link>
        </div>
      </MainLayout>
    )
  }

  if (orderPlaced) {
    return (
      <MainLayout>
        <div className="max-w-2xl mx-auto px-4 py-16">
          <div className="bg-card rounded-lg border border-border p-12 text-center">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-2">Order Confirmed!</h1>
            <p className="text-muted-foreground mb-6">
              Thank you for your purchase. You'll receive an order confirmation email shortly.
            </p>

            <div className="bg-secondary/5 p-6 rounded-lg mb-8 text-left">
              <p className="text-sm text-muted-foreground mb-2">Order Number</p>
              <p className="text-2xl font-bold mb-6">#RE-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>

              <p className="text-sm text-muted-foreground mb-2">Estimated Delivery</p>
              <p className="font-semibold">5-7 Business Days</p>
            </div>

            <div className="space-y-3">
              <Link href="/account/orders">
                <Button size="lg" className="w-full">
                  View Your Orders
                </Button>
              </Link>
              <Link href="/categories">
                <Button size="lg" variant="outline" className="w-full">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Link href="/cart" className="flex items-center gap-2 mb-8 text-primary hover:underline">
          <ArrowLeft className="w-4 h-4" />
          Back to Cart
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            {/* Steps */}
            <div className="flex gap-4 mb-12">
              {['shipping', 'payment', 'confirm'].map((s, i) => (
                <div key={s} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold mr-2 ${
                      step === s
                        ? 'bg-primary text-primary-foreground'
                        : ['shipping', 'payment'].includes(s) && ['shipping', 'payment'].indexOf(step) > ['shipping', 'payment'].indexOf(s)
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {i + 1}
                  </div>
                  <span className="capitalize text-sm font-semibold hidden sm:inline">
                    {s === 'confirm' ? 'Confirm' : s}
                  </span>
                  {i < 2 && <div className="w-8 h-px bg-border mx-2 hidden sm:block" />}
                </div>
              ))}
            </div>

            {/* Shipping Step */}
            {step === 'shipping' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Shipping Information</h2>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-semibold mb-2 block">Email</label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-semibold mb-2 block">First Name</label>
                      <Input
                        name="firstName"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-2 block">Last Name</label>
                      <Input
                        name="lastName"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold mb-2 block">Address</label>
                    <Input
                      name="address"
                      placeholder="Street address"
                      value={formData.address}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-semibold mb-2 block">City</label>
                      <Input
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-2 block">State</label>
                      <Input
                        name="state"
                        placeholder="State"
                        value={formData.state}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-semibold mb-2 block">ZIP Code</label>
                      <Input
                        name="zip"
                        placeholder="ZIP"
                        value={formData.zip}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-2 block">Country</label>
                      <Input
                        name="country"
                        placeholder="Country"
                        value={formData.country}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold mb-2 block">Shipping Method</label>
                    <select
                      name="shippingMethod"
                      value={formData.shippingMethod}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded border border-border bg-background"
                    >
                      <option value="standard">Standard Shipping (5-7 days) - FREE</option>
                      <option value="expedited">Expedited Shipping (2-3 days) - $14.99</option>
                      <option value="overnight">Overnight Shipping - $24.99</option>
                    </select>
                  </div>
                </div>

                <Button className="w-full" size="lg" onClick={() => setStep('payment')}>
                  Continue to Payment
                </Button>
              </div>
            )}

            {/* Payment Step */}
            {step === 'payment' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Payment Method</h2>

                <div className="space-y-4">
                  <div className="border border-border rounded-lg p-6 hover:border-primary cursor-pointer bg-card">
                    <input type="radio" name="payment" id="paypal" defaultChecked />
                    <label htmlFor="paypal" className="ml-3 font-semibold cursor-pointer">
                      PayPal
                    </label>
                    <p className="text-sm text-muted-foreground mt-2">
                      Fast, secure payments with PayPal. You'll be redirected to complete payment.
                    </p>
                  </div>

                  <div className="border border-border rounded-lg p-6 hover:border-primary cursor-pointer bg-card opacity-50">
                    <input type="radio" name="payment" id="card" disabled />
                    <label htmlFor="card" className="ml-3 font-semibold cursor-pointer">
                      Credit Card
                    </label>
                    <p className="text-sm text-muted-foreground mt-2">
                      Coming soon
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" className="flex-1" onClick={() => setStep('shipping')}>
                    Back
                  </Button>
                  <Button className="flex-1" size="lg" onClick={() => setStep('confirm')}>
                    Review Order
                  </Button>
                </div>
              </div>
            )}

            {/* Confirm Step */}
            {step === 'confirm' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Review Your Order</h2>

                <div className="bg-card rounded-lg border border-border p-6 space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-semibold">{formData.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Shipping Address</p>
                    <p className="font-semibold">
                      {formData.firstName} {formData.lastName}<br />
                      {formData.address}<br />
                      {formData.city}, {formData.state} {formData.zip}<br />
                      {formData.country}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" className="flex-1" onClick={() => setStep('payment')}>
                    Back
                  </Button>
                  <Button className="flex-1" size="lg" onClick={handlePlaceOrder}>
                    Place Order
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-card rounded-lg border border-border p-6 space-y-4">
              <h2 className="text-xl font-bold">Order Summary</h2>

              {/* Items */}
              <div className="space-y-3 pb-4 border-b max-h-64 overflow-y-auto">
                {cartItems.map(item => (
                  <div key={item.bookId} className="text-sm">
                    <div className="flex justify-between mb-1">
                      <span className="line-clamp-1">{item.book?.title}</span>
                      <span className="font-semibold">×{item.quantity}</span>
                    </div>
                    <div className="text-right text-muted-foreground">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t pt-3 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${finalTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
