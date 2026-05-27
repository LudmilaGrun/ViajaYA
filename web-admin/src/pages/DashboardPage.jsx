import { StatCard } from '../components/StatCard';
import { dashboardStats, trips } from '../data/mockData';
import { DataTable } from '../components/DataTable';

export function DashboardPage() {
  return (
    <section className="space-y-6">
      <header className="glass p-6">
        <h2 className="text-3xl font-bold">Dashboard ViajaYA</h2>
        <p className="text-slate-300">Vista ejecutiva con métricas del ecosistema de viajes.</p>
      </header>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((s) => <StatCard key={s.label} {...s} />)}
      </div>
      <DataTable
        columns={[{ key: 'id', title: 'ID' }, { key: 'usuario', title: 'Usuario' }, { key: 'origen', title: 'Origen' }, { key: 'destino', title: 'Destino' }, { key: 'estado', title: 'Estado' }]}
        rows={trips}
      />
    </section>
  );
}
