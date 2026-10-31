import React from 'react';
import { Box, Container, Typography, Divider } from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{ background: '#0d0d0f', borderTop: '1px solid #2a2a2e', mt: 8 }}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Divider sx={{ mb: 3, borderColor: '#2a2a2e' }} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
          <Typography variant="body2" color="text.secondary">
            © 2024 PicsArt, Inc.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Privacy · Terms · Help
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
