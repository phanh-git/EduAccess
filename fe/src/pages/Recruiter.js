import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import UserCard from '../components/UserCard';

const usersData = [
  {
    id: 1,
    name: 'Nguyễn Văn A',
    skill: 'Tin học văn phòng, Python',
    certs: ['Chứng chỉ Tin học', 'Chứng chỉ Python'],
    img: 'https://randomuser.me/api/portraits/men/2.jpg'
  },
  {
    id: 2,
    name: 'Trần Thị B',
    skill: 'Giao tiếp, Kỹ năng mềm',
    certs: ['Chứng chỉ Giao tiếp'],
    img: 'https://randomuser.me/api/portraits/women/3.jpg'
  }
];

function Recruiter() {
  return (
    <Container maxWidth="lg" sx={{ mt: 6 }}>
      <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
        Tìm kiếm ứng viên
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {usersData.map(user => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <UserCard {...user} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Recruiter;