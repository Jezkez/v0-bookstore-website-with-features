'use client'

import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Truck, Package, Award, MapPin, CheckCircle } from 'lucide-react'

export default function WholesalePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Wholesale for Businesses</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Bulk book purchases for bookstores, libraries, schools, and corporations
          </p>
          <Button size="lg" className="mb-8">
            Contact Wholesale Team
          </Button>
        </div>

        {/* Who We Serve */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            { title: 'Independent Bookstores', desc: 'Stock your shelves with curated selections' },
            { title: 'Libraries', desc: 'Build your collections with volume discounts' },
            { title: 'Schools & Universities', desc: 'Educational bulk purchasing programs' },
            { title: 'Corporate Gifts', desc: 'Books for employee recognition and gifts' }
          ].map((item, idx) => (
            <Card key={idx}>
              <CardHeader>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Why Choose Re:Book Wholesale</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { icon: Truck, title: 'Fast Shipping', desc: 'Efficient delivery to your location' },
                { icon: Package, title: 'Flexible Orders', desc: 'No minimum order requirements' },
                { icon: Award, title: 'Quality Guarantee', desc: 'All books inspected before shipment' },
                { icon: MapPin, title: 'Wide Selection', desc: 'Access to 50,000+ titles' }
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                  <div key={idx} className="flex gap-4">
                    <Icon className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Pricing Tiers */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Wholesale Pricing Tiers</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { qty: '10-49', discount: '15%', title: 'Starter' },
              { qty: '50-199', discount: '20%', title: 'Professional' },
              { qty: '200+', discount: '25%', title: 'Enterprise' }
            ].map((tier, idx) => (
              <Card key={idx} className={idx === 2 ? 'border-primary' : ''}>
                <CardHeader>
                  <CardTitle>{tier.title}</CardTitle>
                  <CardDescription>{tier.qty} books</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-primary mb-4">{tier.discount} off</p>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Process */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Get Started</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                { step: 1, title: 'Contact Us', desc: 'Reach out with your business needs' },
                { step: 2, title: 'Free Consultation', desc: 'Discuss your requirements with our team' },
                { step: 3, title: 'Get a Quote', desc: 'Receive pricing for your bulk order' },
                { step: 4, title: 'Place Order', desc: 'Complete your purchase and arrange delivery' }
              ].map(item => (
                <div key={item.step} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact Form */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Request Information</CardTitle>
            <CardDescription>Our wholesale team will get back to you within 24 hours</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label className="text-sm font-medium">Business Name</label>
                <input
                  type="text"
                  placeholder="Your business name"
                  className="w-full mt-1 p-2 border rounded-lg text-sm"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Business Type</label>
                <select className="w-full mt-1 p-2 border rounded-lg text-sm bg-background">
                  <option>Bookstore</option>
                  <option>Library</option>
                  <option>School/University</option>
                  <option>Corporation</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Contact Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full mt-1 p-2 border rounded-lg text-sm"
                />
              </div>
              <Button className="w-full">Request Information</Button>
            </form>
          </CardContent>
        </Card>

        {/* FAQ */}
        <Card>
          <CardHeader>
            <CardTitle>Wholesale FAQs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {[
              {
                q: 'Do you offer returns on bulk orders?',
                a: 'Yes, we accept returns within 30 days for any items not meeting our quality standards.'
              },
              {
                q: 'Can I get custom orders or special editions?',
                a: 'Absolutely! Contact our team to discuss your specific needs.'
              },
              {
                q: 'What payment terms are available?',
                a: 'We offer Net 30 terms for qualified businesses. Direct payment also available.'
              },
              {
                q: 'Do you offer free shipping on wholesale orders?',
                a: 'Orders over $500 qualify for free shipping. Custom arrangements available for larger orders.'
              }
            ].map((item, idx) => (
              <div key={idx}>
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  {item.q}
                </h4>
                <p className="text-muted-foreground ml-6">{item.a}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
