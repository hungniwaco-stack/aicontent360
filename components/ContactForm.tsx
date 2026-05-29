export function ContactForm() {
  return (
    <form className="space-y-3 rounded-2xl border border-slate-200 bg-white p-6">
      <input placeholder="Họ và tên" className="w-full rounded-lg border border-slate-300 p-3" />
      <input placeholder="Email" className="w-full rounded-lg border border-slate-300 p-3" />
      <textarea placeholder="Nhu cầu của bạn" rows={4} className="w-full rounded-lg border border-slate-300 p-3" />
      <button type="button" className="rounded-xl bg-brand-700 px-5 py-3 text-sm font-semibold text-white">Nhận tư vấn công cụ phù hợp</button>
    </form>
  );
}
