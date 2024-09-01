import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Container } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <AppBar position="static" sx={{ top: 'auto', bottom: 0, bgcolor: 'primary.dark' }}>
      <Toolbar>
        <Container
          maxWidth="md"
          sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Typography variant="body1" color="inherit">
            © 2024 Catalin
          </Typography>
          <IconButton
            color="inherit"
            aria-label="GitHub"
            component="a"
            href="https://github.com/PNM24"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </IconButton>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;