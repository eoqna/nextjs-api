interface Menu {
  idx: number;
  title: string;
  href: string;
}

export const navigationMenu: Menu[] = [
  {
    idx: 0,
    title: "Home",
    href: "/home",
  },
  {
    idx: 1,
    title: "Skill",
    href: "/aptTrade",
  },
  {
    idx: 2,
    title: "Library",
    href: "/library",
  },
];