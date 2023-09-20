import { Box, type BoxProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const LeftSideImage = '/left-bg-img.svg' 

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
        '.left-area': {
            maxWidth: 250,
            width: '100%',
            padding: 40,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: theme.palette.primary.main,
            flexShrink: 0,
            backgroundImage: `url(${LeftSideImage})`,
            backgroundPosition: 'center center',
            backgroundSize: 'contain',
            [theme.breakpoints.down('md')]: {
                maxWidth: '100%'
            }
        },
        '.right-area': {
            padding: 40,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            flexGrow: 1,
            maxWidth: 600,
            '.MuiFormControlLabel-label': {
                fontSize: theme.typography.body2.fontSize,
                lineHeight: theme.typography.body2.lineHeight
            }
        },
        
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column'
        }
    }
}))