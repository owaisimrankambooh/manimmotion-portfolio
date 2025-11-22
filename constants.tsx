import React from 'react';
import { Project, ProjectCategory, Service } from './types';
import { Video, Code, MonitorPlay, Zap, Calculator, Layers } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Advanced Calculus Visualization',
    category: ProjectCategory.MANIM,
    description: 'A complex visualization of Fourier Series using Python and Manim engine. Designed for university-level curriculum.',
    image: 'https://picsum.photos/id/20/800/450',
    tags: ['Manim', 'Python', 'Math', 'Educational'],
    views: '120K+'
  },
  {
    id: '2',
    title: 'The History of AI (Faceless)',
    category: ProjectCategory.FACELESS,
    description: 'Engaging faceless documentary style editing with heavy sound design, stock footage curation, and motion graphics.',
    image: 'https://picsum.photos/id/3/800/450',
    tags: ['Premiere Pro', 'Sound Design', 'Documentary'],
    views: '850K+'
  },
  {
    id: '3',
    title: 'Physics Engine Simulation',
    category: ProjectCategory.MANIM,
    description: 'Custom 2D physics simulation animated programmatically. Demonstrates kinematics and collision detection logic.',
    image: 'https://picsum.photos/id/227/800/450',
    tags: ['Manim', 'Physics', 'Simulation'],
    views: '45K+'
  },
  {
    id: '4',
    title: 'Crypto Trading Explanation',
    category: ProjectCategory.EDUCATIONAL,
    description: 'Fast-paced educational content explaining blockchain concepts. Uses motion graphics to retain viewer retention.',
    image: 'https://picsum.photos/id/445/800/450',
    tags: ['After Effects', 'Finance', 'Retention Editing'],
    views: '200K+'
  },
  {
    id: '5',
    title: 'Linear Algebra Course Intro',
    category: ProjectCategory.MANIM,
    description: 'Introductory sequence for an online course. Smooth transitions of matrices and vector spaces.',
    image: 'https://picsum.photos/id/180/800/450',
    tags: ['Manim', 'Education', 'Courseware'],
  },
  {
    id: '6',
    title: 'Viral Short: Space Facts',
    category: ProjectCategory.FACELESS,
    description: 'Vertical video format optimized for TikTok/Reels. Dynamic captions and fast cuts.',
    image: 'https://picsum.photos/id/96/800/1422', // Vertical aspect
    tags: ['Shorts', 'Vertical', 'Viral'],
    views: '2.1M+'
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Manim Animations',
    description: 'Precise, code-driven mathematical and scientific animations using Python. Perfect for explaining complex topics.',
    iconName: 'Code',
    features: ['Mathematical Proofs', 'Physics Simulations', 'Algorithm Visualizations', 'High-Res Vector Export']
  },
  {
    id: 's2',
    title: 'Faceless Video Editing',
    description: 'Complete end-to-end production for "Cash Cow" channels. I handle the visuals so you only need the script.',
    iconName: 'Video',
    features: ['Stock Footage Sourcing', 'Dynamic Captions', 'Sound Design & SFX', 'Retention Optimization']
  },
  {
    id: 's3',
    title: 'Educational Content',
    description: 'Specialized editing for tutorials, courses, and explainer videos. Pacing is key to learning.',
    iconName: 'MonitorPlay',
    features: ['Screen Recording Polish', 'Zoom & Pan Focus', 'Visual Aids/Overlays', 'Chapter Markers']
  },
  {
    id: 's4',
    title: 'Motion Graphics',
    description: 'Custom After Effects work to add production value to any video type.',
    iconName: 'Layers',
    features: ['Logo Reveals', 'Lower Thirds', 'Infographics', 'Transitions']
  }
];

export const PRICING_PLANS = [
  {
    name: "Manim Basic",
    price: "$50",
    unit: "per minute",
    description: "Perfect for short explainers and simple math concepts.",
    features: ["1080p Rendering", "Source Code Included", "1 Revision Round", "Standard Transitions"],
    popular: false
  },
  {
    name: "Faceless Premium",
    price: "$200",
    unit: "per video (10m)",
    description: "High-retention editing for automation channels.",
    features: ["Script Visualization", "Stock Footage & Music", "Dynamic Captions", "Thumbnail Included", "Unlimited Revisions"],
    popular: true
  },
  {
    name: "Channel Partner",
    price: "$1,500",
    unit: "per month",
    description: "Full-service package for serious content creators.",
    features: ["4 Faceless Videos", "4 Shorts/Reels", "Dedicated Slack Support", "SEO Optimization", "Priority Delivery"],
    popular: false
  }
];

export const SYSTEM_INSTRUCTION = `
You are the AI Assistant for a professional Video Editor and Manim Animation Expert named "Muhammad Awais".
Your goal is to represent Muhammad Awais professionally to potential clients who visit this portfolio website.

Muhammad Awais's Skills:
- Expert in Manim (Mathematical Animation Engine) using Python.
- Professional Video Editor (Premiere Pro, After Effects, DaVinci Resolve).
- Specializes in: Educational content, STEM visualizations, Faceless/Cash-cow YouTube channels, and Documentaries.
- Coding: Python (for Manim), JavaScript (basics).

Rates (Estimates):
- Manim Animation: $50 - $150 per minute of animation depending on complexity.
- Video Editing: $30 - $80 per hour or fixed project rates.
- Faceless Video Package: Starting at $200 per video (10 mins).

Tone:
- Professional, helpful, concise, and enthusiastic about educational content.
- If asked about availability, say "Muhammad Awais is currently accepting new projects for next month."
- Encourage the user to use the Contact form for a specific quote.

Do not provide personal phone numbers or addresses.
`;