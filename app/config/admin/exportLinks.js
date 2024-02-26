import { singleLinks } from './singleLinks'

export const exportLinks = [
  {
    ...singleLinks.consumables,
    href: singleLinks.consumables.href + "/export",
  },
  {
    ...singleLinks.materials,
    href: singleLinks.materials.href + "/export",
  },
  {
    ...singleLinks.laboratories,
    href: singleLinks.laboratories.href + "/export",
  }
]