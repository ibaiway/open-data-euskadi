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
      className={
        "relative px-3 py-2 -ml-3 inline-block text-slate-300" +
        (actived && "text-slate-50")
      }
    >
      <div className={"relative" + className}>{children}</div>
    </a>
  )
}
