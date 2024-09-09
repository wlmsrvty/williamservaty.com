"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <>
      {(window.localStorage.theme &&
        window.localStorage.theme === "light") && (
        <Button
          variant="outline"
          size="icon"
          className="dark:bg-neutral-950 dark:border-neutral-800 dark:hover:border-neutral-500
          shadow-lg dark:shadow-neutral-800/50"
          onClick={() => setTheme("dark")}
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        </Button>
      )}

      {(!window.localStorage.theme || window.localStorage.theme === "dark") && (
        <Button
          variant="outline"
          size="icon"
          className="dark:bg-neutral-950 dark:border-neutral-800 dark:hover:border-neutral-500
          shadow-lg dark:shadow-neutral-800/50"
          onClick={() => setTheme("light")}
        >
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      )}
    </>
  );
}

export default ModeToggle;
