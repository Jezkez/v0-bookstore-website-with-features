'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function BlogRedirect() {
  const router = useRouter()
  
  useEffect(() => {
    router.push('/(community)/blog')
  }, [router])
  
  return null
}
