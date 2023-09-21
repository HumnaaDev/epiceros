"use client"

import "../styles/_global.scss"
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles"
import { baseTheme } from "@/utilities/theme"
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import StoreProvider from "@/store/storeContext"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <MuiThemeProvider theme={baseTheme}>
          <StoreProvider>
            <QueryClientProvider client={new QueryClient()}>
              {children}
            <ReactQueryDevtools initialIsOpen={false} position='bottom-left'/>
            </QueryClientProvider>
          </StoreProvider>
        </MuiThemeProvider>
      </body>
    </html>
  )
}
