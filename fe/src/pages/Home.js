import React from 'react';
import { Box, Typography, Button, Container, Grid, Paper } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WorkIcon from '@mui/icons-material/Work';

function Home() {
  return (
    <Box sx={{ bgcolor: 'primary.dark', minHeight: '100vh', pt: 8, pb: 6 }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="h3" fontWeight="bold" color="white" gutterBottom>
          Nền tảng Học tập Trực tuyến <SchoolIcon sx={{ fontSize: 40, ml: 1 }} />
        </Typography>
        <Typography variant="h6" color="white" paragraph>
          Nâng cao kỹ năng, nhận chứng chỉ - Bình đẳng cho mọi người. <br />
          Cơ hội việc làm cho người khuyết tật. 🤝
        </Typography>
        <Button
          variant="contained"
          color="success"
          size="large"
          href="/courses"
          sx={{ mt: 3, fontSize: 18, borderRadius: 2, px: 5, py: 2 }}
        >
          Khám phá khóa học
        </Button>
      </Container>
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Paper elevation={6} sx={{ p: 4, textAlign: 'center', borderRadius: 3, bgcolor: 'primary.main', color: 'white' }}>
              <SchoolIcon sx={{ fontSize: 50, mb: 2 }} />
              <Typography variant="h6" fontWeight="bold">Dễ dàng tiếp cận khóa học</Typography>
              <Typography sx={{ mt: 1 }}>Giao diện thân thiện, hỗ trợ đọc màn hình.</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={6} sx={{ p: 4, textAlign: 'center', borderRadius: 3, bgcolor: 'primary.main', color: 'white' }}>
              <EmojiEventsIcon sx={{ fontSize: 50, mb: 2 }} />
              <Typography variant="h6" fontWeight="bold">Chứng chỉ uy tín</Typography>
              <Typography sx={{ mt: 1 }}>Được công nhận bởi nhà tuyển dụng.</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={6} sx={{ p: 4, textAlign: 'center', borderRadius: 3, bgcolor: 'primary.main', color: 'white' }}>
              <WorkIcon sx={{ fontSize: 50, mb: 2 }} />
              <Typography variant="h6" fontWeight="bold">Kết nối tuyển dụng</Typography>
              <Typography sx={{ mt: 1 }}>Nhà tuyển dụng dễ dàng tìm kiếm ứng viên phù hợp.</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Home;