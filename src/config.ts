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
    ],
  },
  {
    title: "Economía",
    items: [
      {
        title: "RGI",
        url: "/rgi",
      },
    ],
  },
  {
    title: "Posts",
    items: [
      {
        title: "post1",
        url: "/post1",
      },
      {
        title: "post2",
        url: "/post2",
      },
    ],
  },
]
