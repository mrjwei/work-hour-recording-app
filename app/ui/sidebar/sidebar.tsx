"use client"

import React from "react"
import { usePathname } from "next/navigation"
import {
  HomeModernIcon,
  DocumentChartBarIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline"
import {
  HomeModernIcon as HomeModernSolidIcon,
  DocumentChartBarIcon as DocumentChartBarSolidIcon,
  Cog6ToothIcon as Cog6ToothSolidIcon
} from "@heroicons/react/24/solid"
import LinkItem from "@/app/ui/link-item/link-item"

const LINKS = [
  {
    href: "/app",
    children: "Home",
    outlineIcon: <HomeModernIcon className="w-5" />,
    solidIcon: <HomeModernSolidIcon className="w-5" />,
  },
  {
    href: "/app/records",
    children: "Records",
    outlineIcon: <DocumentChartBarIcon className="w-5" />,
    solidIcon: <DocumentChartBarSolidIcon className="w-5" />,
  },
  {href: '/app/setting', children: 'Setting', outlineIcon: <Cog6ToothIcon className="w-5" />, solidIcon: <Cog6ToothSolidIcon className="w-5" />},
]

export default function Sidebar() {
  const pathname = usePathname()
  return (
    <div className="self-stretch bg-slate-800 px-3 py-6 shadow-md fixed top-[56px] h-full z-10">
      <ul>
        {LINKS.map((l: (typeof LINKS)[0]) => {
          const { href, children, outlineIcon, solidIcon } = l
          return (
            <li key={href} className="mb-2">
              <LinkItem
                href={href}
                className={{
                  "w-full px-8 py-2 rounded-lg text-slate-800 bg-white hover:text-slate-600":
                    href === pathname,
                  "w-full px-8 py-2 rounded-lg text-white hover:bg-white/10":
                    href !== pathname,
                }}
              >
                <span className="mr-2">
                  {href === pathname ? solidIcon : outlineIcon}
                </span>
                <span>{children}</span>
              </LinkItem>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
