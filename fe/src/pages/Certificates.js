import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const certificatesData = [
  {
    id: 1,
    name: 'Chứng chỉ Tin học văn phòng',
    date: '08/2024',
    issuer: 'EduAccess'
  },
  {
    id: 2,
    name: 'Chứng chỉ Lập trình Python',
    date: '07/2024',
    issuer: 'EduAccess'
  }
];

function Certificates() {
  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
        Chứng chỉ của bạn
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {certificatesData.map(cert => (
          <Grid item xs={12} sm={6} key={cert.id}>
            <Paper elevation={6} sx={{ p: 4, borderRadius: 3, textAlign: 'center' }}>
              <EmojiEventsIcon color="secondary" sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h6" fontWeight="bold">{cert.name}</Typography>
              <Typography variant="body2" sx={{ my: 1 }}>Ngày nhận: {cert.date}</Typography>
              <Typography variant="body2">Đơn vị cấp: {cert.issuer}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Certificates;