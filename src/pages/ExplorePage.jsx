import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Button, Grid, Tabs, Tab, CircularProgress, Alert } from '@mui/material';
import PhotoCard from '../components/PhotoCard';

const ALL_PHOTOS = [
  { id: 1, title: 'Sunset Street', author: 'Alex',  likes: 120, img: 'https://picsum.photos/seed/aa/400/300', tag: 'Photo'  },
  { id: 2, title: 'Neon City',     author: 'Maria', likes: 87,  img: 'https://picsum.photos/seed/bb/400/300', tag: 'Art'    },
  { id: 3, title: 'Forest Walk',   author: 'Budi',  likes: 204, img: 'https://picsum.photos/seed/cc/400/300', tag: 'Photo'  },
  { id: 4, title: 'Abstract Red',  author: 'Sari',  likes: 56,  img: 'https://picsum.photos/seed/dd/400/300', tag: 'Art'    },
  { id: 5, title: 'Old Camera',    author: 'Tom',   likes: 310, img: 'https://picsum.photos/seed/ee/400/300', tag: 'Retro'  },
  { id: 6, title: 'Blue Hour',     author: 'Yuki',  likes: 99,  img: 'https://picsum.photos/seed/ff/400/300', tag: 'Photo'  },
];

const CATEGORIES = ['All', 'Photo', 'Art', 'Retro'];

export default function ExplorePage() {
  const [photos, setPhotos]   = useState([]);
  const [liked, setLiked]     = useState({});
  const [tab, setTab]         = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setPhotos(ALL_PHOTOS);
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (tab === 0) {
      setPhotos(ALL_PHOTOS);
    } else {
      setPhotos(ALL_PHOTOS.filter(p => p.tag === CATEGORIES[tab]));
    }
  }, [tab]);

  function handleLike(id) {
    setLiked(prev => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" fontWeight={700} gutterBottom>
          Temukan Kreasi Terbaik
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Foto, ilustrasi, dan karya digital dari komunitas PicsArt.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Mulai Edit Sekarang
        </Button>
      </Box>

      <Tabs
        value={tab}
        onChange={(_, val) => setTab(val)}
        sx={{ mb: 4, borderBottom: '1px solid #2a2a2e' }}
      >
        {CATEGORIES.map((cat, i) => (
          <Tab key={cat} label={cat} value={i} />
        ))}
      </Tabs>

      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
          <CircularProgress color="primary" />
        </Box>
      )}

      {!loading && photos.length === 0 && (
        <Alert severity="info">Belum ada foto di kategori ini.</Alert>
      )}

      {!loading && (
        <Grid container spacing={3}>
          {photos.map(photo => (
            <Grid item xs={12} sm={6} md={4} key={photo.id}>
              <PhotoCard
                photo={photo}
                liked={!!liked[photo.id]}
                onLike={handleLike}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
