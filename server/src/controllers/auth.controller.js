import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';
import { supabaseAdmin } from '../config/supabase.js';

export const signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const { data, error } = await supabaseAdmin.auth.signInWithPassword({ email, password });
    if (error) return res.status(401).json({ message: error.message });
    const token = jwt.sign({ sub: data.user.id, email, role: data.user.user_metadata?.role || 'user' }, env.jwtSecret, { expiresIn: '1h' });
    res.json({ token, user: data.user });
  } catch (err) { next(err); }
};
