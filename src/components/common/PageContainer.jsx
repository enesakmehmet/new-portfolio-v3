import { Box, Container } from '@mui/material';
import { motion } from 'framer-motion';

const PageContainer = ({ children }) => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      sx={{
        minHeight: 'calc(100vh - 64px)',
        pt: { xs: 8, md: 12 },
        pb: { xs: 6, md: 8 },
        background: 'linear-gradient(135deg, #fff 0%, #f8f8f8 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Dekoratif elementler */}
      <Box
        sx={{
          position: 'absolute',
          top: '5%',
          right: '5%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(255,87,34,0.05) 0%, rgba(255,87,34,0) 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '5%',
          left: '5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(30,30,30,0.03) 0%, rgba(30,30,30,0) 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          zIndex: 0,
        }}
      />

      {/* Ana içerik */}
      <Container
        sx={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        {children}
      </Container>
    </Box>
  );
};

export default PageContainer; 