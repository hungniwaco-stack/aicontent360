export function TableOfContents({ items }: { items: Array<string | { id: string; title: string }> }) {
  return (
    <aside className="rounded-lg border border-ink/12 bg-white p-4">
      <h3 className="font-semibold">Mục lục</h3>
      <ul className="mt-2 space-y-2 text-sm text-ink/70">
        {items.map((item) => {
          const entry = typeof item === "string" ? { id: item.toLowerCase().replaceAll(" ", "-"), title: item } : item;
          return (
            <li key={entry.id}>
              <a href={`#${entry.id}`} className="hover:text-brand-700">• {entry.title}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
