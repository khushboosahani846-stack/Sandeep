
import React from 'react';
import { 
  Building2, 
  Home, 
  Paintbrush, 
  DraftingCompass, 
  Hammer, 
  Trash2,
  HardHat,
  Trophy,
  Users,
  CheckCircle
} from 'lucide-react';
import { Service, Project, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'res-const',
    title: 'Residential Construction',
    description: 'Specializing in premium residential projects tailored to your lifestyle and Vastu needs.',
    icon: <Home className="w-8 h-8" />,
    imageUrl: 'https://picsum.photos/seed/residence/800/600'
  },
  {
    id: 'com-const',
    title: 'Commercial Construction',
    description: 'Expertise in building high-end commercial spaces, office complexes, and retail centers.',
    icon: <Building2 className="w-8 h-8" />,
    imageUrl: 'https://picsum.photos/seed/commercial/800/600'
  },
  {
    id: 'int-design',
    title: 'Interior Design',
    description: 'Modern and functional interior design solutions for both residential and corporate spaces.',
    icon: <Paintbrush className="w-8 h-8" />,
    imageUrl: 'https://picsum.photos/seed/interior/800/600'
  },
  {
    id: 'arch-design',
    title: 'Architecture Design',
    description: 'Creative and innovative architectural planning that combines aesthetics with structural integrity.',
    icon: <DraftingCompass className="w-8 h-8" />,
    imageUrl: 'https://picsum.photos/seed/arch/800/600'
  },
  {
    id: 'renovation',
    title: 'Renovation',
    description: 'Complete building facelifts and structural updates to breathe new life into existing spaces.',
    icon: <Hammer className="w-8 h-8" />,
    imageUrl: 'https://picsum.photos/seed/renovation/800/600'
  },
  {
    id: 'demolition',
    title: 'Demolition',
    description: 'Safe and efficient demolition services for site preparation and redevelopment.',
    icon: <Trash2 className="w-8 h-8" />,
    imageUrl: 'https://picsum.photos/seed/demolition/800/600'
  }
];

export const PROJECTS_DATA: Project[] = [
  { id: 'p1', title: 'Grand Residency', category: 'Residential', imageUrl: 'https://picsum.photos/seed/p1/600/400' },
  { id: 'p2', title: 'Tech Hub Office', category: 'Commercial', imageUrl: 'https://picsum.photos/seed/p2/600/400' },
  { id: 'p3', title: 'Minimalist Penthouse', category: 'Interior', imageUrl: 'https://picsum.photos/seed/p3/600/400' },
  { id: 'p4', title: 'City Center Mall', category: 'Commercial', imageUrl: 'https://picsum.photos/seed/p4/600/400' },
  { id: 'p5', title: 'Eco Villa', category: 'Residential', imageUrl: 'https://picsum.photos/seed/p5/600/400' },
  { id: 'p6', title: 'Modern Loft', category: 'Architecture', imageUrl: 'https://picsum.photos/seed/p6/600/400' },
];

export const STATS_DATA = [
  { label: 'Years Experience', value: '15+', icon: <Trophy className="w-6 h-6 text-yellow-400" /> },
  { label: 'Completed Projects', value: '250+', icon: <CheckCircle className="w-6 h-6 text-yellow-400" /> },
  { label: 'Expert Engineers', value: '25+', icon: <HardHat className="w-6 h-6 text-yellow-400" /> },
  { label: 'Happy Clients', value: '200+', icon: <Users className="w-6 h-6 text-yellow-400" /> },
];
