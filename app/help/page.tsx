'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function HelpRedirect() {
  const router = useRouter()
  
  useEffect(() => {
    router.push('/(help)/help')
  }, [router])
  
  return null
}
