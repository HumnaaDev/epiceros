"use client"

import "../styles/_global.scss"
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles"
import { baseTheme } from "@/utilities/theme"
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={new QueryClient()}>
          <MuiThemeProvider theme={baseTheme}>
            {children}
          </MuiThemeProvider>
          <ReactQueryDevtools initialIsOpen={false} position='bottom-left'/>
        </QueryClientProvider>
      </body>
    </html>
  )
}
