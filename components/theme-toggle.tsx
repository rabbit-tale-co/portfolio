"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false)

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          onContextMenu={(e) => {
            e.preventDefault()
            setIsDropdownOpen(true)
          }}
          className="relative"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="font-mono">
        <DropdownMenuItem
          onClick={() => {
            setTheme("light")
            setIsDropdownOpen(false)
          }}
          className="text-xs uppercase"
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            setTheme("dark")
            setIsDropdownOpen(false)
          }}
          className="text-xs uppercase"
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            setTheme("system")
            setIsDropdownOpen(false)
          }}
          className="text-xs uppercase"
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
