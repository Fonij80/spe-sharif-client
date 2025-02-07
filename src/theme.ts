import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#D74101', // Main color for buttons and active elements
            light: '#f77036', // Lighter shade of primary
            dark: '#115293', // Darker shade of primary
            contrastText: '#ffffff', // Text color on primary backgrounds
        },
        secondary: {
            main: '#D74101', // Secondary color for accents
            light: '#ff79b0', // Lighter shade of secondary
            dark: '#c60055', // Darker shade of secondary
            contrastText: '#ffffff', // Text color on secondary backgrounds
        },
        background: {
            default: '#f5f5f5', // Default background color for the app
            paper: '#ffe8de', // Background color for paper elements (cards, etc.)
        },
        text: {
            primary: '#000000', // Primary text color
            secondary: '#555555', // Secondary text color for less important text
        },
    },
    typography: {
        fontFamily: 'IranSans, Nazanin, Lotus, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
        h1: {
            fontSize: '2rem',
            fontWeight: 500,
        },
        h2: {
            fontSize: '1.5rem',
            fontWeight: 500,
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.5,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                    textTransform: 'none',
                },
                sizeLarge: {
                    fontSize: '2rem',
                },
                sizeMedium: {
                    fontSize: '1.4rem',
                },
                sizeSmall: {
                    fontSize: '1.2rem',
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                input: {
                    '&::placeholder': {
                        color: 'lightgray', // Placeholder color
                        opacity: 1,
                    },
                    fontSize: '1rem', // Set the desired font size for input fields
                },
                notchedOutline: {
                    borderColor: 'lightgray', // Optional styling for the outline
                },

            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', // Subtle shadow for cards
                },
            },
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#D74101', // Button color
            contrastText: '#FFFFFF', // Text color for buttons
        },
        secondary: {
            main: '#D74101',
            contrastText: '#FFFFFF',
        },
        background: {
            default: '#212121', // Dark mode background color
            paper: '#212121',  // Card, Item details
        },
        text: {
            primary: '#FFFFFF',  // White text for dark mode
            secondary: '#e0e0e0', // Light gray text for dark mode
        },
    },
    typography: {
        fontFamily: 'IranSans, Nazanin, Lotus, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
        h1: {
            fontSize: '2rem',
            fontWeight: 500,
        },
        h2: {
            fontSize: '1.5rem',
            fontWeight: 500,
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.5,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                    textTransform: 'none',
                },
                sizeLarge: {
                    fontSize: '2rem',
                },
                sizeMedium: {
                    fontSize: '1.4rem',
                },
                sizeSmall: {
                    fontSize: '1.2rem',
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                input: {
                    '&::placeholder': {
                        color: 'lightgray', // Change this to your desired placeholder color for dark mode
                        opacity: 1,
                    },
                    fontSize: '1rem', // Set the desired font size for input fields
                },
                notchedOutline: {
                    borderColor: 'lightgray', // Optional styling for the outline
                },
            },
        },
    },
});
