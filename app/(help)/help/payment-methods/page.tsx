'use client'

import MainLayout from '@/components/layout/MainLayout'
import { Card } from '@/components/ui/card'

export default function PaymentMethodsPage() {
  const paymentMethods = [
    {
      name: 'Credit Cards',
      icon: '💳',
      description: 'Visa, Mastercard, American Express, Discover',
      details: 'Secure payment processing with encryption',
    },
    {
      name: 'PayPal',
      icon: '🅿️',
      description: 'Fast and secure PayPal checkout',
      details: 'One-click checkout available',
    },
    {
      name: 'Apple Pay',
      icon: '🍎',
      description: 'Fast checkout for Apple users',
      details: 'Biometric authentication available',
    },
    {
      name: 'Google Pay',
      icon: '🔵',
      description: 'Quick checkout for Android users',
      details: 'Secure with Google account',
    },
  ]

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-8">Payment Methods</h1>

        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Accepted Payment Methods</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {paymentMethods.map((method, idx) => (
                <div key={idx} className="border rounded p-4">
                  <p className="text-3xl mb-2">{method.icon}</p>
                  <h3 className="text-lg font-bold text-foreground mb-2">{method.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                  <p className="text-sm text-muted-foreground italic">{method.details}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Security & Protection</h2>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <p className="font-semibold text-foreground mb-2">Encryption:</p>
                <p>All payment information is encrypted using SSL technology. Your data is protected during transmission and storage.</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">PCI Compliance:</p>
                <p>We comply with PCI Data Security Standards to ensure your payment information is handled securely.</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">Buyer Protection:</p>
                <p>Your transactions are protected. We resolve issues if you don't receive your order or it doesn't match the description.</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Billing & Invoices</h2>
            <div className="space-y-3 text-muted-foreground">
              <p><span className="font-semibold text-foreground">Receipts:</span> Digital receipts sent to email immediately after purchase.</p>
              <p><span className="font-semibold text-foreground">Invoices:</span> Detailed invoices available in your Order History.</p>
              <p><span className="font-semibold text-foreground">Multiple Payments:</span> Split payment across multiple cards at checkout.</p>
              <p><span className="font-semibold text-foreground">Billing Address:</span> Ensure your billing address matches your payment method.</p>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Billing Issues</h2>
            <div className="space-y-3 text-muted-foreground">
              <div>
                <p className="font-semibold text-foreground mb-1">Card Declined:</p>
                <p>Check card details, expiration date, and billing address. Contact your bank if needed.</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Duplicate Charge:</p>
                <p>Contact us immediately if charged twice. We'll investigate and refund any duplicate charges.</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Currency:</p>
                <p>All prices are in USD. International cards may have conversion fees.</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </MainLayout>
  )
}
