import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';
import { requireSupabase, hasSupabase } from '../config/supabase.js';

export const signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!hasSupabase) {
      const token = jwt.sign({ sub: 'dev-user', email: email || 'dev@viajaya.local', role: 'admin' }, env.jwtSecret, { expiresIn: '1h' });
      return res.json({ token, user: { id: 'dev-user', email: email || 'dev@viajaya.local' }, mode: 'mock-no-supabase' });
    }

    const supabaseAdmin = requireSupabase();
    const { data, error } = await supabaseAdmin.auth.signInWithPassword({ email, password });
    if (error) return res.status(401).json({ message: error.message });
    const token = jwt.sign({ sub: data.user.id, email, role: data.user.user_metadata?.role || 'user' }, env.jwtSecret, { expiresIn: '1h' });
    res.json({ token, user: data.user });
  } catch (err) { next(err); }
};
