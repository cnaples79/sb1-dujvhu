"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          KnowledgeHub
        </Link>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li>
              <Link href="/guides" className={pathname === "/guides" ? "font-bold" : ""}>
                Guides
              </Link>
            </li>
            <li>
              <Link href="/create" className={pathname === "/create" ? "font-bold" : ""}>
                Create
              </Link>
            </li>
            <li>
              <ModeToggle />
            </li>
            <li>
              <Button asChild>
                <Link href="/login">Login</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}