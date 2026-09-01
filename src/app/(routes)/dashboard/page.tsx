'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { StatCard } from '@/components/dashboard/stats-card'
import { mockFarms } from '@/data/mock-farms'
import { mockReports } from '@/data/mock-reports'
import { mockDroneFlights } from '@/data/mock-drones'
import { DASHBOARD_STATS_MOCK, WEATHER_MOCK } from '@/data/constants'
import { formatDate, getHealthStatusColor, getHealthStatusLabel } from '@/lib/utils'
import { Leaf, Map, BarChart3, Cloud, Droplets, Wind, Eye, Download, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts'

export default function DashboardPage() {
  const [selectedFarm, setSelectedFarm] = useState<string | null>(null)
  
  const selectedFarmData = selectedFarm ? mockFarms.find((f) => f.id === selectedFarm) : mockFarms[0]

  // Mock data for charts
  const healthTrendData = [
    { date: 'Aug 14', health: 78, problems: 12 },
    { date: 'Aug 21', health: 82, problems: 8 },
    { date: 'Aug 28', health: 85, problems: 5 },
    { date: 'Sep 4', health: 88, problems: 2 },
  ]

  const cropGrowthData = [
    { week: 'Week 1', maize: 20, wheat: 18, soybeans: 15 },
    { week: 'Week 2', maize: 35, wheat: 32, soybeans: 28 },
    { week: 'Week 3', maize: 52, wheat: 48, soybeans: 44 },
    { week: 'Week 4', maize: 71, wheat: 67, soybeans: 61 },
  ]

  const recentFlights = mockDroneFlights.slice(0, 5)
  const recentReports = mockReports.slice(0, 3)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="gradient-ag text-white py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-2">Farmer Dashboard</h1>
          <p className="text-ag-lime">Monitor your farms and get AI-powered insights</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Statistics */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Overview</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <StatCard
              title="Farms Monitored"
              value={DASHBOARD_STATS_MOCK.totalFarmsMonitored}
              icon={<Leaf className="h-5 w-5" />}
              variant="success"
            />
            <StatCard
              title="Hectares Mapped"
              value={`${(DASHBOARD_STATS_MOCK.totalHectaresMapped / 1000).toFixed(1)}K`}
              icon={<Map className="h-5 w-5" />}
              variant="success"
            />
            <StatCard
              title="Avg Crop Health"
              value={`${DASHBOARD_STATS_MOCK.averageCropHealth}%`}
              icon={<BarChart3 className="h-5 w-5" />}
              variant="success"
            />
            <StatCard
              title="Problem Areas"
              value={DASHBOARD_STATS_MOCK.detectedProblems}
              description="Requiring attention"
              icon={<Eye className="h-5 w-5" />}
              variant="warning"
            />
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Charts and Farms */}
          <div className="lg:col-span-2 space-y-8">
            {/* Farm Selection */}
            <Card>
              <CardHeader>
                <CardTitle>Your Farms</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {mockFarms.map((farm) => (
                    <button
                      key={farm.id}
                      onClick={() => setSelectedFarm(farm.id)}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-colors ${
                        selectedFarm === farm.id
                          ? 'border-ag-green bg-ag-lime/10'
                          : 'border-gray-200 dark:border-gray-800 hover:border-ag-green'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white">{farm.name}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{farm.location}</p>
                        </div>
                        <Badge variant={farm.healthStatus === 'healthy' ? 'success' : 'warning'}>
                          {farm.cropHealth}%
                        </Badge>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Health Trend Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Crop Health Trend</CardTitle>
                <CardDescription>Health improvement over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={healthTrendData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="health" stroke="#2D6A4F" strokeWidth={2} name="Health (%)" />
                    <Line type="monotone" dataKey="problems" stroke="#DC2626" strokeWidth={2} name="Problem Areas" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Crop Growth Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Crop Growth Progress</CardTitle>
                <CardDescription>Weekly growth measurements</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={cropGrowthData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="week" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="maize" stackId="1" stroke="#2D6A4F" fill="#95D5B2" />
                    <Area type="monotone" dataKey="wheat" stackId="1" stroke="#40916C" fill="#74C0FC" />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Weather, Recommendations */}
          <div className="space-y-8">
            {/* Weather Widget */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Current Weather</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-5xl font-bold text-ag-green mb-2">{WEATHER_MOCK.temperature}°C</div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{WEATHER_MOCK.condition}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Droplets className="h-4 w-4 text-blue-500" />
                      <span>Humidity</span>
                    </div>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">{WEATHER_MOCK.humidity}%</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Cloud className="h-4 w-4 text-blue-500" />
                      <span>Rain Chance</span>
                    </div>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">{WEATHER_MOCK.rainProbability}%</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded col-span-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Wind className="h-4 w-4 text-blue-500" />
                      <span>Wind Speed</span>
                    </div>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">{WEATHER_MOCK.windSpeed} km/h</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/dashboard/farms">
                  <Button variant="outline" className="w-full justify-start">
                    <Map className="h-4 w-4 mr-2" />
                    Manage Farms
                  </Button>
                </Link>
                <Link href="/dashboard/reports">
                  <Button variant="outline" className="w-full justify-start">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    View Reports
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="w-full justify-start">
                    <Eye className="h-4 w-4 mr-2" />
                    Request Service
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Recent Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Latest Alerts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-red-50 dark:bg-red-900 rounded border border-red-200 dark:border-red-800">
                  <p className="font-semibold text-red-900 dark:text-red-100 text-sm">High Priority</p>
                  <p className="text-sm text-red-800 dark:text-red-200 mt-1">Disease detected in Sunrise Field B</p>
                </div>
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900 rounded border border-yellow-200 dark:border-yellow-800">
                  <p className="font-semibold text-yellow-900 dark:text-yellow-100 text-sm">Medium Priority</p>
                  <p className="text-sm text-yellow-800 dark:text-yellow-200 mt-1">Water stress in Green Valley Field A</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Flights & Reports */}
        <div className="grid lg:grid-cols-2 gap-8 mt-8">
          {/* Recent Flights */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Drone Flights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentFlights.map((flight) => (
                  <div key={flight.id} className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">Farm Survey</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{formatDate(flight.flightDate)}</p>
                      </div>
                      <Badge variant={flight.healthStatus === 'healthy' ? 'success' : 'warning'}>
                        {flight.cropHealth}%
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 grid grid-cols-2 gap-2">
                      <span>Area: {flight.areaCovered} ha</span>
                      <span>Duration: {flight.duration} min</span>
                      <span>Images: {flight.imagesCaptures}</span>
                      <span>Issues: {flight.problemsDetected}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Reports */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentReports.map((report) => (
                  <div key={report.id} className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white truncate">{report.title}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{formatDate(report.date)}</p>
                      </div>
                      <Badge className="flex-shrink-0">{report.type}</Badge>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Download className="h-4 w-4 mr-1" />
                        PDF
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-12 gradient-ag text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Want to add more farms to your dashboard?</h2>
          <p className="text-ag-lime mb-6">Request additional monitoring services for your properties.</p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="text-ag-green">
              Request Service <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
