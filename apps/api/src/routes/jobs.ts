import { Router } from 'express';
import Job from '../models/Job';
import { authenticate, authorize, AuthRequest } from '../middleware/auth';

const router = Router();

// Get all jobs
router.get('/', async (req, res) => {
  try {
    const { status = 'open', company } = req.query;
    const filter: any = {};
    
    if (status) filter.status = status;
    if (company) filter.company = company;

    const jobs = await Job.find(filter)
      .populate('company')
      .sort({ createdAt: -1 });

    return res.status(200).json({
      status: 'success',
      data: { jobs }
    });
  } catch (error) {
    return res.status(500).json({ status: 'error', message: 'Failed to fetch jobs' });
  }
});

// Get single job
router.get('/:id', async (req, res) => {
  try {
    const job = await Job.findById(req.params.id).populate('company');
    if (!job) {
      return res.status(404).json({ status: 'error', message: 'Job not found' });
    }

    return res.status(200).json({
      status: 'success',
      data: { job }
    });
  } catch (error) {
    return res.status(500).json({ status: 'error', message: 'Failed to fetch job' });
  }
});

// Create job (recruiter only)
router.post('/', authenticate, authorize(['recruiter', 'admin']), async (req: AuthRequest, res) => {
  try {
    const { title, description, company, salary_min, salary_max, location, job_type, qualifications, skills_required, deadline } = req.body;

    if (!title || !description || !company || !salary_min || !salary_max || !location || !job_type || !deadline) {
      return res.status(400).json({ status: 'error', message: 'Missing required fields' });
    }

    const job = new Job({
      title,
      description,
      company,
      salary_min,
      salary_max,
      location,
      job_type,
      qualifications: qualifications || [],
      skills_required: skills_required || [],
      deadline,
      status: 'open'
    });

    await job.save();

    return res.status(201).json({
      status: 'success',
      message: 'Job created successfully',
      data: { job }
    });
  } catch (error) {
    return res.status(500).json({ status: 'error', message: 'Failed to create job' });
  }
});

// Update job (recruiter only)
router.put('/:id', authenticate, authorize(['recruiter', 'admin']), async (req: AuthRequest, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!job) {
      return res.status(404).json({ status: 'error', message: 'Job not found' });
    }

    return res.status(200).json({
      status: 'success',
      message: 'Job updated successfully',
      data: { job }
    });
  } catch (error) {
    return res.status(500).json({ status: 'error', message: 'Failed to update job' });
  }
});

// Delete job (recruiter only)
router.delete('/:id', authenticate, authorize(['recruiter', 'admin']), async (req: AuthRequest, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    if (!job) {
      return res.status(404).json({ status: 'error', message: 'Job not found' });
    }

    return res.status(200).json({
      status: 'success',
      message: 'Job deleted successfully'
    });
  } catch (error) {
    return res.status(500).json({ status: 'error', message: 'Failed to delete job' });
  }
});

export default router;
