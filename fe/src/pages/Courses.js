import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import CourseCard from '../components/CourseCard';

const coursesData = [
  {
    id: 1,
    title: 'Kỹ năng tin học văn phòng',
    desc: 'Thành thạo Word, Excel, PowerPoint cho công việc.',
    level: 'Cơ bản',
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: 'Lập trình căn bản',
    desc: 'Nhập môn lập trình Python cho người mới bắt đầu.',
    level: 'Trung bình',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    title: 'Kỹ năng giao tiếp',
    desc: 'Nâng cao kỹ năng giao tiếp, phỏng vấn xin việc.',
    level: 'Nâng cao',
    img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80'
  }
];

function Courses() {
  return (
    <Container maxWidth="lg" sx={{ mt: 6 }}>
      <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
        Danh sách Khóa học
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {coursesData.map(course => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <CourseCard {...course} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Courses;