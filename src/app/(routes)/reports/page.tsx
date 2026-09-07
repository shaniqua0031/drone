'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { mockReports } from '@/data/mock-reports'
import { formatDate } from '@/lib/utils'
import { Download, Eye, Search } from 'lucide-react'

export default function ReportsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')

  const filteredReports = mockReports.filter((report) => {
    const matchesSearch = report.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === 'all' || report.status === filterStatus
    return matchesSearch && matchesStatus
  })

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="gradient-ag text-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">Farm Reports</h1>
          <p className="text-ag-lime">View, download, and analyze your farm survey reports</p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Input
              placeholder="Search reports..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              icon={<Search className="h-5 w-5" />}
            />
          </div>
          <div className="flex gap-2">
            {['all', 'completed', 'processing'].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filterStatus === status
                    ? 'bg-ag-green text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-ag-green'
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Reports Grid */}
        {filteredReports.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReports.map((report) => (
              <Card key={report.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg line-clamp-2">{report.title}</CardTitle>
                    <Badge>{report.type}</Badge>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {formatDate(report.date)}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Health Score */}
                  <div className="flex items-center gap-2">
                    <div className="flex-1">
                      <div className="flex justify-between text-sm font-medium mb-1">
                        <span className="text-gray-700 dark:text-gray-300">Crop Health</span>
                        <span className="text-ag-green">{report.cropHealth}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-ag-green h-2 rounded-full transition-all"
                          style={{ width: `${report.cropHealth}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 text-center text-sm">
                    <div className="bg-green-50 dark:bg-green-900 rounded p-2">
                      <p className="text-green-700 dark:text-green-300 font-semibold">Healthy</p>
                      <p className="text-green-600 dark:text-green-400">{report.healthyArea}%</p>
                    </div>
                    <div className="bg-yellow-50 dark:bg-yellow-900 rounded p-2">
                      <p className="text-yellow-700 dark:text-yellow-300 font-semibold">Stressed</p>
                      <p className="text-yellow-600 dark:text-yellow-400">{report.stressedArea}%</p>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900 rounded p-2">
                      <p className="text-red-700 dark:text-red-300 font-semibold">Damaged</p>
                      <p className="text-red-600 dark:text-red-400">{report.damagedArea}%</p>
                    </div>
                  </div>

                  {/* Problems */}
                  {report.problems.length > 0 && (
                    <div className="bg-orange-50 dark:bg-orange-900 rounded p-2">
                      <p className="text-sm font-medium text-orange-900 dark:text-orange-100">
                        {report.problems.length} issue{report.problems.length !== 1 ? 's' : ''} detected
                      </p>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button variant="outline" className="flex-1" size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-600 dark:text-gray-400 text-lg">No reports found</p>
          </div>
        )}
      </div>
    </div>
  )
}
