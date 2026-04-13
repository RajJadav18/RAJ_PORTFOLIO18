const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    longDescription: { type: String },
    tech: [{ type: String }],
    category: { type: String, enum: ['web', 'mobile', 'design', 'ai', 'other'], default: 'web' },
    githubUrl: { type: String },
    liveUrl: { type: String },
    imageUrl: { type: String },
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Project', projectSchema);
