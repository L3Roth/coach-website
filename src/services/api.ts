import axios from 'axios';

const API_URL = 'http://localhost:1337';

export const fetchBlogPosts = async () => {
    const response = await axios.get(`${API_URL}/blog-posts`);
    return response.data.map((post: any) => ({
      id: post.id,
      title: post.title,
      shortDescription: post.shortDescription,
      content: post.content,
      imageUrl: post.image.url,
    }));
};

export const fetchOffers = async () => {
  const response = await axios.get(`${API_URL}/offers`);
  return response.data;
};

export const fetchAboutMe = async () => {
  const response = await axios.get(`${API_URL}/aboutme`);
  return response.data;
};

export const fetchReviews = async () => {
  const response = await axios.get(`${API_URL}/rezension`);
  return response.data;
};
