'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { mockFarms } from '@/data/mock-farms'
import { formatDate, getHealthStatusLabel } from '@/lib/utils'
import { Plus, Edit, Trash2, Eye } from 'lucide-react'

export default function FarmsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="gradient-ag text-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold mb-2">My Farms</h1>
              <p className="text-ag-lime">Manage your agricultural properties</p>
            </div>
            <Button className="bg-white text-ag-green hover:bg-gray-100">
              <Plus className="h-4 w-4 mr-2" />
              Add Farm
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockFarms.map((farm) => (
            <Card key={farm.id} className="hover:shadow-lg transition-shadow overflow-hidden">
              {farm.image && (
                <div className="w-full h-48 bg-gray-200 dark:bg-gray-800 overflow-hidden">
                  <img src={farm.image} alt={farm.name} className="w-full h-full object-cover" />
                </div>
              )}

              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{farm.name}</CardTitle>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{farm.location}</p>
                  </div>
                  <Badge variant={farm.healthStatus === 'healthy' ? 'success' : 'warning'}>
                    {farm.cropHealth}%
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Farm Info */}
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Total Area</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{farm.totalArea} ha</p>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Crop Type</p>
                    <p className="font-semibold text-gray-900 dark:text-white capitalize">{farm.cropType}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Fields</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{farm.fields.length}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Last Survey</p>
                    <p className="font-semibold text-gray-900 dark:text-white text-xs">
                      {formatDate(farm.lastSurvey)}
                    </p>
                  </div>
                </div>

                {/* Status */}
                <div className="flex gap-1">
                  <span className="text-xs text-gray-600 dark:text-gray-400">Status:</span>
                  <Badge variant="outline" className="text-xs capitalize">{farm.status}</Badge>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-4 border-t border-gray-200 dark:border-gray-800">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="text-red-600 dark:text-red-400">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
