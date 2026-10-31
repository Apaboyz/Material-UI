import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  return (
    <AppBar position="sticky" sx={{ background: '#111113', borderBottom: '1px solid #2a2a2e', boxShadow: 'none' }}>
      <Toolbar sx={{ gap: 2 }}>
        {/* Logo */}
        <Typography
          component={Link}
          to="/"
          variant="h6"
          sx={{ fontWeight: 700, color: '#FF3C78', textDecoration: 'none', mr: 2 }}
        >
          PicsArt
        </Typography>

        {/* Nav links */}
        <Button
          component={Link}
          to="/"
          sx={{ color: location.pathname === '/' ? '#FF3C78' : '#888' }}
        >
          Explore
        </Button>
        <Button
          component={Link}
          to="/editor"
          sx={{ color: location.pathname === '/editor' ? '#FF3C78' : '#888' }}
        >
          Editor
        </Button>

        <Box sx={{ flexGrow: 1 }} />

        {/* Right side */}
        <Button variant="outlined" color="primary" size="small">
          Log In
        </Button>
        <Button variant="contained" color="primary" size="small">
          Sign Up Free
        </Button>
      </Toolbar>
    </AppBar>
  );
}
