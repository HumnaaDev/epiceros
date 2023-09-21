import { Box, type BoxProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const AuthLayout = styled(
    Box,
    {}
)<Partial<BoxProps>>(({ theme }) => ({
    '&.auth-layout': {
        display: 'flex',
        minHeight: '100vh',
        '.text-muted': {
            color: theme.palette.grey[50]
        },
        '.text-white': {
            color: theme.palette.primary.contrastText
        },
        '.text-blue': {
            color: theme.palette.primary.dark
        },
        '.list': {
            paddingLeft: 15
        },
        '.right-area': {
            padding: 40,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            flexGrow: 1,
            maxWidth: 600,
            height: '100vh',
            '.MuiFormControlLabel-label': {
                fontSize: theme.typography.subtitle2.fontSize,
                lineHeight: theme.typography.body2.lineHeight
            },
            '.error': {
                color: 'red',
                marginLeft: 4,
                fontSize: theme.typography.body2.fontSize,
            }
        },
        
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column'
        }
    }
}))