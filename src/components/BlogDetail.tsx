import React, { useEffect, useState } from "react";
import { Box, Container, Typography, CardMedia, Button, CircularProgress } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:1337/api"; // Basis-URL

interface BlogPost {
  id: number;
  title: string;
  imageUrl: string | null;
  content: string;
}

export const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/blog-posts/${id}?populate=*`);
        const data = response.data.data;

        const imageUrl =
          data.attributes.Bild?.data && data.attributes.Bild.data[0]?.attributes?.url
            ? `http://localhost:1337${data.attributes.Bild.data[0].attributes.url}`
            : null;

        const content = data.attributes.Inhalt
          ? data.attributes.Inhalt.map((block: any) =>
              block.children.map((child: any) => child.text).join("")
            ).join("\n")
          : "Kein Inhalt verfügbar";

        setBlogPost({
          id: data.id,
          title: data.attributes.Titel || "Kein Titel verfügbar",
          imageUrl,
          content,
        });
      } catch (error) {
        setError("Blogeintrag konnte nicht geladen werden.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [id]);

  if (loading) {
    return (
      <Box sx={{ py: 8, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ py: 8, marginTop: '150px' }}>
        <Container>
          <Typography variant="h4" align="center" sx={{ color: "red" }}>
            {error}
          </Typography>
        </Container>
      </Box>
    );
  }

  if (!blogPost) {
    return (
      <Box sx={{ py: 8, marginTop: '150px' }}>
        <Container>
          <Typography variant="h4" align="center">
            Blogeintrag nicht gefunden
          </Typography>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ py: 8, marginTop: '150px' }}>
      <Container maxWidth="md">
        <Typography variant="h1" gutterBottom sx={{ color: "#5E9050", fontWeight: "bold", fontSize: '40px' }}>
          {blogPost.title}
        </Typography>
        {blogPost.imageUrl && (
          <CardMedia
            component="img"
            image={blogPost.imageUrl}
            alt={blogPost.title}
            sx={{ height: 300, objectFit: "cover", mb: 4 }}
          />
        )}
        <Typography variant="body1" sx={{ color: "#6E6343", lineHeight: 1.8, whiteSpace: "pre-line" }}>
          {blogPost.content}
        </Typography>
        <Button
          size="medium"
          sx={{ color: "#5E9050", mt: 4 }}
          onClick={() => navigate(-1)} // Zurück zur vorherigen Seite
        >
          Zurück
        </Button>
      </Container>
    </Box>
  );
};
