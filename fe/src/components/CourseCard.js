import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box, Chip } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

function CourseCard({ title, desc, level, img }) {
  return (
    <Card elevation={6} sx={{ borderRadius: 3 }}>
      <CardMedia
        component="img"
        height="140"
        image={img}
        alt={title}
      />
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <SchoolIcon color="primary" sx={{ mr: 1 }} />
          <Typography variant="h6" fontWeight="bold">{title}</Typography>
        </Box>
        <Chip label={level} color="secondary" sx={{ mb: 1 }} />
        <Typography variant="body2" sx={{ mb: 2 }}>{desc}</Typography>
        <Button variant="contained" color="success" fullWidth>
          Đăng ký học
        </Button>
      </CardContent>
    </Card>
  );
}

export default CourseCard;