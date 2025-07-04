"use client";

import { navigationMenu } from "./constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const path = usePathname();

  return (
    <div className="w-full absolute bg-white bg-opacity-25 top-0">
      <ul className="flex">
        {navigationMenu.map((menu) => (
          <li key={menu.idx} className="p-5">
            <Link href={menu.href} className="font-bold">{menu.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;