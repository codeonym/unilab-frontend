import { singleLinks } from "./singleLinks";
import { managementLinks } from "./managementLinks";

export const navLinks = [
  singleLinks.dashboard,
  singleLinks.search,
  singleLinks.orders,
  singleLinks.laboratories,
  {
    ...singleLinks.management,
    subMenu: managementLinks
  },
  singleLinks.export
];