import { supabaseAdmin } from '../config/supabase.js';

export const listTrips = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, search = '' } = req.query;
    const from = (page - 1) * limit;
    const to = from + Number(limit) - 1;

    let query = supabaseAdmin.from('trips').select('*, destinations(*)', { count: 'exact' }).range(from, to);
    if (search) query = query.ilike('title', `%${search}%`);

    const { data, error, count } = await query;
    if (error) throw error;
    res.json({ data, meta: { page: Number(page), limit: Number(limit), total: count } });
  } catch (err) { next(err); }
};
