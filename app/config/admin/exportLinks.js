import { MdStore, MdShoppingCart } from 'react-icons/md'

export const exportLinks = [
  {
    title: "produits",
    href: "/dashboard/export?q=products",
    icon: <MdShoppingCart />
  },
  {
    title: "laboratoires",
    href: "/dashboard/export?q=laboratoires",
    icon: <MdStore />
  }
]