import { MdAdd, MdStore, MdPerson, MdLaptop, MdShoppingCart } from 'react-icons/md'

export const addLinks = [
  {
    title: "Rubrique",
    href: "/dashboard/management/rubrics/new",
    icon: <MdAdd />
  },
  {
    title: "Fournisseur",
    href: "/dashboard/management/providers/new",
    icon: <MdStore />
  },
  {
    title: "Personne",
    href: "/dashboard/management/users/new",
    icon: <MdPerson />
  },
  {
    title: "Matériel",
    href: "/dashboard/management/materials/new",
    icon: <MdLaptop />
  },
  {
    title: "Consommable",
    href: "/dashboard/management/consumables/new",
    icon: <MdShoppingCart />
  }
]