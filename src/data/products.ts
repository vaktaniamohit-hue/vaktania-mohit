import { Product } from '../types';

export const INITIAL_PRODUCTS: Product[] = [
  // 1. RUNNING - High Performance Racer
  {
    id: 'volt-01',
    slug: 'volt-aero-run',
    name: 'Volt Aero Run',
    tagline: 'Ultralight carbon-infused marathon racer',
    category: 'Running',
    gender: 'Men',
    description: 'Engineered for high-cadence distance running. The Volt Aero Run features our responsive Aerofoam+ matrix paired with a full-length curved carbon fiber propulsion plate, delivering up to 88% energy return with every toe-off.',
    price: 8999,
    originalPrice: 11999,
    discountPercent: 25,
    isNewArrival: true,
    isBestSeller: true,
    isOnSale: true,
    rating: 4.9,
    reviewCount: 342,
    inStock: true,
    activityType: 'Race Day',
    images: {
      main: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
      side: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1200&auto=format&fit=crop',
      top: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1200&auto=format&fit=crop',
      sole: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop',
      lifestyle: 'https://images.unsplash.com/photo-1483721074573-4a7cc0e777f6?q=80&w=1200&auto=format&fit=crop',
      detail: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1200&auto=format&fit=crop'
    },
    colors: [
      { name: 'Volt Red / Stealth Black', hex: '#E60000', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Electric Lime / Obsidian', hex: '#CCFF00', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Ghost White / Glacier', hex: '#F3F4F6', image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop' }
    ],
    availableSizes: [6, 7, 8, 9, 10, 11, 12],
    features: ['Aerofoam+ Dual Density Midsole', '3K Full-Length Carbon Plate', 'VaporWeave Hydrophobic Upper', 'Micro-Diamond Wet Traction Pods'],
    technology: [
      { title: 'Propel3K Plate', description: 'Curved carbon chassis stabilizes the foot and delivers energetic spring on toe-off.' },
      { title: 'Aerofoam+ Compound', description: 'Supercritical nitrogen-infused foam providing high dampening at 30% lower weight.' }
    ],
    materials: {
      upper: 'Engineered Mono-mesh with recycled TPU yarns',
      midsole: 'Nitrogen-blown Aerofoam+ with 3K Carbon chassis',
      outsole: 'Blown Rubber with directional traction nodes',
      weight: '198g (Men UK 8)',
      offset: '8mm (38mm heel / 30mm forefoot)'
    },
    tags: ['Marathon', 'Carbon Plate', 'Lightweight', 'Speed', 'Race Day'],
    reviews: [
      { id: 'r1', userName: 'Arjun Mehta', rating: 5, date: '2026-07-14', title: 'Cut 4 minutes off my half marathon PB!', comment: 'The carbon bounce is unbelievable. Lightweight yet exceptionally stable during fast turns. Ran 21k in Bangalore heat and feet stayed dry.', verifiedPurchase: true, userLocation: 'Bengaluru' },
      { id: 'r2', userName: 'Rohan Sharma', rating: 5, date: '2026-06-29', title: 'Top-tier racing shoe', comment: 'Quality rivaling global flagships. Fits true to size and the heel lockdown is rock solid.', verifiedPurchase: true, userLocation: 'Delhi' }
    ],
    recommendedWith: ['volt-02', 'volt-06', 'volt-11']
  },

  // 2. RUNNING - Daily Cushion Trainer
  {
    id: 'volt-02',
    slug: 'volt-velocity-pro',
    name: 'Volt Velocity Pro',
    tagline: 'High-mileage daily trainer with plush dampening',
    category: 'Running',
    gender: 'Men',
    description: 'Designed for everyday running routines, 5Ks to 42Ks. The Volt Velocity Pro blends plush CloudStrut cushioning with an anatomical heel cradle, keeping legs fresh over high-mileage blocks.',
    price: 7499,
    originalPrice: 9499,
    discountPercent: 21,
    isNewArrival: false,
    isBestSeller: true,
    isOnSale: true,
    rating: 4.8,
    reviewCount: 289,
    inStock: true,
    activityType: 'Daily Running',
    images: {
      main: 'https://images.unsplash.com/photo-1551107696-a4b085a6d966?q=80&w=1200&auto=format&fit=crop',
      side: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1200&auto=format&fit=crop',
      top: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop',
      sole: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1200&auto=format&fit=crop',
      lifestyle: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=1200&auto=format&fit=crop'
    },
    colors: [
      { name: 'Cobalt Blue / Pure White', hex: '#1E40AF', image: 'https://images.unsplash.com/photo-1551107696-a4b085a6d966?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Core Black / Smoke', hex: '#111827', image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Hyper Orange / Silver', hex: '#EA580C', image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop' }
    ],
    availableSizes: [6, 7, 8, 9, 10, 11, 12],
    features: ['CloudStrut Max Midsole', 'Anatomical Heel Support Cup', 'Breathable Engineered Knit', 'Long-Life Duragrip Outsole'],
    technology: [
      { title: 'CloudStrut Foam', description: 'Dual-phase foam core absorbs high impact forces while maintaining responsive spring.' }
    ],
    materials: {
      upper: 'Seamless Circular Engineered Knit',
      midsole: 'CloudStrut Polymer Matrix',
      outsole: 'Abrasion-resistant Carbon Rubber',
      weight: '245g (Men UK 8)',
      offset: '10mm (36mm heel / 26mm forefoot)'
    },
    tags: ['Daily Running', 'Cushioned', 'Comfort', 'Distance'],
    reviews: [
      { id: 'r3', userName: 'Karan Patel', rating: 5, date: '2026-08-02', title: 'My daily go-to shoe for morning runs', comment: 'Logged over 250km in these already. Outsole shows minimal wear and the cushion hasn’t sagged a bit.', verifiedPurchase: true, userLocation: 'Mumbai' }
    ],
    recommendedWith: ['volt-01', 'volt-03', 'volt-08']
  },

  // 3. LIFESTYLE - Iconic Minimal Sneaker
  {
    id: 'volt-03',
    slug: 'volt-street-one',
    name: 'Volt Street One',
    tagline: 'Clean lines and premium full-grain leather classic',
    category: 'Lifestyle',
    gender: 'Unisex',
    description: 'A timeless silhouette engineered for modern city life. Built with supple full-grain leather, perforated toe vamp for breathability, and an OrthoLite memory cushion footbed.',
    price: 5499,
    originalPrice: 6999,
    discountPercent: 21,
    isNewArrival: false,
    isBestSeller: true,
    isOnSale: true,
    rating: 4.9,
    reviewCount: 412,
    inStock: true,
    activityType: 'Streetwear',
    images: {
      main: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop',
      side: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1200&auto=format&fit=crop',
      top: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop',
      sole: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1200&auto=format&fit=crop',
      lifestyle: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=1200&auto=format&fit=crop'
    },
    colors: [
      { name: 'Triple White', hex: '#FFFFFF', image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Core Black / Chalk', hex: '#1C1917', image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Vintage Sail / Forest Green', hex: '#F4F1EA', image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1200&auto=format&fit=crop' }
    ],
    availableSizes: [5, 6, 7, 8, 9, 10, 11, 12],
    features: ['Supple Full-Grain Nappa Leather', 'Dual-Density Foam Insole', 'Stitched Cupsole Construction', 'Reflective Heel Accent'],
    technology: [
      { title: 'OrthoLite Comfort Bed', description: 'Open-cell polyurethane foam retains 95% of cushioning over the life of the shoe.' }
    ],
    materials: {
      upper: 'Full-Grain Premium Leather',
      midsole: 'Dampened EVA Footbed',
      outsole: 'Natural Gum Rubber Cupsole',
      weight: '320g',
      offset: '4mm'
    },
    tags: ['Classic', 'Leather', 'Minimal', 'Streetwear', 'Everyday'],
    reviews: [
      { id: 'r4', userName: 'Pooja Iyer', rating: 5, date: '2026-07-28', title: 'Goes with literally everything', comment: 'The leather is so soft right out of the box with zero break-in pain. Super chic and premium looking.', verifiedPurchase: true, userLocation: 'Pune' }
    ],
    recommendedWith: ['volt-05', 'volt-10', 'volt-15']
  },

  // 4. BASKETBALL - Court Performance Dominator
  {
    id: 'volt-04',
    slug: 'volt-court-x',
    name: 'Volt Court X',
    tagline: 'Explosive court response and ankle lockdown',
    category: 'Basketball',
    gender: 'Men',
    description: 'Engineered for razor-sharp cuts, aggressive acceleration, and heavy landing shock absorption. Features multidirectional herringbone traction, internal TPU shank, and mid-cut ankle harness.',
    price: 9999,
    originalPrice: 12499,
    discountPercent: 20,
    isNewArrival: true,
    isBestSeller: true,
    isOnSale: false,
    rating: 4.9,
    reviewCount: 178,
    inStock: true,
    activityType: 'Court Performance',
    images: {
      main: 'https://images.unsplash.com/photo-1579338559194-a162d19bf842?q=80&w=1200&auto=format&fit=crop',
      side: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
      top: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1200&auto=format&fit=crop',
      sole: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop',
      lifestyle: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop'
    },
    colors: [
      { name: 'Infrared / Stealth Black', hex: '#EF4444', image: 'https://images.unsplash.com/photo-1579338559194-a162d19bf842?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Court Royal Purple / Gold', hex: '#7C3AED', image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Monochrome Shadow', hex: '#0F172A', image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200&auto=format&fit=crop' }
    ],
    availableSizes: [7, 8, 9, 10, 11, 12],
    features: ['Radial Grip Multi-court Rubber', 'Lockdown TPU Midfoot Wing', 'High-Response ZoomCell Forefoot Pod', 'Reinforced Ballistic Mesh Upper'],
    technology: [
      { title: 'ZoomCell Cushioning', description: 'Pressurized gas-filled air pods provide instantaneous rebound on quick jumps.' }
    ],
    materials: {
      upper: 'Reinforced Jacquard Mesh & Synthetic Overlays',
      midsole: 'Phylon frame with ZoomCell Pods',
      outsole: 'High-tack sticky rubber with herringbone grooves',
      weight: '385g (UK 9)',
      offset: '6mm'
    },
    tags: ['Basketball', 'High Top', 'Grip', 'Ankle Support', 'Indoor Court'],
    reviews: [
      { id: 'r5', userName: 'Devendra Nair', rating: 5, date: '2026-08-10', title: 'Unmatched traction on wooden indoor floors', comment: 'Zero dust pickup, insane grip when driving to the rim. Great ankle lock.', verifiedPurchase: true, userLocation: 'Chennai' }
    ],
    recommendedWith: ['volt-01', 'volt-07', 'volt-12']
  },

  // 5. TRAINING / GYM - Cross Training Beast
  {
    id: 'volt-05',
    slug: 'volt-apex-trainer',
    name: 'Volt Apex Trainer',
    tagline: 'Stable base for heavy squats, deadlifts, and HIIT',
    category: 'Training',
    gender: 'Men',
    description: 'Engineered for rigorous functional fitness and heavy lifting. Featuring a wide flat heel platform, high-density rubber side wraps for rope climbs, and flexible forefoot grooves for box jumps.',
    price: 6499,
    originalPrice: 7999,
    discountPercent: 18,
    isNewArrival: true,
    isBestSeller: false,
    isOnSale: true,
    rating: 4.8,
    reviewCount: 145,
    inStock: true,
    activityType: 'Gym & HIIT',
    images: {
      main: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1200&auto=format&fit=crop',
      side: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
      top: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1200&auto=format&fit=crop',
      sole: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop',
      lifestyle: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop'
    },
    colors: [
      { name: 'Volt Lime / Olive Drab', hex: '#CCFF00', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Stealth Blackout', hex: '#09090B', image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200&auto=format&fit=crop' }
    ],
    availableSizes: [6, 7, 8, 9, 10, 11, 12],
    features: ['Wide HyperPlate Lifting Heel', 'RopeWrap Sidewall Armor', 'Breathable Diamond Grid Mesh', 'Metatarsal Flex Grooves'],
    technology: [
      { title: 'HyperPlate Stability', description: 'Rigid TPU heel insert ensures zero power loss during heavy compound lifts.' }
    ],
    materials: {
      upper: 'Abrasion-resistant ballistic knit',
      midsole: 'Dual-density compressed foam',
      outsole: 'Textured sticky rubber with rope-climb ribs',
      weight: '310g',
      offset: '4mm'
    },
    tags: ['Training', 'CrossFit', 'Gym', 'Lifting', 'HIIT'],
    reviews: [
      { id: 'r6', userName: 'Vikram Sethi', rating: 5, date: '2026-07-03', title: 'Best lifting shoes I’ve owned', comment: 'Rock solid base for 180kg squats. Very comfortable for sprints too.', verifiedPurchase: true, userLocation: 'Delhi' }
    ],
    recommendedWith: ['volt-02', 'volt-08']
  },

  // 6. WOMEN RUNNING - Ultralight Energy Return
  {
    id: 'volt-06',
    slug: 'volt-airflow-women',
    name: 'Volt Airflow WMN',
    tagline: 'Featherweight breathable runner tailored for women',
    category: 'Running',
    gender: 'Women',
    description: 'Crafted specifically to female biomechanics with a narrower heel cup, softer flex zones, and ultra-plush collar padding. Delivers a cloud-like floating sensation across every road run.',
    price: 6999,
    originalPrice: 8999,
    discountPercent: 22,
    isNewArrival: true,
    isBestSeller: true,
    isOnSale: true,
    rating: 4.9,
    reviewCount: 318,
    inStock: true,
    activityType: 'Daily Running',
    images: {
      main: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1200&auto=format&fit=crop',
      side: 'https://images.unsplash.com/photo-1551107696-a4b085a6d966?q=80&w=1200&auto=format&fit=crop',
      top: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop',
      sole: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1200&auto=format&fit=crop',
      lifestyle: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop'
    },
    colors: [
      { name: 'Blush Coral / Pearl White', hex: '#FB7185', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Lavender Mist / Pure Silver', hex: '#C084FC', image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Triple White / Mint Accent', hex: '#FFFFFF', image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop' }
    ],
    availableSizes: [5, 6, 7, 8, 9, 10],
    features: ['Female-tuned heel-to-toe flex', 'Ultra-breathable micro-mesh', 'Zero-rub heel pillow', 'High energy recovery foam'],
    technology: [
      { title: 'Airflow Matrix', description: 'Laser-perforated mesh channels air through the shoe with every stride to keep feet cool.' }
    ],
    materials: {
      upper: 'Vented engineered mesh with recycled filaments',
      midsole: 'Aerofoam Lite Cushion',
      outsole: 'Flexible segmented rubber pods',
      weight: '185g (UK 5)',
      offset: '9mm'
    },
    tags: ['Women', 'Lightweight', 'Breathable', 'Cushioned', 'Running'],
    reviews: [
      { id: 'r7', userName: 'Ananya Deshmukh', rating: 5, date: '2026-08-11', title: 'Hands down the most comfortable runners', comment: 'Super lightweight and stylish. No blisters even on my very first 10k run!', verifiedPurchase: true, userLocation: 'Mumbai' }
    ],
    recommendedWith: ['volt-01', 'volt-02', 'volt-07']
  },

  // 7. TRAIL / OUTDOOR - All-Terrain Dominator
  {
    id: 'volt-07',
    slug: 'volt-trail-max',
    name: 'Volt Trail Max',
    tagline: 'Water-resistant rugged grip for mountains and mud',
    category: 'Hiking',
    gender: 'Unisex',
    description: 'Take your runs off the beaten path. Built with HydroShield water-shedding upper, aggressive 5mm multi-directional lugs, and a rock-plate shield protecting against sharp stone strikes.',
    price: 8499,
    originalPrice: 10999,
    discountPercent: 22,
    isNewArrival: false,
    isBestSeller: true,
    isOnSale: true,
    rating: 4.8,
    reviewCount: 194,
    inStock: true,
    activityType: 'Trail Running',
    images: {
      main: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1200&auto=format&fit=crop',
      side: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
      top: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1200&auto=format&fit=crop',
      sole: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop',
      lifestyle: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop'
    },
    colors: [
      { name: 'Desert Sand / Moss Green', hex: '#D97706', image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Charcoal Shadow / Blaze Orange', hex: '#374151', image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200&auto=format&fit=crop' }
    ],
    availableSizes: [6, 7, 8, 9, 10, 11, 12],
    features: ['HydroShield DWR coating', '5mm Deep VibraTack lugs', 'Forefoot StonePlate ballistic shield', 'Gaiter attachment loops'],
    technology: [
      { title: 'VibraTack Outsole', description: 'Proprietary rubber compound engineered for wet granite, mud, and steep descents.' }
    ],
    materials: {
      upper: 'Ripstop Cordura with TPU welded toe cap',
      midsole: 'Durable dual-layer EVA with flexible rock plate',
      outsole: '5mm Lugged VibraTack Compound',
      weight: '290g',
      offset: '6mm'
    },
    tags: ['Trail', 'Hiking', 'Waterproof', 'Outdoor', 'Grip'],
    reviews: [
      { id: 'r8', userName: 'Raghav Swamy', rating: 5, date: '2026-07-19', title: 'Trek tested in Himachal monsoon', comment: 'Did a 4-day trek in Manali, walked through streams and wet boulders. Kept my feet dry with stellar grip.', verifiedPurchase: true, userLocation: 'Chandigarh' }
    ],
    recommendedWith: ['volt-01', 'volt-02', 'volt-05']
  },

  // 8. LIFESTYLE / RETRO - Vintage Heritage Runner
  {
    id: 'volt-08',
    slug: 'volt-classic-88',
    name: 'Volt Classic 88',
    tagline: 'Retro runner silhouette with brushed suede and nylon',
    category: 'Lifestyle',
    gender: 'Unisex',
    description: 'Honoring archival sports styling from the late 80s, reconstructed with modern day ergonomics. Plush hairy suede overlays on breathable mesh, with an exposed foam tongue detail.',
    price: 4999,
    originalPrice: 5999,
    discountPercent: 16,
    isNewArrival: false,
    isBestSeller: true,
    isOnSale: true,
    rating: 4.7,
    reviewCount: 220,
    inStock: true,
    activityType: 'Streetwear',
    images: {
      main: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1200&auto=format&fit=crop',
      side: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop',
      top: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop',
      sole: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1200&auto=format&fit=crop',
      lifestyle: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=1200&auto=format&fit=crop'
    },
    colors: [
      { name: 'Oatmeal / Racing Green', hex: '#E5E7EB', image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Washed Grey / Navy', hex: '#6B7280', image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop' }
    ],
    availableSizes: [5, 6, 7, 8, 9, 10, 11],
    features: ['Brushed Suede and Nylon upper', 'Waffle traction tread', 'Heritage exposed tongue foam', 'Comfort EVA wedge'],
    technology: [
      { title: 'WaffleGrip Tread', description: 'Iconic hexagonal tread delivers reliable day-long grip on city concrete.' }
    ],
    materials: {
      upper: 'Premium cow suede and tightly woven nylon',
      midsole: 'Dual-density vintage wedge EVA',
      outsole: 'Gum rubber waffle pattern',
      weight: '275g',
      offset: '6mm'
    },
    tags: ['Retro', 'Suede', 'Vintage', 'Everyday', 'Lifestyle'],
    reviews: [
      { id: 'r9', userName: 'Siddharth Rao', rating: 5, date: '2026-08-01', title: 'Immaculate vintage aesthetic', comment: 'Quality of suede is unreal for this price. Very comfortable for 8+ hour city walking.', verifiedPurchase: true, userLocation: 'Hyderabad' }
    ],
    recommendedWith: ['volt-03', 'volt-10', 'volt-15']
  },

  // 9. FOOTBALL / TURF - Precision Grip Cleat
  {
    id: 'volt-09',
    slug: 'volt-phantom-strike',
    name: 'Volt Phantom Strike',
    tagline: 'Engineered touch texture for lightning strikes and dribbling',
    category: 'Football',
    gender: 'Men',
    description: 'Dominate the turf with maximum swerve and touch precision. Features 3D micro-textured grip zones on the strike area, dynamic ankle sock collar, and conical turf studs for explosive agility.',
    price: 7999,
    originalPrice: 9999,
    discountPercent: 20,
    isNewArrival: true,
    isBestSeller: false,
    isOnSale: true,
    rating: 4.8,
    reviewCount: 96,
    inStock: true,
    images: {
      main: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=1200&auto=format&fit=crop',
      side: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
      top: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1200&auto=format&fit=crop',
      sole: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop',
      lifestyle: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1200&auto=format&fit=crop'
    },
    colors: [
      { name: 'Volt Cyber Yellow / Black', hex: '#CCFF00', image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Electric Cyan / Metallic Silver', hex: '#06B6D4', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop' }
    ],
    availableSizes: [6, 7, 8, 9, 10, 11],
    features: ['3D StrikeZone texture', 'Dynamic knit ankle collar', 'Lightweight TPU agility plate', 'Conical multi-ground studs'],
    technology: [
      { title: 'PrecisionSkin Upper', description: 'Ultra-thin synthetic skin with silicone ribs enhances spin and ball touch in wet conditions.' }
    ],
    materials: {
      upper: 'Waterproof microfiber synthetic',
      midsole: 'Contoured perforated sockliner',
      outsole: 'Injected TPU plate with molded conical studs',
      weight: '210g (UK 8)',
      offset: '4mm'
    },
    tags: ['Football', 'Cleats', 'Turf', 'Grip', 'Performance'],
    reviews: [
      { id: 'r10', userName: 'Sunil Chetri fan', rating: 5, date: '2026-08-04', title: 'Top quality football boots', comment: 'Ball grip is insane when taking free kicks. Fits snug like a second skin.', verifiedPurchase: true, userLocation: 'Kolkata' }
    ],
    recommendedWith: ['volt-01', 'volt-04']
  },

  // 10. WALKING / COMFORT - All-Day Recovery Slip-On
  {
    id: 'volt-10',
    slug: 'volt-motion-walk',
    name: 'Volt Motion Slip-On',
    tagline: 'Hands-free easy entry with pillow-soft arch support',
    category: 'Walking',
    gender: 'Unisex',
    description: 'Designed for daily 10,000 steps, airport travel, and post-workout recovery. Features a step-in spring collar so you can put them on with zero hands, and active arch reinforcement.',
    price: 3999,
    originalPrice: 4999,
    discountPercent: 20,
    isNewArrival: false,
    isBestSeller: true,
    isOnSale: true,
    rating: 4.9,
    reviewCount: 360,
    inStock: true,
    images: {
      main: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop',
      side: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop',
      top: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1200&auto=format&fit=crop',
      sole: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1200&auto=format&fit=crop',
      lifestyle: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=1200&auto=format&fit=crop'
    },
    colors: [
      { name: 'Heather Charcoal', hex: '#4B5563', image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Pure White / Ice Blue', hex: '#F3F4F6', image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Midnight Black', hex: '#111827', image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200&auto=format&fit=crop' }
    ],
    availableSizes: [5, 6, 7, 8, 9, 10, 11, 12],
    features: ['EasyStep hands-free heel collar', 'Contoured ergonomic arch support', 'Stretch sock knit upper', 'Shock-absorbing outsole'],
    technology: [
      { title: 'EasyStep Tech', description: 'Flexible internal hinge in heel collapses on step-in and snaps securely back around your ankle.' }
    ],
    materials: {
      upper: '4-Way Elastic Flex Knit',
      midsole: 'SoftPuff High Comfort EVA',
      outsole: 'Non-marking high-flex rubber',
      weight: '215g',
      offset: '6mm'
    },
    tags: ['Walking', 'Slip-on', 'Comfort', 'Arch Support', 'Hands-free'],
    reviews: [
      { id: 'r11', userName: 'Sunita Rao', rating: 5, date: '2026-08-08', title: 'My mother loves these shoes', comment: 'Step-in feature is a blessing. No bending down to tie laces, and the arch cushion relieved her heel pain.', verifiedPurchase: true, userLocation: 'Bengaluru' }
    ],
    recommendedWith: ['volt-03', 'volt-06', 'volt-08']
  },

  // 11. KIDS - High Energy Flexible Runner
  {
    id: 'volt-11',
    slug: 'volt-speed-kid',
    name: 'Volt Junior Sprint',
    tagline: 'Durable, flexible, and ultra-comfortable for all-day play',
    category: 'Kids',
    gender: 'Kids',
    description: 'Built to withstand playground sprints and school sports. Features quick-strap velcro closure with elastic laces, reinforced rubber toe guard, and lightweight shock absorption.',
    price: 2999,
    originalPrice: 3999,
    discountPercent: 25,
    isNewArrival: true,
    isBestSeller: true,
    isOnSale: true,
    rating: 4.8,
    reviewCount: 112,
    inStock: true,
    images: {
      main: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=1200&auto=format&fit=crop',
      side: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
      top: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1200&auto=format&fit=crop',
      sole: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop',
      lifestyle: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=1200&auto=format&fit=crop'
    },
    colors: [
      { name: 'Neon Electric Blue / Orange', hex: '#3B82F6', image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Vibrant Magenta / White', hex: '#EC4899', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1200&auto=format&fit=crop' }
    ],
    availableSizes: [5, 6, 7, 8],
    features: ['QuickStrap easy velcro fastener', 'Reinforced toe bumper', 'Washable odor-free footbed', 'Non-slip grip sole'],
    technology: [
      { title: 'KidFlex Cushion', description: 'Designed for developing feet with organic flex grooves allowing natural barefoot-like movement.' }
    ],
    materials: {
      upper: 'Reinforced sandwich mesh with synthetic shields',
      midsole: 'Lightweight KidFlex EVA',
      outsole: 'Non-marking durable rubber',
      weight: '160g',
      offset: '4mm'
    },
    tags: ['Kids', 'Velcro', 'Running', 'School', 'Durable'],
    reviews: [
      { id: 'r12', userName: 'Meera Kapur', rating: 5, date: '2026-07-22', title: 'Durable for active 9-year-old', comment: 'My son plays football and running during recess, these shoes take a beating and still look brand new.', verifiedPurchase: true, userLocation: 'Gurugram' }
    ],
    recommendedWith: ['volt-01', 'volt-02']
  },

  // 12. LIMITED EDITION - Carbon High Top Drop
  {
    id: 'volt-12',
    slug: 'volt-sprint-elite-limited',
    name: 'Volt Sprint Elite [Special Edition]',
    tagline: 'Limited Run of 500 numbered pairs worldwide',
    category: 'Running',
    gender: 'Men',
    description: 'Our most advanced racing shoe engineered to date. Features a custom gold titanium foil carbon plate, ultra-light monolithic upper, and individualized laser-etched serial numbering on the inner tongue.',
    price: 14999,
    originalPrice: 16999,
    discountPercent: 12,
    isNewArrival: true,
    isBestSeller: false,
    isMemberExclusive: true,
    isLimitedDrop: true,
    isOnSale: false,
    rating: 5.0,
    reviewCount: 48,
    inStock: true,
    activityType: 'Race Day',
    images: {
      main: 'https://images.unsplash.com/photo-1579338559194-a162d19bf842?q=80&w=1200&auto=format&fit=crop',
      side: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1200&auto=format&fit=crop',
      top: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
      sole: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop',
      lifestyle: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1200&auto=format&fit=crop'
    },
    colors: [
      { name: 'Monolith Gold / Carbon Stealth', hex: '#D97706', image: 'https://images.unsplash.com/photo-1579338559194-a162d19bf842?q=80&w=1200&auto=format&fit=crop' }
    ],
    availableSizes: [7, 8, 9, 10, 11],
    features: ['Individually Numbered Drop', 'Titanium-woven Carbon chassis', 'Hydrophobic AtomWeave upper', 'Collector hard case box included'],
    technology: [
      { title: 'Gold TitanPlate', description: 'Dual-axis curved plate calibrated for sub-3:00 marathon pacing.' }
    ],
    materials: {
      upper: 'AtomWeave 0.8mm feather-monofilament',
      midsole: 'Supercritical Aerofoam+ Pro Nitro',
      outsole: 'Laser-siped racing compound',
      weight: '168g (UK 8.5)',
      offset: '8mm'
    },
    tags: ['Limited Drop', 'Member Exclusive', 'Carbon Plate', 'Marathon', 'Collector'],
    reviews: [
      { id: 'r13', userName: 'Tanmay V.', rating: 5, date: '2026-08-15', title: 'Pure engineering masterpiece', comment: 'The packaging, the weight, the energy return... feels like futuristic technology on your feet.', verifiedPurchase: true, userLocation: 'Mumbai' }
    ],
    recommendedWith: ['volt-01', 'volt-04']
  },

  // 13. RUNNING - Max Cushion Road Cruiser
  {
    id: 'volt-13',
    slug: 'volt-reactiv-cloud',
    name: 'Volt Reactiv Cloud',
    tagline: 'Maximum stack height comfort for long recovery miles',
    category: 'Running',
    gender: 'Men',
    description: 'When your joints need pure unadulterated protection. With a 40mm stack of dual-density Reactiv foam and a smooth rocker geometry that propels you effortlessly through your gait cycle.',
    price: 8499,
    originalPrice: 10499,
    discountPercent: 19,
    isNewArrival: false,
    isBestSeller: true,
    isOnSale: true,
    rating: 4.8,
    reviewCount: 167,
    inStock: true,
    activityType: 'Daily Running',
    images: {
      main: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200&auto=format&fit=crop',
      side: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
      top: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1200&auto=format&fit=crop',
      sole: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop',
      lifestyle: 'https://images.unsplash.com/photo-1483721074573-4a7cc0e777f6?q=80&w=1200&auto=format&fit=crop'
    },
    colors: [
      { name: 'Obsidian / Electric Volt', hex: '#111827', image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Pure White / Platinum', hex: '#E5E7EB', image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop' }
    ],
    availableSizes: [6, 7, 8, 9, 10, 11, 12],
    features: ['40mm Max Stack Cushion', 'SmoothRoll Rocker Geometry', 'Gusseted Comfort Tongue', 'High Durability Rubber Coverage'],
    technology: [
      { title: 'SmoothRoll Rocker', description: 'Curved sole geometry reduces ankle flexion fatigue by 18% during endurance runs.' }
    ],
    materials: {
      upper: 'Engineered Jacquard mesh',
      midsole: 'Reactiv Cloud dual compound foam',
      outsole: 'High-mileage carbon rubber',
      weight: '270g',
      offset: '6mm (40mm / 34mm)'
    },
    tags: ['Max Cushion', 'Recovery', 'Road', 'Comfort', 'Running'],
    reviews: [
      { id: 'r14', userName: 'Gaurav Gill', rating: 5, date: '2026-07-20', title: 'Best recovery shoe', comment: 'Saves my knees on long Sunday 25k runs. Like running on marshmallows with bounce.', verifiedPurchase: true, userLocation: 'Delhi' }
    ],
    recommendedWith: ['volt-01', 'volt-02']
  },

  // 14. BASKETBALL - Low Cut Speed Weapon
  {
    id: 'volt-14',
    slug: 'volt-dunk-drive-low',
    name: 'Volt Dunk Drive Low',
    tagline: 'Low-cut agility sneaker for fast guards and playmakers',
    category: 'Basketball',
    gender: 'Men',
    description: 'Designed for quick cuts, crossovers, and relentless perimeter defense. The low profile ankle collar gives full range of mobility while the lateral outrigger prevents ankle roll.',
    price: 7999,
    originalPrice: 9499,
    discountPercent: 15,
    isNewArrival: true,
    isBestSeller: false,
    isOnSale: true,
    rating: 4.7,
    reviewCount: 88,
    inStock: true,
    activityType: 'Court Performance',
    images: {
      main: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
      side: 'https://images.unsplash.com/photo-1579338559194-a162d19bf842?q=80&w=1200&auto=format&fit=crop',
      top: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1200&auto=format&fit=crop',
      sole: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop',
      lifestyle: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop'
    },
    colors: [
      { name: 'Bred Flame / Black', hex: '#DC2626', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Triple White / Ice', hex: '#FFFFFF', image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop' }
    ],
    availableSizes: [7, 8, 9, 10, 11, 12],
    features: ['Low Cut Freedom Collar', 'Lateral Anti-Roll Outrigger', 'Forefoot Spring Springplate', 'Multi-directional Court Siping'],
    technology: [
      { title: 'DrivePlate Agility', description: 'Composite plate snaps back rapidly during rapid changes of direction.' }
    ],
    materials: {
      upper: 'Durable ripstop weave with TPU film laminates',
      midsole: 'Responsive EVA compound with Zoom pods',
      outsole: 'Gum rubber with herringbone grooves',
      weight: '340g',
      offset: '5mm'
    },
    tags: ['Basketball', 'Low Top', 'Guards', 'Agility', 'Speed'],
    reviews: [
      { id: 'r15', userName: 'Kunal G.', rating: 5, date: '2026-08-07', title: 'Insane ankle freedom for guards', comment: 'Super fast shoe for crossovers. Traction bites hard on clean or dusty courts.', verifiedPurchase: true, userLocation: 'Ahmedabad' }
    ],
    recommendedWith: ['volt-04', 'volt-05']
  },

  // 15. LIFESTYLE - Chunky Modern Street Icon
  {
    id: 'volt-15',
    slug: 'volt-urban-runner',
    name: 'Volt Urban Runner',
    tagline: 'Bold futuristic silhouette with architectural sculpted sole',
    category: 'Lifestyle',
    gender: 'Unisex',
    description: 'An unapologetic statement sneaker designed for modern streetwear enthusiasts. Features exaggerated geometric tooling, layered nubuck leather and reflective piping.',
    price: 6999,
    originalPrice: 8499,
    discountPercent: 17,
    isNewArrival: true,
    isBestSeller: true,
    isOnSale: true,
    rating: 4.9,
    reviewCount: 260,
    inStock: true,
    activityType: 'Streetwear',
    images: {
      main: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1200&auto=format&fit=crop',
      side: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop',
      top: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop',
      sole: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1200&auto=format&fit=crop',
      lifestyle: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=1200&auto=format&fit=crop'
    },
    colors: [
      { name: 'Monochrome Chalk / Bone', hex: '#E5E5E5', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Cyberpunk Neon / Slate', hex: '#334155', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1200&auto=format&fit=crop' }
    ],
    availableSizes: [5, 6, 7, 8, 9, 10, 11, 12],
    features: ['Sculpted Geometric Chunky Midsole', 'Layered Nubuck & Technical Mesh', '3M Reflective Piping', 'Heavy-Duty Rope Laces'],
    technology: [
      { title: 'Volt Sculpt Foam', description: 'Sculpted lightweight polymer absorbs city pavement shocks without adding bulk.' }
    ],
    materials: {
      upper: 'Premium Nubuck, ballistic mesh, 3M reflective trims',
      midsole: 'Sculpted lightweight Phylon',
      outsole: 'High-wear lugged rubber',
      weight: '360g',
      offset: '8mm'
    },
    tags: ['Chunky', 'Streetwear', 'Fashion', 'Reflective', 'Modern'],
    reviews: [
      { id: 'r16', userName: 'Zoya Khan', rating: 5, date: '2026-08-05', title: 'Got so many compliments in Bandra', comment: 'The shape is incredible. Super chunky without feeling heavy at all.', verifiedPurchase: true, userLocation: 'Mumbai' }
    ],
    recommendedWith: ['volt-03', 'volt-08']
  },

  // 16. RUNNING - Stability & Overpronation Control
  {
    id: 'volt-16',
    slug: 'volt-surge-stability',
    name: 'Volt Surge Stability',
    tagline: 'Guaranteed arch support and stride guidance for overpronators',
    category: 'Running',
    gender: 'Men',
    description: 'Engineered for runners requiring extra biomechanical support. Features a medial dual-density GuideRail system that gently realigns excess inward foot rotation without feeling stiff.',
    price: 7999,
    originalPrice: 9999,
    discountPercent: 20,
    isNewArrival: false,
    isBestSeller: false,
    isOnSale: true,
    rating: 4.8,
    reviewCount: 135,
    inStock: true,
    activityType: 'Daily Running',
    images: {
      main: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1200&auto=format&fit=crop',
      side: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
      top: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop',
      sole: 'https://images.unsplash.com/photo-1551107696-a4b085a6d966?q=80&w=1200&auto=format&fit=crop',
      lifestyle: 'https://images.unsplash.com/photo-1483721074573-4a7cc0e777f6?q=80&w=1200&auto=format&fit=crop'
    },
    colors: [
      { name: 'Steel Slate / Electric Orange', hex: '#64748B', image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Midnight Navy / Silver', hex: '#1E293B', image: 'https://images.unsplash.com/photo-1551107696-a4b085a6d966?q=80&w=1200&auto=format&fit=crop' }
    ],
    availableSizes: [6, 7, 8, 9, 10, 11, 12],
    features: ['GuideRail Medial Stride Support', 'Reinforced Heel Counter', 'Plush OrthoLite Sockliner', 'Segmented Crash Pad'],
    technology: [
      { title: 'GuideRail Technology', description: 'Holistic support framework keeps excess movement in check to safeguard knees and hips.' }
    ],
    materials: {
      upper: 'Structured dual-layer engineered mesh',
      midsole: 'Dual-density Surge Support EVA',
      outsole: 'Durable blown rubber with flex grooves',
      weight: '280g',
      offset: '10mm'
    },
    tags: ['Stability', 'Overpronation', 'Arch Support', 'Road Running'],
    reviews: [
      { id: 'r17', userName: 'Rajesh Nair', rating: 5, date: '2026-07-29', title: 'Cured my shin splints', comment: 'The stability rails guide my foot naturally without poking into the arch. Huge relief.', verifiedPurchase: true, userLocation: 'Kochi' }
    ],
    recommendedWith: ['volt-01', 'volt-02']
  },

  // 17. WOMEN LIFESTYLE - Platform Tennis Court Sneaker
  {
    id: 'volt-17',
    slug: 'volt-court-platform-wmn',
    name: 'Volt Court Platform WMN',
    tagline: 'Clean court styling with subtle elevated platform lift',
    category: 'Lifestyle',
    gender: 'Women',
    description: 'Elevate your daily outfit with our sleek court sneaker featuring a tasteful 35mm platform sole. Made with crisp smooth leather, gilded gold hardware, and cushioned foam insole.',
    price: 5999,
    originalPrice: 7499,
    discountPercent: 20,
    isNewArrival: true,
    isBestSeller: true,
    isOnSale: true,
    rating: 4.9,
    reviewCount: 280,
    inStock: true,
    activityType: 'Streetwear',
    images: {
      main: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop',
      side: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1200&auto=format&fit=crop',
      top: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop',
      sole: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1200&auto=format&fit=crop',
      lifestyle: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=1200&auto=format&fit=crop'
    },
    colors: [
      { name: 'Crisp White / Champagne Gold', hex: '#FFFFFF', image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Pastel Sage / Off-White', hex: '#D1FAE5', image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1200&auto=format&fit=crop' }
    ],
    availableSizes: [5, 6, 7, 8, 9, 10],
    features: ['35mm Elevated Platform Midsole', 'Ultra-soft Nappa leather', 'Memory cushion footbed', 'Gold eyelet accents'],
    technology: [
      { title: 'CloudPlatform Core', description: 'Hollow cored platform sole reduces weight by 40% compared to traditional vulcanized rubber.' }
    ],
    materials: {
      upper: 'Smooth soft leather with reinforced stitching',
      midsole: 'Cored lightweight EVA platform',
      outsole: 'Non-slip patterned rubber',
      weight: '295g',
      offset: '0mm (Flat Platform)'
    },
    tags: ['Platform', 'Women', 'Lifestyle', 'Leather', 'Elevated'],
    reviews: [
      { id: 'r18', userName: 'Kavya Sen', rating: 5, date: '2026-08-09', title: 'Super flattering and ridiculously comfy', comment: 'Gives the perfect subtle height boost while remaining easy to walk in all day around office and cafes.', verifiedPurchase: true, userLocation: 'Bengaluru' }
    ],
    recommendedWith: ['volt-03', 'volt-06', 'volt-15']
  },

  // 18. TRAINING - Minimalist Barefoot Cross Trainer
  {
    id: 'volt-18',
    slug: 'volt-bare-pulse',
    name: 'Volt Bare Pulse',
    tagline: 'Zero-drop anatomical footbed for natural biomechanics',
    category: 'Training',
    gender: 'Unisex',
    description: 'Reconnect with your natural footing. Features a zero-drop flat profile, ultra-wide toe box for natural splay, and a flexible puncture-resistant 3mm minimalist sole.',
    price: 4999,
    originalPrice: 5999,
    discountPercent: 16,
    isNewArrival: false,
    isBestSeller: false,
    isOnSale: true,
    rating: 4.7,
    reviewCount: 94,
    inStock: true,
    activityType: 'Gym & HIIT',
    images: {
      main: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop',
      side: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
      top: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1200&auto=format&fit=crop',
      sole: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1200&auto=format&fit=crop',
      lifestyle: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop'
    },
    colors: [
      { name: 'All Black Bare', hex: '#000000', image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Storm Grey / Cyan', hex: '#475569', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop' }
    ],
    availableSizes: [6, 7, 8, 9, 10, 11, 12],
    features: ['Zero-Drop 0mm Heel-to-Toe', 'Wide Anatomical Toe Box', 'Ultra-flexible 3mm puncture shield sole', 'Breathable knit sock'],
    technology: [
      { title: 'BareGrip Sole', description: 'Ultra-thin puncture-resistant rubber allows sensory feedback while protecting the sole.' }
    ],
    materials: {
      upper: 'Elastic breathable engineered knit',
      midsole: '2mm Removable sensory footbed',
      outsole: '3mm High-flex sticky rubber',
      weight: '175g',
      offset: '0mm'
    },
    tags: ['Barefoot', 'Zero Drop', 'Gym', 'Natural', 'Training'],
    reviews: [
      { id: 'r19', userName: 'Aditya Roy', rating: 5, date: '2026-07-16', title: 'Amazing for deadlifts and calf strengthening', comment: 'Toe box gives my toes total freedom. Great barefoot feel with just enough protection from gym floors.', verifiedPurchase: true, userLocation: 'Delhi' }
    ],
    recommendedWith: ['volt-05', 'volt-10']
  },

  // 19. BASKETBALL - High Top Shock Absorber
  {
    id: 'volt-19',
    slug: 'volt-gravity-zero',
    name: 'Volt Gravity Zero',
    tagline: 'High-flying bounce cushioning and lockdown cage',
    category: 'Basketball',
    gender: 'Men',
    description: 'Built for high flyers and rim protectors. The dual-chamber air cushioning unit absorbs maximum vertical descent shock, while the external TPU exoskeleton locks down lateral slippage.',
    price: 10999,
    originalPrice: 13999,
    discountPercent: 21,
    isNewArrival: false,
    isBestSeller: true,
    isOnSale: true,
    rating: 4.9,
    reviewCount: 156,
    inStock: true,
    activityType: 'Court Performance',
    images: {
      main: 'https://images.unsplash.com/photo-1579338559194-a162d19bf842?q=80&w=1200&auto=format&fit=crop',
      side: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
      top: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1200&auto=format&fit=crop',
      sole: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop',
      lifestyle: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop'
    },
    colors: [
      { name: 'Black Panther / Volt Accents', hex: '#0F172A', image: 'https://images.unsplash.com/photo-1579338559194-a162d19bf842?q=80&w=1200&auto=format&fit=crop' },
      { name: 'White Heat / Crimson', hex: '#FFFFFF', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop' }
    ],
    availableSizes: [7, 8, 9, 10, 11, 12],
    features: ['Dual-Chamber Max Air Midsole', 'External Molded TPU Cage', 'Padded Ankle Support Collar', 'Indoor/Outdoor Hybrid Rubber'],
    technology: [
      { title: 'AirMatrix 360', description: 'Surrounds heel and forefoot with 360-degree pressurized dampening for heavy rebound protection.' }
    ],
    materials: {
      upper: 'Molded ballistic composite mesh',
      midsole: 'Phylon with AirMatrix 360 unit',
      outsole: 'High-density multi-compound rubber',
      weight: '410g',
      offset: '8mm'
    },
    tags: ['Basketball', 'High Top', 'Air Cushion', 'Dunk', 'Court'],
    reviews: [
      { id: 'r20', userName: 'Manish Verma', rating: 5, date: '2026-08-03', title: 'Saves your knees on hard concrete courts', comment: 'I play on outdoor cement courts and the cushioning keeps my knees feeling 100% fine.', verifiedPurchase: true, userLocation: 'Chandigarh' }
    ],
    recommendedWith: ['volt-04', 'volt-14']
  },

  // 20. FOOTBALL / TURF - Indoor Sala & Turf Specialist
  {
    id: 'volt-20',
    slug: 'volt-strike-sala',
    name: 'Volt Strike Sala',
    tagline: 'Low profile indoor football shoe with gum rubber control',
    category: 'Football',
    gender: 'Men',
    description: 'Precision engineering for fast-paced 5-a-side and futsal courts. High abrasion suede toe cap ensures crisp toe-pokes and long-lasting protection on indoor wood and synthetic turf.',
    price: 5499,
    originalPrice: 6999,
    discountPercent: 21,
    isNewArrival: false,
    isBestSeller: false,
    isOnSale: true,
    rating: 4.8,
    reviewCount: 82,
    inStock: true,
    images: {
      main: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=1200&auto=format&fit=crop',
      side: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
      top: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1200&auto=format&fit=crop',
      sole: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop',
      lifestyle: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1200&auto=format&fit=crop'
    },
    colors: [
      { name: 'Pure White / Electric Red', hex: '#EF4444', image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Core Black / Solar Lime', hex: '#111827', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1200&auto=format&fit=crop' }
    ],
    availableSizes: [6, 7, 8, 9, 10, 11],
    features: ['Suede Toe Bumper Strike Zone', 'Non-marking natural gum outsole', 'Low-profile EVA dampening', 'Breathable side mesh panels'],
    technology: [
      { title: 'FutsalGrip Tread', description: 'Micro-textured herringbone creates instant stopping friction on polished turf and indoor floors.' }
    ],
    materials: {
      upper: 'Reinforced suede leather and micro-mesh',
      midsole: 'Low-profile compressed EVA',
      outsole: 'Non-marking raw gum rubber',
      weight: '240g',
      offset: '3mm'
    },
    tags: ['Football', 'Futsal', 'Turf', 'Suede', 'Indoor'],
    reviews: [
      { id: 'r21', userName: 'Farhan Ali', rating: 5, date: '2026-07-25', title: 'Superb control for 5-a-side matches', comment: 'Ball feel is accurate and the suede bumper helps with toe-pokes. Outstanding turf shoe.', verifiedPurchase: true, userLocation: 'Goa' }
    ],
    recommendedWith: ['volt-09', 'volt-05']
  },

  // 21. KIDS - Light Up Energy Sneaker
  {
    id: 'volt-21',
    slug: 'volt-glow-kids',
    name: 'Volt Lumos Kid',
    tagline: 'Fun LED motion-activated bounce sneakers with easy strap',
    category: 'Kids',
    gender: 'Kids',
    description: 'Designed to bring endless excitement to every hop and jump. Features rechargeable shock-activated LED lights in the translucent heel midsole and dual elastic pull straps.',
    price: 3499,
    originalPrice: 4499,
    discountPercent: 22,
    isNewArrival: true,
    isBestSeller: false,
    isOnSale: true,
    rating: 4.9,
    reviewCount: 95,
    inStock: true,
    images: {
      main: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=1200&auto=format&fit=crop',
      side: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1200&auto=format&fit=crop',
      top: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop',
      sole: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1200&auto=format&fit=crop',
      lifestyle: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=1200&auto=format&fit=crop'
    },
    colors: [
      { name: 'Galaxy Blue / Solar Yellow', hex: '#2563EB', image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Glitter Lavender / Silver', hex: '#A855F7', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1200&auto=format&fit=crop' }
    ],
    availableSizes: [5, 6, 7, 8],
    features: ['Motion-Activated LED Heel Lighting', 'Self-gripping velcro strap', 'Padded collar & tongue', 'Scuff-resistant outsole'],
    technology: [
      { title: 'LumosLite LED System', description: 'Long-life sealed motion sensors flash vibrant colors with zero maintenance.' }
    ],
    materials: {
      upper: 'Glitter TPU and breathable mesh',
      midsole: 'Translucent cushioning EVA with integrated LED',
      outsole: 'Non-scuffing rubber',
      weight: '170g',
      offset: '4mm'
    },
    tags: ['Kids', 'LED', 'Light-up', 'Fun', 'Velcro'],
    reviews: [
      { id: 'r22', userName: 'Shalini Gupta', rating: 5, date: '2026-08-01', title: 'Daughter’s favorite shoes!', comment: 'She refuses to take them off. The lights are bright and the quality is remarkably sturdy.', verifiedPurchase: true, userLocation: 'Delhi' }
    ],
    recommendedWith: ['volt-11', 'volt-03']
  },

  // 22. HIKING - High Top Waterproof Trek Boot
  {
    id: 'volt-22',
    slug: 'volt-summit-gtx',
    name: 'Volt Summit Alpine',
    tagline: 'High-ankle waterproof mountain boots for rugged Himalayan trails',
    category: 'Hiking',
    gender: 'Men',
    description: 'Engineered for high altitude expeditions and unpredictable weather. Features a seam-sealed waterproof breathable inner membrane, metal speed lacing hooks, and deep multi-directional mountain lugs.',
    price: 11999,
    originalPrice: 14999,
    discountPercent: 20,
    isNewArrival: false,
    isBestSeller: true,
    isOnSale: true,
    rating: 4.9,
    reviewCount: 142,
    inStock: true,
    activityType: 'Outdoor',
    images: {
      main: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1200&auto=format&fit=crop',
      side: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
      top: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1200&auto=format&fit=crop',
      sole: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop',
      lifestyle: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop'
    },
    colors: [
      { name: 'Alpine Charcoal / Rust', hex: '#334155', image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Earth Ochre / Hunter Green', hex: '#78350F', image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1200&auto=format&fit=crop' }
    ],
    availableSizes: [7, 8, 9, 10, 11, 12],
    features: ['Seam-Sealed Waterproof Membrane', 'Metal speed lacing eyelets', 'Ankle FlexSupport exoskeleton', '6mm Deep MudLugs'],
    technology: [
      { title: 'AquaGuard Membrane', description: 'Micro-porous membrane blocks rain and river water while venting foot vapor.' }
    ],
    materials: {
      upper: 'Waterproof Nubuck leather with ballistic Cordura collars',
      midsole: 'Dual-density compressed PU chassis',
      outsole: 'VibraTack 6mm deep lugs',
      weight: '480g',
      offset: '10mm'
    },
    tags: ['Hiking', 'Waterproof', 'Boots', 'High Top', 'Trekking'],
    reviews: [
      { id: 'r23', userName: 'Abhishek Jha', rating: 5, date: '2026-07-18', title: 'Surpassed expectations on Kedarkantha winter trek', comment: 'Stomped through snow and slush, feet remained bone dry and warm. Ankle stability saved me from rolling.', verifiedPurchase: true, userLocation: 'Dehradun' }
    ],
    recommendedWith: ['volt-07', 'volt-05']
  },

  // 23. RUNNING - Fast 5K / 10K Tempo Trainer
  {
    id: 'volt-23',
    slug: 'volt-turbo-tempo',
    name: 'Volt Turbo Tempo',
    tagline: 'Snappy response engineered for interval repeats and tempo runs',
    category: 'Running',
    gender: 'Men',
    description: 'Designed for the days you want to run fast without a stiff carbon plate. Features a responsive Pebax foam insert in the forefoot and a lightweight stripped-down upper.',
    price: 6999,
    originalPrice: 8999,
    discountPercent: 22,
    isNewArrival: true,
    isBestSeller: false,
    isOnSale: true,
    rating: 4.8,
    reviewCount: 110,
    inStock: true,
    activityType: 'Race Day',
    images: {
      main: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1200&auto=format&fit=crop',
      side: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
      top: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1200&auto=format&fit=crop',
      sole: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop',
      lifestyle: 'https://images.unsplash.com/photo-1483721074573-4a7cc0e777f6?q=80&w=1200&auto=format&fit=crop'
    },
    colors: [
      { name: 'Electric Acid Yellow / Black', hex: '#CCFF00', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Signal Orange / White', hex: '#F97316', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop' }
    ],
    availableSizes: [6, 7, 8, 9, 10, 11, 12],
    features: ['Pebax Forefoot Energizer Pad', 'Ultra-breathable single-layer mesh', 'Asymmetrical race lacing', 'High grip forefoot traction'],
    technology: [
      { title: 'Pebax Turbo Pod', description: 'High resilience foam pod returns 85% kinetic energy on every toe push-off.' }
    ],
    materials: {
      upper: 'Single-layer engineered monomesh',
      midsole: 'Lightweight EVA with Pebax core',
      outsole: 'Micro-lugged racing rubber',
      weight: '205g',
      offset: '6mm'
    },
    tags: ['Speed', 'Tempo', 'Lightweight', '5K', 'Intervals'],
    reviews: [
      { id: 'r24', userName: 'Sameer Sen', rating: 5, date: '2026-08-06', title: 'Best tempo shoe under 10k in India', comment: 'Snappy without being too harsh on calves. Perfect for track workouts.', verifiedPurchase: true, userLocation: 'Pune' }
    ],
    recommendedWith: ['volt-01', 'volt-02']
  },

  // 24. WOMEN TRAINING - Studio & Dance HIIT Sneaker
  {
    id: 'volt-24',
    slug: 'volt-studio-pivot-wmn',
    name: 'Volt Studio Pivot WMN',
    tagline: 'Smooth pivot point sole for Zumba, Pilates, and studio HIIT',
    category: 'Training',
    gender: 'Women',
    description: 'Engineered for multidirectional dance, Zumba, and gym classes. Features a circular pivot disc under the ball of the foot, allowing smooth 360-degree spins without torque on knees.',
    price: 4999,
    originalPrice: 6499,
    discountPercent: 23,
    isNewArrival: false,
    isBestSeller: true,
    isOnSale: true,
    rating: 4.9,
    reviewCount: 215,
    inStock: true,
    activityType: 'Gym & HIIT',
    images: {
      main: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1200&auto=format&fit=crop',
      side: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop',
      top: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop',
      sole: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1200&auto=format&fit=crop',
      lifestyle: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop'
    },
    colors: [
      { name: 'Rose Gold / Pure White', hex: '#FDA4AF', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Midnight Charcoal / Lilac', hex: '#475569', image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop' }
    ],
    availableSizes: [5, 6, 7, 8, 9],
    features: ['Forefoot SpinPoint pivot disc', 'Split-sole flexibility', 'Breathable metallic mesh', 'Anti-slip heel silicone grip'],
    technology: [
      { title: 'SpinPoint Outsole', description: 'Low friction pivot node prevents torsion injury on indoor studio hardwood.' }
    ],
    materials: {
      upper: 'Stretch jacquard mesh with bonded TPU support',
      midsole: 'Split-cushion EVA',
      outsole: 'Non-marking studio rubber with pivot circle',
      weight: '195g',
      offset: '4mm'
    },
    tags: ['Zumba', 'Dance', 'Studio', 'HIIT', 'Women'],
    reviews: [
      { id: 'r25', userName: 'Tanya Roy', rating: 5, date: '2026-07-31', title: 'A gamechanger for Zumba instructors', comment: 'Spins feel effortless. My knees feel so much better after 2 hours of dance class.', verifiedPurchase: true, userLocation: 'Mumbai' }
    ],
    recommendedWith: ['volt-06', 'volt-17']
  },

  // 25. LIFESTYLE - High Top Retro Skate & Street
  {
    id: 'volt-25',
    slug: 'volt-skate-high',
    name: 'Volt High Top 77',
    tagline: 'Padded ankle collars with durable suede canvas vulcanized sole',
    category: 'Lifestyle',
    gender: 'Unisex',
    description: 'An iconic street and skate staple. Reinforced ollie-patch suede with thick padded tongue, brass hardware, and vulcanized gum herringbone sole.',
    price: 4499,
    originalPrice: 5499,
    discountPercent: 18,
    isNewArrival: false,
    isBestSeller: false,
    isOnSale: true,
    rating: 4.7,
    reviewCount: 165,
    inStock: true,
    activityType: 'Streetwear',
    images: {
      main: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop',
      side: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1200&auto=format&fit=crop',
      top: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop',
      sole: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1200&auto=format&fit=crop',
      lifestyle: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=1200&auto=format&fit=crop'
    },
    colors: [
      { name: 'Black Canvas / Gum Sole', hex: '#18181B', image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Raw Natural Canvas / White', hex: '#F4F4F5', image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1200&auto=format&fit=crop' }
    ],
    availableSizes: [5, 6, 7, 8, 9, 10, 11, 12],
    features: ['Reinforced Suede Ollie Guard', 'Double-wrapped vulcanized foxing tape', 'Impact Drop-in insole', 'Padded ankle collar'],
    technology: [
      { title: 'VulcaGrip Waffle', description: 'Dual-baked vulcanized gum rubber delivers tactile board feel and supreme durability.' }
    ],
    materials: {
      upper: '12oz Heavyweight cotton canvas with pig suede overlays',
      midsole: 'Polyurethane drop-in impact cushion',
      outsole: 'Vulcanized natural gum rubber',
      weight: '390g',
      offset: '0mm'
    },
    tags: ['Skate', 'High Top', 'Canvas', 'Retro', 'Streetwear'],
    reviews: [
      { id: 'r26', userName: 'Harsh Vardhan', rating: 5, date: '2026-08-02', title: 'Sturdy and looks super clean with baggy cargo pants', comment: 'Quality is heavy and solid. The ankle padding is very plush.', verifiedPurchase: true, userLocation: 'Delhi' }
    ],
    recommendedWith: ['volt-03', 'volt-08']
  },

  // 26. WALKING - Orthopedic Active Strider
  {
    id: 'volt-26',
    slug: 'volt-stride-ortho',
    name: 'Volt Stride Comfort+',
    tagline: 'Medically engineered rocker sole for plantar relief',
    category: 'Walking',
    gender: 'Unisex',
    description: 'Engineered in consultation with physical therapists for maximum pain-free walking. Featuring a targeted heel-cradle cup, anatomically molded metatarsal pad, and easy wide fit.',
    price: 4999,
    originalPrice: 6499,
    discountPercent: 23,
    isNewArrival: false,
    isBestSeller: true,
    isOnSale: true,
    rating: 4.9,
    reviewCount: 310,
    inStock: true,
    images: {
      main: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop',
      side: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop',
      top: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1200&auto=format&fit=crop',
      sole: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1200&auto=format&fit=crop',
      lifestyle: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=1200&auto=format&fit=crop'
    },
    colors: [
      { name: 'Dark Grey Heather', hex: '#4B5563', image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Navy Blue / White', hex: '#1E3A8A', image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop' }
    ],
    availableSizes: [6, 7, 8, 9, 10, 11, 12],
    features: ['Ergonomic Heel Cup Cushion', 'Anatomical Metatarsal dome', 'Wide Toe Box construction', 'Non-slip grip outsole'],
    technology: [
      { title: 'OrthoActive Chassis', description: 'Redistributes body weight away from pressure points to eliminate heel spur and plantar pain.' }
    ],
    materials: {
      upper: 'Seamless breathable stretch knit with foam lining',
      midsole: 'Anatomical molded EVA with gel heel disc',
      outsole: 'Anti-slip grooved rubber',
      weight: '255g',
      offset: '8mm'
    },
    tags: ['Orthopedic', 'Plantar Fasciitis', 'Walking', 'Arch Support', 'Comfort'],
    reviews: [
      { id: 'r27', userName: 'Dr. Neeraj Bansal', rating: 5, date: '2026-07-27', title: 'Excellent therapeutic support for daily rounds', comment: 'As a surgeon on my feet 10 hours a day, these have been a lifesaver for back and foot fatigue.', verifiedPurchase: true, userLocation: 'Delhi' }
    ],
    recommendedWith: ['volt-10', 'volt-02']
  },

  // 27. RUNNING - Winter & Wet Weather Shield
  {
    id: 'volt-27',
    slug: 'volt-shield-run-gtx',
    name: 'Volt Shield Storm Run',
    tagline: 'Waterproof insulated road runner with reflective 360 glow',
    category: 'Running',
    gender: 'Men',
    description: 'Keep your training streak alive through monsoon downpours and winter chill. Features a water-impermeable HydroWeave bootie, fleece thermal lining, and storm-tread sticky wet rubber.',
    price: 9499,
    originalPrice: 11999,
    discountPercent: 20,
    isNewArrival: true,
    isBestSeller: false,
    isOnSale: true,
    rating: 4.8,
    reviewCount: 92,
    inStock: true,
    activityType: 'Daily Running',
    images: {
      main: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
      side: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1200&auto=format&fit=crop',
      top: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop',
      sole: 'https://images.unsplash.com/photo-1551107696-a4b085a6d966?q=80&w=1200&auto=format&fit=crop',
      lifestyle: 'https://images.unsplash.com/photo-1483721074573-4a7cc0e777f6?q=80&w=1200&auto=format&fit=crop'
    },
    colors: [
      { name: 'Storm Grey / Hi-Vis Orange', hex: '#EA580C', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Blackout Reflective', hex: '#18181B', image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200&auto=format&fit=crop' }
    ],
    availableSizes: [6, 7, 8, 9, 10, 11, 12],
    features: ['HydroWeave Waterproof Inner Bootie', '360-Degree High-Vis Reflective details', 'StormTread Wet Road Rubber', 'Gusseted water-shedding tongue'],
    technology: [
      { title: 'HydroWeave Barrier', description: 'Dual-layer membrane repels heavy puddles while venting humid sweat out.' }
    ],
    materials: {
      upper: 'Water-repellent ripstop with sealed seams',
      midsole: 'Cold-resistant Aerofoam Shield compound',
      outsole: 'Micro-siped StormTread rubber',
      weight: '290g',
      offset: '9mm'
    },
    tags: ['Waterproof', 'Winter', 'Monsoon', 'Reflective', 'Running'],
    reviews: [
      { id: 'r28', userName: 'Nikhil Mathur', rating: 5, date: '2026-08-03', title: 'Tested in Mumbai monsoon puddles', comment: 'Ran 12k in torrential rains. Feet were completely bone dry when I took them off!', verifiedPurchase: true, userLocation: 'Mumbai' }
    ],
    recommendedWith: ['volt-01', 'volt-07']
  },

  // 28. BASKETBALL - Street Court Outdoor Durable
  {
    id: 'volt-28',
    slug: 'volt-asphalt-king',
    name: 'Volt Asphalt King',
    tagline: 'Extra-thick XDR rubber outsole for harsh concrete asphalt',
    category: 'Basketball',
    gender: 'Men',
    description: 'Designed specifically for grueling outdoor pickup basketball on rough tarmac and concrete. Built with extra-dense XDR rubber that resists abrasion 3x longer than indoor shoes.',
    price: 6499,
    originalPrice: 7999,
    discountPercent: 18,
    isNewArrival: false,
    isBestSeller: true,
    isOnSale: true,
    rating: 4.8,
    reviewCount: 178,
    inStock: true,
    activityType: 'Court Performance',
    images: {
      main: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1200&auto=format&fit=crop',
      side: 'https://images.unsplash.com/photo-1579338559194-a162d19bf842?q=80&w=1200&auto=format&fit=crop',
      top: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
      sole: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop',
      lifestyle: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop'
    },
    colors: [
      { name: 'Asphalt Black / Solar Red', hex: '#DC2626', image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Cool Grey / Volt', hex: '#6B7280', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1200&auto=format&fit=crop' }
    ],
    availableSizes: [7, 8, 9, 10, 11, 12],
    features: ['Extra Durable XDR Rubber Sole', 'Reinforced toe drag overlay', 'Shock Absorbing Heel Air Pad', 'Breathable padded tongue'],
    technology: [
      { title: 'XDR Asphalt Compound', description: 'Hardened high-silica rubber compound formulated to resist concrete grinding.' }
    ],
    materials: {
      upper: 'Reinforced synthetic leather and heavy mesh',
      midsole: 'Thick compressed Phylon cushion',
      outsole: 'Ultra-durable XDR rubber with deep grooves',
      weight: '390g',
      offset: '7mm'
    },
    tags: ['Basketball', 'Outdoor', 'Concrete', 'XDR', 'Durable'],
    reviews: [
      { id: 'r29', userName: 'Tarun B.', rating: 5, date: '2026-07-21', title: '6 months on outdoor court and still great grip', comment: 'Regular shoes wear smooth in 2 months on our court. These XDR soles are virtually indestructible.', verifiedPurchase: true, userLocation: 'Delhi' }
    ],
    recommendedWith: ['volt-04', 'volt-14']
  },

  // 29. WOMEN LIFESTYLE - Pastel Runner Slip
  {
    id: 'volt-29',
    slug: 'volt-cloud-knit-wmn',
    name: 'Volt CloudKnit WMN',
    tagline: 'Featherlight stretch knit slip-on with pastel gradient accents',
    category: 'Lifestyle',
    gender: 'Women',
    description: 'Slip into total comfort for busy days, weekend brunches, and travel. Seamless knit construction hugs your foot like a cozy sock with zero pinch points.',
    price: 4499,
    originalPrice: 5999,
    discountPercent: 25,
    isNewArrival: true,
    isBestSeller: true,
    isOnSale: true,
    rating: 4.9,
    reviewCount: 240,
    inStock: true,
    activityType: 'Streetwear',
    images: {
      main: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1200&auto=format&fit=crop',
      side: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop',
      top: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop',
      sole: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1200&auto=format&fit=crop',
      lifestyle: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=1200&auto=format&fit=crop'
    },
    colors: [
      { name: 'Peach Blossom / Vanilla', hex: '#FDBA74', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Cloud White / Sky Tint', hex: '#E0F2FE', image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop' }
    ],
    availableSizes: [5, 6, 7, 8, 9, 10],
    features: ['Seamless 360 Stretch Knit', 'Featherweight 170g chassis', 'Memory Foam Cloud insole', 'Machine washable construction'],
    technology: [
      { title: 'CloudKnit Weave', description: 'Zero-waste engineered knit provides variable elasticity mapped to foot movement.' }
    ],
    materials: {
      upper: '100% Recycled polyester stretch knit',
      midsole: 'Ultra-soft low-density EVA',
      outsole: 'Flexible traction pods',
      weight: '170g (UK 5)',
      offset: '4mm'
    },
    tags: ['Slip-on', 'Knit', 'Pastel', 'Lightweight', 'Women'],
    reviews: [
      { id: 'r30', userName: 'Rhea Nambiar', rating: 5, date: '2026-08-12', title: 'Feels like wearing warm cozy socks', comment: 'The softest shoes I own. Walked 15k steps in Singapore vacation with no fatigue.', verifiedPurchase: true, userLocation: 'Kochi' }
    ],
    recommendedWith: ['volt-06', 'volt-17']
  },

  // 30. KIDS - All Terrain Adventure Kid
  {
    id: 'volt-30',
    slug: 'volt-trail-scout-kids',
    name: 'Volt Scout Junior',
    tagline: 'Rugged water-resistant grip for outdoor exploring and camps',
    category: 'Kids',
    gender: 'Kids',
    description: 'Equip young adventurers for school picnics, nature trails, and rainy day exploration. Built with durable rubber armor around the toes and high-traction outdoor lugs.',
    price: 3299,
    originalPrice: 4299,
    discountPercent: 23,
    isNewArrival: false,
    isBestSeller: false,
    isOnSale: true,
    rating: 4.8,
    reviewCount: 78,
    inStock: true,
    images: {
      main: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=1200&auto=format&fit=crop',
      side: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1200&auto=format&fit=crop',
      top: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1200&auto=format&fit=crop',
      sole: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop',
      lifestyle: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=1200&auto=format&fit=crop'
    },
    colors: [
      { name: 'Forest Moss / Neon Lime', hex: '#15803D', image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Desert Sand / Navy', hex: '#D97706', image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1200&auto=format&fit=crop' }
    ],
    availableSizes: [5, 6, 7, 8],
    features: ['Quick-pull bungee cord lacing', 'Rugged rubber toe cap', 'Water-shedding treatment', 'Lugged trail sole'],
    technology: [
      { title: 'KidShield Armor', description: 'Protective toe and heel bumpers prevent stubbed toes during rough outdoor play.' }
    ],
    materials: {
      upper: 'Water-resistant ripstop nylon with synthetic leather',
      midsole: 'Shock-dampening EVA',
      outsole: 'Lugged outdoor rubber',
      weight: '185g',
      offset: '4mm'
    },
    tags: ['Kids', 'Trail', 'Outdoor', 'Water-resistant', 'Adventure'],
    reviews: [
      { id: 'r31', userName: 'Deepak Saxena', rating: 5, date: '2026-07-15', title: 'Perfect for school camping trips', comment: 'Bungee laces make them easy to put on. Great grip on dirt and wet grass.', verifiedPurchase: true, userLocation: 'Dehradun' }
    ],
    recommendedWith: ['volt-11', 'volt-21']
  },

  // 31. RUNNING - Ultra Endurance 100K Trail Racer
  {
    id: 'volt-31',
    slug: 'volt-ultra-apex-trail',
    name: 'Volt Ultra Apex 100',
    tagline: 'Carbon-plated ultra distance trail racer with gaiter collar',
    category: 'Hiking',
    gender: 'Men',
    description: 'Created for extreme ultramarathons and technical alpine ridges. Combines a flexible split carbon plate for energy return on climbs with a dirt-blocking stretch ankle gaiter.',
    price: 12999,
    originalPrice: 15999,
    discountPercent: 18,
    isNewArrival: true,
    isBestSeller: false,
    isMemberExclusive: true,
    isOnSale: true,
    rating: 5.0,
    reviewCount: 64,
    inStock: true,
    activityType: 'Trail Running',
    images: {
      main: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1200&auto=format&fit=crop',
      side: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
      top: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1200&auto=format&fit=crop',
      sole: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop',
      lifestyle: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop'
    },
    colors: [
      { name: 'Carbon Stealth / Cyber Volt', hex: '#CCFF00', image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1200&auto=format&fit=crop' }
    ],
    availableSizes: [7, 8, 9, 10, 11, 12],
    features: ['Split Carbon Trail Chassis', 'Integrated debris sock gaiter', 'Vibram MegaGrip with Traction Lugs', 'Dual BOA dial precision fit'],
    technology: [
      { title: 'SplitFlex Carbon Plate', description: 'Dual-fork plate flexes torsionally across rocks while delivering forward propulsion on flats.' }
    ],
    materials: {
      upper: 'Matryx Kevlar-woven mesh with integrated gaiter',
      midsole: 'Supercritical Aerofoam+ Trail with Split Carbon plate',
      outsole: '4.5mm Vibram MegaGrip with Traction Lugs',
      weight: '260g',
      offset: '6mm'
    },
    tags: ['Ultra Trail', 'Carbon Plate', 'Member Exclusive', 'Gaiter', 'Extreme'],
    reviews: [
      { id: 'r32', userName: 'Lt. Col. Vikramaditya', rating: 5, date: '2026-08-14', title: 'Unbelievable performance on Ladakh trails', comment: 'Ran 60km at 11,000 ft altitude. Debris stayed completely out and energy return on steep climbs is magical.', verifiedPurchase: true, userLocation: 'Leh' }
    ],
    recommendedWith: ['volt-01', 'volt-07']
  },

  // 32. LIFESTYLE - Retro Monochrome Court Sneaker
  {
    id: 'volt-32',
    slug: 'volt-legacy-court',
    name: 'Volt Legacy 90',
    tagline: 'Supple tumbled leather vintage low top with tonal branding',
    category: 'Lifestyle',
    gender: 'Men',
    description: 'An elevated interpretation of 1990s tennis culture. Premium tumbled calfskin leather upper, pre-aged sail midsole tint, and an ultra-plush French terry inner lining.',
    price: 6499,
    originalPrice: 7999,
    discountPercent: 18,
    isNewArrival: true,
    isBestSeller: true,
    isOnSale: true,
    rating: 4.9,
    reviewCount: 188,
    inStock: true,
    activityType: 'Streetwear',
    images: {
      main: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1200&auto=format&fit=crop',
      side: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop',
      top: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop',
      sole: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1200&auto=format&fit=crop',
      lifestyle: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=1200&auto=format&fit=crop'
    },
    colors: [
      { name: 'Sail Vintage White / Slate Navy', hex: '#F5F5F4', image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1200&auto=format&fit=crop' },
      { name: 'Monochrome Jet Black / Off-White', hex: '#1C1917', image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200&auto=format&fit=crop' }
    ],
    availableSizes: [6, 7, 8, 9, 10, 11, 12],
    features: ['Tumbled Full-Grain Calfskin Leather', 'French Terry moisture-absorbing lining', 'Vintage Sail tinted midsole', 'Stitched rubber perimeter cupsole'],
    technology: [
      { title: 'AirCushion Drop-in', description: 'Hidden EVA drop-in insole delivers modern comfort inside a classic vintage silhouette.' }
    ],
    materials: {
      upper: 'Tumbled premium leather with suede toe mudguard',
      midsole: 'Concealed impact EVA bed',
      outsole: 'Non-marking natural rubber cupsole',
      weight: '340g',
      offset: '4mm'
    },
    tags: ['Vintage', 'Leather', 'Tennis', 'Classic', 'Streetwear'],
    reviews: [
      { id: 'r33', userName: 'Armaan Kohli', rating: 5, date: '2026-08-13', title: 'The French terry lining is pure luxury', comment: 'You can wear these sockless without any chafing. The aged sail colorway is gorgeous.', verifiedPurchase: true, userLocation: 'Chandigarh' }
    ],
    recommendedWith: ['volt-03', 'volt-08', 'volt-15']
  }
];

export const PROMO_CODES = [
  { code: 'VOLT10', discountPercent: 10, description: '10% off your entire order' },
  { code: 'FIRSTDROP', discountAmount: 1000, minOrder: 5000, description: '₹1,000 off on orders above ₹5,000' },
  { code: 'RUNFAST', discountPercent: 15, minOrder: 7000, description: '15% off for performance runners on orders above ₹7,000' },
  { code: 'VOLTMEMBER', discountPercent: 20, minOrder: 8000, description: '20% off exclusive member discount on orders above ₹8,000' }
];
