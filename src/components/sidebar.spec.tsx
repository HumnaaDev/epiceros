import React from 'react';
import { Sidebar } from './sidebar/sidebar';
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles"
import { render, screen, fireEvent } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { baseTheme } from '@/utilities/theme';
import StoreProvider from "@/store/storeContext"

describe('Sidebar Component', () => {
    it('renders the component correctly', () => {
    let queryClient
    queryClient = new QueryClient()
    render(
        <QueryClientProvider client={queryClient}>
            <MuiThemeProvider theme={baseTheme}>
                <StoreProvider>
                    <Sidebar />
                </StoreProvider>
            </MuiThemeProvider>
        </QueryClientProvider>  
    )
    expect(screen.getByLabelText('Join the team')).toBeDefined();
    })
});