'use client'

import { useState, useEffect } from 'react'
import usePerformanceMonitor from '../hooks/usePerformanceMonitor'

export function PerformanceMonitor() {
  const [isVisible, setIsVisible] = useState(false)
  const { metrics, performanceScore, reportMetrics } = usePerformanceMonitor()

  // Solo mostrar en desarrollo
  useEffect(() => {
    setIsVisible(process.env.NODE_ENV === 'development')
  }, [])

  if (!isVisible) return null

  const getScoreColor = (score: string) => {
    switch (score) {
      case 'good': return 'text-green-600 bg-green-100'
      case 'needs-improvement': return 'text-yellow-600 bg-yellow-100'
      case 'poor': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const formatMetric = (value: number | undefined, unit: string = 'ms') => {
    if (value === undefined) return 'N/A'
    return `${Math.round(value)}${unit}`
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-gray-800">Performance</h3>
          <div className={`px-2 py-1 rounded text-xs font-medium ${getScoreColor(performanceScore)}`}>
            {performanceScore}
          </div>
        </div>
        
        <div className="space-y-2 text-xs">
          <div className="flex justify-between">
            <span className="text-gray-600">Navigation:</span>
            <span className="font-mono">{formatMetric(metrics.navigationTime)}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600">FCP:</span>
            <span className="font-mono">{formatMetric(metrics.fcp)}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600">LCP:</span>
            <span className="font-mono">{formatMetric(metrics.lcp)}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600">FID:</span>
            <span className="font-mono">{formatMetric(metrics.fid)}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600">CLS:</span>
            <span className="font-mono">{formatMetric(metrics.cls, '')}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600">TTFB:</span>
            <span className="font-mono">{formatMetric(metrics.ttfb)}</span>
          </div>
        </div>
        
        <button
          onClick={reportMetrics}
          className="mt-3 w-full text-xs bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 transition-colors"
        >
          Log to Console
        </button>
      </div>
    </div>
  )
}

export default PerformanceMonitor