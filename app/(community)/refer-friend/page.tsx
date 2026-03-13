'use client'

import MainLayout from '@/components/layout/MainLayout'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useAuth } from '@/context/AuthContext'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function ReferralPage() {
  const router = useRouter()
  const { isAuthenticated } = useAuth()
  const [copied, setCopied] = useState(false)
  const [inviteEmail, setInviteEmail] = useState('')
  const [invited, setInvited] = useState(false)

  if (!isAuthenticated) {
    return (
      <MainLayout>
        <div className="min-h-[60vh] flex items-center justify-center px-4 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Sign in to share Re:Book</h1>
            <p className="text-muted-foreground mb-6">Earn rewards when friends join Re:Book.</p>
            <Button onClick={() => router.push('/login')}>Sign In</Button>
          </div>
        </div>
      </MainLayout>
    )
  }

  const referralCode = 'REBOOK2024'

  const handleCopyCode = () => {
    navigator.clipboard.writeText(referralCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleInvite = (e: React.FormEvent) => {
    e.preventDefault()
    setInvited(true)
    setInviteEmail('')
    setTimeout(() => setInvited(false), 3000)
  }

  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Share Re:Book</h1>
          <p className="text-xl text-muted-foreground">Earn rewards when your friends join</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 text-center">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-lg font-bold text-foreground mb-2">Invite Friends</h3>
            <p className="text-sm text-muted-foreground mb-4">Share your unique referral code</p>
            <p className="text-2xl font-bold text-primary">100</p>
            <p className="text-xs text-muted-foreground">points per friend</p>
          </Card>

          <Card className="p-6 text-center">
            <div className="text-4xl mb-4">🎁</div>
            <h3 className="text-lg font-bold text-foreground mb-2">They Earn Too</h3>
            <p className="text-sm text-muted-foreground mb-4">Your friends get a welcome bonus</p>
            <p className="text-2xl font-bold text-secondary">50</p>
            <p className="text-xs text-muted-foreground">points for new members</p>
          </Card>

          <Card className="p-6 text-center">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="text-lg font-bold text-foreground mb-2">Unlimited Earnings</h3>
            <p className="text-sm text-muted-foreground mb-4">No limit on referrals</p>
            <p className="text-2xl font-bold text-accent">∞</p>
            <p className="text-xs text-muted-foreground">referral potential</p>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Referral Code */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold text-foreground mb-6">Your Referral Code</h2>
            <div className="bg-muted p-4 rounded mb-4">
              <p className="text-sm text-muted-foreground mb-2">Share this code with friends:</p>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={referralCode}
                  readOnly
                  className="flex-1 px-4 py-3 bg-background border border-input rounded font-bold text-primary text-center"
                />
                <Button onClick={handleCopyCode} className="flex-shrink-0">
                  {copied ? 'Copied!' : 'Copy'}
                </Button>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">Friends will get $10 off their first purchase when they use your code</p>
          </Card>

          {/* Share Links */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold text-foreground mb-6">Share On Social</h2>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <span className="mr-2">f</span> Share on Facebook
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <span className="mr-2">𝕏</span> Share on X
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <span className="mr-2">📧</span> Email Friends
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <span className="mr-2">💬</span> Text Message
              </Button>
            </div>
          </Card>
        </div>

        {/* Invite by Email */}
        <Card className="p-6 mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Invite Friends by Email</h2>
          {invited && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
              Invitation sent successfully!
            </div>
          )}
          <form onSubmit={handleInvite} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Friend's Email
              </label>
              <input
                type="email"
                value={inviteEmail}
                onChange={(e) => setInviteEmail(e.target.value)}
                placeholder="friend@example.com"
                className="w-full px-4 py-2 border border-input rounded bg-background text-foreground"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Send Invite
            </Button>
          </form>
        </Card>

        {/* FAQ */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Referral FAQ</h2>
          
          <Card className="p-6">
            <h3 className="font-bold text-foreground mb-2">How does the referral program work?</h3>
            <p className="text-muted-foreground">Share your unique referral code with friends. When they sign up and make a purchase using your code, you both earn Re:Points rewards.</p>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold text-foreground mb-2">When do I earn Re:Points?</h3>
            <p className="text-muted-foreground">You earn 100 Re:Points when your friend makes their first purchase. Points are credited within 7 business days.</p>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold text-foreground mb-2">Can I share my code multiple times?</h3>
            <p className="text-muted-foreground">Yes! Share your code as many times as you'd like. There's no limit to how many friends you can invite or how many Re:Points you can earn.</p>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold text-foreground mb-2">Do referral points expire?</h3>
            <p className="text-muted-foreground">No, your Re:Points never expire. You can accumulate them indefinitely and use them whenever you want to redeem rewards.</p>
          </Card>
        </div>
      </div>
    </MainLayout>
  )
}
