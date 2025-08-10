import React from 'react';
import { Box, Container, Typography, TextField, Button, Paper } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';

function Login() {
  return (
    <Container maxWidth="xs" sx={{ mt: 8 }}>
      <Paper elevation={6} sx={{ p: 4, borderRadius: 3 }}>
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <LockOpenIcon color="primary" sx={{ fontSize: 40 }} />
        </Box>
        <Typography variant="h5" fontWeight="bold" align="center" mb={2}>
          Đăng nhập
        </Typography>
        <TextField label="Email" type="email" fullWidth margin="normal" />
        <TextField label="Mật khẩu" type="password" fullWidth margin="normal" />
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 3, borderRadius: 2 }}>
          Đăng nhập
        </Button>
        <Button href="/register" variant="text" color="secondary" fullWidth sx={{ mt: 2 }}>
          Chưa có tài khoản? Đăng ký
        </Button>
      </Paper>
    </Container>
  );
}

export default Login;