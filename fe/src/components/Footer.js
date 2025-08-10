import React from 'react';
import { Box, Typography } from '@mui/material';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

function Footer() {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 3, textAlign: 'center', mt: 4 }}>
      <Typography variant="body1">
        <EmojiPeopleIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
        © {new Date().getFullYear()} EduAccess - Nền tảng học tập & tuyển dụng cho người khuyết tật
      </Typography>
    </Box>
  );
}

export default Footer;