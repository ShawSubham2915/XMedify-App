import { Box, Container, Grid, Typography } from '@mui/material';
import BlogCard from './BlogCard';

const Blogs = () => {
  return (
    <Box py={8}>
      <Container>
        <Typography color="#2A90E8" fontWeight={600} textAlign="center" fontSize={20}>
          Blog & News
        </Typography>

        <Typography variant="h2" fontWeight={600} textAlign="center" mb={5} color='#1B3C74'>
          Read Our Latest News
        </Typography>

        <Grid display="flex" gap={2} justifyContent="center" sx={{ maxWidth: 1200 }}>
          <Grid item xs={12} md={4}><BlogCard /></Grid>
          <Grid item xs={12} md={4}><BlogCard /></Grid>
          <Grid item xs={12} md={4}><BlogCard /></Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Blogs;
