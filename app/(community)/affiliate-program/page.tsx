'use client'

import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BarChart3, TrendingUp, Users, DollarSign, CheckCircle } from 'lucide-react'

export default function AffiliateProgram() {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Generous Commissions',
      description: 'Earn up to 15% commission on every sale you refer'
    },
    {
      icon: TrendingUp,
      title: 'Real-time Tracking',
      description: 'Monitor your earnings and performance in real-time'
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'Get help from our affiliate support team'
    },
    {
      icon: BarChart3,
      title: 'Marketing Materials',
      description: 'Access promotional banners, links, and resources'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Become a Re:Book Affiliate</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Earn money by promoting the books you love
          </p>
          <Button size="lg" className="mb-8">
            Apply Now
          </Button>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon
            return (
              <Card key={idx}>
                <CardHeader>
                  <Icon className="w-6 h-6 text-primary mb-2" />
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* How It Works */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>How It Works</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                { step: 1, title: 'Sign Up', desc: 'Join our affiliate program for free' },
                { step: 2, title: 'Get Links', desc: 'Grab your unique affiliate links' },
                { step: 3, title: 'Share', desc: 'Promote books on your blog, social media, etc.' },
                { step: 4, title: 'Earn', desc: 'Get paid for every referral' }
              ].map(item => (
                <div key={item.step} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Pricing */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Commission Structure</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between p-3 bg-secondary rounded-lg">
                <span>Standard Sales</span>
                <span className="font-bold">10%</span>
              </div>
              <div className="flex justify-between p-3 bg-secondary rounded-lg">
                <span>Premium Books</span>
                <span className="font-bold">12%</span>
              </div>
              <div className="flex justify-between p-3 bg-primary text-primary-foreground rounded-lg">
                <span>Exclusive Titles</span>
                <span className="font-bold">15%</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Commissions are paid monthly via PayPal or bank transfer
            </p>
          </CardContent>
        </Card>

        {/* FAQ */}
        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {[
              {
                q: 'How much can I earn?',
                a: 'Earnings depend on the volume of sales you drive. Top affiliates earn thousands monthly.'
              },
              {
                q: 'How long is the cookie period?',
                a: '30 days. If a customer buys within 30 days of clicking your link, you get the commission.'
              },
              {
                q: 'Is there a minimum payout?',
                a: 'Yes, you need to earn at least $50 before you can cash out.'
              },
              {
                q: 'What if a customer returns a book?',
                a: 'Commissions are adjusted if returns exceed 10% of your sales in a month.'
              }
            ].map((item, idx) => (
              <div key={idx}>
                <h4 className="font-bold mb-2">{item.q}</h4>
                <p className="text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg">
            Join Our Affiliate Program
          </Button>
        </div>
      </div>
    </div>
  )
}
