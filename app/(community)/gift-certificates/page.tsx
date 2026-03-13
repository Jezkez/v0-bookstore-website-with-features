'use client'

import MainLayout from '@/components/layout/MainLayout'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

export default function GiftCertificatePage() {
  const [selectedAmount, setSelectedAmount] = useState(25)
  const [customAmount, setCustomAmount] = useState('')
  const [recipientEmail, setRecipientEmail] = useState('')
  const [senderName, setSenderName] = useState('')
  const [message, setMessage] = useState('')

  const presetAmounts = [15, 25, 50, 100]

  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-primary mb-4">Gift Certificates</h1>
          <p className="text-xl text-muted-foreground">Give the gift of reading</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Form */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">Create a Gift Certificate</h2>

            <form className="space-y-6">
              {/* Sender Info */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Your Name</label>
                <Input
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="Your name"
                />
              </div>

              {/* Recipient Info */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Recipient's Email</label>
                <Input
                  type="email"
                  value={recipientEmail}
                  onChange={(e) => setRecipientEmail(e.target.value)}
                  placeholder="recipient@example.com"
                />
              </div>

              {/* Amount Selection */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">Gift Amount</label>
                <div className="grid grid-cols-2 gap-2 mb-3">
                  {presetAmounts.map(amount => (
                    <button
                      key={amount}
                      onClick={() => {
                        setSelectedAmount(amount)
                        setCustomAmount('')
                      }}
                      className={`py-2 px-4 rounded font-semibold transition ${
                        selectedAmount === amount && customAmount === ''
                          ? 'bg-primary text-white'
                          : 'bg-muted text-foreground hover:bg-primary/20'
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                <div className="flex gap-2">
                  <span className="text-lg font-semibold text-foreground">$</span>
                  <Input
                    type="number"
                    value={customAmount || selectedAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value)
                      setSelectedAmount(0)
                    }}
                    min="5"
                    max="500"
                    placeholder="Custom amount"
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">Minimum $5, maximum $500</p>
              </div>

              {/* Personal Message */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Personal Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Add a personal message (optional)"
                  rows={4}
                  className="w-full px-3 py-2 border border-input rounded bg-background text-foreground placeholder-muted-foreground"
                />
                <p className="text-xs text-muted-foreground mt-2">{message.length}/500 characters</p>
              </div>

              {/* Total */}
              <div className="bg-primary/10 p-4 rounded">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-foreground">Subtotal:</span>
                  <span className="font-semibold">${customAmount || selectedAmount}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-foreground">Processing fee:</span>
                  <span className="font-semibold">Free</span>
                </div>
                <div className="flex justify-between items-center pt-3">
                  <span className="text-lg font-bold text-foreground">Total:</span>
                  <span className="text-2xl font-bold text-primary">${customAmount || selectedAmount}</span>
                </div>
              </div>

              <Button type="submit" className="w-full" size="lg">
                Continue to Checkout
              </Button>
            </form>
          </Card>

          {/* Info Card */}
          <div className="space-y-6">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Why Gift Certificates?</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary text-lg">✓</span>
                  <span>No expiration date - use anytime</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary text-lg">✓</span>
                  <span>Instant delivery via email</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary text-lg">✓</span>
                  <span>Personalized message included</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary text-lg">✓</span>
                  <span>No processing fees</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary text-lg">✓</span>
                  <span>Works on everything in our store</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary text-lg">✓</span>
                  <span>Can be combined with other promotions</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-accent/10">
              <h3 className="text-xl font-bold text-foreground mb-4">Tips for Gifting</h3>
              <div className="space-y-3 text-muted-foreground text-sm">
                <p>
                  <span className="font-semibold text-foreground">Last Minute Gift?</span> Instant email delivery means they get it immediately. Perfect for birthdays and special occasions!
                </p>
                <p>
                  <span className="font-semibold text-foreground">For the Reader:</span> Let them choose their favorite books. Browse our recommendations to find the perfect gift.
                </p>
                <p>
                  <span className="font-semibold text-foreground">Special Message:</span> Add a heartfelt message to make it more personal.
                </p>
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="font-bold text-foreground mb-4">How to Redeem</h3>
              <ol className="space-y-3 text-muted-foreground text-sm">
                <li><span className="font-semibold text-foreground">1.</span> Recipient receives email with certificate</li>
                <li><span className="font-semibold text-foreground">2.</span> They click the link and create an account</li>
                <li><span className="font-semibold text-foreground">3.</span> Balance automatically added to their account</li>
                <li><span className="font-semibold text-foreground">4.</span> Use balance towards any purchase</li>
              </ol>
            </Card>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-bold text-foreground mb-2">Do gift certificates expire?</h3>
              <p className="text-muted-foreground text-sm">No! Gift certificates never expire. The recipient can use them anytime.</p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-foreground mb-2">Can I change the amount after ordering?</h3>
              <p className="text-muted-foreground text-sm">Contact our support team within 1 hour of purchase to make changes.</p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-foreground mb-2">What if the recipient doesn't use it?</h3>
              <p className="text-muted-foreground text-sm">No problem - they can transfer it to someone else or save it for later.</p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-foreground mb-2">Can I get a refund on a gift certificate?</h3>
              <p className="text-muted-foreground text-sm">Gifts are non-refundable, but the recipient can use the balance however they want.</p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-foreground mb-2">Can I buy a physical gift card?</h3>
              <p className="text-muted-foreground text-sm">We offer digital certificates. For physical cards, contact our support team.</p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-foreground mb-2">Is there a maximum amount?</h3>
              <p className="text-muted-foreground text-sm">The maximum is $500 per certificate, but you can purchase multiple.</p>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
