export const SITE_NAME = 'Drone Agriculture Platform'
export const SITE_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'

export const NAVIGATION_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/faq', label: 'FAQ' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export const CROP_TYPES = [
  { value: 'maize', label: 'Maize' },
  { value: 'wheat', label: 'Wheat' },
  { value: 'soybeans', label: 'Soybeans' },
  { value: 'sunflower', label: 'Sunflower' },
  { value: 'citrus', label: 'Citrus' },
  { value: 'vegetables', label: 'Vegetables' },
  { value: 'sugarcane', label: 'Sugarcane' },
]

export const SOUTH_AFRICAN_PROVINCES = [
  'Gauteng',
  'Limpopo',
  'Mpumalanga',
  'North West',
  'Free State',
  'KwaZulu-Natal',
  'Western Cape',
  'Eastern Cape',
  'Northern Cape',
]

export const HEALTH_STATUSES = [
  { value: 'healthy', label: 'Healthy', color: 'bg-green-500' },
  { value: 'moderate', label: 'Moderate', color: 'bg-yellow-500' },
  { value: 'at-risk', label: 'At Risk', color: 'bg-orange-500' },
  { value: 'critical', label: 'Critical', color: 'bg-red-500' },
]

export const PRIORITY_LEVELS = [
  { value: 'low', label: 'Low', color: 'bg-blue-500' },
  { value: 'medium', label: 'Medium', color: 'bg-yellow-500' },
  { value: 'high', label: 'High', color: 'bg-orange-500' },
  { value: 'critical', label: 'Critical', color: 'bg-red-500' },
]

export const SERVICE_CATEGORIES = [
  'Crop Monitoring',
  'Farm Mapping',
  'Crop Health Analysis',
  'Irrigation Monitoring',
  'Pest & Disease Detection',
  'Plant Counting',
  'Field Measurement',
  'Livestock Monitoring',
  'Aerial Photography',
  'Vegetation Analysis',
]

export const DASHBOARD_STATS_MOCK = {
  totalFarmsMonitored: 250,
  totalHectaresMapped: 12500,
  averageCropHealth: 84,
  detectedProblems: 45,
  totalDroneFlights: 1200,
  cropMonitoringAccuracy: 94,
}

export const WEATHER_MOCK = {
  temperature: 24,
  humidity: 65,
  rainProbability: 20,
  windSpeed: 12,
  condition: 'Partly Cloudy',
  icon: 'CloudSun',
}

export const DEFAULT_MAP_CENTER = {
  lat: -25.5,
  lng: 28.2,
}

export const DEFAULT_MAP_ZOOM = 6
