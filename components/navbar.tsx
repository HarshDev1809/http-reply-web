"use client"

import * as React from "react"
import Link from "next/link"
import { Github, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button, buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "Usage", href: "#usage" },
  { name: "Methods", href: "#methods" },
  { name: "Config", href: "#config" },
]

export function Navbar() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-14 max-w-3xl items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-mono text-lg font-bold tracking-tight">
            http-reply
          </Link>
          <Badge variant="secondary" className="font-mono text-[10px] py-0 px-1">
            v1.x
          </Badge>
          <Badge variant="outline" className="font-mono text-[10px] py-0 px-1 text-muted-foreground border-muted-foreground/20">
            MIT
          </Badge>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/HarshDev1809/http-reply"
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
          >
            <Github className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </a>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
          >
            {mounted ? (
              resolvedTheme === "light" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )
            ) : (
              <Sun className="h-4 w-4" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
