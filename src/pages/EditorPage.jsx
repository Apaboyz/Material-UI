import React, { useEffect } from 'react';
import { Box, Container, Typography, Button, Grid, Card, CardContent, Divider } from '@mui/material';
import { AutoAwesome } from '@mui/icons-material';

const FEATURES = [
  { title: 'Hapus Background', desc: 'Otomatis hapus latar belakang foto dalam 1 detik.' },
  { title: 'Filter AI',        desc: 'Ratusan filter cerdas untuk berbagai gaya foto.'    },
  { title: 'Edit Teks',        desc: 'Tambahkan teks dengan font dan efek premium.'        },
  { title: 'Resize Otomatis',  desc: 'Sesuaikan ukuran untuk semua platform sosial media.' },
];

export default function EditorPage() {
  useEffect(() => {
    document.title = 'Editor Foto AI — PicsArt';
    return () => {
      document.title = 'PicsArt';
    };
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ mb: 6 }}>
        <Typography variant="h3" fontWeight={700} gutterBottom>
          Editor Foto AI
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 3, maxWidth: 500 }}>
          Edit foto dengan mudah menggunakan kecerdasan buatan. Hapus background, tambah filter, dan buat desain keren hanya dalam beberapa klik.
        </Typography>
        <Button variant="contained" color="primary" size="large" startIcon={<AutoAwesome />}>
          Coba Editor Gratis
        </Button>
      </Box>

      <Divider sx={{ mb: 6, borderColor: '#2a2a2e' }} />

      <Typography variant="h5" fontWeight={600} sx={{ mb: 3 }}>
        Fitur Unggulan
      </Typography>
      <Grid container spacing={2}>
        {FEATURES.map(f => (
          <Grid item xs={12} sm={6} key={f.title}>
            <Card sx={{ p: 1 }}>
              <CardContent>
                <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                  {f.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {f.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
