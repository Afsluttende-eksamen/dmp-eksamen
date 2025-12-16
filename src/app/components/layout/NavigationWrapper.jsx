"use client";

import { usePathname } from "next/navigation";
import Navigation from "./Navigation";

export default function NavigationWrapper() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isKoncerter = pathname === "/koncerter";

  if (isHome || isKoncerter) return null;

  return <Navigation />;
}
