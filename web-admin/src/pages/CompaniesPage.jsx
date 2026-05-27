import { DataTable } from '../components/DataTable';
import { companies } from '../data/mockData';

export function CompaniesPage() {
  return <DataTable columns={[{ key: 'id', title: 'ID' }, { key: 'nombreEmpresa', title: 'Empresa' }, { key: 'ratingEmpresa', title: 'Rating' }, { key: 'cantidadViajes', title: 'Cantidad viajes' }]} rows={companies} />;
}
