'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Service } from '@/types'
import {
  ArrowRight, Leaf, MapPin, Heart, Droplets, AlertCircle,
  BarChart3, Ruler, Eye, Camera, Sprout, Zap
} from 'lucide-react'

const ICON_MAP: Record<string, React.ElementType> = {
  Leaf, MapPin, Heart, Droplets, AlertCircle,
  BarChart3, Ruler, Eye, Camera, Sprout, Zap
}

export interface ServiceCardProps {
  service: Service
  onLearnMore?: (service: Service) => void
  onRequest?: (service: Service) => void
}

export function ServiceCard({ service, onLearnMore, onRequest }: ServiceCardProps) {
  const IconComponent = ICON_MAP[service.icon] || ICON_MAP.Zap

  const handleRequest = () => {
    if (onRequest) {
      onRequest(service)
    } else {
      localStorage.setItem('selectedService', service.name)
      window.location.href = '/contact'
    }
  }

  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <div className="rounded-lg p-2 bg-ag-lime/20">
            <IconComponent className="h-6 w-6 text-ag-green" />
          </div>
          {service.pricing && <Badge variant="secondary">{service.pricing}</Badge>}
        </div>
        <CardTitle className="text-lg">{service.name}</CardTitle>
        <CardDescription className="line-clamp-2">{service.description}</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col flex-1">
        {/* Benefits */}
        <div className="mb-4">
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Benefits:</p>
          <ul className="space-y-1">
            {service.benefits.slice(0, 3).map((benefit, idx) => (
              <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex gap-2">
                <span className="text-ag-green">•</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Additional Info */}
        {service.turnaroundTime && (
          <div className="mb-3 p-3 bg-gray-50 dark:bg-gray-900 rounded text-sm">
            <p className="font-semibold text-gray-700 dark:text-gray-300">Turnaround: {service.turnaroundTime}</p>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-2 mt-auto pt-4 border-t border-gray-200 dark:border-gray-800">
          {onLearnMore && (
            <button
              onClick={() => onLearnMore(service)}
              className="flex-1 text-sm font-medium text-ag-green hover:text-ag-dark transition-colors flex items-center justify-center gap-1"
            >
              Learn More
              <ArrowRight className="h-4 w-4" />
            </button>
          )}
          <Button
            size="sm"
            className="flex-1"
            onClick={handleRequest}
          >
            Request Service
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
