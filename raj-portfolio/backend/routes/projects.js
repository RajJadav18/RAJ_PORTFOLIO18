const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// Seed default projects if DB is empty
const defaultProjects = [
  {
    title: 'Gesture-Based Hand Control Game',
    description: 'AI-powered game controlled entirely via hand gestures using computer vision.',
    longDescription: 'Award-winning project presented at V.V.P Engineering College. Uses real-time hand tracking and gesture recognition to control game mechanics — no keyboard or mouse needed.',
    tech: ['Python', 'OpenCV', 'MediaPipe', 'TensorFlow'],
    category: 'ai',
    featured: true,
    order: 1,
  },
  {
    title: 'AI-Based Image Clearance',
    description: 'Research project using deep learning to enhance and denoise images automatically.',
    longDescription: 'Presented at V.V.P Engineering College research competition. Implements neural network-based image enhancement pipeline with real-time processing capability.',
    tech: ['Python', 'TensorFlow', 'OpenCV', 'NumPy'],
    category: 'ai',
    featured: true,
    order: 2,
  },
  {
    title: 'Responsive Web Portfolio',
    description: 'Modern responsive portfolio website built with clean HTML, CSS, and JavaScript.',
    longDescription: 'Developed during internship at Satv Script. Focused on cross-device compatibility, performance optimization, and smooth user experience.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    category: 'web',
    featured: true,
    order: 3,
  },
  {
    title: 'Brand Design System',
    description: 'Complete visual identity and design system for marketing campaigns.',
    longDescription: 'Created during graphic design internship at Satv Script. Includes banners, social media templates, and brand guidelines ensuring consistency across all platforms.',
    tech: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma'],
    category: 'design',
    featured: false,
    order: 4,
  },
];

// GET all projects
router.get('/', async (req, res) => {
  try {
    let projects = await Project.find().sort({ order: 1, createdAt: -1 });
    if (projects.length === 0) {
      // Seed defaults
      projects = await Project.insertMany(defaultProjects);
    }
    res.json({ success: true, data: projects });
  } catch (err) {
    // Fallback to static data if no DB
    res.json({ success: true, data: defaultProjects });
  }
});

// GET featured projects
router.get('/featured', async (req, res) => {
  try {
    let projects = await Project.find({ featured: true }).sort({ order: 1 });
    res.json({ success: true, data: projects });
  } catch (err) {
    res.json({ success: true, data: defaultProjects.filter(p => p.featured) });
  }
});

module.exports = router;
