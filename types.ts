
// Fix: Import React to provide the necessary namespace for React.ReactNode
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface NavLink {
  name: string;
  path: string;
}