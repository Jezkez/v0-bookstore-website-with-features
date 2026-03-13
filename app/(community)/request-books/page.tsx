'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { BookPlus, CheckCircle, Clock } from 'lucide-react'

interface BookRequest {
  id: string
  title: string
  author: string
  isbn?: string
  requestedDate: string
  status: 'pending' | 'approved' | 'in-stock'
  votes: number
  userVoted: boolean
}

const mockRequests: BookRequest[] = [
  {
    id: '1',
    title: 'The Poppy War',
    author: 'R.F. Kuang',
    isbn: '9780062018020',
    requestedDate: 'December 10, 2024',
    status: 'in-stock',
    votes: 42,
    userVoted: true
  },
  {
    id: '2',
    title: 'Recursion',
    author: 'Blake Crouch',
    isbn: '9781984033009',
    requestedDate: 'December 5, 2024',
    status: 'approved',
    votes: 38,
    userVoted: false
  },
  {
    id: '3',
    title: 'The Space Between Worlds',
    author: 'Micaiah Johnson',
    isbn: '9780062979049',
    requestedDate: 'November 28, 2024',
    status: 'pending',
    votes: 25,
    userVoted: false
  }
]

export default function RequestBooksPage() {
  const { user } = useAuth()
  const [requests, setRequests] = useState<BookRequest[]>(mockRequests)
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    isbn: '',
    reason: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!user) return

    // In a real app, this would save to database
    console.log('Book request submitted:', formData)
    setSubmitted(true)
    setFormData({ title: '', author: '', isbn: '', reason: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleVote = (id: string) => {
    setRequests(prev =>
      prev.map(req =>
        req.id === id
          ? { ...req, votes: req.userVoted ? req.votes - 1 : req.votes + 1, userVoted: !req.userVoted }
          : req
      )
    )
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'in-stock':
        return <CheckCircle className="w-5 h-5 text-green-600" />
      case 'approved':
        return <Clock className="w-5 h-5 text-blue-600" />
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-600" />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Request Books</h1>
          <p className="text-muted-foreground">
            Request books you'd like to see in our collection and vote for others' requests
          </p>
        </div>

        {!user ? (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground mb-4">You need to be logged in to request books</p>
              <Link href="/login">
                <Button>Sign In</Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Request Form */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookPlus className="w-5 h-5" />
                    Request a Book
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="title">Book Title *</Label>
                      <Input
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter book title"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="author">Author *</Label>
                      <Input
                        id="author"
                        name="author"
                        value={formData.author}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter author name"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="isbn">ISBN (Optional)</Label>
                      <Input
                        id="isbn"
                        name="isbn"
                        value={formData.isbn}
                        onChange={handleInputChange}
                        placeholder="13 or 10-digit ISBN"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="reason">Why should we add this? (Optional)</Label>
                      <Textarea
                        id="reason"
                        name="reason"
                        value={formData.reason}
                        onChange={handleInputChange}
                        placeholder="Tell us why you think this book would be a great addition..."
                        className="mt-2 min-h-20"
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      {submitted ? 'Request Submitted!' : 'Submit Request'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Requests List */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Popular Requests</h2>
                <select className="px-3 py-2 border rounded-lg text-sm bg-background">
                  <option>Most Voted</option>
                  <option>Newest</option>
                  <option>Most Commented</option>
                </select>
              </div>

              {requests.map(request => (
                <Card key={request.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="py-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-bold text-lg">{request.title}</h3>
                            <p className="text-muted-foreground">by {request.author}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            {getStatusIcon(request.status)}
                            <span className="text-xs font-medium capitalize bg-secondary px-2 py-1 rounded">
                              {request.status === 'in-stock' ? 'In Stock' : request.status}
                            </span>
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground mb-3">
                          Requested {request.requestedDate}
                        </p>

                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">
                            {request.votes} {request.votes === 1 ? 'vote' : 'votes'}
                          </span>
                          <Button
                            variant={request.userVoted ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => handleVote(request.id)}
                          >
                            👍 {request.userVoted ? 'Voted' : 'Vote'}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
