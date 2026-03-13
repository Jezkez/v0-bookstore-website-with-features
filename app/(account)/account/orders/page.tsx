'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ChevronLeft, Package, Truck, CheckCircle, Clock } from 'lucide-react'

interface Order {
  id: string
  orderNumber: string
  date: string
  total: number
  status: 'pending' | 'shipped' | 'delivered' | 'processing'
  items: {
    id: string
    title: string
    author: string
    price: number
    image: string
  }[]
}

const mockOrders: Order[] = [
  {
    id: '1',
    orderNumber: 'ORD-2024-001',
    date: 'December 20, 2024',
    total: 45.99,
    status: 'delivered',
    items: [
      {
        id: '1',
        title: 'Project Hail Mary',
        author: 'Andy Weir',
        price: 22.99,
        image: 'https://images.unsplash.com/photo-1507842217343-583f7270bfed?w=200&h=300&fit=crop'
      },
      {
        id: '2',
        title: 'The Midnight Library',
        author: 'Matt Haig',
        price: 23.00,
        image: 'https://images.unsplash.com/photo-1507842217343-583f7270bfed?w=200&h=300&fit=crop'
      }
    ]
  },
  {
    id: '2',
    orderNumber: 'ORD-2024-002',
    date: 'December 15, 2024',
    total: 34.99,
    status: 'shipped',
    items: [
      {
        id: '3',
        title: 'Dune',
        author: 'Frank Herbert',
        price: 34.99,
        image: 'https://images.unsplash.com/photo-1507842217343-583f7270bfed?w=200&h=300&fit=crop'
      }
    ]
  },
  {
    id: '3',
    orderNumber: 'ORD-2024-003',
    date: 'December 10, 2024',
    total: 28.99,
    status: 'processing',
    items: [
      {
        id: '4',
        title: 'Atomic Habits',
        author: 'James Clear',
        price: 28.99,
        image: 'https://images.unsplash.com/photo-1507842217343-583f7270bfed?w=200&h=300&fit=crop'
      }
    ]
  }
]

function getStatusIcon(status: string) {
  switch (status) {
    case 'delivered':
      return <CheckCircle className="w-5 h-5 text-green-600" />
    case 'shipped':
      return <Truck className="w-5 h-5 text-blue-600" />
    case 'processing':
      return <Clock className="w-5 h-5 text-yellow-600" />
    default:
      return <Package className="w-5 h-5 text-gray-600" />
  }
}

function getStatusLabel(status: string) {
  switch (status) {
    case 'delivered':
      return 'Delivered'
    case 'shipped':
      return 'Shipped'
    case 'processing':
      return 'Processing'
    case 'pending':
      return 'Pending'
    default:
      return status
  }
}

function getStatusColor(status: string) {
  switch (status) {
    case 'delivered':
      return 'bg-green-100 text-green-800'
    case 'shipped':
      return 'bg-blue-100 text-blue-800'
    case 'processing':
      return 'bg-yellow-100 text-yellow-800'
    case 'pending':
      return 'bg-gray-100 text-gray-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

export default function OrderHistoryPage() {
  const { user } = useAuth()
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)

  if (!user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Please Log In</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">You need to be logged in to view your orders.</p>
            <Link href="/login">
              <Button className="w-full">Go to Login</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/account" className="p-2 hover:bg-secondary rounded-lg">
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold">Order History</h1>
            <p className="text-muted-foreground">View and track your orders</p>
          </div>
        </div>

        {/* Orders List */}
        <div className="space-y-4">
          {mockOrders.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <Package className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground mb-4">No orders yet</p>
                <Link href="/categories">
                  <Button>Start Shopping</Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            mockOrders.map(order => (
              <Card key={order.id} className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setSelectedOrder(order)}>
                <CardContent className="py-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-lg">{order.orderNumber}</h3>
                      <p className="text-sm text-muted-foreground">{order.date}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(order.status)}
                      <Badge className={getStatusColor(order.status)}>
                        {getStatusLabel(order.status)}
                      </Badge>
                    </div>
                  </div>

                  {/* Order Items Preview */}
                  <div className="mb-4 space-y-2">
                    {order.items.map(item => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span>{item.title}</span>
                        <span className="font-medium">${item.price.toFixed(2)}</span>
                      </div>
                    ))}
                  </div>

                  {/* Total */}
                  <div className="border-t pt-4 flex justify-between items-center">
                    <span className="font-semibold">Total:</span>
                    <span className="text-lg font-bold text-primary">${order.total.toFixed(2)}</span>
                  </div>

                  {/* Actions */}
                  <div className="mt-4 flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      Track Order
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Download Invoice
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
