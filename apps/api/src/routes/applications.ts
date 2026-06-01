import { Router } from 'express';
import Application from '../models/Application';
import Job from '../models/Job';
import { authenticate, authorize, AuthRequest } from '../middleware/auth';

const router = Router();

// Apply for a job
router.post('/', authenticate, authorize(['student']), async (req: AuthRequest, res) => {
  try {
    const { job, resume_url, cover_letter } = req.body;

    if (!job || !resume_url) {
      return res.status(400).json({ status: 'error', message: 'Missing required fields' });
    }

    const jobExists = await Job.findById(job);
    if (!jobExists) {
      return res.status(404).json({ status: 'error', message: 'Job not found' });
    }

    const existingApplication = await Application.findOne({
      student: req.user.userId,
      job
    });

    if (existingApplication) {
      return res.status(400).json({ status: 'error', message: 'Already applied for this job' });
    }

    const application = new Application({
      student: req.user.userId,
      job,
      resume_url,
      cover_letter,
      status: 'applied'
    });

    await application.save();

    return res.status(201).json({
      status: 'success',
      message: 'Application submitted successfully',
      data: { application }
    });
  } catch (error) {
    return res.status(500).json({ status: 'error', message: 'Failed to submit application' });
  }
});

// Get all applications for a student
router.get('/student/me', authenticate, authorize(['student']), async (req: AuthRequest, res) => {
  try {
    const applications = await Application.find({ student: req.user.userId })
      .populate('job')
      .populate('student')
      .sort({ applied_at: -1 });

    return res.status(200).json({
      status: 'success',
      data: { applications }
    });
  } catch (error) {
    return res.status(500).json({ status: 'error', message: 'Failed to fetch applications' });
  }
});

// Get all applications for a job (recruiter)
router.get('/job/:jobId', authenticate, authorize(['recruiter', 'admin', 'tpo']), async (req: AuthRequest, res) => {
  try {
    const applications = await Application.find({ job: req.params.jobId })
      .populate('student')
      .sort({ applied_at: -1 });

    return res.status(200).json({
      status: 'success',
      data: { applications }
    });
  } catch (error) {
    return res.status(500).json({ status: 'error', message: 'Failed to fetch applications' });
  }
});

// Update application status
router.put('/:id', authenticate, authorize(['recruiter', 'admin', 'tpo']), async (req: AuthRequest, res) => {
  try {
    const { status } = req.body;

    if (!['applied', 'shortlisted', 'rejected', 'accepted'].includes(status)) {
      return res.status(400).json({ status: 'error', message: 'Invalid status' });
    }

    const application = await Application.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!application) {
      return res.status(404).json({ status: 'error', message: 'Application not found' });
    }

    return res.status(200).json({
      status: 'success',
      message: 'Application status updated',
      data: { application }
    });
  } catch (error) {
    return res.status(500).json({ status: 'error', message: 'Failed to update application' });
  }
});

export default router;
