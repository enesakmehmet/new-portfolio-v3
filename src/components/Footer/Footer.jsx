import { Box, Container, Typography, IconButton, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  const socialLinks = [
    {
      icon: <GitHubIcon />,
      url: 'https://github.com/enesakmehmet?tab=repositories',
      label: 'GitHub',
    },
    {
      icon: <LinkedInIcon />,
      url: 'https://www.linkedin.com/in/enes-akmehmet-a061bb206/',
      label: 'LinkedIn',
    },
    {
      icon: <TwitterIcon />,
      url: 'https://twitter.com/yourusername',
      label: 'Twitter',
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="sm">
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
          mb={2}
        >
          {socialLinks.map((social) => (
            <IconButton
              key={social.label}
              color="primary"
              aria-label={social.label}
              component="a"
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </IconButton>
          ))}
        </Stack>
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Enes Akmehmet. Tüm hakları saklıdır.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer; 