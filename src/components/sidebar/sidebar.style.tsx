import { Box, type BoxProps } from "@mui/material";
import { styled } from "@mui/material/styles";

import LeftSideImage from '../../../public/assets/images/left-bg-img.svg' 

export const SidebarWrapper = styled(
    Box,
    {}
)<Partial<BoxProps>>(({ theme }) => ({
    '&.left-area': {
        maxWidth: 250,
        width: '100%',
        padding: 40,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: theme.palette.primary.main,
        flexShrink: 0,
        backgroundImage: `url(${LeftSideImage.src})`,
        backgroundPosition: 'center center',
        backgroundSize: 'contain',
        [theme.breakpoints.down('md')]: {
            maxWidth: '100%'
        }
    }
}))