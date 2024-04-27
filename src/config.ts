import type { MenuItem } from "./types/layout"

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
