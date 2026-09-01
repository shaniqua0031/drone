export interface Crop {
  id: string
  name: string
  type: 'maize' | 'wheat' | 'soybeans' | 'sunflower' | 'citrus' | 'vegetables' | 'sugarcane'
}

export interface Field {
  id: string
  farmId: string
  name: string
  size: number // hectares
  cropType: Crop['type']
  plantingDate: string
  expectedHarvestDate: string
  cropHealth: number // percentage 0-100
  healthStatus: 'healthy' | 'moderate' | 'at-risk' | 'critical'
  lastSurvey: string
}

export interface Farm {
  id: string
  name: string
  location: string
  province: string
  owner: string
  totalArea: number // hectares
  coordinates: {
    lat: number
    lng: number
  }
  cropType: Crop['type']
  plantingDate: string
  expectedHarvestDate: string
  cropHealth: number
  healthStatus: 'healthy' | 'moderate' | 'at-risk' | 'critical'
  lastSurvey: string
  status: 'active' | 'monitoring' | 'completed'
  fields: Field[]
  image?: string
}

export interface Drone {
  id: string
  name: string
  model: string
  maxAltitude: number
  maxFlightTime: number
  sensorType: string
  status: 'available' | 'flying' | 'maintenance'
}

export interface DroneFlightData {
  id: string
  droneId: string
  farmId: string
  fieldId?: string
  flightDate: string
  startTime: string
  endTime: string
  duration: number // minutes
  areaCovered: number // hectares
  altitudeFlown: number // meters
  imagesCaptures: number
  cropHealth: number
  healthStatus: 'healthy' | 'moderate' | 'at-risk' | 'critical'
  problemsDetected: number
  problemAreas: {
    type: 'disease' | 'pest' | 'water-stress' | 'nutrient-deficiency'
    area: number // hectares
    severity: 'low' | 'medium' | 'high' | 'critical'
  }[]
}

export interface CropAnalysis {
  id: string
  flightId: string
  date: string
  healthPercentage: number
  healthyArea: number
  stressedArea: number
  damagedArea: number
  vegetationCoverage: number
  vegetationIndex: number
  growthRate: number
  zoneAnalysis: {
    zone: string
    health: number
    area: number
    status: 'healthy' | 'moderate' | 'at-risk' | 'critical'
  }[]
}

export interface Report {
  id: string
  farmId: string
  flightId?: string
  title: string
  date: string
  type: 'crop-health' | 'farm-mapping' | 'pest-analysis' | 'irrigation' | 'comprehensive'
  cropHealth: number
  healthyArea: number
  stressedArea: number
  damagedArea: number
  problems: {
    type: string
    area: number
    severity: string
  }[]
  recommendations: string[]
  fieldMeasurements: {
    fieldSize: number
    coveredArea: number
    problemArea: number
  }[]
  images: string[]
  beforeImage?: string
  afterImage?: string
  status: 'completed' | 'processing' | 'pending'
  droneUsed?: string
  surveyDate: string
}

export interface Service {
  id: string
  name: string
  description: string
  icon: string
  benefits: string[]
  pricing?: string
  turnaroundTime?: string
  coverage?: string
}

export interface ServiceRequest {
  id: string
  farmerName: string
  email: string
  phone: string
  farmName: string
  serviceRequired: string
  preferredDate: string
  message: string
  status: 'pending' | 'approved' | 'completed'
  createdAt: string
}

export interface AIAnalysis {
  id: string
  imageUrl: string
  date: string
  cropHealth: number
  healthStatus: 'healthy' | 'moderate' | 'at-risk' | 'critical'
  detectedIssues: {
    type: 'disease' | 'pest' | 'nutrient-deficiency' | 'water-stress' | 'weed'
    confidence: number
    affectedArea: number
  }[]
  recommendations: string[]
  riskLevel: 'low' | 'medium' | 'high' | 'critical'
}

export interface Recommendation {
  id: string
  farmId?: string
  fieldId?: string
  type: 'irrigation' | 'pest-control' | 'disease-prevention' | 'fertilization' | 'crop-health' | 'livestock' | 'field-management'
  title: string
  description: string
  priority: 'low' | 'medium' | 'high' | 'critical'
  actionItems: string[]
  affectedArea?: number
  estimatedImpact?: string
  dueDate?: string
}

export interface CaseStudy {
  id: string
  title: string
  farmName: string
  location: string
  problem: string
  solution: string
  results: {
    metric: string
    value: string
    impact: string
  }[]
  image?: string
  before?: string
  after?: string
}

export interface FAQItem {
  id: string
  question: string
  answer: string
  category: string
}

export interface DashboardStats {
  totalFarmsMonitored: number
  totalHectaresMapped: number
  averageCropHealth: number
  detectedProblems: number
  totalDroneFlights: number
  cropMonitoringAccuracy: number
}

export interface Weather {
  temperature: number
  humidity: number
  rainProbability: number
  windSpeed: number
  condition: string
  icon: string
  forecast: {
    date: string
    high: number
    low: number
    condition: string
  }[]
}

export interface User {
  id: string
  name: string
  email: string
  phone?: string
  avatar?: string
  farmCount: number
  joinDate: string
}

export interface Theme {
  mode: 'light' | 'dark'
  primaryColor: string
  accentColor: string
}
