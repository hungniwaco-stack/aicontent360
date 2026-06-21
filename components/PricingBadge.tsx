import { Tool } from "@/types";

export function PricingBadge({ tool }: { tool: Tool }) {
  const label = tool.isFree ? "Miễn phí" : "Trả phí";
  return <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">{label} • {tool.price}</span>;
}
