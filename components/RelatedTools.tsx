import { tools } from "@/data/tools";
import { ToolCard } from "@/components/ToolCard";

export function RelatedTools({ currentSlug }: { currentSlug: string }) {
  const related = tools.filter((t) => t.slug !== currentSlug).slice(0, 3);
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold">Công cụ liên quan</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((tool) => <ToolCard key={tool.id} tool={tool} />)}
      </div>
    </section>
  );
}
