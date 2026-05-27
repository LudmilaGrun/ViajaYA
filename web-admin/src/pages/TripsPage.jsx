import { DataTable } from '../components/DataTable';
import { trips } from '../data/mockData';

export function TripsPage() {
  return <DataTable columns={[{ key: 'id', title: 'ID' }, { key: 'usuario', title: 'Usuario' }, { key: 'servicio', title: 'Servicio' }, { key: 'precio', title: 'Precio' }, { key: 'estado', title: 'Estado' }]} rows={trips} />;
}
