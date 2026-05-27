import { requireSupabase, hasSupabase } from '../config/supabase.js';

const mockTrips = [
  { id: 't1', title: 'Traslado Aeropuerto Premium', price: 12000, destinations: { name: 'Aeroparque' } },
  { id: 't2', title: 'City Tour Express', price: 8500, destinations: { name: 'Centro' } }
];

export const listTrips = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, search = '' } = req.query;

    if (!hasSupabase) {
      const filtered = mockTrips.filter((t) => t.title.toLowerCase().includes(String(search).toLowerCase()));
      return res.json({ data: filtered, meta: { page: Number(page), limit: Number(limit), total: filtered.length, mode: 'mock-no-supabase' } });
    }

    const supabaseAdmin = requireSupabase();
    const from = (page - 1) * limit;
    const to = from + Number(limit) - 1;

    let query = supabaseAdmin.from('trips').select('*, destinations(*)', { count: 'exact' }).range(from, to);
    if (search) query = query.ilike('title', `%${search}%`);

    const { data, error, count } = await query;
    if (error) throw error;
    res.json({ data, meta: { page: Number(page), limit: Number(limit), total: count } });
  } catch (err) { next(err); }
};
