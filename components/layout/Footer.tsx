'use client'

import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube, Music2, Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Newsletter */}
      <div className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-2">Join the Re:Book Community</h3>
          <p className="mb-6">Get exclusive deals, book recommendations, and reading tips delivered to your inbox.</p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded text-foreground"
            />
            <Button className="bg-primary-foreground text-primary hover:bg-gray-100">Subscribe</Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* Shop */}
          <div>
            <h4 className="font-bold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/categories/fiction" className="hover:text-primary">Fiction</Link></li>
              <li><Link href="/categories/manga" className="hover:text-primary">Manga</Link></li>
              <li><Link href="/categories/manhwa" className="hover:text-primary">Manhwa</Link></li>
              <li><Link href="/categories/non-fiction" className="hover:text-primary">Non-Fiction</Link></li>
              <li><Link href="/categories/classics" className="hover:text-primary">Classics</Link></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-bold mb-4">Community</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/account/rewards" className="hover:text-primary">Rewards Program</Link></li>
              <li><Link href="/account/referral" className="hover:text-primary">Refer a Friend</Link></li>
              <li><Link href="/account/wishlist" className="hover:text-primary">Wishlist</Link></li>
              <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
              <li><Link href="#reviews" className="hover:text-primary">Reviews</Link></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-bold mb-4">About Re:Book</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/sell" className="hover:text-primary">Sell Your Books</Link></li>
              <li><Link href="#wholesale" className="hover:text-primary">Wholesale</Link></li>
              <li><Link href="#affiliates" className="hover:text-primary">Affiliates</Link></li>
              <li><Link href="#gift-card" className="hover:text-primary">Gift Cards</Link></li>
              <li><Link href="#partnerships" className="hover:text-primary">Partnerships</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/help/order-status" className="hover:text-primary">Order Status</Link></li>
              <li><Link href="/help/shipping" className="hover:text-primary">Shipping</Link></li>
              <li><Link href="/help/returns" className="hover:text-primary">Returns</Link></li>
              <li><Link href="/help/faq" className="hover:text-primary">FAQs</Link></li>
              <li><Link href="/help/contact" className="hover:text-primary">Contact Us</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary">Terms of Service</Link></li>
              <li><Link href="/help/cookies" className="hover:text-primary">Cookie Settings</Link></li>
              <li><Link href="/help/personal-info" className="hover:text-primary">Personal Information</Link></li>
              <li><Link href="/help/accessibility" className="hover:text-primary">Accessibility</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-opacity-20 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Social Links */}
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="X (formerly Twitter)">
                  <Twitter className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" title="Pinterest">
                  <Share2 className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://tumblr.com" target="_blank" rel="noopener noreferrer" title="Tumblr">
                  <Music2 className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" title="YouTube">
                  <Youtube className="w-5 h-5" />
                </a>
              </Button>
            </div>

            {/* Copyright */}
            <div className="text-sm text-center md:text-right">
              <p>&copy; 2026 Re:Book. All rights reserved. | Celebrating the love of reading.</p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-opacity-10 bg-foreground p-4 rounded text-xs text-center">
          <p>Re:Book is committed to supporting independent bookstores and authors. Every purchase supports our community of readers and writers.</p>
        </div>
      </div>
    </footer>
  )
}
