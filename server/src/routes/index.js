import { Router } from 'express';
import { signIn } from '../controllers/auth.controller.js';
import { listTrips } from '../controllers/trips.controller.js';
import { authRequired } from '../middleware/auth.js';

const router = Router();
router.post('/auth/login', signIn);
router.get('/trips', listTrips);
router.get('/reservations', authRequired, (_req, res) => res.json({ data: [] }));
router.get('/favorites', authRequired, (_req, res) => res.json({ data: [] }));
router.get('/notifications', authRequired, (_req, res) => res.json({ data: [] }));
router.get('/support/tickets', authRequired, (_req, res) => res.json({ data: [] }));
router.get('/admin/stats', authRequired, (_req, res) => res.json({ users: 0, reservations: 0, revenue: 0 }));

export default router;
