import { StoreLocation } from '../types';

export const VOLT_STORES: StoreLocation[] = [
  {
    id: 'store-mumbai-bandra',
    name: 'VOLT Flagship Bandra',
    city: 'Mumbai',
    state: 'Maharashtra',
    address: 'Linking Road, Near Waterfield Junction, Bandra West',
    pincode: '400050',
    phone: '+91 22 2645 8890',
    hours: 'Mon – Sun: 10:30 AM – 9:30 PM',
    features: ['Gait Analysis Lab', 'Custom Heat-Molding', 'Member Lounge', 'Express Pickup', 'Sneaker Cleaning Station'],
    isFlagship: true
  },
  {
    id: 'store-delhi-cp',
    name: 'VOLT Experience Centre Connaught Place',
    city: 'New Delhi',
    state: 'Delhi',
    address: 'Block B, Inner Circle, Connaught Place',
    pincode: '110001',
    phone: '+91 11 4356 1234',
    hours: 'Mon – Sun: 11:00 AM – 9:00 PM',
    features: ['Treadmill Trial Track', 'Member Early Access', 'Limited Drop Locker', 'Custom Lacing Bar'],
    isFlagship: true
  },
  {
    id: 'store-bangalore-indiranagar',
    name: 'VOLT Innovation Hub Indiranagar',
    city: 'Bengaluru',
    state: 'Karnataka',
    address: '100 Feet Road, HAL 2nd Stage, Indiranagar',
    pincode: '560038',
    phone: '+91 80 4122 7890',
    hours: 'Mon – Sun: 10:30 AM – 9:30 PM',
    features: ['3D Foot Scanner', 'Runners Club Meetup Hub', 'Carbon Tech Showcase', 'Express Pickup'],
    isFlagship: true
  },
  {
    id: 'store-hyderabad-jubilee',
    name: 'VOLT Concept Store Jubilee Hills',
    city: 'Hyderabad',
    state: 'Telangana',
    address: 'Road No. 36, Opp. Metro Pillar 1680, Jubilee Hills',
    pincode: '500033',
    phone: '+91 40 2355 4567',
    hours: 'Mon – Sun: 11:00 AM – 9:30 PM',
    features: ['Performance Fitting', 'VIP Styling Studio', 'Express Click & Collect'],
    isFlagship: false
  },
  {
    id: 'store-pune-koregaon',
    name: 'VOLT Athletic Space Koregaon Park',
    city: 'Pune',
    state: 'Maharashtra',
    address: 'North Main Road, Lane 5, Koregaon Park',
    pincode: '411001',
    phone: '+91 20 2615 9012',
    hours: 'Mon – Sun: 10:30 AM – 9:00 PM',
    features: ['Trail Gear Testing', 'Gait Analysis', 'Locker Pickup'],
    isFlagship: false
  },
  {
    id: 'store-chennai-phoenix',
    name: 'VOLT Phoenix Marketcity',
    city: 'Chennai',
    state: 'Tamil Nadu',
    address: 'Ground Floor, Velachery Main Road, Velachery',
    pincode: '600042',
    phone: '+91 44 3008 3456',
    hours: 'Mon – Sun: 10:00 AM – 10:00 PM',
    features: ['Court Performance Fitting', 'Sneaker Bar', 'Express Return Desk'],
    isFlagship: false
  }
];

export const INDIAN_FLAGSHIP_STORES = VOLT_STORES;

export const INDIAN_STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh',
  'Jammu & Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh',
  'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland',
  'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
  'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
];

export const SAMPLE_PIN_LOOKUP: Record<string, { city: string; state: string; days: number }> = {
  '400050': { city: 'Mumbai', state: 'Maharashtra', days: 1 },
  '400001': { city: 'Mumbai', state: 'Maharashtra', days: 1 },
  '110001': { city: 'New Delhi', state: 'Delhi', days: 1 },
  '110020': { city: 'New Delhi', state: 'Delhi', days: 1 },
  '560001': { city: 'Bengaluru', state: 'Karnataka', days: 1 },
  '560038': { city: 'Bengaluru', state: 'Karnataka', days: 1 },
  '500033': { city: 'Hyderabad', state: 'Telangana', days: 2 },
  '411001': { city: 'Pune', state: 'Maharashtra', days: 1 },
  '600042': { city: 'Chennai', state: 'Tamil Nadu', days: 2 },
  '700001': { city: 'Kolkata', state: 'West Bengal', days: 2 },
  '380001': { city: 'Ahmedabad', state: 'Gujarat', days: 2 },
  '160017': { city: 'Chandigarh', state: 'Punjab', days: 2 },
  '302001': { city: 'Jaipur', state: 'Rajasthan', days: 2 },
  '682001': { city: 'Kochi', state: 'Kerala', days: 2 },
  '248001': { city: 'Dehradun', state: 'Uttarakhand', days: 3 }
};
