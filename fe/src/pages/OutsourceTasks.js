import React from 'react';
import { Box, Typography, Avatar, Paper, Button, Chip, Stack, Divider } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ImageIcon from '@mui/icons-material/Image';

const tasks = [
  {
    id: 1,
    icon: <WorkIcon sx={{ color: '#1976d2', fontSize: 32 }} />,
    title: 'Phân loại hóa đơn, trích xuất thông tin mua hàng',
    skills: ['Google Drive', 'Excel'],
    time: '3 giờ trước',
  },
  {
    id: 2,
    icon: <QuestionAnswerIcon sx={{ color: '#43a047', fontSize: 32 }} />,
    title: 'Hỏi đáp về hình ảnh',
    skills: ['Tiếng Anh'],
    time: 'Hôm qua',
  },
  {
    id: 3,
    icon: <ImageIcon sx={{ color: '#fb8c00', fontSize: 32 }} />,
    title: 'Nhận diện vật thể trong ảnh',
    skills: ['Gán nhãn dữ liệu'],
    time: '6 ngày trước',
  },
];

export default function OutsourceTasks() {
  return (
    <Box sx={{ bgcolor: '#f5f7ff', minHeight: '100vh', py: 6 }}>
      <Box sx={{ maxWidth: 1200, mx: 'auto', display: 'flex', gap: 4 }}>
        {/* Sidebar */}
        <Paper sx={{ width: 300, p: 4, borderRadius: 5, bgcolor: '#e3e9fd' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
            <Avatar sx={{ width: 100, height: 100, mb: 2 }} />
            <Typography variant="h6" fontWeight={700}>H. Nguyen</Typography>
            <Typography variant="body2" color="text.secondary">User</Typography>
          </Box>
          <Divider sx={{ mb: 2 }} />
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle2">Tasks Completed:</Typography>
            <Typography variant="h4" color="primary">120</Typography>
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle2">Skills Acquired:</Typography>
            <Typography variant="h4" color="secondary">8</Typography>
          </Box>
          <Divider sx={{ mb: 2 }} />
          <Box>
            <Typography variant="subtitle2" mb={1}>Skills in Progress:</Typography>
            <Stack spacing={1}>
              <Chip label="Google Drive" color="primary" />
              <Chip label="Excel" color="primary" />
              <Chip label="Tiếng Anh" color="success" />
              <Chip label="Gán nhãn dữ liệu" color="warning" />
            </Stack>
          </Box>
        </Paper>
        {/* Main Content */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" fontWeight={700} mb={3}>Công Việc Outsource</Typography>
          <Paper sx={{ p: 4, borderRadius: 5, mb: 4 }}>
            <Typography variant="h6" fontWeight={700} mb={2}>Danh sách task</Typography>
            <Stack spacing={3}>
              {tasks.map(task => (
                <Box key={task.id} sx={{
                  display: 'flex',
                  alignItems: 'center',
                  bgcolor: '#fff',
                  p: 3,
                  borderRadius: 3,
                  boxShadow: 1,
                  transition: 'box-shadow 0.2s, transform 0.2s',
                  '&:hover': {
                    boxShadow: 6,
                    transform: 'translateY(-4px) scale(1.02)'
                  }
                }}>
                  <Box sx={{ mr: 3 }}>{task.icon}</Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body1" fontWeight={600}>{task.title}</Typography>
                    <Box sx={{ mt: 1 }}>
                      <Typography variant="caption" color="text.secondary">Kỹ năng yêu cầu:</Typography>
                      {task.skills.map(skill => (
                        <Chip key={skill} label={skill} size="small" sx={{ mx: 0.5 }} />
                      ))}
                    </Box>
                  </Box>
                  <Box sx={{ minWidth: 120, textAlign: 'right' }}>
                    <Typography variant="caption" color="text.secondary">{task.time}</Typography>
                    <Button size="small" variant="outlined" sx={{ mt: 1 }}>Xem chi tiết</Button>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}