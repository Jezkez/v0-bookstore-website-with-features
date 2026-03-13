'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { QrCode, BookOpen } from 'lucide-react'

export default function QRScanPage() {
  const router = useRouter()
  const [isbn, setIsbn] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isbn.trim()) return

    setLoading(true)
    // In a real app, this would search for the book by ISBN
    await new Promise(resolve => setTimeout(resolve, 500))
    
    // Redirect to search results
    router.push(`/search?isbn=${encodeURIComponent(isbn)}`)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <QrCode className="w-16 h-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-2">QR Code & ISBN Search</h1>
          <p className="text-muted-foreground">Scan a QR code or enter an ISBN to find books</p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* QR Scanner */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <QrCode className="w-5 h-5" />
                Scan QR Code
              </CardTitle>
              <CardDescription>Use your device camera to scan a book QR code</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-square bg-secondary rounded-lg flex items-center justify-center mb-4 border-2 border-dashed">
                <div className="text-center">
                  <QrCode className="w-16 h-16 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Camera access needed</p>
                  <p className="text-xs text-muted-foreground mt-1">Enable camera in settings</p>
                </div>
              </div>
              <Button className="w-full" disabled>
                Start Camera Scan
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-3">
                QR code scanning requires HTTPS and camera permissions
              </p>
            </CardContent>
          </Card>

          {/* ISBN Lookup */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                ISBN Search
              </CardTitle>
              <CardDescription>Enter a 10 or 13-digit ISBN</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSearch} className="space-y-4">
                <div>
                  <Input
                    placeholder="e.g., 978-0-13-110362-7"
                    value={isbn}
                    onChange={(e) => setIsbn(e.target.value.replace(/\D/g, ''))}
                    maxLength="13"
                    className="text-lg tracking-wider"
                  />
                  <p className="text-xs text-muted-foreground mt-2">
                    ISBN will be formatted automatically
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="p-3 bg-secondary rounded-lg">
                    <p className="text-sm font-medium">What is an ISBN?</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      The International Standard Book Number is a unique 10 or 13-digit code 
                      assigned to published books. You can usually find it on the back cover or copyright page.
                    </p>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={loading || isbn.length < 10}
                >
                  {loading ? 'Searching...' : 'Search by ISBN'}
                </Button>
              </form>

              <div className="mt-4 space-y-2 text-xs text-muted-foreground">
                <p>• ISBN-10: 10 digits</p>
                <p>• ISBN-13: 13 digits (starts with 978 or 979)</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Example ISBNs */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-base">Popular Books to Try</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 bg-secondary rounded-lg hover:bg-secondary/80 cursor-pointer transition">
                <div>
                  <p className="font-medium text-sm">Project Hail Mary</p>
                  <p className="text-xs text-muted-foreground">Andy Weir</p>
                </div>
                <code className="text-xs bg-background p-2 rounded">9780593135204</code>
              </div>
              <div className="flex items-center justify-between p-3 bg-secondary rounded-lg hover:bg-secondary/80 cursor-pointer transition">
                <div>
                  <p className="font-medium text-sm">The Midnight Library</p>
                  <p className="text-xs text-muted-foreground">Matt Haig</p>
                </div>
                <code className="text-xs bg-background p-2 rounded">9780020195641</code>
              </div>
              <div className="flex items-center justify-between p-3 bg-secondary rounded-lg hover:bg-secondary/80 cursor-pointer transition">
                <div>
                  <p className="font-medium text-sm">Dune</p>
                  <p className="text-xs text-muted-foreground">Frank Herbert</p>
                </div>
                <code className="text-xs bg-background p-2 rounded">9780441013593</code>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
