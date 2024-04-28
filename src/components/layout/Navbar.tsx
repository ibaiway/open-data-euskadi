import { menuItems } from "../../config"
import MenuItem from "../ui/MenuItem"

interface NavbarItemProps {
  pathname?: string
}
export default function Navbar(props: NavbarItemProps) {
  const currentPath = props.pathname
  const currentPage = currentPath ? currentPath.replace("/", "") : ""
  console.log(currentPage)

  const menuItemsWithActive = menuItems.map((item) => {
    const segment = "page"
    const items = item.items.map((child) => {
      const segments = child.url.split("/")
      const currentSegment = segments.at(-1)

      return {
        ...child,
        actived: currentSegment === currentPage,
      }
    })

    return {
      ...item,
      items,
    }
  })

  return (
    <nav className="py-10 px-2 md:px-6">
      <div className="mb-12">
        <a href="/" className="logo">
          Open Data <span className="logo-text-gradient">EUSKADI</span>
        </a>
      </div>

      {menuItemsWithActive.map((item) => (
        <div key={item.title}>
          <h2 className="text-xs uppercase text-slate-400 tracking-widest mb-2">
            {item.title}
          </h2>
          <div className="mb-12">
            <ul>
              {item.items.map((child) => (
                <li key={child.title}>
                  <MenuItem actived={child.actived} href={child.url}>
                    {child.title}
                  </MenuItem>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </nav>
  )
}
