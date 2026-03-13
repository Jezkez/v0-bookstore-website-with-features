'use client'

import MainLayout from '@/components/layout/MainLayout'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/context/AuthContext'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface Order {
  id: string
  date: string
  total: number
  status: string
  tracking: string
  items: number
}

export default function OrderStatusPage() {
  const router = useRouter()
  const { isAuthenticated } = useAuth()

  const orders: Order[] = [
    {
      id: 'ORD-001',
      date: '2024-03-10',
      total: 45.99,
      status: 'delivered',
      tracking: 'TRACK12345',
      items: 3,
    },
    {
      id: 'ORD-002',
      date: '2024-03-08',
      total: 72.50,
      status: 'in-transit',
      tracking: 'TRACK54321',
      items: 5,
    },
    {
      id: 'ORD-003',
      date: '2024-03-05',
      total: 28.75,
      status: 'processing',
      tracking: 'TRACK99999',
      items: 2,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'processing':
        return 'bg-blue-100 text-blue-700'
      case 'in-transit':
        return 'bg-yellow-100 text-yellow-700'
      case 'delivered':
        return 'bg-green-100 text-green-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  const getStatusText = (status: string) => {
    return status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')
  }

  if (!isAuthenticated) {
    return (
      <MainLayout>
        <div className="min-h-[60vh] flex items-center justify-center px-4 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Sign in to track orders</h1>
            <p className="text-muted-foreground mb-6">View the status of your purchases and track shipments.</p>
            <Button onClick={() => router.push('/login')}>Sign In</Button>
          </div>
        </div>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-8">Order Status</h1>

        {orders.length === 0 ? (
          <Card className="p-12 text-center">
            <p className="text-lg text-muted-foreground mb-6">You haven't placed any orders yet.</p>
            <Button asChild>
              <Link href="/categories">Start Shopping</Link>
            </Button>
          </Card>
        ) : (
          <div className="space-y-6">
            {orders.map(order => (
              <Card key={order.id} className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Order ID</p>
                    <p className="font-bold text-foreground">{order.id}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Order Date</p>
                    <p className="font-semibold text-foreground">{new Date(order.date).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Items</p>
                    <p className="font-semibold text-foreground">{order.items} book(s)</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Total</p>
                    <p className="font-bold text-primary">${order.total.toFixed(2)}</p>
                  </div>
                </div>

                <div className="border-t pt-4 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-block px-4 py-2 rounded text-sm font-semibold ${getStatusColor(order.status)}`}>
                      {getStatusText(order.status)}
                    </span>
                    <p className="text-sm text-muted-foreground">Tracking: {order.tracking}</p>
                  </div>

                  {/* Status Timeline */}
                  <div className="space-y-3">
                    <div className="flex items-start gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                        <div className="w-0.5 h-12 bg-green-300 my-1"></div>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Order Placed</p>
                        <p className="text-sm text-muted-foreground">{new Date(order.date).toLocaleDateString()}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`w-4 h-4 rounded-full ${order.status === 'processing' ? 'bg-blue-500' : 'bg-green-500'}`}></div>
                        <div className={`w-0.5 h-12 my-1 ${order.status === 'processing' || order.status === 'in-transit' || order.status === 'delivered' ? 'bg-green-300' : 'bg-gray-300'}`}></div>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Processing</p>
                        <p className="text-sm text-muted-foreground">Your order is being prepared</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`w-4 h-4 rounded-full ${order.status === 'in-transit' || order.status === 'delivered' ? 'bg-green-500' : 'bg-gray-500'}`}></div>
                        <div className={`w-0.5 h-12 my-1 ${order.status === 'delivered' ? 'bg-green-300' : 'bg-gray-300'}`}></div>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">In Transit</p>
                        <p className="text-sm text-muted-foreground">Your package is on the way</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className={`w-4 h-4 rounded-full ${order.status === 'delivered' ? 'bg-green-500' : 'bg-gray-500'}`}></div>
                      <div>
                        <p className="font-semibold text-foreground">Delivered</p>
                        <p className="text-sm text-muted-foreground">Expected within 2-3 days</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline">View Details</Button>
                  <Button variant="outline">Download Invoice</Button>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Help Section */}
        <Card className="p-6 mt-12 bg-muted/50">
          <h3 className="text-lg font-bold text-foreground mb-4">Tracking Help</h3>
          <p className="text-muted-foreground mb-4">Can't find your tracking information?</p>
          <Button asChild variant="outline">
            <Link href="/help/shipping">View Shipping Info</Link>
          </Button>
        </Card>
      </div>
    </MainLayout>
  )
}
