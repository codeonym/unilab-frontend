import { singleLinks } from './singleLinks'
export const addLinks = [
  singleLinks.rubrics,
  singleLinks.suppliers,
  singleLinks.users,
  singleLinks.materials,
  singleLinks.consumables
].map(link => ({
  ...link,
  href: link.href+ "/new"
}))