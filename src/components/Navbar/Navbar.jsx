import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = [
  { title: 'Ana Sayfa', path: '/' },
  { title: 'Hakkımda', path: '/about' },
  { title: 'Projeler', path: '/projects' },
  { title: 'İletişim', path: '/contact' },
];

const menuVariants = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
    },
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                color: '#1E1E1E',
                textDecoration: 'none',
                fontFamily: "'Playfair Display', serif",
                fontWeight: 600,
                fontSize: '1.5rem',
              }}
            >
              𝓔𝓷𝓮𝓼 𝓐𝓴𝓶𝓮𝓱𝓶𝓮𝓽

            </Typography>

            <IconButton
              onClick={() => setIsOpen(!isOpen)}
              sx={{
                color: '#1E1E1E',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                borderRadius: '12px',
                p: 1,
                '&:hover': {
                  bgcolor: 'rgba(0, 0, 0, 0.03)',
                },
              }}
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={menuVariants}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(10px)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                textAlign: 'center',
              }}
            >
              {menuItems.map((item) => (
                <motion.div
                  key={item.path}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Typography
                    component={Link}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    sx={{
                      color: '#1E1E1E',
                      textDecoration: 'none',
                      fontSize: '2rem',
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 500,
                      position: 'relative',
                      '&:hover': {
                        color: '#FF5722',
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: '0%',
                        height: '2px',
                        bottom: -4,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: '#FF5722',
                        transition: 'width 0.3s ease',
                      },
                      '&:hover::after': {
                        width: '100%',
                      },
                    }}
                  >
                    {item.title}
                  </Typography>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar; 