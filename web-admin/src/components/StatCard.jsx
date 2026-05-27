export function StatCard({ label, value, delta }) {
  return (
    <article className="glass p-5">
      <p className="text-xs uppercase tracking-wider text-slate-300">{label}</p>
      <h3 className="mt-2 text-2xl font-bold text-white">{value}</h3>
      <p className="mt-2 text-sm text-emerald-400">{delta}</p>
    </article>
  );
}
