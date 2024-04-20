import type { MenuItem } from "../../types/layout"

function getRest({
  cells,
  columns,
}: {
  cells: number
  columns: number
}): number {
  const rest = cells % columns

  if (rest === 0) return 0

  return columns - rest
}

export default function GridMenu({ items }: { items: MenuItem[] }) {
  const columns = 3
  const rest = getRest({ cells: items.length, columns })

  return (
    <div className="grid gap-[1px] grid-cols-2 md:grid-cols-3 w-full max-w-[980px] bg-slate-700 mx-auto shadow-slate-950 shadow-[inset_0_0_250px]">
      {items.map((item) => (
        <div key={item.title} className="bg-slate-950 p-4 md:p-8 min-h-48">
          <h2 className="text-xs uppercase text-slate-400 tracking-widest mb-4">
            {item.title}
          </h2>
          <div>
            <ul>
              {item.items.map((child) => (
                <li key={child.title} className="py-1">
                  <a href={child.url}>{child.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      {Array.from(Array.from({ length: rest })).map((_, index) => (
        <div key={index} className="bg-slate-950 min-h-48" />
      ))}
    </div>
  )
}
