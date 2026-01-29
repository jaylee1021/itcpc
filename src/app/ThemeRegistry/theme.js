import { createTheme } from '@mui/material/styles';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const theme = createTheme({
    typography: {
        fontFamily: poppins.style.fontFamily,
    },
    palette: {
        mode: 'light',
        // Customized palette to match the church website if needed
        primary: {
            main: '#1976d2',
        },
    },
});

export default theme;
