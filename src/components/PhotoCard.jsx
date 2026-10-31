import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Chip, Box } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

export default function PhotoCard({ photo, liked, onLike }) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image={photo.img}
        alt={photo.title}
      />
      <CardContent sx={{ pb: 0 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography variant="subtitle1" fontWeight={600}>
              {photo.title}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              by {photo.author}
            </Typography>
          </Box>
          <Chip
            label={photo.tag}
            size="small"
            variant="outlined"
            sx={{ borderColor: '#444', color: '#aaa' }}
          />
        </Box>
      </CardContent>
      <CardActions sx={{ px: 2, pb: 2, pt: 1 }}>
        <IconButton size="small" onClick={() => onLike(photo.id)}>
          {liked
            ? <Favorite fontSize="small" sx={{ color: '#FF3C78' }} />
            : <FavoriteBorder fontSize="small" sx={{ color: '#666' }} />
          }
        </IconButton>
        <Typography variant="caption" color="text.secondary">
          {liked ? photo.likes + 1 : photo.likes}
        </Typography>
      </CardActions>
    </Card>
  );
}
