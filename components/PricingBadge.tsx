import { Tool } from "@/types";

export function PricingBadge({ tool }: { tool: Tool }) {
  const label = tool.isFree ? "Miễn phí" : "Trả phí";
  return <span className="rounded-full bg-ink/[0.05] px-2 py-1 text-xs font-medium text-ink/80">{label} • {tool.price}</span>;
}
