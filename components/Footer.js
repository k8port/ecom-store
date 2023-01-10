// Create the Footer component here
import React from 'react';
import { AppBar, Toolbar, Typography } from "@mui/materials";

function Footer() {
    return (
        <AppBar position="sticky" elevation="{0}" component="footer" color="default">
            <Toolbar style={{ justifyContent: "center" }}>
                <Typography variant="caption">Copyright © 2022 - The Store</Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Footer;