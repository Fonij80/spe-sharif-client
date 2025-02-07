import React from 'react';
import { useTranslation } from 'react-i18next';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

interface NavbarProps {

}

const Navbar: React.FC<NavbarProps> = () => {
    const { t } = useTranslation();

    return (
        <Box sx={{ marginBottom: 10 }}>
            <AppBar position="fixed">
                <Toolbar>
                    {/* <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton> */}
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {t("brand_name")}
                    </Typography>
                    <Box sx={{ flexGrow: 20 }} />
                    <Button color="inherit" component={Link} to="/">
                        {t("navbar.home_link")}
                    </Button>
                    <Button color="inherit" component={Link} to="/login">
                        {t("navbar.register_link")}
                    </Button>
                    <Button color="inherit" component={Link} to="/reserve">
                        {t("navbar.blog_link")}
                    </Button>
                    <Button color="inherit" component={Link} to="/contact">
                        {t("navbar.contact_link")}
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;
