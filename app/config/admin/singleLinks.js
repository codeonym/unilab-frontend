import { MdDashboard, MdApps, MdStore, MdSearch, MdOutlineChecklistRtl, MdFileDownload, MdBusiness, MdPerson, MdLaptop, MdShoppingCart } from 'react-icons/md'
import { FaCoins } from "react-icons/fa"

export const singleLinks = {
  rubrics: {
    title: "Rubrique",
    href: "/dashboard/management/rubrics",
    icon: <FaCoins />,
    image: "/assets/images/rubrics.webp"
  },
  suppliers: {
    title: "Fournisseur",
    href: "/dashboard/management/suppliers",
    icon: <MdStore />,
    image: "/assets/images/suppliers.webp"
  },
  users: {
    title: "Personne",
    href: "/dashboard/management/users",
    icon: <MdPerson />,
    image: "/assets/images/users.webp"
  },
  materials: {
    title: "Matériel",
    href: "/dashboard/management/materials",
    icon: <MdLaptop />,
    image: "/assets/images/materials.webp"
  },
  consumables: {
    title: "Consommable",
    href: "/dashboard/management/consumables",
    icon: <MdShoppingCart />,
    image: "/assets/images/consumables.webp"
  },
  laboratories: {
    title: "Laboratoires",
    href: "/dashboard/laboratories",
    icon: <MdBusiness />,
    image: "/assets/images/laboratories.webp"
  },
  export: {
    title: "Exporter",
    href: "/dashboard/export",
    icon: <MdFileDownload />
  },
  orders: {
    title: "Demandes",
    href: "/dashboard/orders",
    icon: <MdOutlineChecklistRtl />,
  },
  search: {
    title: "Rechercher",
    href: "/dashboard/search",
    icon: <MdSearch />,
  },
  dashboard: {
    title: "dashboard",
    href: "/dashboard",
    icon: <MdDashboard />,
  },
  management: {
    title: "Gestion",
    href: "/dashboard/management",
    icon: <MdApps />,
  }
}