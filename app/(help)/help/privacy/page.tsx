'use client'

import MainLayout from '@/components/layout/MainLayout'
import { Card } from '@/components/ui/card'
import { useState } from 'react'

export default function PrivacyPage() {
  const [cookiesAccepted, setCookiesAccepted] = useState(true)
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true)
  const [marketingEnabled, setMarketingEnabled] = useState(true)

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-8">Privacy & Cookie Settings</h1>

        <Card className="p-6 mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-4">Privacy Policy Overview</h2>
          <p className="text-muted-foreground mb-4">
            At Re:Book, we take your privacy seriously. This policy explains how we collect, use, and protect your personal information. For the complete privacy policy, visit our full policy page.
          </p>
          <p className="text-muted-foreground">
            Last updated: March 13, 2024
          </p>
        </Card>

        <Card className="p-6 mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-4">Data Collection</h2>
          <div className="space-y-4 text-muted-foreground">
            <div>
              <p className="font-semibold text-foreground mb-2">Information You Provide:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Account information (name, email, address, phone)</li>
                <li>Payment information for purchases</li>
                <li>Reviews, ratings, and wishlist data</li>
                <li>Communication preferences</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-2">Information We Collect Automatically:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Browser and device information</li>
                <li>Pages visited and time spent</li>
                <li>IP address and location data</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6 mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights</h2>
          <div className="space-y-3 text-muted-foreground">
            <p><span className="font-semibold text-foreground">Access:</span> Request a copy of your personal data</p>
            <p><span className="font-semibold text-foreground">Correction:</span> Ask us to correct inaccurate information</p>
            <p><span className="font-semibold text-foreground">Deletion:</span> Request deletion of your data (Right to be Forgotten)</p>
            <p><span className="font-semibold text-foreground">Portability:</span> Get your data in a portable format</p>
            <p><span className="font-semibold text-foreground">Opt-out:</span> Opt out of marketing communications</p>
          </div>
        </Card>

        <Card className="p-6 mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-4">Cookie Settings</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded">
              <div>
                <p className="font-semibold text-foreground mb-1">Essential Cookies</p>
                <p className="text-sm text-muted-foreground">Required for basic site functionality</p>
              </div>
              <input type="checkbox" checked disabled className="w-5 h-5 cursor-not-allowed" />
            </div>

            <div className="flex items-center justify-between p-4 border rounded">
              <div>
                <p className="font-semibold text-foreground mb-1">Analytics Cookies</p>
                <p className="text-sm text-muted-foreground">Help us understand how you use Re:Book</p>
              </div>
              <input 
                type="checkbox" 
                checked={analyticsEnabled} 
                onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                className="w-5 h-5 cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-between p-4 border rounded">
              <div>
                <p className="font-semibold text-foreground mb-1">Marketing Cookies</p>
                <p className="text-sm text-muted-foreground">Personalized recommendations and offers</p>
              </div>
              <input 
                type="checkbox" 
                checked={marketingEnabled} 
                onChange={(e) => setMarketingEnabled(e.target.checked)}
                className="w-5 h-5 cursor-pointer"
              />
            </div>
          </div>
        </Card>

        <Card className="p-6 mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-4">Do Not Sell or Share My Personal Information</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Re:Book respects your privacy and does not sell your personal information to third parties. Under California Consumer Privacy Act (CCPA) and similar laws, you have the right to request that we not share your information.
            </p>
            <p>
              To submit a "Do Not Sell" request, visit our privacy request form or contact us at privacy@rebook.com. Your request will be processed within 45 days.
            </p>
          </div>
        </Card>

        <Card className="p-6 mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-4">Third-Party Services</h2>
          <div className="space-y-3 text-muted-foreground">
            <p>We use third-party services for:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Payment processing (PayPal, Stripe)</li>
              <li>Email communications (SendGrid)</li>
              <li>Analytics (Google Analytics)</li>
              <li>Customer support (Zendesk)</li>
              <li>Advertising (Google Ads, Facebook Ads)</li>
            </ul>
            <p className="mt-4">These services have their own privacy policies. We recommend reviewing them.</p>
          </div>
        </Card>

        <Card className="p-6 mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
          <div className="space-y-3 text-muted-foreground">
            <p><span className="font-semibold text-foreground">Encryption:</span> All data is encrypted in transit using SSL/TLS technology.</p>
            <p><span className="font-semibold text-foreground">Access Control:</span> Only authorized employees can access personal data.</p>
            <p><span className="font-semibold text-foreground">Regular Audits:</span> We conduct regular security audits and penetration testing.</p>
            <p><span className="font-semibold text-foreground">Incident Response:</span> In case of a breach, we notify affected users immediately.</p>
          </div>
        </Card>

        <Card className="p-6 bg-muted/50">
          <h3 className="text-lg font-bold text-foreground mb-2">Privacy Questions?</h3>
          <p className="text-muted-foreground">Contact our Privacy Team at privacy@rebook.com. We respond within 10 business days.</p>
        </Card>
      </div>
    </MainLayout>
  )
}
