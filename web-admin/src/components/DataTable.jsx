export function DataTable({ columns, rows }) {
  return (
    <div className="glass overflow-hidden">
      <table className="min-w-full text-sm">
        <thead className="bg-white/5 text-left text-slate-300">
          <tr>{columns.map((c) => <th key={c.key} className="px-4 py-3 font-semibold">{c.title}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-white/10">
              {columns.map((c) => <td key={c.key} className="px-4 py-3 text-slate-100">{row[c.key]}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
