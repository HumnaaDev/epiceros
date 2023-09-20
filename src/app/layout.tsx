"use client"

import "../styles/_global.scss"
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles"
import { baseTheme } from "@/utilities/theme"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <MuiThemeProvider theme={baseTheme}>
          {children}
        </MuiThemeProvider>
      </body>
    </html>
  )
}
