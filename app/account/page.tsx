'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function AccountRedirect() {
  const router = useRouter()
  
  useEffect(() => {
    router.push('/(account)/account')
  }, [router])
  
  return null
}
