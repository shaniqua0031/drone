import { HEALTH_STATUSES, PRIORITY_LEVELS } from '@/data/constants'

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-ZA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function formatTime(time: string): string {
  return new Date(`2000-01-01 ${time}`).toLocaleTimeString('en-ZA', {
    hour: '2-digit',
    minute: '2-digit',
  })
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-ZA').format(num)
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
  }).format(amount)
}

export function getHealthStatusColor(status: string): string {
  const found = HEALTH_STATUSES.find((h) => h.value === status)
  return found ? found.color : 'bg-gray-500'
}

export function getHealthStatusLabel(status: string): string {
  const found = HEALTH_STATUSES.find((h) => h.value === status)
  return found ? found.label : status
}

export function getPriorityColor(priority: string): string {
  const found = PRIORITY_LEVELS.find((p) => p.value === priority)
  return found ? found.color : 'bg-gray-500'
}

export function getPriorityLabel(priority: string): string {
  const found = PRIORITY_LEVELS.find((p) => p.value === priority)
  return found ? found.label : priority
}

export function calculateHealthPercentage(healthy: number, total: number): number {
  if (total === 0) return 0
  return Math.round((healthy / total) * 100)
}

export function getHealthStatus(percentage: number): 'healthy' | 'moderate' | 'at-risk' | 'critical' {
  if (percentage >= 80) return 'healthy'
  if (percentage >= 60) return 'moderate'
  if (percentage >= 40) return 'at-risk'
  return 'critical'
}

export function calculateAreaHectares(areaMeters: number): number {
  return areaMeters / 10000
}

export function calculateDuration(startTime: string, endTime: string): number {
  const start = new Date(`2000-01-01 ${startTime}`)
  const end = new Date(`2000-01-01 ${endTime}`)
  return Math.round((end.getTime() - start.getTime()) / (1000 * 60))
}

export function generateId(prefix: string): string {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

export function sortByDate<T extends { date: string }>(arr: T[], descending = true): T[] {
  return [...arr].sort((a, b) => {
    const dateA = new Date(a.date).getTime()
    const dateB = new Date(b.date).getTime()
    return descending ? dateB - dateA : dateA - dateB
  })
}

export function filterByStatus<T extends { status: string }>(arr: T[], status: string): T[] {
  return arr.filter((item) => item.status === status)
}

export function groupByFarm<T extends { farmId: string }>(arr: T[]): Record<string, T[]> {
  return arr.reduce(
    (acc, item) => {
      if (!acc[item.farmId]) {
        acc[item.farmId] = []
      }
      acc[item.farmId].push(item)
      return acc
    },
    {} as Record<string, T[]>,
  )
}

export function paginate<T>(arr: T[], page: number, pageSize: number): T[] {
  const start = (page - 1) * pageSize
  return arr.slice(start, start + pageSize)
}

export function calculateTotalPages(total: number, pageSize: number): number {
  return Math.ceil(total / pageSize)
}

export function debounce<T extends (...args: any[]) => any>(func: T, wait: number) {
  let timeout: NodeJS.Timeout | null = null
  return function executedFunction(...args: any[]) {
    const later = () => {
      timeout = null
      func(...args)
    }
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

export function throttle<T extends (...args: any[]) => any>(func: T, limit: number) {
  let inThrottle: boolean
  return function (...args: any[]) {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}
