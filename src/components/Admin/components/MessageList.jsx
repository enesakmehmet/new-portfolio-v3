import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Divider,
  Box,
  IconButton,
  Badge,
} from '@mui/material';
import {
  Delete as DeleteIcon,
  Reply as ReplyIcon,
  Mail as MailIcon,
} from '@mui/icons-material';

// Demo verisi - gerçek uygulamada API'den gelecek
const messages = [
  {
    id: 1,
    name: 'Ahmet Yılmaz',
    email: 'ahmet@example.com',
    message: 'Merhaba, web siteniz hakkında bilgi almak istiyorum...',
    date: '10 Mar, 14:30',
    read: false,
  },
  {
    id: 2,
    name: 'Ayşe Demir',
    email: 'ayse@example.com',
    message: 'Fiyatlandırma planlarınız hakkında detaylı bilgi alabilir miyim?',
    date: '10 Mar, 13:45',
    read: true,
  },
  {
    id: 3,
    name: 'Mehmet Kaya',
    email: 'mehmet@example.com',
    message: 'Projeniz için teklif göndermek istiyorum...',
    date: '10 Mar, 12:20',
    read: false,
  },
  {
    id: 4,
    name: 'Zeynep Şahin',
    email: 'zeynep@example.com',
    message: 'Portfolyonuzdaki projeler çok etkileyici...',
    date: '10 Mar, 11:15',
    read: true,
  },
  {
    id: 5,
    name: 'Can Özkan',
    email: 'can@example.com',
    message: 'İş birliği yapmak için görüşebilir miyiz?',
    date: '10 Mar, 10:30',
    read: false,
  },
];

const MessageList = () => {
  return (
    <Paper
      sx={{
        p: 3,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 2,
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, flexGrow: 1 }}>
          Son Mesajlar
        </Typography>
        <Badge
          badgeContent={messages.filter((m) => !m.read).length}
          color="error"
          sx={{ mr: 2 }}
        >
          <MailIcon color="action" />
        </Badge>
      </Box>

      <List sx={{ width: '100%', bgcolor: 'background.paper', flexGrow: 1 }}>
        {messages.map((message, index) => (
          <Box key={message.id}>
            <ListItem
              alignItems="flex-start"
              sx={{
                bgcolor: message.read ? 'transparent' : 'rgba(255,87,34,0.05)',
                transition: 'background-color 0.2s',
                '&:hover': {
                  bgcolor: 'rgba(0,0,0,0.04)',
                },
              }}
              secondaryAction={
                <Box>
                  <IconButton edge="end" aria-label="reply" size="small">
                    <ReplyIcon />
                  </IconButton>
                  <IconButton edge="end" aria-label="delete" size="small">
                    <DeleteIcon />
                  </IconButton>
                </Box>
              }
            >
              <ListItemAvatar>
                <Avatar
                  sx={{
                    bgcolor: message.read ? 'grey.400' : '#FF5722',
                  }}
                >
                  {message.name.charAt(0)}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography
                      component="span"
                      variant="subtitle2"
                      color="text.primary"
                      sx={{ fontWeight: message.read ? 400 : 600 }}
                    >
                      {message.name}
                    </Typography>
                    <Typography
                      component="span"
                      variant="caption"
                      color="text.secondary"
                    >
                      {message.date}
                    </Typography>
                  </Box>
                }
                secondary={
                  <>
                    <Typography
                      component="span"
                      variant="body2"
                      color="text.primary"
                      sx={{
                        display: 'block',
                        color: 'text.secondary',
                        fontSize: '0.875rem',
                      }}
                    >
                      {message.email}
                    </Typography>
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{
                        display: 'block',
                        color: 'text.secondary',
                        fontSize: '0.875rem',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {message.message}
                    </Typography>
                  </>
                }
              />
            </ListItem>
            {index < messages.length - 1 && (
              <Divider variant="inset" component="li" />
            )}
          </Box>
        ))}
      </List>
    </Paper>
  );
};

export default MessageList; 