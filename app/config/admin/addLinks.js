import { MdStore, MdPerson, MdLaptop, MdShoppingCart } from 'react-icons/md'
import { FaCoins } from "react-icons/fa"
export const addLinks = [
  {
    title: "Rubrique",
    href: "/dashboard/management/rubrics/new",
    icon: <FaCoins />
  },
  {
    title: "Fournisseur",
    href: "/dashboard/management/suppliers/new",
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