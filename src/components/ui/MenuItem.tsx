import clsx from "clsx"
import type { ReactNode } from "preact/compat"

interface MenuItemProps {
  className?: string
  children?: ReactNode
  href?: string
  actived?: boolean
}

export default function MenuItem(props: MenuItemProps) {
  const { className, children, href, actived } = props

  return (
    <a
      href={href}
      className={clsx(
        "relative px-3 py-2 -ml-3 inline-block text-slate-300",
        actived && "text-slate-50"
      )}
    >
      {actived && (
        <span className="absolute inset-0 shadow-sm bg-slate-800 rounded-md border border-slate-700" />
      )}
      <div className={clsx("relative", className)}>{children}</div>
    </a>
  )
}
