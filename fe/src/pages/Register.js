import React from 'react';
import { Box, Container, Typography, TextField, Button, Paper, MenuItem } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

function Register() {
  return (
    <Container maxWidth="xs" sx={{ mt: 8 }}>
      <Paper elevation={6} sx={{ p: 4, borderRadius: 3 }}>
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <PersonAddIcon color="primary" sx={{ fontSize: 40 }} />
        </Box>
        <Typography variant="h5" fontWeight="bold" align="center" mb={2}>
          Đăng ký
        </Typography>
        <TextField label="Họ và tên" fullWidth margin="normal" />
        <TextField label="Email" type="email" fullWidth margin="normal" />
        <TextField label="Mật khẩu" type="password" fullWidth margin="normal" />
        <TextField
          select
          label="Bạn là"
          fullWidth
          margin="normal"
          defaultValue=""
        >
          <MenuItem value="student">Người khuyết tật muốn học</MenuItem>
          <MenuItem value="recruiter">Nhà tuyển dụng</MenuItem>
        </TextField>
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 3, borderRadius: 2 }}>
          Đăng ký
        </Button>
        <Button href="/login" variant="text" color="secondary" fullWidth sx={{ mt: 2 }}>
          Đã có tài khoản? Đăng nhập
        </Button>
      </Paper>
    </Container>
  );
}

export default Register;