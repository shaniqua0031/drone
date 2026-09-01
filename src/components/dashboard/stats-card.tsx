'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowUp, ArrowDown, Minus } from 'lucide-react'

export interface StatCardProps {
  title: string
  value: string | number
  description?: string
  trend?: number
  icon?: React.ReactNode
  variant?: 'default' | 'success' | 'warning' | 'danger'
}

export function StatCard({ title, value, description, trend, icon, variant = 'default' }: StatCardProps) {
  const getVariantStyles = () => {
    const baseIcon = 'h-5 w-5'
    switch (variant) {
      case 'success':
        return { icon: 'text-green-500', bg: 'bg-green-100 dark:bg-green-900' }
      case 'warning':
        return { icon: 'text-yellow-500', bg: 'bg-yellow-100 dark:bg-yellow-900' }
      case 'danger':
        return { icon: 'text-red-500', bg: 'bg-red-100 dark:bg-red-900' }
      default:
        return { icon: 'text-ag-green', bg: 'bg-ag-lime/10' }
    }
  }

  const styles = getVariantStyles()
  const getTrendIcon = () => {
    if (!trend) return <Minus className="h-4 w-4 text-gray-500" />
    return trend > 0 ? <ArrowUp className="h-4 w-4 text-green-500" /> : <ArrowDown className="h-4 w-4 text-red-500" />
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon && <div className={`rounded-lg p-2 ${styles.bg}`}>{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{description}</p>}
        {trend !== undefined && (
          <div className="flex items-center gap-1 mt-2 text-xs">
            {getTrendIcon()}
            <span className={trend > 0 ? 'text-green-600' : 'text-red-600'}>
              {Math.abs(trend)}% from last month
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
