'use client'

import MainLayout from '@/components/layout/MainLayout'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-primary mb-4">Get in Touch</h1>
          <p className="text-xl text-muted-foreground">We'd love to hear from you. Send us a message!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="p-6">
            <Mail className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-bold text-foreground mb-2">Email</h3>
            <p className="text-muted-foreground text-sm mb-1">hello@rebook.com</p>
            <p className="text-muted-foreground text-sm">support@rebook.com</p>
          </Card>

          <Card className="p-6">
            <Phone className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-bold text-foreground mb-2">Phone</h3>
            <p className="text-muted-foreground text-sm mb-1">+1 (555) 123-4567</p>
            <p className="text-muted-foreground text-sm">Mon-Fri, 9AM-6PM EST</p>
          </Card>

          <Card className="p-6">
            <MapPin className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-bold text-foreground mb-2">Office</h3>
            <p className="text-muted-foreground text-sm">123 Book Street</p>
            <p className="text-muted-foreground text-sm">Portland, OR 97214</p>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                <Input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what's on your mind..."
                  rows={6}
                  className="w-full px-3 py-2 border border-input rounded bg-background text-foreground placeholder-muted-foreground"
                  required
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                Send Message
              </Button>
            </form>
          </Card>

          {/* FAQ & Info */}
          <div className="space-y-6">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">FAQ</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-foreground mb-1">What's your response time?</p>
                  <p className="text-sm text-muted-foreground">We typically respond to inquiries within 24 business hours.</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">How can I report an issue?</p>
                  <p className="text-sm text-muted-foreground">Use our contact form or email support@rebook.com with details and screenshots.</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Do you have a physical location?</p>
                  <p className="text-sm text-muted-foreground">Yes! Visit us at our Portland office. Call ahead to schedule a time.</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">What about partnership opportunities?</p>
                  <p className="text-sm text-muted-foreground">We'd love to collaborate! Email partnerships@rebook.com with your proposal.</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-primary/10">
              <div className="flex items-start gap-3 mb-4">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">Business Hours</h3>
                  <p className="text-sm text-muted-foreground">
                    <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM EST<br />
                    <strong>Saturday:</strong> 10:00 AM - 4:00 PM EST<br />
                    <strong>Sunday:</strong> Closed
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="font-bold text-foreground mb-3">Follow Us</h3>
              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="flex-1">Twitter</Button>
                <Button variant="outline" size="sm" className="flex-1">Instagram</Button>
                <Button variant="outline" size="sm" className="flex-1">Facebook</Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
