import { Router, Response } from 'express';
import User from '../models/User';
import { hashPassword, comparePassword, generateToken } from '../utils/auth';
import { AuthRequest, authenticate } from '../middleware/auth';

const router = Router();

// Register
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, role = 'student' } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ status: 'error', message: 'Missing required fields' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ status: 'error', message: 'Email already registered' });
    }

    const hashedPassword = await hashPassword(password);
    const user = new User({
      name,
      email,
      password: hashedPassword,
      role,
      isVerified: false
    });

    await user.save();

    const token = generateToken(user._id.toString(), user.role);
    res.cookie('token', token, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000 });

    return res.status(201).json({
      status: 'success',
      message: 'User registered successfully',
      data: { user: { id: user._id, name: user.name, email: user.email, role: user.role }, token }
    });
  } catch (error) {
    return res.status(500).json({ status: 'error', message: 'Registration failed' });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ status: 'error', message: 'Email and password required' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ status: 'error', message: 'Invalid credentials' });
    }

    const isPasswordValid = await comparePassword(password, user.password || '');
    if (!isPasswordValid) {
      return res.status(401).json({ status: 'error', message: 'Invalid credentials' });
    }

    const token = generateToken(user._id.toString(), user.role);
    res.cookie('token', token, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000 });

    return res.status(200).json({
      status: 'success',
      message: 'Login successful',
      data: { user: { id: user._id, name: user.name, email: user.email, role: user.role }, token }
    });
  } catch (error) {
    return res.status(500).json({ status: 'error', message: 'Login failed' });
  }
});

// Logout
router.post('/logout', (req, res) => {
  res.clearCookie('token');
  return res.status(200).json({ status: 'success', message: 'Logged out successfully' });
});

// Get current user
router.get('/me', authenticate, async (req: AuthRequest, res) => {
  try {
    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(404).json({ status: 'error', message: 'User not found' });
    }

    return res.status(200).json({
      status: 'success',
      data: { user: { id: user._id, name: user.name, email: user.email, role: user.role } }
    });
  } catch (error) {
    return res.status(500).json({ status: 'error', message: 'Failed to get user' });
  }
});

export default router;
