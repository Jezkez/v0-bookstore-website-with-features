'use client'

import MainLayout from '@/components/layout/MainLayout'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Heart, Users, Zap, Globe } from 'lucide-react'

export default function AboutPage() {
  const team = [
    {
      name: 'Sarah Chen',
      role: 'Founder & CEO',
      image: '👩‍💼',
      bio: 'Book lover and tech enthusiast with a mission to revolutionize how people discover and share books.',
    },
    {
      name: 'Marcus Johnson',
      role: 'Head of Community',
      image: '👨‍💼',
      bio: 'Passionate about building inclusive communities where readers from all backgrounds can connect.',
    },
    {
      name: 'Emma Williams',
      role: 'Director of Partnerships',
      image: '👩‍💼',
      bio: 'Working with independent publishers and authors to bring diverse voices to our platform.',
    },
    {
      name: 'David Park',
      role: 'Head of Operations',
      image: '👨‍💼',
      bio: 'Ensuring every book finds its way to the right reader with efficiency and care.',
    },
  ]

  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-primary mb-4">About Re:Book</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're on a mission to make reading more accessible, affordable, and community-driven for book lovers everywhere.
          </p>
        </div>

        {/* Mission & Values */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Re:Book exists to democratize access to books and foster genuine connections between readers. We believe every book deserves a second life, every reader deserves affordability, and every story deserves to be shared.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              By combining sustainable practices with community engagement, we're creating a platform where books circulate freely, readers discover their next favorite author, and authors find their authentic audience.
            </p>
          </div>

          <div className="space-y-4">
            <Card className="p-6 flex gap-4">
              <Heart className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-bold text-foreground mb-2">Community First</h3>
                <p className="text-sm text-muted-foreground">We put readers and authors at the heart of everything we do.</p>
              </div>
            </Card>

            <Card className="p-6 flex gap-4">
              <Globe className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-bold text-foreground mb-2">Sustainability</h3>
                <p className="text-sm text-muted-foreground">Every used book sold means one less new book printed unnecessarily.</p>
              </div>
            </Card>

            <Card className="p-6 flex gap-4">
              <Zap className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-bold text-foreground mb-2">Innovation</h3>
                <p className="text-sm text-muted-foreground">Technology should make reading easier, not complicated.</p>
              </div>
            </Card>

            <Card className="p-6 flex gap-4">
              <Users className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-bold text-foreground mb-2">Accessibility</h3>
                <p className="text-sm text-muted-foreground">Books should be available to everyone, regardless of budget.</p>
              </div>
            </Card>
          </div>
        </div>

        {/* Our Story */}
        <Card className="p-12 mb-16 bg-primary/5">
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-3">2020: The Beginning</h3>
              <p className="text-muted-foreground">
                Sarah started Re:Book from her apartment with a simple idea: what if books didn't end their life after one reader? She began a free book exchange on her neighborhood message board.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-3">2022: Going Digital</h3>
              <p className="text-muted-foreground">
                As demand grew, we built our first online platform to make it easier to buy, sell, and discover books. Thousands of readers joined within the first month.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-3">2024: Global Community</h3>
              <p className="text-muted-foreground">
                Today, Re:Book serves over 100,000 readers across the globe with 47 active book clubs and a catalog of over 1 million titles.
              </p>
            </div>
          </div>
        </Card>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <Card key={member.name} className="p-6 text-center">
                <div className="text-5xl mb-4">{member.image}</div>
                <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-primary font-semibold mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Impact */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-8 text-center">
              <p className="text-4xl font-bold text-primary mb-2">847K+</p>
              <p className="text-muted-foreground">Books Exchanged</p>
              <p className="text-xs text-muted-foreground mt-2">Keeping books in circulation</p>
            </Card>

            <Card className="p-8 text-center">
              <p className="text-4xl font-bold text-primary mb-2">$2.1M</p>
              <p className="text-muted-foreground">Saved by Readers</p>
              <p className="text-xs text-muted-foreground mt-2">vs. buying new books</p>
            </Card>

            <Card className="p-8 text-center">
              <p className="text-4xl font-bold text-primary mb-2">94K</p>
              <p className="text-muted-foreground">Trees Saved</p>
              <p className="text-xs text-muted-foreground mt-2">Through sustainable reading</p>
            </Card>

            <Card className="p-8 text-center">
              <p className="text-4xl font-bold text-primary mb-2">100+</p>
              <p className="text-muted-foreground">Countries</p>
              <p className="text-xs text-muted-foreground mt-2">Where readers connect</p>
            </Card>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-8">
              <h3 className="text-xl font-bold text-foreground mb-3">Inclusivity</h3>
              <p className="text-muted-foreground">
                We celebrate diverse voices and perspectives. Books from authors of all backgrounds should be easily accessible to readers everywhere.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="text-xl font-bold text-foreground mb-3">Affordability</h3>
              <p className="text-muted-foreground">
                A reader's budget shouldn't limit their imagination. We're committed to keeping books affordable for everyone.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="text-xl font-bold text-foreground mb-3">Sustainability</h3>
              <p className="text-muted-foreground">
                Every used book gives a second life to paper and ink. We're dedicated to reducing publishing waste and environmental impact.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="text-xl font-bold text-foreground mb-3">Connection</h3>
              <p className="text-muted-foreground">
                Reading is better when shared. We create spaces where readers, authors, and book lovers can build meaningful relationships.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="text-xl font-bold text-foreground mb-3">Transparency</h3>
              <p className="text-muted-foreground">
                We're honest about our practices, our pricing, and our mission. Our community deserves to know exactly how we operate.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="text-xl font-bold text-foreground mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                Every interaction matters. We strive to deliver exceptional service, quality books, and a delightful experience every time.
              </p>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <Card className="p-12 bg-primary/10 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-4">Join Our Community</h3>
          <p className="text-muted-foreground mb-6">Start exploring thousands of books and connect with readers who share your passion.</p>
          <Button size="lg" className="gap-2">
            Get Started Today
            <span>→</span>
          </Button>
        </Card>
      </div>
    </MainLayout>
  )
}
