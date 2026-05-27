import { Navigate, Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

const shellBg = 'min-h-screen bg-gradient-to-br from-[#0B1120] via-[#0F1F3A] to-[#172554] text-slate-100';

function AuthCard({ title, subtitle, children }) {
  return (
    <div className="w-full max-w-md glass p-8">
      <h1 className="text-3xl font-bold tracking-tight text-white">{title}</h1>
      <p className="mt-2 text-sm text-slate-300">{subtitle}</p>
      <div className="mt-6 space-y-4">{children}</div>
    </div>
  );
}

function Input({ label, type = 'text', placeholder, value, onChange }) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-medium text-slate-200">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-white/15 bg-slate-950/50 px-4 py-3 text-slate-100 outline-none transition focus:border-[#38BDF8] focus:ring-2 focus:ring-[#38BDF8]/30"
      />
    </label>
  );
}

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={`${shellBg} grid place-items-center p-6`}>
      <AuthCard title="Iniciar sesión" subtitle="Bienvenido a ViajaYA Admin">
        <Input label="Correo" type="email" placeholder="admin@viajaya.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input label="Contraseña" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="w-full rounded-xl bg-gradient-to-r from-[#2563EB] to-[#22C55E] px-4 py-3 font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:opacity-90">
          Entrar
        </button>
        <p className="text-center text-sm text-slate-300">
          ¿No tienes cuenta?{' '}
          <Link to="/register" className="font-semibold text-[#38BDF8] hover:underline">Crear cuenta</Link>
        </p>
      </AuthCard>
    </div>
  );
}

function RegisterPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
  const onChange = (k) => (e) => setForm((prev) => ({ ...prev, [k]: e.target.value }));

  return (
    <div className={`${shellBg} grid place-items-center p-6`}>
      <AuthCard title="Crear cuenta" subtitle="Configura tu acceso al panel de ViajaYA">
        <Input label="Nombre completo" placeholder="Ana Pérez" value={form.name} onChange={onChange('name')} />
        <Input label="Correo" type="email" placeholder="ana@viajaya.com" value={form.email} onChange={onChange('email')} />
        <Input label="Contraseña" type="password" placeholder="Mínimo 8 caracteres" value={form.password} onChange={onChange('password')} />
        <Input label="Confirmar contraseña" type="password" placeholder="Repite tu contraseña" value={form.confirm} onChange={onChange('confirm')} />
        <button className="w-full rounded-xl bg-gradient-to-r from-[#2563EB] to-[#22C55E] px-4 py-3 font-semibold text-white shadow-lg shadow-green-500/30 transition hover:opacity-90">
          Registrarme
        </button>
        <p className="text-center text-sm text-slate-300">
          ¿Ya tienes cuenta?{' '}
          <Link to="/login" className="font-semibold text-[#38BDF8] hover:underline">Iniciar sesión</Link>
        </p>
      </AuthCard>
    </div>
  );
}

export const App = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/login" replace />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
  </Routes>
);
