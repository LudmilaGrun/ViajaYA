import { Link, Route, Routes } from 'react-router-dom';

const Dashboard = () => <div className='glass p-6'><h1 className='text-2xl font-bold'>Dashboard ViajaYA</h1><p>Métricas, usuarios, reservas y revenue.</p></div>;
const Crud = ({ name }) => <div className='glass p-6'><h2 className='text-xl'>{name}</h2><p>Tabla, filtros, buscador, CRUD.</p></div>;

export const App = () => (
  <div className='min-h-screen grid grid-cols-[260px_1fr]'>
    <aside className='p-4 border-r border-white/10 space-y-3'>
      {['/','/users','/trips','/reservations','/support'].map((p) => <Link key={p} to={p} className='block glass p-3'>{p === '/' ? 'Dashboard' : p.slice(1)}</Link>)}
    </aside>
    <main className='p-6'>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/users' element={<Crud name='Usuarios'/>}/>
        <Route path='/trips' element={<Crud name='Viajes'/>}/>
        <Route path='/reservations' element={<Crud name='Reservas'/>}/>
        <Route path='/support' element={<Crud name='Soporte'/>}/>
      </Routes>
    </main>
  </div>
);
