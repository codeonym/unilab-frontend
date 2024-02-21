import { MdDashboard, MdSettings, MdApps, MdBusiness, MdFileDownload, MdBarChart } from 'react-icons/md'
export const navLinks = [
  {
    title: "dashboard",
    href: "/dashboard",
    icon: <MdDashboard />,
  },
  {
    title: "Gestion",
    href: "/dashboard/management",
    icon: <MdApps />,
    subMenu: [
      {
        title: "Fournisseurs",
        href: "/dashboard/management/providers",
      },
      {
        title: "Rubriques",
        href: "/dashboard/management/rubrics",
      },
      {
        title: "Personnes",
        href: "/dashboard/management/people",
      },
      {
        title: "Matériels",
        href: "/dashboard/management/materials",
      },
      {
        title: "Consommables",
        href: "/dashboard/management/consumables",
      },
    ],
  },
  {
    title: "Budgets",
    href: "/dashboard/budgets",
    icon: <MdSettings />,
  },
  {
    title: "Structures",
    href: "/dashboard/structures",
    icon: <MdBusiness />,
  },
  {
    title: "Exportation",
    href: "/dashboard/export",
    icon: <MdFileDownload />,
  },
  {
    title: "Statistiques",
    href: "/dashboard/stats",
    icon: <MdBarChart />,
  },
];