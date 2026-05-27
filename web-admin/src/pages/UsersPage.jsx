import { DataTable } from '../components/DataTable';
import { users } from '../data/mockData';

export function UsersPage() {
  return <DataTable columns={[{ key: 'id', title: 'ID' }, { key: 'nombre', title: 'Nombre' }, { key: 'email', title: 'Email' }, { key: 'telefono', title: 'Teléfono' }, { key: 'fechaRegistro', title: 'Registro' }]} rows={users} />;
}
