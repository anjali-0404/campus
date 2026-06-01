import { Router } from 'express';
import Company from '../models/Company';
import { authenticate, authorize } from '../middleware/auth';

const router = Router();

// Get all companies
router.get('/', async (req, res) => {
  try {
    const companies = await Company.find().sort({ createdAt: -1 });
    return res.status(200).json({
      status: 'success',
      data: { companies }
    });
  } catch (error) {
    return res.status(500).json({ status: 'error', message: 'Failed to fetch companies' });
  }
});

// Get single company
router.get('/:id', async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    if (!company) {
      return res.status(404).json({ status: 'error', message: 'Company not found' });
    }
    return res.status(200).json({
      status: 'success',
      data: { company }
    });
  } catch (error) {
    return res.status(500).json({ status: 'error', message: 'Failed to fetch company' });
  }
});

// Create company (admin only)
router.post('/', authenticate, authorize(['admin']), async (req, res) => {
  try {
    const { name, logo, website, description, industry, location } = req.body;

    if (!name || !description || !industry || !location) {
      return res.status(400).json({ status: 'error', message: 'Missing required fields' });
    }

    const company = new Company({
      name,
      logo,
      website,
      description,
      industry,
      location
    });

    await company.save();
    return res.status(201).json({
      status: 'success',
      message: 'Company created successfully',
      data: { company }
    });
  } catch (error) {
    return res.status(500).json({ status: 'error', message: 'Failed to create company' });
  }
});

// Update company (admin only)
router.put('/:id', authenticate, authorize(['admin']), async (req, res) => {
  try {
    const company = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!company) {
      return res.status(404).json({ status: 'error', message: 'Company not found' });
    }
    return res.status(200).json({
      status: 'success',
      message: 'Company updated successfully',
      data: { company }
    });
  } catch (error) {
    return res.status(500).json({ status: 'error', message: 'Failed to update company' });
  }
});

export default router;
