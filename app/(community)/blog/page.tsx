'use client'

import Link from 'next/link'
import { MainLayout } from '@/components/layout/MainLayout'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar, User } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'Top 10 Must-Read Fantasy Novels of 2024',
    excerpt: 'Explore the most captivating fantasy worlds that will transport you to magical realms.',
    author: 'Sarah Chen',
    date: 'May 10, 2024',
    category: 'Reviews',
    image: '📚',
  },
  {
    id: 2,
    title: 'Building Your Home Library: A Guide',
    excerpt: 'Tips and tricks for curating the perfect personal book collection.',
    author: 'James Mitchell',
    date: 'May 8, 2024',
    category: 'Guide',
    image: '🏠',
  },
  {
    id: 3,
    title: 'Manga vs Manhwa: Understanding the Differences',
    excerpt: 'A deep dive into the origins, styles, and cultural significance of these art forms.',
    author: 'Alex Park',
    date: 'May 5, 2024',
    category: 'Education',
    image: '🎨',
  },
  {
    id: 4,
    title: 'How Reading Challenges Transform Your Year',
    excerpt: 'Success stories from our community members who completed their reading goals.',
    author: 'Emma Williams',
    date: 'May 1, 2024',
    category: 'Community',
    image: '⭐',
  },
  {
    id: 5,
    title: 'Pre-Loved Books: Sustainability Meets Affordability',
    excerpt: 'Why buying second-hand books is good for your wallet and the planet.',
    author: 'David Green',
    date: 'April 28, 2024',
    category: 'Sustainability',
    image: '♻️',
  },
  {
    id: 6,
    title: 'Author Interview: Conversations with Rising Stars',
    excerpt: 'Exclusive interviews with upcoming authors shaping the literary world.',
    author: 'Lisa Anderson',
    date: 'April 25, 2024',
    category: 'Interviews',
    image: '🎤',
  },
]

export default function BlogPage() {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Blog Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Re:Book Blog</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Discover book reviews, reading tips, author interviews, and community stories from fellow book lovers.
          </p>
        </div>

        {/* Featured Post */}
        {blogPosts.length > 0 && (
          <div className="mb-16 bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition">
            <div className="grid md:grid-cols-2 gap-6 p-6">
              <div className="text-6xl flex items-center justify-center bg-secondary/10 rounded-lg">
                {blogPosts[0].image}
              </div>
              <div className="flex flex-col justify-center">
                <div className="inline-block mb-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                    {blogPosts[0].category}
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-3">{blogPosts[0].title}</h2>
                <p className="text-muted-foreground mb-4">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {blogPosts[0].author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {blogPosts[0].date}
                  </span>
                </div>
                <Link href="#" className="w-fit">
                  <Button className="gap-2">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div>
          <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post) => (
              <Link key={post.id} href="#" className="group">
                <div className="bg-card rounded-lg border border-border overflow-hidden hover:border-primary hover:shadow-lg transition h-full">
                  <div className="text-5xl bg-secondary/10 p-6 text-center group-hover:scale-110 transition">
                    {post.image}
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-2 py-1 bg-primary/10 text-primary rounded text-xs font-semibold mb-3">
                      {post.category}
                    </span>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
