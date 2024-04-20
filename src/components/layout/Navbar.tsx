import MenuItem from "../ui/MenuItem"

const menuItems = [
  {
    title: "Empleo",
    items: [
      {
        title: "Desempleo",
        url: "/desempleo",
      },
      {
        title: "Accidentes laborales",
        url: "/accidentes-laborales",
      },
    ],
  },
  {
    title: "Energía",
    items: [
      {
        title: "Consumo de combustible",
        url: "/consumo-de-combustible",
      },
      {
        title: "Consumo eléctrico",
        url: "/consumo-electrico",
      },
    ],
  },
  {
    title: "Demografía",
    items: [
      {
        title: "Población",
        url: "/poblacion",
      },
      {
        title: "Emigración",
        url: "/emigracion",
      },
      {
        title: "Inmigración",
        url: "/inmigracion",
      },
      {
        title: "Evolución edad en matrimonio",
        url: "/evolucion-edad-matrimonio",
      },
      {
        title: "Natalidad",
        url: "natalidad",
      },
    ],
  },
  {
    title: "Sector público",
    items: [
      {
        title: "Contratos públicos",
        url: "/contratos-publicos",
      },
    ],
  },
  {
    title: "Economía",
    items: [
      {
        title: "Evolución del IPC",
        url: "/evolucion-del-ipc",
      },
      {
        title: "Gastos e ingresos",
        url: "/gastos-ingresos",
      },
    ],
  },
]

export default function Navbar() {
  const currentPage = "page"

  const menuItemsWithActive = menuItems.map((item) => {
    const segment = "page"
    const items = item.items.map((child) => {
      const segments = child.url.split("/")
      const currentSegment = segments.at(-1)

      return {
        ...child,
        actived: currentSegment === segment,
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
          Open Data <span className="logo-text-gradient">Euskadi</span>
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
