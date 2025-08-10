import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box, Chip, Stack } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

function UserCard({ name, skill, certs, img }) {
  return (
    <Card elevation={6} sx={{ borderRadius: 3 }}>
      <CardMedia
        component="img"
        height="140"
        image={img}
        alt={name}
      />
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <PersonIcon color="primary" sx={{ mr: 1 }} />
          <Typography variant="h6" fontWeight="bold">{name}</Typography>
        </Box>
        <Typography variant="body2" sx={{ mb: 1 }}>Kỹ năng: {skill}</Typography>
        <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap' }}>
          {certs.map((c, idx) => (
            <Chip key={idx} label={c} color="secondary" />
          ))}
        </Stack>
        <Button variant="contained" color="success" fullWidth>
          Liên hệ ứng viên
        </Button>
      </CardContent>
    </Card>
  );
}

export default UserCard;