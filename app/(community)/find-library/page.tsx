'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { MapPin, Clock, Phone, Globe } from 'lucide-react'

interface Library {
  id: string
  name: string
  address: string
  phone: string
  website: string
  hours: string
  distance: number
}

const mockLibraries: Library[] = [
  {
    id: '1',
    name: 'Central City Library',
    address: '123 Main St, Downtown',
    phone: '(555) 123-4567',
    website: 'https://librarysystem.org',
    hours: 'Mon-Fri: 9am-9pm, Sat-Sun: 10am-6pm',
    distance: 0.5
  },
  {
    id: '2',
    name: 'Riverside Branch Library',
    address: '456 River Road, Riverside',
    phone: '(555) 234-5678',
    website: 'https://librarysystem.org/riverside',
    hours: 'Tue-Thu: 10am-8pm, Fri-Sat: 10am-6pm, Sun: 1pm-5pm',
    distance: 2.3
  },
  {
    id: '3',
    name: 'East Side Community Library',
    address: '789 East Ave, East Side',
    phone: '(555) 345-6789',
    website: 'https://librarysystem.org/eastside',
    hours: 'Mon-Sat: 10am-7pm, Sun: 12pm-5pm',
    distance: 3.1
  }
]

export default function FindLibraryPage() {
  const [location, setLocation] = useState('')
  const [libraries, setLibraries] = useState<Library[]>(mockLibraries)

  const handleSearch = () => {
    // In a real app, this would search for actual libraries
    console.log('Searching for libraries near:', location)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Find Local Libraries</h1>
          <p className="text-muted-foreground">Discover libraries in your area using WorldCat</p>
        </div>

        {/* Search Box */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                placeholder="Enter your city or ZIP code..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="flex-1"
              />
              <Button onClick={handleSearch} className="sm:w-auto">
                <MapPin className="w-4 h-4 mr-2" />
                Search Libraries
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Libraries List */}
        <div className="space-y-4">
          {libraries.map(library => (
            <Card key={library.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>{library.name}</CardTitle>
                    <CardDescription className="flex items-center gap-1 mt-1">
                      <MapPin className="w-4 h-4" />
                      {library.address} • {library.distance} mi away
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Hours</p>
                      <p className="text-sm text-muted-foreground">{library.hours}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">Phone</p>
                      <a href={`tel:${library.phone}`} className="text-sm text-primary hover:underline">
                        {library.phone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1" asChild>
                    <a href={library.website} target="_blank" rel="noopener noreferrer">
                      <Globe className="w-4 h-4 mr-2" />
                      Visit Website
                    </a>
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Get Directions
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* WorldCat Info */}
        <Card className="mt-8 bg-secondary">
          <CardHeader>
            <CardTitle>About WorldCat</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              WorldCat is a global library catalog that helps you find books in libraries near you. 
              By discovering local library copies, you can access books without purchasing them, 
              reducing costs and supporting your community.
            </p>
            <Button variant="outline" asChild>
              <a href="https://www.worldcat.org" target="_blank" rel="noopener noreferrer">
                Visit WorldCat.org
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
