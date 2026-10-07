'use client';

import React, { useState } from 'react';
import styles from './LocalSeoGridSimulator.module.css';

interface PinNode {
  index: number;
  rank: number;
  corridor: string;
  pinCode: string;
  monthlySearches: number;
  phoneCallShare: string;
}

interface CityData {
  name: string;
  pins: PinNode[];
}

const CITIES_DATA: Record<string, CityData> = {
  bhubaneswar: {
    name: 'Bhubaneswar',
    pins: [
      { index: 1, rank: 1, corridor: 'Patia / Infocity Tech Hub', pinCode: '751024', monthlySearches: 4200, phoneCallShare: '92%' },
      { index: 2, rank: 1, corridor: 'KIIT Square Corridor', pinCode: '751024', monthlySearches: 3800, phoneCallShare: '89%' },
      { index: 3, rank: 1, corridor: 'Chandrasekharpur Commercial Hub', pinCode: '751016', monthlySearches: 3100, phoneCallShare: '91%' },
      { index: 4, rank: 2, corridor: 'Sailashree Vihar Residential Area', pinCode: '751021', monthlySearches: 1800, phoneCallShare: '78%' },
      { index: 5, rank: 1, corridor: 'Kalarahanga & Nandan Kanan Road', pinCode: '751024', monthlySearches: 1600, phoneCallShare: '84%' },
      { index: 6, rank: 1, corridor: 'Jaydev Vihar Metro Junction', pinCode: '751013', monthlySearches: 5100, phoneCallShare: '94%' },
      { index: 7, rank: 1, corridor: 'Nayapalli Commercial Spine', pinCode: '751012', monthlySearches: 4600, phoneCallShare: '93%' },
      { index: 8, rank: 1, corridor: 'IRC Village VIP Enclave', pinCode: '751015', monthlySearches: 2900, phoneCallShare: '88%' },
      { index: 9, rank: 2, corridor: 'CRP Square Transit Corridor', pinCode: '751015', monthlySearches: 2400, phoneCallShare: '81%' },
      { index: 10, rank: 1, corridor: 'Acharya Vihar Science Hub', pinCode: '751022', monthlySearches: 2200, phoneCallShare: '86%' },
      { index: 11, rank: 1, corridor: 'Saheed Nagar Retail Corridor', pinCode: '751007', monthlySearches: 5800, phoneCallShare: '96%' },
      { index: 12, rank: 1, corridor: 'Janpath Commercial Promenade', pinCode: '751001', monthlySearches: 6200, phoneCallShare: '95%' },
      { index: 13, rank: 1, corridor: 'Master Canteen & Station Plaza', pinCode: '751001', monthlySearches: 4900, phoneCallShare: '92%' },
      { index: 14, rank: 2, corridor: 'Kharvela Nagar Business District', pinCode: '751001', monthlySearches: 3400, phoneCallShare: '85%' },
      { index: 15, rank: 1, corridor: 'Bapuji Nagar Gold & Electronics', pinCode: '751009', monthlySearches: 4100, phoneCallShare: '90%' },
      { index: 16, rank: 1, corridor: 'Rasulgarh Industrial & Auto Hub', pinCode: '751010', monthlySearches: 3900, phoneCallShare: '87%' },
      { index: 17, rank: 2, corridor: 'Cuttack-Puri Arterial Bypass', pinCode: '751010', monthlySearches: 2700, phoneCallShare: '80%' },
      { index: 18, rank: 1, corridor: 'Mancheswar Industrial Estate', pinCode: '751017', monthlySearches: 2500, phoneCallShare: '88%' },
      { index: 19, rank: 2, corridor: 'Palasuni Regional Transport Gate', pinCode: '751010', monthlySearches: 2100, phoneCallShare: '79%' },
      { index: 20, rank: 1, corridor: 'Laxmisagar Urban Sector', pinCode: '751006', monthlySearches: 2600, phoneCallShare: '86%' },
      { index: 21, rank: 1, corridor: 'Khandagiri & Udayagiri Corridor', pinCode: '751030', monthlySearches: 3600, phoneCallShare: '91%' },
      { index: 22, rank: 1, corridor: 'Baramunda Inter-State Bus Hub', pinCode: '751003', monthlySearches: 3300, phoneCallShare: '89%' },
      { index: 23, rank: 2, corridor: 'Dumduma High-Density Township', pinCode: '751019', monthlySearches: 2200, phoneCallShare: '82%' },
      { index: 24, rank: 1, corridor: 'Pokhariput Airport South Sector', pinCode: '751020', monthlySearches: 2800, phoneCallShare: '87%' },
      { index: 25, rank: 1, corridor: 'Bhitarkanika & Lingaraj Heritage', pinCode: '751002', monthlySearches: 2400, phoneCallShare: '85%' },
    ],
  },
  delhi: {
    name: 'Delhi NCR',
    pins: [
      { index: 1, rank: 1, corridor: 'Cyber City Corporate Hub, Gurgaon', pinCode: '122002', monthlySearches: 18500, phoneCallShare: '95%' },
      { index: 2, rank: 1, corridor: 'Golf Course Road Luxury Enclave', pinCode: '122003', monthlySearches: 14200, phoneCallShare: '92%' },
      { index: 3, rank: 1, corridor: 'Connaught Place Central Hub', pinCode: '110001', monthlySearches: 22400, phoneCallShare: '96%' },
      { index: 4, rank: 2, corridor: 'South Extension Retail Ring', pinCode: '110049', monthlySearches: 9800, phoneCallShare: '88%' },
      { index: 5, rank: 1, corridor: 'Saket & Select Citywalk Corridor', pinCode: '110017', monthlySearches: 13600, phoneCallShare: '91%' },
      { index: 6, rank: 1, corridor: 'Noida Sector 18 Commercial Hub', pinCode: '201301', monthlySearches: 16400, phoneCallShare: '94%' },
      { index: 7, rank: 1, corridor: 'Noida Sector 62 IT Corridor', pinCode: '201309', monthlySearches: 11200, phoneCallShare: '90%' },
      { index: 8, rank: 2, corridor: 'Lajpat Nagar Central Market', pinCode: '110024', monthlySearches: 8900, phoneCallShare: '85%' },
      { index: 9, rank: 1, corridor: 'Vasant Kunj Premium Enclave', pinCode: '110070', monthlySearches: 10400, phoneCallShare: '93%' },
      { index: 10, rank: 1, corridor: 'Karol Bagh Commercial Spine', pinCode: '110005', monthlySearches: 14800, phoneCallShare: '92%' },
      { index: 11, rank: 1, corridor: 'Greater Kailash 1 & 2 M-Block', pinCode: '110048', monthlySearches: 12900, phoneCallShare: '94%' },
      { index: 12, rank: 1, corridor: 'Dwarka Sector 12 Metro Hub', pinCode: '110075', monthlySearches: 9400, phoneCallShare: '89%' },
      { index: 13, rank: 2, corridor: 'Rohini Sector 10 District Centre', pinCode: '110085', monthlySearches: 8100, phoneCallShare: '82%' },
      { index: 14, rank: 1, corridor: 'Rajouri Garden Lifestyle Market', pinCode: '110027', monthlySearches: 11200, phoneCallShare: '90%' },
      { index: 15, rank: 1, corridor: 'Hauz Khas Village & IIT Gate', pinCode: '110016', monthlySearches: 9800, phoneCallShare: '91%' },
      { index: 16, rank: 1, corridor: 'Aerocity Hospitality District', pinCode: '110037', monthlySearches: 15200, phoneCallShare: '96%' },
      { index: 17, rank: 2, corridor: 'Sohna Road Commercial Spine', pinCode: '122018', monthlySearches: 7600, phoneCallShare: '84%' },
      { index: 18, rank: 1, corridor: 'Indirapuram Ghaziabad Hub', pinCode: '201014', monthlySearches: 8800, phoneCallShare: '87%' },
      { index: 19, rank: 1, corridor: 'Noida Expressway Tech Parks', pinCode: '201305', monthlySearches: 12400, phoneCallShare: '93%' },
      { index: 20, rank: 2, corridor: 'Netaji Subhash Place Pitampura', pinCode: '110034', monthlySearches: 9100, phoneCallShare: '86%' },
      { index: 21, rank: 1, corridor: 'Nehru Place IT & Hardware Hub', pinCode: '110019', monthlySearches: 17800, phoneCallShare: '95%' },
      { index: 22, rank: 1, corridor: 'Khan Market Luxury Promenade', pinCode: '110003', monthlySearches: 8200, phoneCallShare: '97%' },
      { index: 23, rank: 2, corridor: 'Preet Vihar East Delhi Hub', pinCode: '110092', monthlySearches: 6800, phoneCallShare: '83%' },
      { index: 24, rank: 1, corridor: 'Janakpuri District Centre', pinCode: '110058', monthlySearches: 8400, phoneCallShare: '88%' },
      { index: 25, rank: 1, corridor: 'Chandni Chowk Wholesale Hub', pinCode: '110006', monthlySearches: 19400, phoneCallShare: '94%' },
    ],
  },
  mumbai: {
    name: 'Mumbai',
    pins: [
      { index: 1, rank: 1, corridor: 'Bandra Kurla Complex (BKC)', pinCode: '400051', monthlySearches: 26400, phoneCallShare: '97%' },
      { index: 2, rank: 1, corridor: 'Bandra West Linking Road', pinCode: '400050', monthlySearches: 19800, phoneCallShare: '94%' },
      { index: 3, rank: 1, corridor: 'Andheri East MIDC Tech Spine', pinCode: '400093', monthlySearches: 24200, phoneCallShare: '95%' },
      { index: 4, rank: 2, corridor: 'Andheri West Lokhandwala', pinCode: '400053', monthlySearches: 15600, phoneCallShare: '90%' },
      { index: 5, rank: 1, corridor: 'Lower Parel High Street Phoenix', pinCode: '400013', monthlySearches: 21800, phoneCallShare: '96%' },
      { index: 6, rank: 1, corridor: 'Powai Hiranandani Tech Valley', pinCode: '400076', monthlySearches: 14500, phoneCallShare: '93%' },
      { index: 7, rank: 1, corridor: 'Nariman Point & Fort District', pinCode: '400021', monthlySearches: 16800, phoneCallShare: '95%' },
      { index: 8, rank: 2, corridor: 'Juhu Tara Road Coastal Strip', pinCode: '400049', monthlySearches: 11200, phoneCallShare: '91%' },
      { index: 9, rank: 1, corridor: 'Thane West Ghodbunder Hub', pinCode: '400607', monthlySearches: 17400, phoneCallShare: '89%' },
      { index: 10, rank: 1, corridor: 'Navi Mumbai Vashi Sector 17', pinCode: '400703', monthlySearches: 13900, phoneCallShare: '91%' },
      { index: 11, rank: 1, corridor: 'Dadar Commercial Junction', pinCode: '400028', monthlySearches: 18200, phoneCallShare: '94%' },
      { index: 12, rank: 1, corridor: 'Goregaon East Nesco Center', pinCode: '400063', monthlySearches: 14600, phoneCallShare: '92%' },
      { index: 13, rank: 2, corridor: 'Malad West Mindspace Park', pinCode: '400064', monthlySearches: 12800, phoneCallShare: '88%' },
      { index: 14, rank: 1, corridor: 'Worli Sea Face Luxury Belt', pinCode: '400018', monthlySearches: 10900, phoneCallShare: '95%' },
      { index: 15, rank: 1, corridor: 'Ghatkopar East R-City Zone', pinCode: '400077', monthlySearches: 11800, phoneCallShare: '89%' },
      { index: 16, rank: 1, corridor: 'Borivali West IC Colony', pinCode: '400092', monthlySearches: 12400, phoneCallShare: '88%' },
      { index: 17, rank: 2, corridor: 'Chembur Diamond Garden Belt', pinCode: '400071', monthlySearches: 9600, phoneCallShare: '86%' },
      { index: 18, rank: 1, corridor: 'Santacruz West S.V. Road', pinCode: '400054', monthlySearches: 10800, phoneCallShare: '91%' },
      { index: 19, rank: 1, corridor: 'Khar West 14th Road Strip', pinCode: '400052', monthlySearches: 9200, phoneCallShare: '93%' },
      { index: 20, rank: 2, corridor: 'Kandivali East Lokhandwala', pinCode: '400101', monthlySearches: 8700, phoneCallShare: '85%' },
      { index: 21, rank: 1, corridor: 'Colaba Causeway South Gateway', pinCode: '400005', monthlySearches: 12600, phoneCallShare: '92%' },
      { index: 22, rank: 1, corridor: 'Mulund West LBS Marg Hub', pinCode: '400080', monthlySearches: 9400, phoneCallShare: '87%' },
      { index: 23, rank: 2, corridor: 'Belapur CBD Navi Mumbai', pinCode: '400614', monthlySearches: 8100, phoneCallShare: '84%' },
      { index: 24, rank: 1, corridor: 'Prabhadevi Siddhivinayak Zone', pinCode: '400025', monthlySearches: 11400, phoneCallShare: '91%' },
      { index: 25, rank: 1, corridor: 'Kalyan West Station Promenade', pinCode: '421301', monthlySearches: 9800, phoneCallShare: '86%' },
    ],
  },
  bangalore: {
    name: 'Bangalore',
    pins: [
      { index: 1, rank: 1, corridor: 'Koramangala 80ft Road Spine', pinCode: '560034', monthlySearches: 21500, phoneCallShare: '96%' },
      { index: 2, rank: 1, corridor: 'Indiranagar 100ft Road Belt', pinCode: '560038', monthlySearches: 23400, phoneCallShare: '97%' },
      { index: 3, rank: 1, corridor: 'HSR Layout Sector 1 to 7', pinCode: '560102', monthlySearches: 19800, phoneCallShare: '94%' },
      { index: 4, rank: 2, corridor: 'Whitefield ITPL Main Road', pinCode: '560066', monthlySearches: 17600, phoneCallShare: '91%' },
      { index: 5, rank: 1, corridor: 'Electronic City Phase 1 & 2', pinCode: '560100', monthlySearches: 15400, phoneCallShare: '92%' },
      { index: 6, rank: 1, corridor: 'Bellandur Outer Ring Road', pinCode: '560103', monthlySearches: 22800, phoneCallShare: '95%' },
      { index: 7, rank: 1, corridor: 'MG Road & Brigade Commercial', pinCode: '560001', monthlySearches: 18900, phoneCallShare: '95%' },
      { index: 8, rank: 2, corridor: 'JP Nagar 24th Main Hub', pinCode: '560078', monthlySearches: 12400, phoneCallShare: '88%' },
      { index: 9, rank: 1, corridor: 'Jayanagar 4th Block Complex', pinCode: '560011', monthlySearches: 14200, phoneCallShare: '93%' },
      { index: 10, rank: 1, corridor: 'Marathahalli Multiplex Junction', pinCode: '560037', monthlySearches: 16100, phoneCallShare: '90%' },
      { index: 11, rank: 1, corridor: 'Malleshwaram 8th Cross Hub', pinCode: '560003', monthlySearches: 13200, phoneCallShare: '92%' },
      { index: 12, rank: 1, corridor: 'Sarjapur Road Tech Corridor', pinCode: '560035', monthlySearches: 17800, phoneCallShare: '93%' },
      { index: 13, rank: 2, corridor: 'Hebbal Manyata Tech Park', pinCode: '560045', monthlySearches: 15200, phoneCallShare: '89%' },
      { index: 14, rank: 1, corridor: 'Rajajinagar Brigade Gateway', pinCode: '560010', monthlySearches: 11800, phoneCallShare: '90%' },
      { index: 15, rank: 1, corridor: 'BTM Layout Outer Ring Road', pinCode: '560068', monthlySearches: 14600, phoneCallShare: '91%' },
      { index: 16, rank: 1, corridor: 'Bannerghatta Road IIM Belt', pinCode: '560076', monthlySearches: 13400, phoneCallShare: '89%' },
      { index: 17, rank: 2, corridor: 'Yelahanka New Town Center', pinCode: '560064', monthlySearches: 8900, phoneCallShare: '84%' },
      { index: 18, rank: 1, corridor: 'Kalyan Nagar HRBR Layout', pinCode: '560043', monthlySearches: 10800, phoneCallShare: '90%' },
      { index: 19, rank: 1, corridor: 'Basavanagudi Gandhi Bazaar', pinCode: '560004', monthlySearches: 9700, phoneCallShare: '88%' },
      { index: 20, rank: 2, corridor: 'RT Nagar Main Road Commercial', pinCode: '560032', monthlySearches: 7800, phoneCallShare: '83%' },
      { index: 21, rank: 1, corridor: 'Cunningham Road Medical Belt', pinCode: '560052', monthlySearches: 8900, phoneCallShare: '94%' },
      { index: 22, rank: 1, corridor: 'Domlur EGL Tech Gateway', pinCode: '560071', monthlySearches: 11200, phoneCallShare: '92%' },
      { index: 23, rank: 2, corridor: 'Banashankari BDA Complex', pinCode: '560070', monthlySearches: 8400, phoneCallShare: '85%' },
      { index: 24, rank: 1, corridor: 'Sadashivanagar VIP Enclave', pinCode: '560080', monthlySearches: 6700, phoneCallShare: '96%' },
      { index: 25, rank: 1, corridor: 'Frazer Town Mosque Road', pinCode: '560005', monthlySearches: 8200, phoneCallShare: '89%' },
    ],
  },
  hyderabad: {
    name: 'Hyderabad',
    pins: [
      { index: 1, rank: 1, corridor: 'Hitec City Cyber Towers', pinCode: '500081', monthlySearches: 21000, phoneCallShare: '96%' },
      { index: 2, rank: 1, corridor: 'Madhapur Mindspace Tech Zone', pinCode: '500081', monthlySearches: 19400, phoneCallShare: '95%' },
      { index: 3, rank: 1, corridor: 'Gachibowli Financial District', pinCode: '500032', monthlySearches: 18600, phoneCallShare: '94%' },
      { index: 4, rank: 2, corridor: 'Jubilee Hills Road No. 36', pinCode: '500033', monthlySearches: 16200, phoneCallShare: '96%' },
      { index: 5, rank: 1, corridor: 'Banjara Hills Road No. 1 & 12', pinCode: '500034', monthlySearches: 17400, phoneCallShare: '95%' },
      { index: 6, rank: 1, corridor: 'Kondapur Botanical Garden Road', pinCode: '500084', monthlySearches: 14800, phoneCallShare: '91%' },
      { index: 7, rank: 1, corridor: 'Kukatpally KPHB Colony Ring', pinCode: '500072', monthlySearches: 18200, phoneCallShare: '92%' },
      { index: 8, rank: 2, corridor: 'Ameerpet Commercial Hub', pinCode: '500016', monthlySearches: 15600, phoneCallShare: '89%' },
      { index: 9, rank: 1, corridor: 'Begumpet Airport Road Belt', pinCode: '500016', monthlySearches: 12400, phoneCallShare: '90%' },
      { index: 10, rank: 1, corridor: 'Secunderabad MG Road Hub', pinCode: '500003', monthlySearches: 14100, phoneCallShare: '88%' },
      { index: 11, rank: 1, corridor: 'Somajiguda Raj Bhavan Road', pinCode: '500082', monthlySearches: 11900, phoneCallShare: '92%' },
      { index: 12, rank: 1, corridor: 'Manikonda Lanco Hills Spine', pinCode: '500089', monthlySearches: 13500, phoneCallShare: '90%' },
      { index: 13, rank: 2, corridor: 'Miyapur Metro Transit Hub', pinCode: '500049', monthlySearches: 9800, phoneCallShare: '85%' },
      { index: 14, rank: 1, corridor: 'Dilsukhnagar Shopping Hub', pinCode: '500060', monthlySearches: 16800, phoneCallShare: '91%' },
      { index: 15, rank: 1, corridor: 'Himayatnagar Liberty Junction', pinCode: '500029', monthlySearches: 10400, phoneCallShare: '89%' },
      { index: 16, rank: 1, corridor: 'Abids Commercial Street', pinCode: '500001', monthlySearches: 11200, phoneCallShare: '87%' },
      { index: 17, rank: 2, corridor: 'Attapur Pillar 143 Ring', pinCode: '500048', monthlySearches: 8200, phoneCallShare: '83%' },
      { index: 18, rank: 1, corridor: 'Nanakramguda Wipro Circle', pinCode: '500032', monthlySearches: 14600, phoneCallShare: '93%' },
      { index: 19, rank: 1, corridor: 'Kothaguda Junction Strip', pinCode: '500084', monthlySearches: 9200, phoneCallShare: '89%' },
      { index: 20, rank: 2, corridor: 'AS Rao Nagar ECIL Hub', pinCode: '500062', monthlySearches: 8600, phoneCallShare: '84%' },
      { index: 21, rank: 1, corridor: 'Tolichowki Heritage Promenade', pinCode: '500008', monthlySearches: 10100, phoneCallShare: '88%' },
      { index: 22, rank: 1, corridor: 'Kompally Highway Commercial', pinCode: '500014', monthlySearches: 8400, phoneCallShare: '86%' },
      { index: 23, rank: 2, corridor: 'LB Nagar Ring Road Center', pinCode: '500074', monthlySearches: 9400, phoneCallShare: '82%' },
      { index: 24, rank: 1, corridor: 'Nallagandla Aparna Belt', pinCode: '500019', monthlySearches: 7900, phoneCallShare: '88%' },
      { index: 25, rank: 1, corridor: 'Charminar Historic Core', pinCode: '500002', monthlySearches: 15800, phoneCallShare: '90%' },
    ],
  },
  pune: {
    name: 'Pune',
    pins: [
      { index: 1, rank: 1, corridor: 'Koregaon Park North Main Road', pinCode: '411001', monthlySearches: 16400, phoneCallShare: '96%' },
      { index: 2, rank: 1, corridor: 'Baner High Street Corridor', pinCode: '411045', monthlySearches: 17800, phoneCallShare: '95%' },
      { index: 3, rank: 1, corridor: 'Viman Nagar Phoenix Market City', pinCode: '411014', monthlySearches: 15200, phoneCallShare: '94%' },
      { index: 4, rank: 2, corridor: 'Hinjewadi Phase 1 IT Park', pinCode: '411057', monthlySearches: 19400, phoneCallShare: '92%' },
      { index: 5, rank: 1, corridor: 'Kalyani Nagar Tech Park Zone', pinCode: '411006', monthlySearches: 12900, phoneCallShare: '93%' },
      { index: 6, rank: 1, corridor: 'Wakad Dange Chowk Belt', pinCode: '411057', monthlySearches: 14200, phoneCallShare: '90%' },
      { index: 7, rank: 1, corridor: 'Kothrud Karve Road Commercial', pinCode: '411038', monthlySearches: 13800, phoneCallShare: '91%' },
      { index: 8, rank: 2, corridor: 'Aundh ITI Road Promenade', pinCode: '411007', monthlySearches: 11400, phoneCallShare: '89%' },
      { index: 9, rank: 1, corridor: 'Shivajinagar FC Road Belt', pinCode: '411005', monthlySearches: 16800, phoneCallShare: '93%' },
      { index: 10, rank: 1, corridor: 'Magarpatta City Hadapsar', pinCode: '411028', monthlySearches: 14700, phoneCallShare: '91%' },
      { index: 11, rank: 1, corridor: 'Kharadi EON Free Zone', pinCode: '411014', monthlySearches: 15900, phoneCallShare: '92%' },
      { index: 12, rank: 1, corridor: 'Bavdhan Paud Road Spine', pinCode: '411021', monthlySearches: 8900, phoneCallShare: '87%' },
      { index: 13, rank: 2, corridor: 'Pimpri-Chinchwad MIDC Hub', pinCode: '411018', monthlySearches: 16200, phoneCallShare: '89%' },
      { index: 14, rank: 1, corridor: 'Camp MG Road Retail District', pinCode: '411001', monthlySearches: 12100, phoneCallShare: '91%' },
      { index: 15, rank: 1, corridor: 'Senapati Bapat Road ICC Tech', pinCode: '411016', monthlySearches: 13400, phoneCallShare: '94%' },
      { index: 16, rank: 1, corridor: 'Bibvewadi Swami Vivekanand', pinCode: '411037', monthlySearches: 7800, phoneCallShare: '85%' },
      { index: 17, rank: 2, corridor: 'Pashan Sus Road Enclave', pinCode: '411021', monthlySearches: 7200, phoneCallShare: '84%' },
      { index: 18, rank: 1, corridor: 'Ravet Kiwale Express Gateway', pinCode: '412101', monthlySearches: 8100, phoneCallShare: '86%' },
      { index: 19, rank: 1, corridor: 'Undri NIBM Undri Road', pinCode: '411060', monthlySearches: 9400, phoneCallShare: '88%' },
      { index: 20, rank: 2, corridor: 'Sinhagad Road Transit Hub', pinCode: '411041', monthlySearches: 8900, phoneCallShare: '83%' },
      { index: 21, rank: 1, corridor: 'Model Colony Deep Bungalow', pinCode: '411016', monthlySearches: 6800, phoneCallShare: '93%' },
      { index: 22, rank: 1, corridor: 'Chandan Nagar Nagar Road', pinCode: '411014', monthlySearches: 9200, phoneCallShare: '87%' },
      { index: 23, rank: 2, corridor: 'Swargate Bus Terminal Zone', pinCode: '411042', monthlySearches: 11600, phoneCallShare: '88%' },
      { index: 24, rank: 1, corridor: 'Balewadi High Street Sports', pinCode: '411045', monthlySearches: 13100, phoneCallShare: '92%' },
      { index: 25, rank: 1, corridor: 'Dhanori Airport Road Belt', pinCode: '411015', monthlySearches: 7400, phoneCallShare: '85%' },
    ],
  },
};

export default function LocalSeoGridSimulator() {
  const [selectedCityKey, setSelectedCityKey] = useState<string>('bhubaneswar');
  const currentCity = CITIES_DATA[selectedCityKey] || CITIES_DATA.bhubaneswar;
  const [selectedPin, setSelectedPin] = useState<PinNode>(currentCity.pins[10]);

  const handleCityChange = (cityKey: string) => {
    setSelectedCityKey(cityKey);
    const targetCity = CITIES_DATA[cityKey] || CITIES_DATA.bhubaneswar;
    setSelectedPin(targetCity.pins[10] || targetCity.pins[0]);
  };

  return (
    <section className={styles.simSection} id="grid-simulator">
      <div className="container">
        <div className={styles.simCard}>
          <div className={styles.simHeader}>
            <span className={styles.simEyebrow}>HYPERLOCAL GEO-GRID TELEMETRY</span>
            <h2 className={styles.simTitle}>
              Google Maps 3-Pack Rank Tracker
            </h2>
            <p className={styles.simSub}>
              Google Maps rankings change every 500 meters. Select your target market and click any coordinate on our 5x5 geo-grid to inspect live Map 3-Pack rank dominance.
            </p>

            {/* City Selection Switcher */}
            <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '8px' }}>
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.06em', marginRight: '6px' }}>
                Select Location →
              </span>
              {Object.entries(CITIES_DATA).map(([key, city]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => handleCityChange(key)}
                  style={{
                    background: selectedCityKey === key ? '#0B2093' : '#F1F5F9',
                    color: selectedCityKey === key ? '#FFFFFF' : '#334155',
                    border: selectedCityKey === key ? '1px solid #0B2093' : '1px solid #CBD5E1',
                    borderRadius: '20px',
                    padding: '6px 14px',
                    fontSize: '12px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {city.name}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.gridSimulatorWrapper}>
            {/* Visual 5x5 Geo-Grid */}
            <div className={styles.mapVisual}>
              <span style={{ fontSize: '12px', fontWeight: 800, color: '#0B2093', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                📍 {currentCity.name} Urban 5x5 Geo-Radius
              </span>

              <div className={styles.grid5x5}>
                {currentCity.pins.map((pin) => {
                  const isSelected = selectedPin.index === pin.index;
                  const pinColorClass = pin.rank === 1 ? styles.pinGreen : pin.rank === 2 ? styles.pinYellow : styles.pinOrange;
                  return (
                    <button
                      key={pin.index}
                      onClick={() => setSelectedPin(pin)}
                      className={`${styles.gridPin} ${pinColorClass}`}
                      style={{
                        outline: isSelected ? '3px solid #0B2093' : 'none',
                        outlineOffset: '2px',
                      }}
                      title={`${pin.corridor} — Rank #${pin.rank}`}
                    >
                      #{pin.rank}
                    </button>
                  );
                })}
              </div>

              <div className={styles.mapLegend}>
                <div>
                  <span className={styles.legendDot} style={{ background: '#10B981' }} />
                  <span>Rank #1 (Absolute 3-Pack Leader)</span>
                </div>
                <div>
                  <span className={styles.legendDot} style={{ background: '#F59E0B' }} />
                  <span>Rank #2 (3-Pack Verified)</span>
                </div>
              </div>
            </div>

            {/* Selected Pin Telemetry */}
            <div className={styles.telemetryPanel}>
              <div className={styles.activePinInfo}>
                <span className={styles.pinStatusBadge}>
                  ✓ Active Map 3-Pack Dominance
                </span>
                <h3 className={styles.pinLocationName}>{selectedPin.corridor}</h3>
                <div style={{ fontSize: '13px', color: '#FCD34D', fontWeight: 700 }}>
                  PIN Code: {selectedPin.pinCode} · {currentCity.name} Corridor
                </div>
              </div>

              <div className={styles.statRow}>
                <span className={styles.statLabel}>Google Map 3-Pack Ranking</span>
                <span className={styles.statVal} style={{ color: '#10B981' }}>#{selectedPin.rank} in {currentCity.name}</span>
              </div>
              <div className={styles.statRow}>
                <span className={styles.statLabel}>Monthly &quot;Near Me&quot; Searches</span>
                <span className={styles.statVal}>{selectedPin.monthlySearches.toLocaleString()} Queries</span>
              </div>
              <div className={styles.statRow}>
                <span className={styles.statLabel}>Direct Phone Call Capture Rate</span>
                <span className={styles.statVal}>{selectedPin.phoneCallShare}</span>
              </div>
              <div className={styles.statRow}>
                <span className={styles.statLabel}>Driving Direction Requests</span>
                <span className={styles.statVal}>+340% Higher Than Competitors</span>
              </div>
              <div className={styles.statRow}>
                <span className={styles.statLabel}>Review Sentiment Rating</span>
                <span className={styles.statVal} style={{ color: '#FCD34D' }}>4.9★ (380+ Verified Reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
