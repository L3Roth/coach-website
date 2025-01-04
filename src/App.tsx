import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './theme';
import Home from './pages/Home';
import BlogPage from './pages/BlogPage';
import Contact from './pages/Contact';
import { OfferDetail } from './components/OfferDetail';
import AboutMe from './components/AboutMe';
import Layout from './components/Layout'; // Layout-Komponente
import OfferOverview from './components/OfferOverview';
import { BlogDetail } from './components/BlogDetail';
import ReviewCarousel from './components/ReviewCarousel';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/aboutme"
            element={
              <Layout>
                <AboutMe />
              </Layout>
            }
          />
          <Route
            path="/blog"
            element={
              <Layout>
                <BlogPage />
              </Layout>
            }
          />
          <Route 
            path="/blogdetail/:id" 
            element={
              <Layout>
                <BlogDetail />
              </Layout>
            } 
          />
          <Route
            path="/contact"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />
          <Route
            path="/offeroverview"
            element={
              <Layout>
                <OfferOverview />
              </Layout>
            }
          />
          <Route
            path="/offer/:id"
            element={
              <Layout>
                <OfferDetail />
              </Layout>
            }
          />
          <Route
            path="/reviews"
            element={
              <Layout>
                <ReviewCarousel />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
