import { Box, Container, Typography, Button, Grid, Stack, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import BlogIcon from '@mui/icons-material/RssFeed';
import CreateIcon from '@mui/icons-material/Create';
import CodeIcon from '@mui/icons-material/Code';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import VideocamIcon from '@mui/icons-material/Videocam';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ArticleIcon from '@mui/icons-material/Article';
import PeopleIcon from '@mui/icons-material/People';
import developerGif from '../../assets/images/1_ZSVmWGcc1weENb0ShawWxw.gif';

const services = [
  {
    icon: <CreateIcon sx={{ fontSize: 40 }} />,
    title: 'İçerik Yazarlığı',
    description: 'SEO odaklı, etkileyici içerikler oluşturuyorum.',
  },
  {
    icon: <EmailIcon sx={{ fontSize: 40 }} />,
    title: 'E-posta Pazarlama',
    description: 'Etkili e-posta kampanyaları tasarlıyorum.',
  },
  {
    icon: <CodeIcon sx={{ fontSize: 40 }} />,
    title: 'Web Tasarım',
    description: 'Modern ve responsive web siteleri geliştiriyorum.',
  },
  {
    icon: <CameraAltIcon sx={{ fontSize: 40 }} />,
    title: 'Fotoğrafçılık',
    description: 'Profesyonel fotoğraf çekimleri yapıyorum.',
  },
  {
    icon: <VideocamIcon sx={{ fontSize: 40 }} />,
    title: 'Video Düzenleme',
    description: 'Etkileyici video içerikleri oluşturuyorum.',
  },
  {
    icon: <MenuBookIcon sx={{ fontSize: 40 }} />,
    title: 'E-kitap Yazarlığı',
    description: 'Kapsamlı ve bilgilendirici e-kitaplar yazıyorum.',
  },
  {
    icon: <ArticleIcon sx={{ fontSize: 40 }} />,
    title: 'Blog Yazarlığı',
    description: 'İlgi çekici blog yazıları oluşturuyorum.',
  },
];

const Home = () => {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Ziyaretçi sayısını localStorage'dan al
    const count = parseInt(localStorage.getItem('visitorCount') || '0');
    // Yeni ziyaretçi sayısını hesapla
    const newCount = count + 1;
    // localStorage'a kaydet
    localStorage.setItem('visitorCount', newCount.toString());
    // State'i güncelle
    setVisitorCount(newCount);
  }, []);

  return (
    <>
      {/* Hero Bölümü */}
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
          color: '#ffffff',
        }}
      >
        {/* Yeni arka plan efektleri */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Ana İçerik */}
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={4} sx={{ minHeight: '100vh', alignItems: 'center' }}>
            {/* Sol Taraf */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Ziyaretçi Sayacı */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    mb: 3,
                    p: 2,
                    borderRadius: '15px',
                    background: 'linear-gradient(45deg, rgba(255,87,34,0.1), rgba(255,167,38,0.1))',
                    border: '1px solid rgba(255,87,34,0.2)',
                    maxWidth: 'fit-content'
                  }}
                >
                  <PeopleIcon sx={{ color: '#FF5722' }} />
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#ffffff',
                      fontSize: '1.1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1
                    }}
                  >
                    Toplam Ziyaretçi: <span style={{ color: '#FF5722', fontWeight: 'bold' }}>{visitorCount}</span>
                  </Typography>
                </Box>

                <Typography
                  variant="h1"
                  sx={{
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: { xs: '2.5rem', md: '4.5rem', lg: '5.5rem' },
                    fontFamily: "'Poppins', sans-serif",
                    lineHeight: 1.1,
                    mb: 3,
                    background: 'linear-gradient(45deg, #FF5722, #FFA726)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Web Developer & Designer
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: '#ffffff',
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                    lineHeight: 1.8,
                    mb: 4,
                    maxWidth: '600px',
                    opacity: 0.9,
                  }}
                >
                  Modern web teknolojileri ile kullanıcı dostu, performanslı ve 
                  etkileyici web uygulamaları geliştiriyorum. Yaratıcı çözümler 
                  ve yenilikçi yaklaşımlar ile projelerinizi hayata geçiriyorum.
                </Typography>

                <Stack direction="row" spacing={3} sx={{ mb: 6 }}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="contained"
                      component="a"
                      href="/contact"
                      sx={{
                        background: 'linear-gradient(45deg, #FF5722, #FFA726)',
                        color: '#fff',
                        px: 4,
                        py: 2,
                        borderRadius: '50px',
                        fontSize: '1.1rem',
                        textTransform: 'none',
                        boxShadow: '0 10px 20px rgba(255,87,34,0.3)',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #FFA726, #FF5722)',
                          boxShadow: '0 15px 30px rgba(255,87,34,0.4)',
                        },
                      }}
                    >
                      İletişime Geç
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outlined"
                      component="a"
                      href="/cv.pdf"
                      download
                      sx={{
                        color: '#FF5722',
                        borderColor: '#FF5722',
                        px: 4,
                        py: 1.5,
                        borderRadius: '30px',
                        fontSize: '1.1rem',
                        textTransform: 'none',
                        '&:hover': {
                          borderColor: '#ff6e40',
                          bgcolor: 'rgba(255,87,34,0.05)',
                        },
                      }}
                    >
                      CV İndir
                    </Button>
                  </motion.div>
                </Stack>

                <Stack direction="row" spacing={2}>
                  <SocialIcon icon={<LinkedInIcon />} href="https://www.linkedin.com/in/enes-akmehmet-a061bb206/" />
                  <SocialIcon icon={<GitHubIcon />} href="https://github.com/enesakmehmet?tab=repositories" />
                  <SocialIcon icon={<TwitterIcon />} href="https://twitter.com" />
                  <SocialIcon icon={<BlogIcon />} href="/blog" />
                </Stack>
              </motion.div>
            </Grid>

            {/* Sağ Taraf - GIF */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  perspective: '1000px',
                }}
              >
                <motion.div
                  whileHover={{ rotateY: 10, rotateX: -10 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  style={{
                    width: '100%',
                    maxWidth: '500px',
                    position: 'relative',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Arka plan ışık efekti */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '-20%',
                      left: '-20%',
                      right: '-20%',
                      bottom: '-20%',
                      background: 'radial-gradient(circle at 50% 50%, rgba(255,87,34,0.15) 0%, rgba(255,167,38,0.05) 50%, rgba(0,0,0,0) 70%)',
                      filter: 'blur(40px)',
                      zIndex: -1,
                      animation: 'pulse 4s ease-in-out infinite',
                      '@keyframes pulse': {
                        '0%': { opacity: 0.5, transform: 'scale(0.95)' },
                        '50%': { opacity: 0.8, transform: 'scale(1.05)' },
                        '100%': { opacity: 0.5, transform: 'scale(0.95)' },
                      },
                    }}
                  />

                  {/* Ana görsel container */}
                  <Box
                    sx={{
                      position: 'relative',
                      borderRadius: '30px',
                      overflow: 'hidden',
                      boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: -2,
                        left: -2,
                        right: -2,
                        bottom: -2,
                        background: 'linear-gradient(45deg, #FF5722, #FFA726)',
                        zIndex: -1,
                        borderRadius: '32px',
                      },
                    }}
                  >
                    <motion.img
                      src={developerGif}
                      alt="Developer GIF"
                      style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'cover',
                        transform: 'translateZ(0)',
                        display: 'block',
                      }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 300,
                        damping: 15 
                      }}
                    />

                    {/* Parıltı efekti */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)',
                        animation: 'shine 2s infinite',
                        '@keyframes shine': {
                          '0%': { transform: 'translateX(-100%)' },
                          '100%': { transform: 'translateX(100%)' },
                        },
                        zIndex: 2,
                      }}
                    />
                  </Box>
                </motion.div>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Hizmetler Bölümü */}
      <Box
        sx={{
          bgcolor: '#1a1a1a',
          py: { xs: 10, md: 15 },
          color: '#ffffff',
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              align="center"
              sx={{
                color: '#ffffff',
                mb: { xs: 8, md: 10 },
                fontSize: { xs: '2rem', md: '3rem' },
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
              }}
            >
              Hizmetlerim
            </Typography>

            <Grid container spacing={3}>
              {services.map((service, index) => (
                <Grid item xs={12} sm={6} md={4} key={service.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Box
                      sx={{
                        bgcolor: 'rgba(255,255,255,0.05)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '24px',
                        p: 4,
                        height: '100%',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        border: '1px solid rgba(255,255,255,0.1)',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                          borderColor: '#FF5722',
                        },
                      }}
                    >
                      <Box
                        sx={{
                          color: '#FF5722',
                          mb: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 70,
                          height: 70,
                          borderRadius: '20px',
                          background: 'linear-gradient(45deg, rgba(255,87,34,0.1), rgba(255,167,38,0.1))',
                        }}
                      >
                        {service.icon}
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          color: '#ffffff',
                          mb: 2,
                          fontWeight: 600,
                          fontSize: '1.25rem',
                        }}
                      >
                        {service.title}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>
    </>
  );
};

// Sosyal medya ikonu bileşeni
const SocialIcon = ({ icon, href }) => (
  <motion.div 
    whileHover={{ scale: 1.1, rotate: 5 }} 
    whileTap={{ scale: 0.9 }}
  >
    <IconButton
      component="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        color: '#ffffff',
        background: 'linear-gradient(45deg, rgba(255,87,34,0.1), rgba(255,167,38,0.1))',
        border: '2px solid transparent',
        borderImage: 'linear-gradient(45deg, #FF5722, #FFA726) 1',
        transition: 'all 0.3s ease',
        '&:hover': {
          background: 'linear-gradient(45deg, rgba(255,87,34,0.2), rgba(255,167,38,0.2))',
          transform: 'translateY(-3px)',
        },
      }}
    >
      {icon}
    </IconButton>
  </motion.div>
);

export default Home; 