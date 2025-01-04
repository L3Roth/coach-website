import React, { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Button, useMediaQuery, Theme } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../images/pia2.svg';
import theme from '../theme';

const options = [
  { label: 'Über mich', path: '/aboutme' },
  { label: 'Angebote', path: '/offeroverview' },
  { label: 'Blog', path: '/blog' },
  { label: 'Kontakt', path: '/contact' },
];

const ITEM_HEIGHT = 48;

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50); // Header wird geändert, wenn mehr als 50px gescrollt wird
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {/* Haupt-Header */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 1000,
          backgroundColor: theme.palette.primary.main,
          transition: 'all 0.3s ease',
          height: isScrolled ? '70px' : '150px', // Dynamische Höhe
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: { xs: 2, sm: 3, md: 4 },
          borderBottom: '2px solid theme.palette.primary.main', // Optionale Trennung
        }}
      >
        {/* Logo-Bereich */}
        <Box
          component={Link}
          to="/"
          sx={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: 'inherit',
            height: '100%',
          }}
        >
          <img
            src={Logo}
            alt="Logo"
            style={{
              height: isScrolled ? '50px' : '120px', // Verkleinerung beim Scrollen
              transition: 'height 0.3s ease',
            }}
          />
        </Box>

        {/* Menü */}
        {isMobile ? (
          <>
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open ? 'long-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
              onClick={handleClick}
              sx={{ color: '#FFF' }}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="long-menu"
              MenuListProps={{
                'aria-labelledby': 'long-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              slotProps={{
                paper: {
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: '20ch',
                  },
                },
              }}
            >
              {options.map((option) => (
                <MenuItem
                  key={option.label}
                  onClick={handleClose}
                  component={Link}
                  to={option.path}
                >
                  {option.label}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {options.map((option) => (
              <Button key={option.label} component={Link} to={option.path} sx={{ color: '#FFF' }}>
                {option.label}
              </Button>
            ))}
          </Box>
        )}
      </Box>
    </div>
  );
}
