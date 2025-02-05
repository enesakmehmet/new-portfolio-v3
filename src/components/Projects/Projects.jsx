import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
  Stack,
  useTheme,
  alpha,
} from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const projects = [
  {
    title: 'Otel Uygulaması',
    description:
      'Modern bir Otel platformu. React, Node.js ve MongoDB kullanılarak geliştirildi.',
    image: '/src/assets/images/otel.png',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
    githubUrl: 'https://github.com/enesakmehmet/otel-web-v3.git',
    liveUrl: 'https://project1.com',
  },
  {
    title: 'Film Platform Uygulaması ',
    description:
      'Drag-and-drop özellikli, gerçek zamanlı task yönetim uygulaması.',
    image: '/src/assets/images/movie appp.png',
    technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
    githubUrl: 'https://github.com/enesakmehmet/movie-app.git',
    liveUrl: 'https://project2.com',
  },
  {
    title: 'Oyun Key Satış Platformu',
    description:
      'Oyun Key Satış platformu. React ile geliştirildi.',
    image: '/src/assets/images/game.png',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
    githubUrl: 'https://github.com/enesakmehmet/game-web-v3.git',
    liveUrl: 'https://project3.com',
  },
  {
    title: 'Happy Pets',
    description:
      'Gerçek zamanlı Hayvan Hastanesi platformu.',
    image: '/src/assets/images/Happy Pets.png',
    technologies: ['React Native', 'Firebase', 'Redux', 'Node.js'],
    githubUrl: 'https://github.com/enesakmehmet/Pad-shop-Web.git',
    liveUrl: 'https://project4.com',
  },
];

const Projects = () => {
  const theme = useTheme();

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      sx={{ 
        py: 12,
        background: theme.palette.mode === 'dark' 
          ? 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 100%)'
          : 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.03) 100%)',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              mb: 8,
              textAlign: 'center',
              fontWeight: 800,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 2px 10px rgba(33, 150, 243, 0.3)',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60px',
                height: '4px',
                background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                borderRadius: '2px',
              }
            }}
          >
            Projelerim
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid
              item
              xs={12}
              md={6}
              key={project.title}
              component={motion.div}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 3,
                  overflow: 'hidden',
                  backdropFilter: 'blur(8px)',
                  backgroundColor: alpha(theme.palette.background.paper, 0.9),
                  boxShadow: theme.palette.mode === 'dark'
                    ? '0 4px 20px rgba(0,0,0,0.3)'
                    : '0 4px 20px rgba(0,0,0,0.1)',
                  position: 'relative',
                  transform: 'perspective(1000px)',
                  transformStyle: 'preserve-3d',
                  '&:before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease-in-out',
                  },
                  '&:hover:before': {
                    opacity: 1,
                  },
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(180deg, rgba(0,0,0,0) 70%, rgba(0,0,0,0.05) 100%)',
                    pointerEvents: 'none',
                  }
                }}
                component={motion.div}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 12px 50px rgba(0,0,0,0.2)',
                  rotateX: 2,
                  rotateY: 2,
                }}
                transition={{ 
                  duration: 0.4,
                  ease: "easeOut"
                }}
              >
                <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                  <CardMedia
                    component="img"
                    height="240"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      objectFit: 'cover',
                      transition: 'all 0.5s ease-in-out',
                      filter: 'brightness(0.95)',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        filter: 'brightness(1.05)',
                      },
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '60px',
                      background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)',
                      transition: 'opacity 0.3s ease-in-out',
                    }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography 
                    gutterBottom 
                    variant="h5" 
                    component="h2"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      background: 'linear-gradient(45deg, #1976D2 30%, #2196F3 90%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    paragraph
                    sx={{ 
                      mb: 3,
                      lineHeight: 1.7,
                      fontSize: '0.95rem',
                    }}
                  >
                    {project.description}
                  </Typography>
                  <Stack 
                    direction="row" 
                    spacing={1} 
                    flexWrap="wrap" 
                    gap={1}
                    sx={{ mb: 2 }}
                  >
                    {project.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        color="primary"
                        variant="outlined"
                        sx={{
                          borderRadius: '8px',
                          fontWeight: 500,
                          borderWidth: '1.5px',
                          '&:hover': {
                            backgroundColor: alpha(theme.palette.primary.main, 0.1),
                            borderColor: theme.palette.primary.main,
                          },
                          transition: 'all 0.2s ease-in-out',
                        }}
                      />
                    ))}
                  </Stack>
                </CardContent>
                <CardActions 
                  sx={{ 
                    px: 3, 
                    pb: 3,
                    gap: 2,
                    borderTop: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                    pt: 2,
                  }}
                >
                  <Button
                    size="medium"
                    startIcon={<GitHubIcon />}
                    href={project.githubUrl}
                    target="_blank"
                    variant="contained"
                    sx={{
                      backgroundColor: '#24292e',
                      fontWeight: 600,
                      px: 3,
                      '&:hover': {
                        backgroundColor: '#1a1e22',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.2s ease-in-out',
                    }}
                  >
                    GitHub
                  </Button>
                  <Button
                    size="medium"
                    startIcon={<LaunchIcon />}
                    href={project.liveUrl}
                    target="_blank"
                    variant="outlined"
                    sx={{
                      borderColor: theme.palette.primary.main,
                      borderWidth: '1.5px',
                      fontWeight: 600,
                      px: 3,
                      '&:hover': {
                        borderColor: theme.palette.primary.dark,
                        backgroundColor: alpha(theme.palette.primary.main, 0.08),
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.2s ease-in-out',
                    }}
                  >
                    Canlı Demo
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects; 