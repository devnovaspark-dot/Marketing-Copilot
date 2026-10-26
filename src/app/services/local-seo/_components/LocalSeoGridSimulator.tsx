'use client';

import React, { useState } from 'react';
import BeamButton from '@/components/BeamButton';
import styles from './LocalSeoGridSimulator.module.css';

interface PinNode {
  index: number;
  rank: number;
  corridor: string;
  pinCode: string;
  lat: string;
  lng: string;
  monthlySearches: number;
  phoneCallShare: string;
}

interface CityData {
  name: string;
  lat: string;
  lng: string;
  pins: PinNode[];
}

interface IndustryData {
  id: string;
  name: string;
  icon: string;
  queryPrefix: string;
  winnerName: string;
  category: string;
  competitor1: string;
  competitor2: string;
}

const INDUSTRIES: IndustryData[] = [
  {
    id: 'healthcare',
    name: 'Healthcare & Dental',
    icon: '🩺',
    queryPrefix: 'Best Dental & Multispeciality Clinic',
    winnerName: 'Apex Multispeciality & Dental Hospital',
    category: 'Dental Clinic & Emergency Maxillofacial Care',
    competitor1: 'City Central Dental Care',
    competitor2: 'Care Dental & Smile Studio',
  },
  {
    id: 'legal',
    name: 'Corporate & Legal',
    icon: '⚖️',
    queryPrefix: 'Top Corporate Lawyer & Legal Firm',
    winnerName: 'Apex Corporate Law & Legal Chambers',
    category: 'Corporate & Commercial Law Practice',
    competitor1: 'Metro Legal Associates',
    competitor2: 'National Advocates Chambers',
  },
  {
    id: 'b2b',
    name: 'B2B & Digital',
    icon: '🏢',
    queryPrefix: 'Performance Marketing & SEO Agency',
    winnerName: 'Marketing Copilot Regional Growth Hub',
    category: 'Digital Marketing & Hyperlocal SEO Agency',
    competitor1: 'Generic Web Marketing',
    competitor2: 'Alpha Media Ads Agency',
  },
  {
    id: 'retail',
    name: 'Luxury Retail & Interiors',
    icon: '🛍️',
    queryPrefix: 'Luxury Architecture & Interior Studio',
    winnerName: 'Luxe Living Architecture & Interiors',
    category: 'Architectural & Luxury Interior Showroom',
    competitor1: 'Classic Home Furnishings',
    competitor2: 'Modern Space Décor Studio',
  },
];

const CITIES_DATA: Record<string, CityData> = {
  delhi: {
    name: 'Delhi NCR',
    lat: '28.6139° N',
    lng: '77.2090° E',
    pins: [
      { index: 1, rank: 1, corridor: 'Cyber City Corporate Hub, Gurgaon', pinCode: '122002', lat: '28.4950° N', lng: '77.0895° E', monthlySearches: 18500, phoneCallShare: '95%' },
      { index: 2, rank: 1, corridor: 'Golf Course Road Luxury Enclave', pinCode: '122003', lat: '28.4682° N', lng: '77.1025° E', monthlySearches: 14200, phoneCallShare: '92%' },
      { index: 3, rank: 1, corridor: 'Connaught Place Central Hub', pinCode: '110001', lat: '28.6304° N', lng: '77.2177° E', monthlySearches: 22400, phoneCallShare: '96%' },
      { index: 4, rank: 2, corridor: 'South Extension Retail Ring', pinCode: '110049', lat: '28.5714° N', lng: '77.2215° E', monthlySearches: 9800, phoneCallShare: '88%' },
      { index: 5, rank: 1, corridor: 'Saket & Select Citywalk Corridor', pinCode: '110017', lat: '28.5284° N', lng: '77.2185° E', monthlySearches: 13600, phoneCallShare: '91%' },
      { index: 6, rank: 1, corridor: 'Noida Sector 18 Commercial Hub', pinCode: '201301', lat: '28.5708° N', lng: '77.3271° E', monthlySearches: 16400, phoneCallShare: '94%' },
      { index: 7, rank: 1, corridor: 'Noida Sector 62 IT Corridor', pinCode: '201309', lat: '28.6280° N', lng: '77.3649° E', monthlySearches: 11200, phoneCallShare: '90%' },
      { index: 8, rank: 2, corridor: 'Lajpat Nagar Central Market', pinCode: '110024', lat: '28.5700° N', lng: '77.2400° E', monthlySearches: 8900, phoneCallShare: '85%' },
      { index: 9, rank: 1, corridor: 'Vasant Kunj Premium Enclave', pinCode: '110070', lat: '28.5293° N', lng: '77.1534° E', monthlySearches: 10400, phoneCallShare: '93%' },
      { index: 10, rank: 1, corridor: 'Karol Bagh Commercial Spine', pinCode: '110005', lat: '28.6514° N', lng: '77.1907° E', monthlySearches: 14800, phoneCallShare: '92%' },
      { index: 11, rank: 1, corridor: 'Greater Kailash 1 & 2 M-Block', pinCode: '110048', lat: '28.5482° N', lng: '77.2343° E', monthlySearches: 12900, phoneCallShare: '94%' },
      { index: 12, rank: 1, corridor: 'Dwarka Sector 12 Metro Hub', pinCode: '110075', lat: '28.5921° N', lng: '77.0460° E', monthlySearches: 9400, phoneCallShare: '89%' },
      { index: 13, rank: 2, corridor: 'Rohini Sector 10 District Centre', pinCode: '110085', lat: '28.7180° N', lng: '77.1186° E', monthlySearches: 8100, phoneCallShare: '82%' },
      { index: 14, rank: 1, corridor: 'Rajouri Garden Lifestyle Market', pinCode: '110027', lat: '28.6492° N', lng: '77.1232° E', monthlySearches: 11200, phoneCallShare: '90%' },
      { index: 15, rank: 1, corridor: 'Hauz Khas Village & IIT Gate', pinCode: '110016', lat: '28.5494° N', lng: '77.2001° E', monthlySearches: 9800, phoneCallShare: '91%' },
      { index: 16, rank: 1, corridor: 'Aerocity Hospitality District', pinCode: '110037', lat: '28.5505° N', lng: '77.1215° E', monthlySearches: 15200, phoneCallShare: '96%' },
      { index: 17, rank: 2, corridor: 'Sohna Road Commercial Spine', pinCode: '122018', lat: '28.4050° N', lng: '77.0420° E', monthlySearches: 7600, phoneCallShare: '84%' },
      { index: 18, rank: 1, corridor: 'Indirapuram Ghaziabad Hub', pinCode: '201014', lat: '28.6415° N', lng: '77.3712° E', monthlySearches: 8800, phoneCallShare: '87%' },
      { index: 19, rank: 1, corridor: 'Noida Expressway Tech Parks', pinCode: '201305', lat: '28.5130° N', lng: '77.3820° E', monthlySearches: 12400, phoneCallShare: '93%' },
      { index: 20, rank: 2, corridor: 'Netaji Subhash Place Pitampura', pinCode: '110034', lat: '28.6975° N', lng: '77.1517° E', monthlySearches: 9100, phoneCallShare: '86%' },
      { index: 21, rank: 1, corridor: 'Nehru Place IT & Hardware Hub', pinCode: '110019', lat: '28.5492° N', lng: '77.2529° E', monthlySearches: 17800, phoneCallShare: '95%' },
      { index: 22, rank: 1, corridor: 'Khan Market Luxury Promenade', pinCode: '110003', lat: '28.5997° N', lng: '77.2269° E', monthlySearches: 8200, phoneCallShare: '97%' },
      { index: 23, rank: 2, corridor: 'Preet Vihar East Delhi Hub', pinCode: '110092', lat: '28.6400° N', lng: '77.2960° E', monthlySearches: 6800, phoneCallShare: '83%' },
      { index: 24, rank: 1, corridor: 'Janakpuri District Centre', pinCode: '110058', lat: '28.6290° N', lng: '77.0810° E', monthlySearches: 8400, phoneCallShare: '88%' },
      { index: 25, rank: 1, corridor: 'Chandni Chowk Wholesale Hub', pinCode: '110006', lat: '28.6506° N', lng: '77.2303° E', monthlySearches: 19400, phoneCallShare: '94%' },
    ],
  },
  mumbai: {
    name: 'Mumbai',
    lat: '19.0760° N',
    lng: '72.8777° E',
    pins: [
      { index: 1, rank: 1, corridor: 'Bandra Kurla Complex (BKC)', pinCode: '400051', lat: '19.0657° N', lng: '72.8687° E', monthlySearches: 26400, phoneCallShare: '97%' },
      { index: 2, rank: 1, corridor: 'Bandra West Linking Road', pinCode: '400050', lat: '19.0596° N', lng: '72.8295° E', monthlySearches: 19800, phoneCallShare: '94%' },
      { index: 3, rank: 1, corridor: 'Andheri East MIDC Tech Spine', pinCode: '400093', lat: '19.1197° N', lng: '72.8682° E', monthlySearches: 24200, phoneCallShare: '95%' },
      { index: 4, rank: 2, corridor: 'Andheri West Lokhandwala', pinCode: '400053', lat: '19.1415° N', lng: '72.8258° E', monthlySearches: 15600, phoneCallShare: '90%' },
      { index: 5, rank: 1, corridor: 'Lower Parel High Street Phoenix', pinCode: '400013', lat: '19.0028° N', lng: '72.8285° E', monthlySearches: 21800, phoneCallShare: '96%' },
      { index: 6, rank: 1, corridor: 'Powai Hiranandani Tech Valley', pinCode: '400076', lat: '19.1176° N', lng: '72.9060° E', monthlySearches: 14500, phoneCallShare: '93%' },
      { index: 7, rank: 1, corridor: 'Nariman Point & Fort District', pinCode: '400021', lat: '18.9256° N', lng: '72.8242° E', monthlySearches: 16800, phoneCallShare: '95%' },
      { index: 8, rank: 2, corridor: 'Juhu Tara Road Coastal Strip', pinCode: '400049', lat: '19.0988° N', lng: '72.8267° E', monthlySearches: 11200, phoneCallShare: '91%' },
      { index: 9, rank: 1, corridor: 'Thane West Ghodbunder Hub', pinCode: '400607', lat: '19.2600° N', lng: '72.9600° E', monthlySearches: 17400, phoneCallShare: '89%' },
      { index: 10, rank: 1, corridor: 'Navi Mumbai Vashi Sector 17', pinCode: '400703', lat: '19.0771° N', lng: '72.9986° E', monthlySearches: 13900, phoneCallShare: '91%' },
      { index: 11, rank: 1, corridor: 'Dadar Commercial Junction', pinCode: '400028', lat: '19.0178° N', lng: '72.8478° E', monthlySearches: 18200, phoneCallShare: '94%' },
      { index: 12, rank: 1, corridor: 'Goregaon East Nesco Center', pinCode: '400063', lat: '19.1553° N', lng: '72.8560° E', monthlySearches: 14600, phoneCallShare: '92%' },
      { index: 13, rank: 2, corridor: 'Malad West Mindspace Park', pinCode: '400064', lat: '19.1860° N', lng: '72.8350° E', monthlySearches: 12800, phoneCallShare: '88%' },
      { index: 14, rank: 1, corridor: 'Worli Sea Face Luxury Belt', pinCode: '400018', lat: '19.0150° N', lng: '72.8170° E', monthlySearches: 10900, phoneCallShare: '95%' },
      { index: 15, rank: 1, corridor: 'Ghatkopar East R-City Zone', pinCode: '400077', lat: '19.0968° N', lng: '72.9168° E', monthlySearches: 11800, phoneCallShare: '89%' },
      { index: 16, rank: 1, corridor: 'Borivali West IC Colony', pinCode: '400092', lat: '19.2437° N', lng: '72.8530° E', monthlySearches: 12400, phoneCallShare: '88%' },
      { index: 17, rank: 2, corridor: 'Chembur Diamond Garden Belt', pinCode: '400071', lat: '19.0522° N', lng: '72.8994° E', monthlySearches: 9600, phoneCallShare: '86%' },
      { index: 18, rank: 1, corridor: 'Santacruz West S.V. Road', pinCode: '400054', lat: '19.0843° N', lng: '72.8360° E', monthlySearches: 10800, phoneCallShare: '91%' },
      { index: 19, rank: 1, corridor: 'Khar West 14th Road Strip', pinCode: '400052', lat: '19.0700° N', lng: '72.8330° E', monthlySearches: 9200, phoneCallShare: '93%' },
      { index: 20, rank: 2, corridor: 'Kandivali East Lokhandwala', pinCode: '400101', lat: '19.2080° N', lng: '72.8720° E', monthlySearches: 8700, phoneCallShare: '85%' },
      { index: 21, rank: 1, corridor: 'Colaba Causeway South Gateway', pinCode: '400005', lat: '18.9100° N', lng: '72.8250° E', monthlySearches: 12600, phoneCallShare: '92%' },
      { index: 22, rank: 1, corridor: 'Mulund West LBS Marg Hub', pinCode: '400080', lat: '19.1726° N', lng: '72.9565° E', monthlySearches: 9400, phoneCallShare: '87%' },
      { index: 23, rank: 2, corridor: 'Belapur CBD Navi Mumbai', pinCode: '400614', lat: '19.0195° N', lng: '73.0410° E', monthlySearches: 8100, phoneCallShare: '84%' },
      { index: 24, rank: 1, corridor: 'Prabhadevi Siddhivinayak Zone', pinCode: '400025', lat: '19.0169° N', lng: '72.8290° E', monthlySearches: 11400, phoneCallShare: '91%' },
      { index: 25, rank: 1, corridor: 'Kalyan West Station Promenade', pinCode: '421301', lat: '19.2437° N', lng: '73.1355° E', monthlySearches: 9800, phoneCallShare: '86%' },
    ],
  },
  bangalore: {
    name: 'Bangalore',
    lat: '12.9716° N',
    lng: '77.5946° E',
    pins: [
      { index: 1, rank: 1, corridor: 'Koramangala 80ft Road Spine', pinCode: '560034', lat: '12.9352° N', lng: '77.6245° E', monthlySearches: 21500, phoneCallShare: '96%' },
      { index: 2, rank: 1, corridor: 'Indiranagar 100ft Road Belt', pinCode: '560038', lat: '12.9784° N', lng: '77.6408° E', monthlySearches: 23400, phoneCallShare: '97%' },
      { index: 3, rank: 1, corridor: 'HSR Layout Sector 1 to 7', pinCode: '560102', lat: '12.9121° N', lng: '77.6446° E', monthlySearches: 19800, phoneCallShare: '94%' },
      { index: 4, rank: 2, corridor: 'Whitefield ITPL Main Road', pinCode: '560066', lat: '12.9860° N', lng: '77.7330° E', monthlySearches: 17600, phoneCallShare: '91%' },
      { index: 5, rank: 1, corridor: 'Electronic City Phase 1 & 2', pinCode: '560100', lat: '12.8452° N', lng: '77.6602° E', monthlySearches: 15400, phoneCallShare: '92%' },
      { index: 6, rank: 1, corridor: 'Bellandur Outer Ring Road', pinCode: '560103', lat: '12.9304° N', lng: '77.6784° E', monthlySearches: 22800, phoneCallShare: '95%' },
      { index: 7, rank: 1, corridor: 'MG Road & Brigade Commercial', pinCode: '560001', lat: '12.9756° N', lng: '77.6066° E', monthlySearches: 18900, phoneCallShare: '95%' },
      { index: 8, rank: 2, corridor: 'JP Nagar 24th Main Hub', pinCode: '560078', lat: '12.9063° N', lng: '77.5857° E', monthlySearches: 12400, phoneCallShare: '88%' },
      { index: 9, rank: 1, corridor: 'Jayanagar 4th Block Complex', pinCode: '560011', lat: '12.9299° N', lng: '77.5824° E', monthlySearches: 14200, phoneCallShare: '93%' },
      { index: 10, rank: 1, corridor: 'Marathahalli Multiplex Junction', pinCode: '560037', lat: '12.9591° N', lng: '77.6974° E', monthlySearches: 16100, phoneCallShare: '90%' },
      { index: 11, rank: 1, corridor: 'Malleshwaram 8th Cross Hub', pinCode: '560003', lat: '12.9982° N', lng: '77.5704° E', monthlySearches: 13200, phoneCallShare: '92%' },
      { index: 12, rank: 1, corridor: 'Sarjapur Road Tech Corridor', pinCode: '560035', lat: '12.9078° N', lng: '77.6853° E', monthlySearches: 17800, phoneCallShare: '93%' },
      { index: 13, rank: 2, corridor: 'Hebbal Manyata Tech Park', pinCode: '560045', lat: '13.0489° N', lng: '77.6200° E', monthlySearches: 15200, phoneCallShare: '89%' },
      { index: 14, rank: 1, corridor: 'Rajajinagar Brigade Gateway', pinCode: '560010', lat: '12.9988° N', lng: '77.5535° E', monthlySearches: 11800, phoneCallShare: '90%' },
      { index: 15, rank: 1, corridor: 'BTM Layout Outer Ring Road', pinCode: '560068', lat: '12.9166° N', lng: '77.6101° E', monthlySearches: 14600, phoneCallShare: '91%' },
      { index: 16, rank: 1, corridor: 'Bannerghatta Road IIM Belt', pinCode: '560076', lat: '12.8950° N', lng: '77.6010° E', monthlySearches: 13400, phoneCallShare: '89%' },
      { index: 17, rank: 2, corridor: 'Yelahanka New Town Center', pinCode: '560064', lat: '13.1007° N', lng: '77.5963° E', monthlySearches: 8900, phoneCallShare: '84%' },
      { index: 18, rank: 1, corridor: 'Kalyan Nagar HRBR Layout', pinCode: '560043', lat: '13.0221° N', lng: '77.6403° E', monthlySearches: 10800, phoneCallShare: '90%' },
      { index: 19, rank: 1, corridor: 'Basavanagudi Gandhi Bazaar', pinCode: '560004', lat: '12.9421° N', lng: '77.5753° E', monthlySearches: 9700, phoneCallShare: '88%' },
      { index: 20, rank: 2, corridor: 'RT Nagar Main Road Commercial', pinCode: '560032', lat: '13.0184° N', lng: '77.5925° E', monthlySearches: 7800, phoneCallShare: '83%' },
      { index: 21, rank: 1, corridor: 'Cunningham Road Medical Belt', pinCode: '560052', lat: '12.9866° N', lng: '77.5933° E', monthlySearches: 8900, phoneCallShare: '94%' },
      { index: 22, rank: 1, corridor: 'Domlur EGL Tech Gateway', pinCode: '560071', lat: '12.9609° N', lng: '77.6387° E', monthlySearches: 11200, phoneCallShare: '92%' },
      { index: 23, rank: 2, corridor: 'Banashankari BDA Complex', pinCode: '560070', lat: '12.9150° N', lng: '77.5736° E', monthlySearches: 8400, phoneCallShare: '85%' },
      { index: 24, rank: 1, corridor: 'Sadashivanagar VIP Enclave', pinCode: '560080', lat: '13.0068° N', lng: '77.5813° E', monthlySearches: 6700, phoneCallShare: '96%' },
      { index: 25, rank: 1, corridor: 'Frazer Town Mosque Road', pinCode: '560005', lat: '12.9968° N', lng: '77.6130° E', monthlySearches: 8200, phoneCallShare: '89%' },
    ],
  },
  hyderabad: {
    name: 'Hyderabad',
    lat: '17.3850° N',
    lng: '78.4867° E',
    pins: [
      { index: 1, rank: 1, corridor: 'Hitec City Cyber Towers', pinCode: '500081', lat: '17.4504° N', lng: '78.3808° E', monthlySearches: 21000, phoneCallShare: '96%' },
      { index: 2, rank: 1, corridor: 'Madhapur Mindspace Tech Zone', pinCode: '500081', lat: '17.4435° N', lng: '78.3772° E', monthlySearches: 19400, phoneCallShare: '95%' },
      { index: 3, rank: 1, corridor: 'Gachibowli Financial District', pinCode: '500032', lat: '17.4401° N', lng: '78.3489° E', monthlySearches: 18600, phoneCallShare: '94%' },
      { index: 4, rank: 2, corridor: 'Jubilee Hills Road No. 36', pinCode: '500033', lat: '17.4319° N', lng: '78.4073° E', monthlySearches: 16200, phoneCallShare: '96%' },
      { index: 5, rank: 1, corridor: 'Banjara Hills Road No. 1 & 12', pinCode: '500034', lat: '17.4156° N', lng: '78.4357° E', monthlySearches: 17400, phoneCallShare: '95%' },
      { index: 6, rank: 1, corridor: 'Kondapur Botanical Garden Road', pinCode: '500084', lat: '17.4650° N', lng: '78.3600° E', monthlySearches: 14800, phoneCallShare: '91%' },
      { index: 7, rank: 1, corridor: 'Kukatpally KPHB Colony Ring', pinCode: '500072', lat: '17.4938° N', lng: '78.3995° E', monthlySearches: 18200, phoneCallShare: '92%' },
      { index: 8, rank: 2, corridor: 'Ameerpet Commercial Hub', pinCode: '500016', lat: '17.4375° N', lng: '78.4482° E', monthlySearches: 15600, phoneCallShare: '89%' },
      { index: 9, rank: 1, corridor: 'Begumpet Airport Road Belt', pinCode: '500016', lat: '17.4447° N', lng: '78.4664° E', monthlySearches: 12400, phoneCallShare: '90%' },
      { index: 10, rank: 1, corridor: 'Secunderabad MG Road Hub', pinCode: '500003', lat: '17.4399° N', lng: '78.4983° E', monthlySearches: 14100, phoneCallShare: '88%' },
      { index: 11, rank: 1, corridor: 'Somajiguda Raj Bhavan Road', pinCode: '500082', lat: '17.4260° N', lng: '78.4590° E', monthlySearches: 11900, phoneCallShare: '92%' },
      { index: 12, rank: 1, corridor: 'Manikonda Lanco Hills Spine', pinCode: '500089', lat: '17.4042° N', lng: '78.3883° E', monthlySearches: 13500, phoneCallShare: '90%' },
      { index: 13, rank: 2, corridor: 'Miyapur Metro Transit Hub', pinCode: '500049', lat: '17.4968° N', lng: '78.3614° E', monthlySearches: 9800, phoneCallShare: '85%' },
      { index: 14, rank: 1, corridor: 'Dilsukhnagar Shopping Hub', pinCode: '500060', lat: '17.3688° N', lng: '78.5247° E', monthlySearches: 16800, phoneCallShare: '91%' },
      { index: 15, rank: 1, corridor: 'Himayatnagar Liberty Junction', pinCode: '500029', lat: '17.4020° N', lng: '78.4840° E', monthlySearches: 10400, phoneCallShare: '89%' },
      { index: 16, rank: 1, corridor: 'Abids Commercial Street', pinCode: '500001', lat: '17.3916° N', lng: '78.4739° E', monthlySearches: 11200, phoneCallShare: '87%' },
      { index: 17, rank: 2, corridor: 'Attapur Pillar 143 Ring', pinCode: '500048', lat: '17.3710° N', lng: '78.4310° E', monthlySearches: 8200, phoneCallShare: '83%' },
      { index: 18, rank: 1, corridor: 'Nanakramguda Wipro Circle', pinCode: '500032', lat: '17.4172° N', lng: '78.3458° E', monthlySearches: 14600, phoneCallShare: '93%' },
      { index: 19, rank: 1, corridor: 'Kothaguda Junction Strip', pinCode: '500084', lat: '17.4580° N', lng: '78.3680° E', monthlySearches: 9200, phoneCallShare: '89%' },
      { index: 20, rank: 2, corridor: 'AS Rao Nagar ECIL Hub', pinCode: '500062', lat: '17.4820° N', lng: '78.5470° E', monthlySearches: 8600, phoneCallShare: '84%' },
      { index: 21, rank: 1, corridor: 'Tolichowki Heritage Promenade', pinCode: '500008', lat: '17.4010° N', lng: '78.4140° E', monthlySearches: 10100, phoneCallShare: '88%' },
      { index: 22, rank: 1, corridor: 'Kompally Highway Commercial', pinCode: '500014', lat: '17.5380° N', lng: '78.4870° E', monthlySearches: 8400, phoneCallShare: '86%' },
      { index: 23, rank: 2, corridor: 'LB Nagar Ring Road Center', pinCode: '500074', lat: '17.3457° N', lng: '78.5522° E', monthlySearches: 9400, phoneCallShare: '82%' },
      { index: 24, rank: 1, corridor: 'Nallagandla Aparna Belt', pinCode: '500019', lat: '17.4720° N', lng: '78.3120° E', monthlySearches: 7900, phoneCallShare: '88%' },
      { index: 25, rank: 1, corridor: 'Charminar Historic Core', pinCode: '500002', lat: '17.3616° N', lng: '78.4747° E', monthlySearches: 15800, phoneCallShare: '90%' },
    ],
  },
  pune: {
    name: 'Pune',
    lat: '18.5204° N',
    lng: '73.8567° E',
    pins: [
      { index: 1, rank: 1, corridor: 'Koregaon Park North Main Road', pinCode: '411001', lat: '18.5362° N', lng: '73.8940° E', monthlySearches: 16400, phoneCallShare: '96%' },
      { index: 2, rank: 1, corridor: 'Baner High Street Corridor', pinCode: '411045', lat: '18.5590° N', lng: '73.7868° E', monthlySearches: 17800, phoneCallShare: '95%' },
      { index: 3, rank: 1, corridor: 'Viman Nagar Phoenix Market City', pinCode: '411014', lat: '18.5679° N', lng: '73.9143° E', monthlySearches: 15200, phoneCallShare: '94%' },
      { index: 4, rank: 2, corridor: 'Hinjewadi Phase 1 IT Park', pinCode: '411057', lat: '18.5913° N', lng: '73.7389° E', monthlySearches: 19400, phoneCallShare: '92%' },
      { index: 5, rank: 1, corridor: 'Kalyani Nagar Tech Park Zone', pinCode: '411006', lat: '18.5463° N', lng: '73.9034° E', monthlySearches: 12900, phoneCallShare: '93%' },
      { index: 6, rank: 1, corridor: 'Wakad Dange Chowk Belt', pinCode: '411057', lat: '18.5987° N', lng: '73.7634° E', monthlySearches: 14200, phoneCallShare: '90%' },
      { index: 7, rank: 1, corridor: 'Kothrud Karve Road Commercial', pinCode: '411038', lat: '18.5074° N', lng: '73.8077° E', monthlySearches: 13800, phoneCallShare: '91%' },
      { index: 8, rank: 2, corridor: 'Aundh ITI Road Promenade', pinCode: '411007', lat: '18.5602° N', lng: '73.8031° E', monthlySearches: 11400, phoneCallShare: '89%' },
      { index: 9, rank: 1, corridor: 'Shivajinagar FC Road Belt', pinCode: '411005', lat: '18.5308° N', lng: '73.8475° E', monthlySearches: 16800, phoneCallShare: '93%' },
      { index: 10, rank: 1, corridor: 'Magarpatta City Hadapsar', pinCode: '411028', lat: '18.5158° N', lng: '73.9272° E', monthlySearches: 14700, phoneCallShare: '91%' },
      { index: 11, rank: 1, corridor: 'Kharadi EON Free Zone', pinCode: '411014', lat: '18.5529° N', lng: '73.9520° E', monthlySearches: 15900, phoneCallShare: '92%' },
      { index: 12, rank: 1, corridor: 'Bavdhan Paud Road Spine', pinCode: '411021', lat: '18.5130° N', lng: '73.7710° E', monthlySearches: 8900, phoneCallShare: '87%' },
      { index: 13, rank: 2, corridor: 'Pimpri-Chinchwad MIDC Hub', pinCode: '411018', lat: '18.6279° N', lng: '73.8131° E', monthlySearches: 16200, phoneCallShare: '89%' },
      { index: 14, rank: 1, corridor: 'Camp MG Road Retail District', pinCode: '411001', lat: '18.5160° N', lng: '73.8780° E', monthlySearches: 12100, phoneCallShare: '91%' },
      { index: 15, rank: 1, corridor: 'Senapati Bapat Road ICC Tech', pinCode: '411016', lat: '18.5320° N', lng: '73.8320° E', monthlySearches: 13400, phoneCallShare: '94%' },
      { index: 16, rank: 1, corridor: 'Bibvewadi Swami Vivekanand', pinCode: '411037', lat: '18.4720° N', lng: '73.8640° E', monthlySearches: 7800, phoneCallShare: '85%' },
      { index: 17, rank: 2, corridor: 'Pashan Sus Road Enclave', pinCode: '411021', lat: '18.5420° N', lng: '73.7850° E', monthlySearches: 7200, phoneCallShare: '84%' },
      { index: 18, rank: 1, corridor: 'Ravet Kiwale Express Gateway', pinCode: '412101', lat: '18.6500° N', lng: '73.7400° E', monthlySearches: 8100, phoneCallShare: '86%' },
      { index: 19, rank: 1, corridor: 'Undri NIBM Undri Road', pinCode: '411060', lat: '18.4600° N', lng: '73.9100° E', monthlySearches: 9400, phoneCallShare: '88%' },
      { index: 20, rank: 2, corridor: 'Sinhagad Road Transit Hub', pinCode: '411041', lat: '18.4780° N', lng: '73.8200° E', monthlySearches: 8900, phoneCallShare: '83%' },
      { index: 21, rank: 1, corridor: 'Model Colony Deep Bungalow', pinCode: '411016', lat: '18.5360° N', lng: '73.8360° E', monthlySearches: 6800, phoneCallShare: '93%' },
      { index: 22, rank: 1, corridor: 'Chandan Nagar Nagar Road', pinCode: '411014', lat: '18.5580° N', lng: '73.9320° E', monthlySearches: 9200, phoneCallShare: '87%' },
      { index: 23, rank: 2, corridor: 'Swargate Bus Terminal Zone', pinCode: '411042', lat: '18.5018° N', lng: '73.8586° E', monthlySearches: 11600, phoneCallShare: '88%' },
      { index: 24, rank: 1, corridor: 'Balewadi High Street Sports', pinCode: '411045', lat: '18.5720° N', lng: '73.7710° E', monthlySearches: 13100, phoneCallShare: '92%' },
      { index: 25, rank: 1, corridor: 'Dhanori Airport Road Belt', pinCode: '411015', lat: '18.5870° N', lng: '73.8960° E', monthlySearches: 7400, phoneCallShare: '85%' },
    ],
  },
  bhubaneswar: {
    name: 'Bhubaneswar & Cuttack',
    lat: '20.2961° N',
    lng: '85.8245° E',
    pins: [
      { index: 1, rank: 1, corridor: 'Patia / Infocity Tech Hub', pinCode: '751024', lat: '20.3556° N', lng: '85.8189° E', monthlySearches: 4200, phoneCallShare: '92%' },
      { index: 2, rank: 1, corridor: 'KIIT Square Corridor', pinCode: '751024', lat: '20.3508° N', lng: '85.8192° E', monthlySearches: 3800, phoneCallShare: '89%' },
      { index: 3, rank: 1, corridor: 'Chandrasekharpur Commercial Hub', pinCode: '751016', lat: '20.3242° N', lng: '85.8188° E', monthlySearches: 3100, phoneCallShare: '91%' },
      { index: 4, rank: 2, corridor: 'Sailashree Vihar Residential Area', pinCode: '751021', lat: '20.3340° N', lng: '85.8070° E', monthlySearches: 1800, phoneCallShare: '78%' },
      { index: 5, rank: 1, corridor: 'Kalarahanga & Nandan Kanan Road', pinCode: '751024', lat: '20.3700° N', lng: '85.8300° E', monthlySearches: 1600, phoneCallShare: '84%' },
      { index: 6, rank: 1, corridor: 'Jaydev Vihar Metro Junction', pinCode: '751013', lat: '20.3012° N', lng: '85.8239° E', monthlySearches: 5100, phoneCallShare: '94%' },
      { index: 7, rank: 1, corridor: 'Nayapalli Commercial Spine', pinCode: '751012', lat: '20.2990° N', lng: '85.8115° E', monthlySearches: 4600, phoneCallShare: '93%' },
      { index: 8, rank: 1, corridor: 'IRC Village VIP Enclave', pinCode: '751015', lat: '20.3040° N', lng: '85.8180° E', monthlySearches: 2900, phoneCallShare: '88%' },
      { index: 9, rank: 2, corridor: 'CRP Square Transit Corridor', pinCode: '751015', lat: '20.2930° N', lng: '85.8080° E', monthlySearches: 2400, phoneCallShare: '81%' },
      { index: 10, rank: 1, corridor: 'Acharya Vihar Science Hub', pinCode: '751022', lat: '20.3035° N', lng: '85.8335° E', monthlySearches: 2200, phoneCallShare: '86%' },
      { index: 11, rank: 1, corridor: 'Saheed Nagar Retail Corridor', pinCode: '751007', lat: '20.2882° N', lng: '85.8450° E', monthlySearches: 5800, phoneCallShare: '96%' },
      { index: 12, rank: 1, corridor: 'Janpath Commercial Promenade', pinCode: '751001', lat: '20.2830° N', lng: '85.8420° E', monthlySearches: 6200, phoneCallShare: '95%' },
      { index: 13, rank: 1, corridor: 'Master Canteen & Station Plaza', pinCode: '751001', lat: '20.2670° N', lng: '85.8420° E', monthlySearches: 4900, phoneCallShare: '92%' },
      { index: 14, rank: 2, corridor: 'Kharvela Nagar Business District', pinCode: '751001', lat: '20.2760° N', lng: '85.8480° E', monthlySearches: 3400, phoneCallShare: '85%' },
      { index: 15, rank: 1, corridor: 'Bapuji Nagar Gold & Electronics', pinCode: '751009', lat: '20.2610° N', lng: '85.8340° E', monthlySearches: 4100, phoneCallShare: '90%' },
      { index: 16, rank: 1, corridor: 'Rasulgarh Industrial & Auto Hub', pinCode: '751010', lat: '20.2980° N', lng: '85.8670° E', monthlySearches: 3900, phoneCallShare: '87%' },
      { index: 17, rank: 2, corridor: 'Cuttack-Puri Arterial Bypass', pinCode: '751010', lat: '20.3120° N', lng: '85.8750° E', monthlySearches: 2700, phoneCallShare: '80%' },
      { index: 18, rank: 1, corridor: 'Mancheswar Industrial Estate', pinCode: '751017', lat: '20.3340° N', lng: '85.8520° E', monthlySearches: 2500, phoneCallShare: '88%' },
      { index: 19, rank: 2, corridor: 'Palasuni Regional Transport Gate', pinCode: '751010', lat: '20.3080° N', lng: '85.8820° E', monthlySearches: 2100, phoneCallShare: '79%' },
      { index: 20, rank: 1, corridor: 'Laxmisagar Urban Sector', pinCode: '751006', lat: '20.2750° N', lng: '85.8600° E', monthlySearches: 2600, phoneCallShare: '86%' },
      { index: 21, rank: 1, corridor: 'Khandagiri & Udayagiri Corridor', pinCode: '751030', lat: '20.2600° N', lng: '85.7860° E', monthlySearches: 3600, phoneCallShare: '91%' },
      { index: 22, rank: 1, corridor: 'Baramunda Inter-State Bus Hub', pinCode: '751003', lat: '20.2780° N', lng: '85.7950° E', monthlySearches: 3300, phoneCallShare: '89%' },
      { index: 23, rank: 2, corridor: 'Dumduma High-Density Township', pinCode: '751019', lat: '20.2450° N', lng: '85.7820° E', monthlySearches: 2200, phoneCallShare: '82%' },
      { index: 24, rank: 1, corridor: 'Pokhariput Airport South Sector', pinCode: '751020', lat: '20.2440° N', lng: '85.8120° E', monthlySearches: 2800, phoneCallShare: '87%' },
      { index: 25, rank: 1, corridor: 'Badambadi & Link Road, Cuttack', pinCode: '753012', lat: '20.4560° N', lng: '85.8790° E', monthlySearches: 3200, phoneCallShare: '89%' },
    ],
  },
};

export default function LocalSeoGridSimulator() {
  const [selectedCityKey, setSelectedCityKey] = useState<string>('delhi');
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>('healthcare');

  const currentCity = CITIES_DATA[selectedCityKey] || CITIES_DATA.delhi;
  const currentIndustry = INDUSTRIES.find(ind => ind.id === selectedIndustryId) || INDUSTRIES[0];

  const [selectedPinIndex, setSelectedPinIndex] = useState<number>(2); // Default to index 2 (Connaught Place / Prime center)
  const selectedPin = currentCity.pins[selectedPinIndex] || currentCity.pins[0];

  const handleCityChange = (key: string) => {
    setSelectedCityKey(key);
    // Keep prime node selected for new city
    setSelectedPinIndex(2);
  };

  const rank1Count = currentCity.pins.filter(p => p.rank === 1).length;
  const dominancePct = Math.round((rank1Count / currentCity.pins.length) * 100);

  return (
    <section className={styles.simSection} id="grid-simulator">
      <div className="container">
        <div className={styles.simCard}>
          {/* Header */}
          <div className={styles.simHeader}>
            <div className={styles.simEyebrowPill}>
              <span className={styles.livePulseDot} />
              <span>LIVE 500M MAP 3-PACK RADAR</span>
            </div>
            <h2 className={styles.simTitle}>
              Google Maps 3-Pack Rank Radar
            </h2>
            <p className={styles.simSub}>
              Google Maps rankings shift every 500 meters. Explore our interactive geospatial radar to inspect live 3-Pack dominance, call capture rates, and competitor displacement across any Indian commercial corridor.
            </p>
          </div>

          {/* Interactive Controls: Metro City & Industry Query Switchers */}
          <div className={styles.controlContainer}>
            {/* City Filter */}
            <div className={styles.filterGroup}>
              <span className={styles.filterLabel}>Target Market:</span>
              {Object.entries(CITIES_DATA).map(([key, city]) => {
                const isActive = selectedCityKey === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => handleCityChange(key)}
                    className={`${styles.cityBtn} ${isActive ? styles.cityBtnActive : ''}`}
                  >
                    📍 {city.name}
                  </button>
                );
              })}
            </div>

            {/* Industry Filter */}
            <div className={styles.filterGroup}>
              <span className={styles.filterLabel}>Simulate Niche:</span>
              {INDUSTRIES.map((ind) => {
                const isActive = selectedIndustryId === ind.id;
                return (
                  <button
                    key={ind.id}
                    type="button"
                    onClick={() => setSelectedIndustryId(ind.id)}
                    className={`${styles.industryBtn} ${isActive ? styles.industryBtnActive : ''}`}
                  >
                    <span>{ind.icon}</span>
                    <span>{ind.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Cockpit: Geospatial Radar (Left) + Real Google Maps 3-Pack SERP (Right) */}
          <div className={styles.cockpitGrid}>
            {/* ══════════════════════════════════════════════════
                LEFT: HIGH-TECH GEOSPATIAL RADAR
               ══════════════════════════════════════════════════ */}
            <div className={styles.radarCard}>
              <div className={styles.radarHeaderBar}>
                <span className={styles.radarLocTitle}>
                  <span>📡</span> {currentCity.name} 5x5 Grid Radius
                </span>
                <span className={styles.radarCoords}>
                  {selectedPin.lat} · {selectedPin.lng}
                </span>
              </div>

              {/* Radar Viewport with Range Rings & Animated Sweep Beam */}
              <div className={styles.radarViewport}>
                <svg className={styles.radarSvgOverlay} viewBox="0 0 380 380" fill="none">
                  {/* Outer Frame Circle (5.0km) */}
                  <circle cx="190" cy="190" r="170" stroke="rgba(56, 189, 248, 0.2)" strokeWidth="1" strokeDasharray="3 3" />
                  <text x="195" y="28" fill="rgba(148, 163, 184, 0.5)" fontSize="9" fontWeight="700">5.0 KM</text>

                  {/* Mid-Outer Circle (3.5km) */}
                  <circle cx="190" cy="190" r="125" stroke="rgba(56, 189, 248, 0.22)" strokeWidth="1" />
                  <text x="195" y="73" fill="rgba(148, 163, 184, 0.5)" fontSize="9" fontWeight="700">3.5 KM</text>

                  {/* Mid-Inner Circle (1.5km) */}
                  <circle cx="190" cy="190" r="80" stroke="rgba(56, 189, 248, 0.28)" strokeWidth="1" strokeDasharray="2 2" />
                  <text x="195" y="118" fill="rgba(148, 163, 184, 0.5)" fontSize="9" fontWeight="700">1.5 KM</text>

                  {/* Core Proximity Circle (500m) */}
                  <circle cx="190" cy="190" r="40" stroke="rgba(16, 185, 129, 0.45)" strokeWidth="1.2" />
                  <text x="195" y="158" fill="rgba(52, 211, 153, 0.7)" fontSize="8.5" fontWeight="800">500 M</text>

                  {/* Crosshair Axes */}
                  <line x1="190" y1="10" x2="190" y2="370" stroke="rgba(56, 189, 248, 0.15)" strokeWidth="1" />
                  <line x1="10" y1="190" x2="370" y2="190" stroke="rgba(56, 189, 248, 0.15)" strokeWidth="1" />

                  {/* North Compass Pointer */}
                  <polygon points="190,14 186,22 194,22" fill="#38BDF8" />
                  <text x="187" y="10" fill="#38BDF8" fontSize="8" fontWeight="800">N</text>
                </svg>

                {/* Rotating Conic Sweep Beam */}
                <div className={styles.radarSweep} />

                {/* 5x5 Geo-Pins */}
                <div className={styles.grid5x5Radar}>
                  {currentCity.pins.map((pin, i) => {
                    const isSelected = selectedPinIndex === i;
                    const isRank1 = pin.rank === 1;

                    return (
                      <button
                        key={pin.index}
                        type="button"
                        onClick={() => setSelectedPinIndex(i)}
                        className={`${styles.radarNode} ${isRank1 ? styles.nodeRank1 : styles.nodeRank2} ${isSelected ? styles.nodeSelected : ''}`}
                        title={`${pin.corridor} — Rank #${pin.rank} (${pin.phoneCallShare} Calls)`}
                        aria-label={`${pin.corridor} rank ${pin.rank}`}
                      >
                        <span>#{pin.rank}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Radar Footer */}
              <div className={styles.radarFooter}>
                <div className={styles.radarLegend}>
                  <div className={styles.radarLegendItem}>
                    <span className={styles.legendDotGreen} />
                    <span>#1 Map Leader</span>
                  </div>
                  <div className={styles.radarLegendItem}>
                    <span className={styles.legendDotAmber} />
                    <span>#2 3-Pack</span>
                  </div>
                </div>
                <div className={styles.radarMetricPill}>
                  {dominancePct}% 3-Pack Dominance ({rank1Count}/25 Nodes #1)
                </div>
              </div>
            </div>

            {/* ══════════════════════════════════════════════════
                RIGHT: LIVE GOOGLE MAPS 3-PACK SERP & HUD
               ══════════════════════════════════════════════════ */}
            <div className={styles.serpCard}>
              {/* Google Maps Search Bar Preview */}
              <div className={styles.googleSearchMock}>
                <span className={styles.googlePinIcon}>📍</span>
                <span className={styles.googleSearchInput}>
                  {currentIndustry.queryPrefix} in {selectedPin.corridor}
                </span>
                <span className={styles.googleProximityBadge}>
                  ● 450m Proximity
                </span>
              </div>

              {/* The Actual Simulated Google Maps 3-Pack SERP */}
              <div className={styles.packList}>
                {/* 🥇 #1 Winner: Your Business / Copilot Partner */}
                <div className={styles.packItemWinner}>
                  <div className={styles.winnerEyebrow}>
                    <span className={styles.rankBadge1}>
                      ★ Rank #1 Map 3-Pack Leader
                    </span>
                    <span className={styles.verifiedLabel}>
                      ✓ Google Verified
                    </span>
                  </div>

                  <h3 className={styles.winnerTitle}>
                    {currentIndustry.winnerName}
                  </h3>

                  <div className={styles.starsRow}>
                    <span className={styles.starsGold}>★★★★★ 4.9</span>
                    <span className={styles.reviewCount}>(480+ Google Reviews)</span>
                  </div>

                  <div className={styles.categoryLine}>
                    {currentIndustry.category} · {selectedPin.corridor}, {currentCity.name} · Open 24 Hours
                  </div>

                  {/* Actions matching Google Maps */}
                  <div className={styles.winnerActions}>
                    <span className={styles.actionPillPrimary}>
                      📞 Call ({selectedPin.phoneCallShare} Capture)
                    </span>
                    <span className={styles.actionPillSecondary}>
                      🧭 Directions (+340%)
                    </span>
                    <span className={styles.actionPillSecondary}>
                      🌐 Website
                    </span>
                  </div>
                </div>

                {/* 🥈 #2 Competitor Result */}
                <div className={styles.packItemCompetitor}>
                  <div className={styles.compHeader}>
                    <span className={styles.compRankBadge}>#2 Competitor</span>
                    <span className={styles.compDistance}>1.8 km away</span>
                  </div>
                  <h4 className={styles.compTitle}>
                    {currentIndustry.competitor1}
                  </h4>
                  <div className={styles.compMeta}>
                    4.2 ★★★★☆ (64 reviews) · Open until 8 PM
                  </div>
                </div>

                {/* 🥉 #3 Competitor Result */}
                <div className={styles.packItemCompetitor}>
                  <div className={styles.compHeader}>
                    <span className={styles.compRankBadge}>#3 Competitor</span>
                    <span className={styles.compDistance}>3.2 km away</span>
                  </div>
                  <h4 className={styles.compTitle}>
                    {currentIndustry.competitor2}
                  </h4>
                  <div className={styles.compMeta}>
                    3.9 ★★★☆☆ (38 reviews) · Closes soon
                  </div>
                </div>
              </div>

              {/* Telemetry Micro Grid */}
              <div className={styles.telemetryGrid}>
                <div className={styles.telemetryTile}>
                  <div className={styles.tileValue}>
                    {selectedPin.monthlySearches.toLocaleString()}
                  </div>
                  <div className={styles.tileLabel}>Monthly Queries</div>
                </div>

                <div className={styles.telemetryTile}>
                  <div className={styles.tileValue} style={{ color: '#059669' }}>
                    {selectedPin.phoneCallShare}
                  </div>
                  <div className={styles.tileLabel}>Direct Call Share</div>
                </div>

                <div className={styles.telemetryTile}>
                  <div className={styles.tileValue} style={{ color: '#0B2093' }}>
                    +340%
                  </div>
                  <div className={styles.tileLabel}>Directions Velocity</div>
                </div>

                <div className={styles.telemetryTile}>
                  <div className={styles.tileValue} style={{ color: '#D97706' }}>
                    #{selectedPin.rank} Lock
                  </div>
                  <div className={styles.tileLabel}>3-Pack Status</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Action */}
          <div className={styles.simBottomCta}>
            <span className={styles.bottomCtaNote}>
              Ready to claim the #1 Map 3-Pack spot across your target coordinates?
            </span>
            <BeamButton
              href="/contact"
              label="Run Free Geo-Grid Audit For Your Location"
              size="md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
