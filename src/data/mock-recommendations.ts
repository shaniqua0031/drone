import { Recommendation, CaseStudy, FAQItem } from '@/types'

export const mockRecommendations: Recommendation[] = [
  {
    id: 'rec-001',
    farmId: 'farm-001',
    fieldId: 'field-002',
    type: 'pest-control',
    title: 'Implement Targeted Pest Control',
    description: 'High pest pressure detected in 8.5 hectares of Field B. Immediate action recommended.',
    priority: 'high',
    actionItems: [
      'Scout field within 24 hours',
      'Identify pest species and population density',
      'Apply approved pesticide treatment',
      'Monitor for effectiveness in 3-5 days',
    ],
    affectedArea: 8.5,
    estimatedImpact: 'Could recover 15-20% crop health if action taken immediately',
    dueDate: '2026-08-29',
  },
  {
    id: 'rec-002',
    farmId: 'farm-001',
    fieldId: 'field-001',
    type: 'irrigation',
    title: 'Adjust Irrigation Schedule',
    description: 'Water stress detected in northern section. Increase watering frequency.',
    priority: 'medium',
    actionItems: [
      'Increase irrigation by 20%',
      'Focus on northern section',
      'Check soil moisture levels',
      'Monitor crop response for 1 week',
    ],
    affectedArea: 3.2,
    estimatedImpact: 'Could recover 10-15% crop health',
    dueDate: '2026-08-30',
  },
  {
    id: 'rec-003',
    farmId: 'farm-002',
    fieldId: 'field-005',
    type: 'disease-prevention',
    title: 'URGENT: Disease Treatment Required',
    description: 'Severe disease detected in 7.2 hectares. Immediate intervention critical.',
    priority: 'critical',
    actionItems: [
      'Conduct field inspection immediately',
      'Confirm disease diagnosis',
      'Apply fungicide treatment',
      'Implement quarantine measures if necessary',
      'Daily monitoring for 2 weeks',
    ],
    affectedArea: 7.2,
    estimatedImpact: 'Urgent intervention could prevent 30-40% crop loss',
    dueDate: '2026-08-27',
  },
  {
    id: 'rec-004',
    farmId: 'farm-002',
    fieldId: 'field-005',
    type: 'fertilization',
    title: 'Apply Micronutrient Foliar Feeding',
    description: 'Nutrient deficiency symptoms observed. Foliar application recommended.',
    priority: 'medium',
    actionItems: [
      'Apply micronutrient foliar spray',
      'Focus on affected zones',
      'Use recommended concentration',
      'Apply in early morning or late evening',
      'Repeat application in 2 weeks',
    ],
    affectedArea: 3.1,
    estimatedImpact: 'Could improve crop health by 5-10%',
  },
  {
    id: 'rec-005',
    farmId: 'farm-005',
    type: 'crop-health',
    title: 'Optimize Crop Management',
    description: 'General crop health improvement recommended for sustained productivity.',
    priority: 'low',
    actionItems: [
      'Review planting density',
      'Optimize fertilizer timing',
      'Improve pest monitoring frequency',
      'Plan for next crop cycle',
    ],
    estimatedImpact: 'Could improve overall farm productivity by 10-15%',
  },
]

export const mockCaseStudies: CaseStudy[] = [
  {
    id: 'case-001',
    title: 'Green Valley Farm - Pest Control Success',
    farmName: 'Green Valley Farm',
    location: 'Polokwane, Limpopo',
    problem: 'Undetected pest infestation affecting 15% of maize field, causing estimated 12% yield loss.',
    solution:
      'Deployed agriculture drone for multispectral imaging and AI analysis to identify pest-affected zones precisely. Implemented targeted pest control only in affected areas.',
    results: [
      {
        metric: 'Crop Health Improvement',
        value: '+18%',
        impact: 'From 72% to 90% in 3 weeks',
      },
      {
        metric: 'Pesticide Usage Reduction',
        value: '-40%',
        impact: 'Cost savings of R8,500',
      },
      {
        metric: 'Yield Recovery',
        value: '+25 bags',
        impact: 'Estimated additional revenue of R6,250',
      },
      {
        metric: 'Time Saved',
        value: '8 hours',
        impact: 'Compared to traditional manual scouting',
      },
    ],
    image: 'https://cdn3.saiwa.ai/Blog/farming_drones_for_crop_monitoring_f39ccb69_0f0f_496b_b929_7ad0a4e0756b_0d66da6eb6.jpg',
  },
  {
    id: 'case-002',
    title: 'Sunrise Agriculture - Irrigation Optimization',
    farmName: 'Sunrise Agriculture',
    location: 'Nelspruit, Mpumalanga',
    problem:
      'Inconsistent irrigation and water stress in 35-hectare soybean field. Estimated water waste of 15% and yield reduction.',
    solution:
      'Used drone irrigation monitoring to identify water-stressed zones and map soil moisture variations. Created targeted irrigation schedule based on AI recommendations.',
    results: [
      {
        metric: 'Water Usage Reduction',
        value: '-18%',
        impact: 'Saved 2,250 cubic meters',
      },
      {
        metric: 'Cost Savings',
        value: 'R22,500',
        impact: 'Reduced irrigation costs',
      },
      {
        metric: 'Crop Health Improvement',
        value: '+12%',
        impact: 'Stress reduced, healthier plants',
      },
      {
        metric: 'Yield Increase',
        value: '+8%',
        impact: 'Additional 14 tonnes of soybeans',
      },
    ],
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop',
  },
  {
    id: 'case-003',
    title: 'Fertile Fields - Complete Farm Mapping',
    farmName: 'Fertile Fields',
    location: 'Pretoria, Gauteng',
    problem: 'Manual farm records were outdated. No accurate field boundaries or area measurements for 180-hectare farm.',
    solution:
      'Conducted comprehensive drone survey to create detailed orthomosaics, 3D models, and precise field measurements. Provided digital records for planning and compliance.',
    results: [
      {
        metric: 'Area Mapping Accuracy',
        value: '99.2%',
        impact: 'Precise field measurements for input planning',
      },
      {
        metric: 'Time to Map',
        value: '2.5 hours',
        impact: 'Manual methods would take 3 days',
      },
      {
        metric: 'Data Quality',
        value: '+150%',
        impact: 'Digital records enable better planning',
      },
      {
        metric: 'Planning Efficiency',
        value: 'Improved',
        impact: 'Better input allocation and resource planning',
      },
    ],
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad576?w=600&h=400&fit=crop',
  },
  {
    id: 'case-004',
    title: 'Citrus Paradise - Disease Early Detection',
    farmName: 'Citrus Paradise',
    location: 'Tzaneen, Limpopo',
    problem: 'Early-stage citrus greening disease in limited area. Without early detection, could have spread to entire 70-hectare orchard.',
    solution:
      'Regular drone monitoring with AI analysis detected early disease symptoms in 2.1 hectares. Immediate quarantine and treatment prevented spread.',
    results: [
      {
        metric: 'Disease Containment',
        value: '100%',
        impact: 'Prevented farm-wide contamination',
      },
      {
        metric: 'Loss Prevention',
        value: 'R240,000',
        impact: 'Saved from potential yield loss',
      },
      {
        metric: 'Early Detection Time',
        value: '6 weeks',
        impact: 'Earlier than manual scouting methods',
      },
      {
        metric: 'Orchard Recovery',
        value: '95%',
        impact: 'Restored field to healthy status',
      },
    ],
    image: 'https://images.unsplash.com/photo-1488459716781-be3ee8e96e31?w=600&h=400&fit=crop',
  },
]

export const mockFAQ: FAQItem[] = [
  {
    id: 'faq-001',
    question: 'How does drone crop monitoring work?',
    answer:
      'Our drones are equipped with multispectral cameras that capture images at multiple wavelengths. These images are processed by AI algorithms to calculate vegetation indices, detect diseases, pests, and nutrient deficiencies. The data is analyzed and presented as visual maps and health reports.',
    category: 'General',
  },
  {
    id: 'faq-002',
    question: 'How long does a drone survey take?',
    answer:
      'A typical drone survey takes 30-90 minutes depending on farm size and complexity. Flights up to 500 hectares can be completed in a single mission. The actual flight time is often the shortest part - planning, analysis, and report generation add 1-2 business days.',
    category: 'Operations',
  },
  {
    id: 'faq-003',
    question: 'What types of farms can be monitored?',
    answer:
      'We can monitor any agricultural operation including crop fields (maize, wheat, soybeans, sunflower, vegetables), orchards (citrus, fruit trees), vineyards, and grazing areas. Typical farm sizes range from 5 to 500+ hectares.',
    category: 'Services',
  },
  {
    id: 'faq-004',
    question: 'Can drones detect crop diseases?',
    answer:
      'Yes, our AI-powered analysis can detect early signs of diseases through vegetation indices and color pattern recognition. Common detectable diseases include leaf spots, rusts, blights, and wilts. Detection accuracy improves with multiple monitoring cycles.',
    category: 'Capabilities',
  },
  {
    id: 'faq-005',
    question: 'Can you map large farms?',
    answer:
      'Absolutely. We have successfully mapped farms up to 1,000+ hectares. Large farms are mapped in multiple flights over several hours. The result is stitched into a seamless, high-resolution orthomosaic map.',
    category: 'Services',
  },
  {
    id: 'faq-006',
    question: 'How accurate is crop monitoring?',
    answer:
      'Our systems achieve 94%+ accuracy in crop health classification when compared to ground truth data. Accuracy improves with multiple monitoring sessions as AI learns farm-specific patterns and conditions.',
    category: 'Capabilities',
  },
  {
    id: 'faq-007',
    question: 'Can farmers receive reports?',
    answer:
      'Yes, detailed reports are generated within 24-48 hours of each flight. Reports include high-resolution imagery, health maps, problem area identification, recommendations, and downloadable PDFs for sharing.',
    category: 'Reports',
  },
  {
    id: 'faq-008',
    question: 'Can drone images be analyzed using AI?',
    answer:
      'Absolutely. All our drone imagery is automatically processed through AI algorithms that identify crop health, diseases, pests, water stress, nutrient deficiencies, and other conditions. Results are presented with confidence scores.',
    category: 'AI',
  },
  {
    id: 'faq-009',
    question: 'How often should a farm be monitored?',
    answer:
      'Recommended frequency depends on crop type and season. During critical growth stages, weekly monitoring is ideal. During stable periods, monthly monitoring is sufficient. Our recommendations are based on your specific needs.',
    category: 'Best Practices',
  },
  {
    id: 'faq-010',
    question: 'How do I request a drone survey?',
    answer:
      'Simply use the Contact form on our website to submit a service request. Provide your farm details, preferred service, and preferred date. Our team will contact you within 24 hours to schedule and confirm details.',
    category: 'Getting Started',
  },
  {
    id: 'faq-011',
    question: 'What is the cost of drone services?',
    answer:
      'Pricing varies by service type and farm size. Most services range from R200-R800 per hectare. We offer volume discounts for regular monitoring contracts. Contact us for custom quotes.',
    category: 'Pricing',
  },
  {
    id: 'faq-012',
    question: 'What data privacy measures are in place?',
    answer:
      'Your farm data and images are securely stored with end-to-end encryption. You maintain full ownership of all data and images. We comply with all data protection regulations and never share your information with third parties without permission.',
    category: 'Privacy',
  },
]
