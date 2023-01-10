// Create the Header component here
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <AppBar position="static">
            <Toolbar className='toolbar'>
                <Typography variant="overline">The Store</Typography>
                <div className='nav-links'>
                    <Link className='link' to="/shop">
                        <Typography variant="overline">Cart</Typography>
                    </Link>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Header;