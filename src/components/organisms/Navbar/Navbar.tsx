import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

interface NavbarProps {

}

const Navbar: React.FC<NavbarProps> = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    المپیاد مهندسی نفت
                </Typography>
                <Button color="inherit" component={Link} to="/">
                    خانه
                </Button>
                <Button color="inherit" component={Link} to="/login">
                    ثبت‌نام
                </Button>
                <Button color="inherit" component={Link} to="/reserve">
                    بلاگ
                </Button>
                <Button color="inherit" component={Link} to="/contact">
                    ارتباط با ما
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
