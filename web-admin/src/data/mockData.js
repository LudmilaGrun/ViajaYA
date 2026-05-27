export const dashboardStats = [
  { label: 'Usuarios activos', value: '12,480', delta: '+12%' },
  { label: 'Viajes hoy', value: '1,342', delta: '+8%' },
  { label: 'Empresas', value: '96', delta: '+3%' },
  { label: 'Ingresos (sim)', value: '$84,230', delta: '+14%' }
];

export const users = [
  { id: 1, nombre: 'María López', email: 'maria@correo.com', telefono: '+54 11 5555-1111', fechaRegistro: '2026-05-20' },
  { id: 2, nombre: 'Juan Pérez', email: 'juan@correo.com', telefono: '+54 11 5555-2222', fechaRegistro: '2026-05-22' }
];

export const trips = [
  { id: 1001, usuario: 'María López', origen: 'Av. Corrientes 1000', destino: 'Aeroparque', servicio: 'Premium', estado: 'finalizado', precio: 12450 },
  { id: 1002, usuario: 'Juan Pérez', origen: 'Callao 250', destino: 'Palermo Soho', servicio: 'Económico', estado: 'en_progreso', precio: 6250 }
];

export const companies = [
  { id: 1, nombreEmpresa: 'MoveFast', ratingEmpresa: 4.8, cantidadViajes: 4932 },
  { id: 2, nombreEmpresa: 'UrbanGo', ratingEmpresa: 4.5, cantidadViajes: 3210 }
];
