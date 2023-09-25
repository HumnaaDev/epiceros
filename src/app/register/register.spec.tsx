import React from 'react';
import Register from './page';
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles"
import { render, screen, fireEvent } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { baseTheme } from '../../utilities/theme';
import StoreProvider from "../../store/storeContext"

describe('Register Component', () => {
    it('renders the component correctly', () => {
    let queryClient
    queryClient = new QueryClient()
    render(
        <QueryClientProvider client={queryClient}>
            <MuiThemeProvider theme={baseTheme}>
                <StoreProvider>
                    <Register />
                </StoreProvider>
            </MuiThemeProvider>
        </QueryClientProvider>  
    )
    expect(screen.getByLabelText('Name')).toBeDefined();
    expect(screen.getByLabelText('Email')).toBeDefined();
    expect(screen.getByLabelText('I agree to the terms')).toBeDefined();
    expect(screen.getByRole('button', { name: "I'm in, sign me up!" })).toBeDefined();
    })

    it('displays error messages for invalid input',
    async () => {
        let queryClient
        queryClient = new QueryClient()
        render(
            <QueryClientProvider client={queryClient}>
                <MuiThemeProvider theme={baseTheme}>
                    <StoreProvider>
                        <Register />
                    </StoreProvider>
                </MuiThemeProvider>
            </QueryClientProvider>  
        );
        // Submit the form without filling in any fields
        fireEvent.click(screen.getByText("I'm in, sign me up!"));
        // Ensure error messages are displayed
        expect(await screen.findByText('name is required.')).toBeDefined();
        expect(await screen.findByText('email is required.')).toBeDefined();
        // Fill in invalid email format
        fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'invalid-email' } });
        fireEvent.click(screen.getByText("I'm in, sign me up!"));
        // Ensure error message for invalid email format
        expect(await screen.findByText('valid email is required.')).toBeDefined();
    });

    it('submits the form with valid input', () => {
        let queryClient
        queryClient = new QueryClient()
        render(
            <QueryClientProvider client={queryClient}>
                <MuiThemeProvider theme={baseTheme}>
                    <StoreProvider>
                        <Register />
                    </StoreProvider>
                </MuiThemeProvider>
            </QueryClientProvider>  
        );
        // Fill in valid input
        fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'John Doe' } });
        fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'john@example.com' } });
        fireEvent.click(screen.getByLabelText('I agree to the terms'));
        // Submit the form
        fireEvent.click(screen.getByText("I'm in, sign me up!"));
    });
});