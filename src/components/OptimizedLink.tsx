'use client'

import Link from 'next/link'
import { useCallback, useRef, useEffect } from 'react'
import useOptimizedNavigation from '../hooks/useOptimizedNavigation'

interface OptimizedLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  prefetch?: boolean
  intersectionPrefetch?: boolean
  onClick?: () => void
  [key: string]: any
}

export function OptimizedLink({
  href,
  children,
  className = '',
  prefetch = true,
  intersectionPrefetch = false,
  onClick,
  ...props
}: OptimizedLinkProps) {
  const { handleMouseEnter, createIntersectionPrefetch } = useOptimizedNavigation()
  const linkRef = useRef<HTMLAnchorElement>(null)

  // Configurar intersection observer para prefetch
  useEffect(() => {
    if (!intersectionPrefetch || !linkRef.current) return

    const observer = new IntersectionObserver(
      createIntersectionPrefetch(href),
      {
        rootMargin: '100px', // Prefetch cuando esté a 100px de ser visible
        threshold: 0.1
      }
    )

    observer.observe(linkRef.current)

    return () => observer.disconnect()
  }, [intersectionPrefetch, href, createIntersectionPrefetch])

  const handleClick = useCallback(() => {
    onClick?.()
  }, [onClick])

  const handleMouseEnterOptimized = useCallback(() => {
    handleMouseEnter(href)
  }, [handleMouseEnter, href])

  return (
    <Link
      ref={linkRef}
      href={href}
      prefetch={prefetch}
      onMouseEnter={handleMouseEnterOptimized}
      onClick={handleClick}
      className={className}
      {...props}
    >
      {children}
    </Link>
  )
}

export default OptimizedLink