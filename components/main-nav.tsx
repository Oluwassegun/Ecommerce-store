"use client"

import {usePathname} from "next/navigation"
import { Category } from "@/types"
import Link from "next/link"
import { cn } from "@/libs/utils"

interface MainNavProps {
  data: Category[]
}

const MainNav: React.FC<MainNavProps> = ({data}) => {

  const pathname = usePathname()

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`
  }));

  return (
    <nav className="flex space-x-4 mx-6 items-center lg:space-x-6">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(`text-sm font-medium transition-colors hover:text-black`,
          route.active ? 'text-black' : 'text-neutral-500'
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  )
}

export default MainNav