import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../Components/Navbar';
import { Footer } from '../Components/Footer';
import BlogCard from '../Components/BlogCard';
import { blogService, siteService } from '../services/api';
import blogsData from '../Data/blogsData';
import './BlogsPage.css';

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [pageContent, setPageContent] = useState({});

  const categories = ['All', 'Marketing', 'Design', 'Tech'];

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchPageContent();
  }, []);

  useEffect(() => {
    fetchBlogs();
  }, [searchTerm, selectedCategory]);

  const fetchPageContent = async () => {
    try {
      const response = await siteService.getAllContent();
      const contentMap = response.data.results.reduce((acc, item) => {
        acc[item.key] = item.value;
        return acc;
      }, {});
      setPageContent(contentMap);
    } catch (error) {
      console.error('Error fetching page content:', error);
    }
  };

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const params = {
        search: searchTerm,
        category: selectedCategory === 'All' ? '' : selectedCategory
      };
      const response = await blogService.getAll(params);
      if (response.data && response.data.results && response.data.results.length > 0) {
        setBlogs(response.data.results);
      } else {
        const filteredMock = blogsData.filter(blog => {
          const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                                blog.description.toLowerCase().includes(searchTerm.toLowerCase());
          const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
          return matchesSearch && matchesCategory;
        });
        setBlogs(filteredMock);
      }
    } catch (error) {
      console.error('Error fetching blogs, using local fallback:', error);
      const filteredMock = blogsData.filter(blog => {
        const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              blog.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
        return matchesSearch && matchesCategory;
      });
      setBlogs(filteredMock);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="blogs-page-container" id="blogs-page">
      <Helmet>
        <title>Industry Insights | Blue Panda Blog</title>
        <meta name="description" content="Explore the latest strategies, trends, and data-driven marketing insights from the Blue Panda team. Stay ahead in Marketing, Design, and Tech." />
      </Helmet>

      {/* Floating Background Blobs for Visual Depth */}
      <div className="bg-blobs-container">
        <div className="bg-blob blob-1"></div>
        <div className="bg-blob blob-2"></div>
        <div className="bg-blob blob-3"></div>
      </div>

      <Navbar />
      
      {/* Blog Hero Section */}
      <section className="blog-hero">
        <div className="container" data-aos="fade-up">
          <h1 className="hero-title">
            {pageContent.blogs_hero_title ? (
              <>
                {pageContent.blogs_hero_title.split(' ').slice(0, -2).join(' ')}{' '}
                <span className="neon-text">{pageContent.blogs_hero_title.split(' ').slice(-2).join(' ')}</span>
              </>
            ) : (
              <>Insights That <span className="neon-text">Drive Growth</span></>
            )}
          </h1>
          <p className="hero-subtitle">{pageContent.blogs_hero_subheading || "Latest strategies, trends, and data-driven marketing insights from the Blue Panda team."}</p>
          
          <div className="search-filter-wrapper">
            {/* ... search and filter UI remains same ... */}
            <div className="search-box">
              <input 
                type="text" 
                placeholder="Search articles..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            
            <div className="category-filters">
              {categories.map((cat) => (
                <button 
                  key={cat}
                  className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blogs Grid Section */}
      <section className="blogs-grid-section">
        <div className="container">
          {loading ? (
            <div className="loading-container">
              <div className="loader"></div>
              <p>Fetching insights...</p>
            </div>
          ) : blogs.length > 0 ? (
            <div className="blogs-grid">
              {blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          ) : (
            <div className="no-blogs-found" data-aos="fade-in">
              <h3>No articles found</h3>
              <p>Try adjusting your search or filter to find what you're looking for.</p>
              <button 
                className="reset-btn" 
                onClick={() => {setSearchTerm(''); setSelectedCategory('All');}}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogsPage;
