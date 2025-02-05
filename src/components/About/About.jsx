import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Card,
  CardContent,
} from '@mui/material';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import PageContainer from '../common/PageContainer';

const skills = [
  {
    name: 'Fastify',
    icon: '/icons/fastify.svg',
  },
  {
    name: 'Blender',
    icon: '/icons/blender.svg',
  },
  {
    name: 'Figma',
    icon: '/icons/figma.svg',
  },
  {
    name: 'Javascript',
    icon: '/icons/javascript.svg',
  },
  {
    name: 'CSS',
    icon: '/icons/css.svg',
  },
  {
    name: 'React',
    icon: '/icons/react.svg',
  },
  {
    name: 'Django',
    icon: '/icons/django.svg',
  },
];

const About = () => {
  return (
    <PageContainer>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h1"
          gutterBottom
          sx={{
            mb: 8,
            textAlign: 'center',
            color: 'secondary.main',
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            fontWeight: 700,
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -16,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 80,
              height: 4,
              backgroundColor: 'primary.main',
              borderRadius: 2,
            }
          }}
        >
          Hakkımda
        </Typography>

        <Grid container spacing={6} sx={{ mb: 12 }}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography 
                variant="h4" 
                gutterBottom 
                color="primary.main"
                sx={{
                  fontWeight: 600,
                  mb: 4,
                  fontSize: { xs: '1.8rem', md: '2.2rem' }
                }}
              >
                Merhaba! Ben Enes
              </Typography>
              <Typography
                paragraph
                sx={{
                  color: 'text.secondary',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                2 yıllık deneyime sahip bir Full Stack Yazılım Geliştiricisiyim.
                Modern web teknolojileri konusunda uzmanlaşmış olup, kullanıcı
                deneyimini ön planda tutan, performanslı ve ölçeklenebilir web
                uygulamaları geliştiriyorum.
              </Typography>
              <Typography
                paragraph
                sx={{
                  color: 'text.secondary',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                }}
              >
                Sürekli kendimi geliştirmeye ve yeni teknolojiler öğrenmeye
                odaklanıyorum. Açık kaynak projelere katkıda bulunmayı ve
                toplulukla bilgi paylaşımını önemsiyorum.
              </Typography>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 5,
                  height: '100%',
                  background: 'linear-gradient(135deg, #fff 0%, #f8f8f8 100%)',
                  border: '1px solid rgba(0,0,0,0.08)',
                  borderRadius: 4,
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  },
                }}
              >
                <Typography 
                  variant="h4" 
                  gutterBottom 
                  color="primary.main"
                  sx={{
                    fontWeight: 600,
                    mb: 4,
                    fontSize: { xs: '1.8rem', md: '2.2rem' }
                  }}
                >
                  Eğitim
                </Typography>
                <Typography 
                  variant="h6" 
                  gutterBottom 
                  color="text.primary"
                  sx={{ fontWeight: 500 }}
                >
                  İşletme Yönetimi
                </Typography>
                <Typography 
                  variant="body1" 
                  color="text.secondary"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    '&::before': {
                      content: '"•"',
                      marginRight: 1,
                      color: 'primary.main',
                      fontWeight: 'bold',
                    }
                  }}
                >
                  2016-2020
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Typography
            variant="h2"
            gutterBottom
            sx={{ 
              mb: 6, 
              textAlign: 'center', 
              color: 'secondary.main',
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '2.8rem' },
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -12,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 60,
                height: 3,
                backgroundColor: 'primary.main',
                borderRadius: 2,
              }
            }}
          >
            Yetenekler
          </Typography>

          <Box sx={{ 
            width: '100%', 
            overflow: 'hidden',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,248,248,0.95) 100%)',
            py: 8,
            borderRadius: 6,
            boxShadow: '0 4px 30px rgba(0,0,0,0.08)',
            border: '1px solid rgba(0,0,0,0.08)',
          }}>
            <Marquee
              gradient={false}
              speed={35}
              direction="right"
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card
                    sx={{
                      width: 180,
                      height: 180,
                      mx: 2,
                      backgroundColor: '#fff',
                      color: 'text.primary',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                      border: '1px solid rgba(0,0,0,0.08)',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
                        borderColor: 'primary.main',
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={skill.icon}
                      alt={skill.name}
                      sx={{
                        width: 70,
                        height: 70,
                        mb: 3,
                        filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))',
                      }}
                    />
                    <Typography 
                      variant="h6" 
                      component="div"
                      sx={{
                        fontSize: '1.1rem',
                        fontWeight: 500,
                        color: 'text.primary',
                      }}
                    >
                      {skill.name}
                    </Typography>
                  </Card>
                </motion.div>
              ))}
            </Marquee>
          </Box>
        </motion.div>
      </motion.div>
    </PageContainer>
  );
};

export default About; 