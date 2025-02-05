import { Paper, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const StatCard = ({ title, value, icon, color }) => {
  return (
    <Paper
      sx={{
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        background: 'white',
        borderRadius: 2,
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
        },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Box
          sx={{
            width: 45,
            height: 45,
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: `${color}15`,
            color: color,
          }}
        >
          {icon}
        </Box>
      </Box>

      <Typography
        variant="h3"
        component="div"
        sx={{
          fontWeight: 'bold',
          mb: 1,
          color: '#1a1a1a',
          fontSize: '2rem',
        }}
      >
        {value}
      </Typography>

      <Typography
        variant="body2"
        sx={{
          color: 'text.secondary',
          fontSize: '0.875rem',
          fontWeight: 500,
        }}
      >
        {title}
      </Typography>
    </Paper>
  );
};

StatCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  color: PropTypes.string.isRequired,
};

export default StatCard; 