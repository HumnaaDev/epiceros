import React from 'react';
import { Sidebar } from './sidebar/sidebar';
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles"
import { render, screen, act } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { baseTheme } from '@/utilities/theme';
import StoreProvider from "@/store/storeContext"

describe('Sidebar Component', () => {
    beforeEach(() => {
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
      });
    afterEach(() => {
        // Clean up and reset mocks after each test
        jest.clearAllMocks();
      });

    it('renders the component correctly', () => {
        //ensure label is displayed
        expect(screen.getByTestId('join-team')).toBeDefined();
    })

    it('sould handle no data from useGetTeamData', async () => {
        const mockData = null
        //mock useGetTeamData service
        jest.mock('../services/register', () => ({
            useGetTeamData: () => ({
                data: mockData
            })
        }))

        await act(async () => {}) // wait for useEffect to call setTeam
        expect(screen.queryByText('team member 1')).toBeNull();
    })
});