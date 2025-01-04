import React, { useEffect, useState } from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { fetchBlogPosts } from '../services/api';

interface BlogPost {
  id: number;
  title: string;
  shortDescription: string;
  content: string;
  imageUrl: string;
}

const BlogPage: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const getBlogPosts = async () => {
      const posts = await fetchBlogPosts();
      setBlogPosts(posts);
    };

    getBlogPosts();
  }, []);

  console.log('BLOG POST ', blogPosts)

  return (
    <Box sx={{ py: 4, marginTop: '150px'}}>
      <Container maxWidth="md">
        <Typography variant="h1" align="center" gutterBottom sx={{ color: '#5E9050', fontWeight: 'bold', fontSize: '40px' }}>
          Blog
        </Typography>
        <Grid container spacing={4}>
          {blogPosts.map((post) => (
            <Grid item xs={12} key={post.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="400"
                  image={`http://localhost:1337${post.imageUrl}`}
                  alt={post.title}
                />
                <CardContent>
                  <Typography variant="h5">{post.title}</Typography>
                  <Typography variant="body2">{post.shortDescription}</Typography>
                  <Button href={`/blogdetail/${post.id}`} variant="contained" color="primary">
                    Mehr erfahren
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BlogPage;
