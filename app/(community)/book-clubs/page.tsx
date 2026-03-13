'use client'

import MainLayout from '@/components/layout/MainLayout'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Users, Calendar, MapPin, BookOpen } from 'lucide-react'

const bookClubs = [
  {
    id: 1,
    name: 'Mystery Lovers Anonymous',
    members: 342,
    image: '🔍',
    currentBook: 'The Thursday Murder Club',
    meetDate: 'March 20, 2024',
    location: 'Coffee & Pages Café',
    description: 'Join us for discussions of thrilling mysteries and page-turning whodunits.',
  },
  {
    id: 2,
    name: 'Sci-Fi & Fantasy Guild',
    members: 528,
    image: '🚀',
    currentBook: 'The Poppy War',
    meetDate: 'March 22, 2024',
    location: 'Virtual (Discord)',
    description: 'Explore epic worlds, magical systems, and futuristic visions with fellow enthusiasts.',
  },
  {
    id: 3,
    name: 'Historical Fiction Circle',
    members: 267,
    image: '📚',
    currentBook: 'All the Light We Cannot See',
    meetDate: 'March 25, 2024',
    location: 'Downtown Library - Room 3',
    description: 'Discover compelling stories set in different eras and historical periods.',
  },
  {
    id: 4,
    name: 'Romance Readers United',
    members: 456,
    image: '💕',
    currentBook: 'Heartless',
    meetDate: 'March 18, 2024',
    location: 'Book Nook Wine Bar',
    description: 'A community for romance lovers to share recommendations and swoon-worthy moments.',
  },
  {
    id: 5,
    name: 'Non-Fiction Knowledge Hub',
    members: 319,
    image: '🧠',
    currentBook: 'Atomic Habits',
    meetDate: 'March 23, 2024',
    location: 'Virtual (Zoom)',
    description: 'Deep dives into biography, history, science, and personal development.',
  },
  {
    id: 6,
    name: 'Young Adult & New Adult Squad',
    members: 621,
    image: '⭐',
    currentBook: 'Red, White & Royal Blue',
    meetDate: 'March 19, 2024',
    location: 'Community Center',
    description: 'For readers exploring coming-of-age stories and new adult fiction.',
  },
]

export default function BookClubsPage() {
  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-primary mb-4">Book Clubs</h1>
          <p className="text-xl text-muted-foreground">Connect with fellow book lovers and discover your next favorite read</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <Card className="p-6 text-center">
            <p className="text-4xl font-bold text-primary mb-2">47</p>
            <p className="text-muted-foreground">Active Book Clubs</p>
          </Card>
          <Card className="p-6 text-center">
            <p className="text-4xl font-bold text-primary mb-2">8.2K+</p>
            <p className="text-muted-foreground">Members Worldwide</p>
          </Card>
          <Card className="p-6 text-center">
            <p className="text-4xl font-bold text-primary mb-2">530+</p>
            <p className="text-muted-foreground">Discussions Monthly</p>
          </Card>
        </div>

        {/* Featured Clubs */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-foreground">Featured Clubs</h2>
            <Button variant="outline">View All</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookClubs.map(club => (
              <Card key={club.id} className="p-6 flex flex-col">
                <div className="text-5xl mb-4">{club.image}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{club.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{club.description}</p>
                
                <div className="space-y-3 flex-1 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <BookOpen className="w-4 h-4" />
                    <span>{club.currentBook}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{club.meetDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{club.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{club.members.toLocaleString()} members</span>
                  </div>
                </div>

                <Button className="w-full">Join Club</Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Create Club CTA */}
        <Card className="p-12 bg-primary/10 text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">Start Your Own Book Club</h3>
          <p className="text-muted-foreground mb-6">Can't find a club that matches your interests? Create one and invite your friends!</p>
          <Button size="lg" className="gap-2">
            Create a Club
            <span>→</span>
          </Button>
        </Card>

        {/* Why Join */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-8">Why Join a Book Club?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">Discover New Books</h3>
              <p className="text-muted-foreground">Get personalized recommendations from readers with similar tastes and find your next favorite read.</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">Connect with Like-Minded Readers</h3>
              <p className="text-muted-foreground">Build friendships with people who share your passion for books and storytelling.</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">Deepen Your Appreciation</h3>
              <p className="text-muted-foreground">Gain new perspectives through discussions and analysis of themes and characters.</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">Exclusive Access</h3>
              <p className="text-muted-foreground">Members get special book club pricing, early access to new releases, and exclusive author events.</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">Flexible Participation</h3>
              <p className="text-muted-foreground">Choose between in-person meetings, virtual hangouts, or online forums - whatever works best for you.</p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-3">Read More</h3>
              <p className="text-muted-foreground">Studies show book club members read 30% more books per year than non-members.</p>
            </Card>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <div className="text-4xl mb-3">👥</div>
              <h3 className="font-bold text-foreground mb-2">Find or Create</h3>
              <p className="text-sm text-muted-foreground">Browse our clubs or start your own with friends</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="text-4xl mb-3">📖</div>
              <h3 className="font-bold text-foreground mb-2">Pick a Book</h3>
              <p className="text-sm text-muted-foreground">Vote on next month's selection from curated lists</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="text-4xl mb-3">💬</div>
              <h3 className="font-bold text-foreground mb-2">Discuss</h3>
              <p className="text-sm text-muted-foreground">Meet in-person or virtually to talk about the book</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="text-4xl mb-3">🎉</div>
              <h3 className="font-bold text-foreground mb-2">Enjoy Perks</h3>
              <p className="text-sm text-muted-foreground">Unlock discounts and exclusive member benefits</p>
            </Card>
          </div>
        </div>

        {/* FAQ */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
          
          <Card className="p-6">
            <h3 className="font-bold text-foreground mb-2">How much does it cost to join a club?</h3>
            <p className="text-muted-foreground">Joining is free! Some clubs may charge a small monthly fee for refreshments or event hosting.</p>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold text-foreground mb-2">Do I have to read the entire book?</h3>
            <p className="text-muted-foreground">Not necessarily! Participate as much as you're comfortable with. Many members join for community even if they're behind on reading.</p>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold text-foreground mb-2">Are book clubs only in-person?</h3>
            <p className="text-muted-foreground">No! We offer in-person, virtual, and hybrid clubs. Choose what works best for your schedule.</p>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold text-foreground mb-2">Can I be in multiple clubs?</h3>
            <p className="text-muted-foreground">Absolutely! Many members join 2-3 clubs to explore different genres and meet new people.</p>
          </Card>
        </div>
      </div>
    </MainLayout>
  )
}
