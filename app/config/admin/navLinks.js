import { MdDashboard, MdOutlineChecklistRtl, MdSettings, MdApps, MdBusiness, MdFileDownload, MdSearch } from 'react-icons/md'
import { managementLinks } from './managementLinks'
export const navLinks = [
  {
    title: "dashboard",
    href: "/dashboard",
    icon: <MdDashboard />,
  },
  {
    title: "Rechercher",
    href: "/dashboard/search",
    icon: <MdSearch />,
  },
  {
    title: "Demandes",
    href: "/dashboard/orders",
    icon: <MdOutlineChecklistRtl />,
  },
  {
    title: "Gestion",
    href: "/dashboard/management",
    icon: <MdApps />,
    subMenu: managementLinks
  },
  {
    title: "Budgets",
    href: "/dashboard/budgets",
    icon: <MdSettings />,
  },
  {
    title: "laboratoires",
    href: "/dashboard/laboratories",
    icon: <MdBusiness />,
  },
  {
    title: "Exportation",
    href: "/dashboard/export",
    icon: <MdFileDownload />,
  }
];