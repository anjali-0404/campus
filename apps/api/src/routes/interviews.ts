import { Router } from 'express';
import Interview from '../models/Interview';
import { authenticate, authorize, AuthRequest } from '../middleware/auth';

const router = Router();

// Schedule interview (recruiter/tpo only)
router.post('/', authenticate, authorize(['recruiter', 'tpo', 'admin']), async (req: AuthRequest, res) => {
  try {
    const { application, interview_round, interview_type, scheduled_date, scheduled_time, location, interviewer } = req.body;

    if (!application || !interview_round || !interview_type || !scheduled_date || !scheduled_time || !location || !interviewer) {
      return res.status(400).json({ status: 'error', message: 'Missing required fields' });
    }

    const interview = new Interview({
      application,
      interview_round,
      interview_type,
      scheduled_date,
      scheduled_time,
      location,
      interviewer,
      status: 'scheduled'
    });

    await interview.save();

    return res.status(201).json({
      status: 'success',
      message: 'Interview scheduled successfully',
      data: { interview }
    });
  } catch (error) {
    return res.status(500).json({ status: 'error', message: 'Failed to schedule interview' });
  }
});

// Get interviews for application
router.get('/application/:applicationId', authenticate, async (req: AuthRequest, res) => {
  try {
    const interviews = await Interview.find({ application: req.params.applicationId })
      .sort({ scheduled_date: 1 });

    return res.status(200).json({
      status: 'success',
      data: { interviews }
    });
  } catch (error) {
    return res.status(500).json({ status: 'error', message: 'Failed to fetch interviews' });
  }
});

// Update interview
router.put('/:id', authenticate, authorize(['recruiter', 'tpo', 'admin']), async (req: AuthRequest, res) => {
  try {
    const interview = await Interview.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!interview) {
      return res.status(404).json({ status: 'error', message: 'Interview not found' });
    }

    return res.status(200).json({
      status: 'success',
      message: 'Interview updated successfully',
      data: { interview }
    });
  } catch (error) {
    return res.status(500).json({ status: 'error', message: 'Failed to update interview' });
  }
});

export default router;
