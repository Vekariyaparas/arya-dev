export type Product = {
  id: string
  name: string
  technicalName: string
  category: string
  description: string
  image: string
  packing: string
  packSizes: string[]
  dose: string
  crops: string[]
  availability: string
  features: string[]
}

export const products: Product[] = [
  {
    id: 'pgr-boost',
    name: 'PGR Boost',
    technicalName: 'Triacontanol + NAA + Micronutrients',
    category: 'Plant Growth Regulator',
    description: 'Improves flowering, root development, and fruit retention in high-value crops.',
    image:
      'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=85',
    packing: 'HDPE bottle / pouch pack',
    packSizes: ['250 ml', '500 ml', '1 L'],
    dose: '250-500 ml / acre',
    crops: ['Tomato', 'Chilli', 'Cucumber', 'Grapes'],
    availability: 'Dealer stock and bulk orders',
    features: ['Enhances flowering and fruit setting', 'Improves plant vigor', 'Balanced micronutrient support'],
  },
  {
    id: 'crop-safe',
    name: 'CropSafe Insect',
    technicalName: 'Lambda Cyhalothrin 5% EC',
    category: 'Insecticide',
    description: 'Fast-acting crop protection for chewing and sucking pests with reliable field performance.',
    image:
      'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=1200&q=85',
    packing: 'Bottle with safe dosing cap',
    packSizes: ['250 ml', '500 ml', '1 L'],
    dose: '300-400 ml / acre',
    crops: ['Rice', 'Cotton', 'Soybean', 'Vegetables'],
    availability: 'Available in retail and distributor packs',
    features: ['Broad-spectrum control', 'Quick knockdown effect', 'Safe and easy application'],
  },
  {
    id: 'leaf-guard',
    name: 'LeafGuard Fungicide',
    technicalName: 'Azoxystrobin 23% SC',
    category: 'Fungicide',
    description: 'Protects key crops from fungal stress while improving leaf health and yield consistency.',
    image:
      'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1200&q=85',
    packing: 'Transparent bottle with label',
    packSizes: ['200 ml', '500 ml', '1 L'],
    dose: '200-300 ml / acre',
    crops: ['Wheat', 'Potato', 'Grapes', 'Tomato'],
    availability: 'Available in seasonal stock',
    features: ['Strong preventive protection', 'Improves crop vigor', 'Reduces disease spread'],
  },
  {
    id: 'weed-control',
    name: 'Weed Control Plus',
    technicalName: 'Glyphosate 41% SL',
    category: 'Herbicide',
    description: 'A dependable broad-spectrum herbicide for clean fields and efficient weed management.',
    image:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=85',
    packing: 'Secure branded container',
    packSizes: ['1 L', '2 L', '5 L'],
    dose: '1.5-2.0 L / acre',
    crops: ['Maize', 'Soybean', 'Cotton', 'Sugarcane'],
    availability: 'Bulk supply for farms and dealers',
    features: ['Effective non-selective control', 'Fast field coverage', 'Improves crop establishment'],
  },
  {
    id: 'micro-nova',
    name: 'MicroNova',
    technicalName: 'Chelated Micronutrient Mix',
    category: 'Micronutrient',
    description: 'Supports crop strength, chlorophyll formation, and balanced nutrient uptake during growth.',
    image:
      'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=1200&q=85',
    packing: 'Bottle + eco-safe pouch',
    packSizes: ['1 L', '5 L', '10 L'],
    dose: '250-500 ml / acre',
    crops: ['Rice', 'Maize', 'Cabbage', 'Fruit crops'],
    availability: 'Warehouse and retail launched',
    features: ['Boosts nutrient availability', 'Supports stress recovery', 'Improves quality parameters'],
  },
  {
    id: 'soil-fort',
    name: 'SoilFort',
    technicalName: 'Organic Humic + Fulvic Acid Blend',
    category: 'Soil Conditioner',
    description: 'Improves soil structure and root-zone performance for healthier crop establishment.',
    image:
      'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=85',
    packing: 'Drum and field pack',
    packSizes: ['5 L', '10 L', '20 L'],
    dose: '1-2 L / acre',
    crops: ['All field crops', 'Vegetables', 'Orchards'],
    availability: 'Ready stock available for seasonal use',
    features: ['Improves soil moisture retention', 'Better nutrient movement', 'Enhances root health'],
  },
]
