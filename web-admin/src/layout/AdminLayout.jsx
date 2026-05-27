import { NavLink, Outlet } from 'react-router-dom';

const links = [
  ['/', 'Dashboard'],
  ['/users', 'Usuarios'],
  ['/trips', 'Viajes'],
  ['/companies', 'Empresas'],
  ['/support', 'Soporte']
];

export function AdminLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0F1F3A] to-[#172554] text-slate-100 grid md:grid-cols-[260px_1fr]">
      <aside className="border-r border-white/10 p-4 space-y-3">
        <h1 className="px-2 text-xl font-bold">ViajaYA Admin</h1>
        {links.map(([to, label]) => (
          <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => `block rounded-2xl px-4 py-3 border border-white/10 ${isActive ? 'bg-[#2563EB]/30 text-white' : 'bg-slate-900/40 text-slate-200'}`}>
            {label}
          </NavLink>
        ))}
      </aside>
      <main className="p-6"><Outlet /></main>
    </div>
  );
}
