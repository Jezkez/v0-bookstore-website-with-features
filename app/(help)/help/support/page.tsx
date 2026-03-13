'use client'

import MainLayout from '@/components/layout/MainLayout'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

export default function SupportPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setName('')
    setEmail('')
    setSubject('')
    setMessage('')
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-8">Support Center</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 text-center">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-lg font-bold text-foreground mb-2">Live Chat</h3>
            <p className="text-sm text-muted-foreground mb-4">Chat with our support team now</p>
            <Button className="w-full">Start Chat</Button>
          </Card>

          <Card className="p-6 text-center">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-lg font-bold text-foreground mb-2">Email Support</h3>
            <p className="text-sm text-muted-foreground mb-4">support@rebook.com</p>
            <p className="text-xs text-muted-foreground">Response within 24 hours</p>
          </Card>

          <Card className="p-6 text-center">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-lg font-bold text-foreground mb-2">Phone Support</h3>
            <p className="text-sm text-muted-foreground mb-4">1-800-REBOOK-1</p>
            <p className="text-xs text-muted-foreground">Mon-Fri 9am-9pm EST</p>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Contact Form */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>

            {submitted && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                Thank you! We've received your message and will get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                <Input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="w-full px-3 py-2 border border-input rounded bg-background text-foreground"
                  required
                />
              </div>

              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </Card>

          {/* FAQ Links */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold text-foreground mb-6">Quick Help</h2>
            <div className="space-y-3">
              <a href="/help/order-status" className="block p-3 border rounded hover:bg-muted transition text-foreground hover:text-primary font-semibold">
                Track Your Order
              </a>
              <a href="/help/return-policy" className="block p-3 border rounded hover:bg-muted transition text-foreground hover:text-primary font-semibold">
                Returns & Refunds
              </a>
              <a href="/help/shipping" className="block p-3 border rounded hover:bg-muted transition text-foreground hover:text-primary font-semibold">
                Shipping Information
              </a>
              <a href="/help/faqs" className="block p-3 border rounded hover:bg-muted transition text-foreground hover:text-primary font-semibold">
                FAQs
              </a>
              <a href="/help/payment-methods" className="block p-3 border rounded hover:bg-muted transition text-foreground hover:text-primary font-semibold">
                Payment Methods
              </a>
              <a href="/help/privacy" className="block p-3 border rounded hover:bg-muted transition text-foreground hover:text-primary font-semibold">
                Privacy & Cookies
              </a>
            </div>
          </Card>
        </div>

        {/* Support Hours */}
        <Card className="p-6 mt-6 bg-muted/50">
          <h3 className="text-lg font-bold text-foreground mb-4">Support Hours</h3>
          <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
            <div>
              <p className="font-semibold text-foreground mb-2">Monday - Friday</p>
              <p>9:00 AM - 9:00 PM EST</p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-2">Saturday - Sunday</p>
              <p>10:00 AM - 6:00 PM EST</p>
            </div>
          </div>
        </Card>
      </div>
    </MainLayout>
  )
}
