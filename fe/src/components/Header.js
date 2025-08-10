import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

function Header() {
  return (
    <AppBar position="static" color="primary" elevation={4}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <AccessibilityNewIcon fontSize="large" sx={{ mr: 1 }} />
          <Typography variant="h5" fontWeight="bold" letterSpacing={2}>
            EduAccess
          </Typography>
        </Box>
        <Box>
          <Button component={Link} href="/" color="inherit" sx={{ mx: 1 }}>Trang chủ</Button>
          <Button component={Link} href="/courses" color="inherit" sx={{ mx: 1 }}>Khóa học</Button>
          <Button component={Link} href="/certificates" color="inherit" sx={{ mx: 1 }}>Chứng chỉ</Button>
          <Button component={Link} href="/support" color="inherit" sx={{ mx: 1 }}>Hỗ trợ</Button>
          <Button component={Link} href="/outsourcetasks" color="inherit" sx={{ mx: 1 }}>Công việc outsource</Button>
          <Button component={Link} href="/login" color="secondary" variant="outlined" sx={{ mx: 1, borderRadius: 2 }}>Đăng nhập</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;