import type React from "react"

import { ThemeProvider as NextThemeProvider } from "next-themes"
import { ThemeProvider } from "./ThemeContext"

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <ThemeProvider>{children}</ThemeProvider>
    </NextThemeProvider>
  )
}
