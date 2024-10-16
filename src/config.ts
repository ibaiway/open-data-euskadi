import type { MenuItem } from "./types/layout"

import * as configJson from "../data.config.json"
type Config = Record<
  string,
  {
    fileName: string
    url: string
    downloadUrl?: string
    source: string
  }
>

export const config: Config = configJson

export const categories = {
  EMPLEO: {
    text: "Empleo",
  },
  ENERGIA: {
    text: "Energía",
  },
}

export const menuItems: MenuItem[] = [
  {
    title: "Demografía",
    items: [
      {
        title: "Población",
        url: "/poblacion",
      },
      {
        title: "Población extranjera",
        url: "/poblacion-extranjera",
      },
    ],
  },
  {
    title: "Economía",
    items: [
      { title: "PIB", url: "/pib" },
      {
        title: "RGI",
        url: "/rgi",
      },
    ],
  },
  {
    title: "Empleo",
    items: [
      {
        title: "Desempleo",
        url: "/desempleo",
      },
    ],
  },
  {
    title: "Energía",
    items: [
      {
        title: "Potencia instalada",
        url: "/potencia-instalada",
      },
      {
        title: "Consumo eléctrico",
        url: "/consumo-electrico",
      },
    ],
  },
  {
    title: "Movilidad",
    items: [
      {
        title: "Parque automovilístico",
        url: "/parque-automovilistico",
      },
      {
        title: "Accidentes de tráfico",
        url: "/accidentes-de-trafico",
      },
    ],
  },
]
