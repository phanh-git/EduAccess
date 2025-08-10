import React from 'react';
import { Container, Typography, Paper, Box, Button, Chip, Stack } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

function Profile() {
  // Bạn có thể lấy thông tin người dùng từ API hoặc context
  const user = {
    name: 'Nguyễn Văn A',
    email: 'nguyenvana@example.com',
    skills: ['Tin học', 'Python'],
    certs: ['Chứng chỉ Tin học', 'Chứng chỉ Python']
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Paper elevation={6} sx={{ p: 4, borderRadius: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <PersonIcon color="primary" sx={{ fontSize: 40, mr: 1 }} />
          <Typography variant="h5" fontWeight="bold">{user.name}</Typography>
        </Box>
        <Typography variant="body2" sx={{ mb: 1 }}>Email: {user.email}</Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>Kỹ năng:</Typography>
        <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap' }}>
          {user.skills.map((s, idx) => (
            <Chip key={idx} label={s} color="secondary" />
          ))}
        </Stack>
        <Typography variant="body2" sx={{ mb: 1 }}>Chứng chỉ:</Typography>
        <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap' }}>
          {user.certs.map((c, idx) => (
            <Chip key={idx} label={c} color="success" />
          ))}
        </Stack>
        <Button variant="contained" color="primary" fullWidth>
          Chỉnh sửa hồ sơ
        </Button>
      </Paper>
    </Container>
  );
}

export default Profile;