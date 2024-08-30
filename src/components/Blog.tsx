import React, { useEffect, useState } from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { fetchBlogPosts } from '../services/api';

interface BlogPost {
  id: number;
  title: string;
  shortDescription: string;
  imageUrl: string;
}

const Blog: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const getBlogPosts = async () => {
      const posts = await fetchBlogPosts();
      setBlogPosts(posts.slice(0, 3)); // Nur die ersten 3 Beiträge anzeigen
    };

    getBlogPosts();
  }, []);

  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Blog
        </Typography>
        <Grid container spacing={4}>
          {blogPosts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={post.imageUrl}
                  alt={post.title}
                />
                <CardContent>
                  <Typography variant="h6">{post.title}</Typography>
                  <Typography variant="body2">{post.shortDescription}</Typography>
                  <Button href={`/blog/${post.id}`} variant="contained" color="primary" sx={{ mt: 2 }}>
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

export default Blog;
