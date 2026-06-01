import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../Components/Navbar';
import { Footer } from '../Components/Footer';
import BlogCard from '../Components/BlogCard';
import { blogService } from '../services/api';
import blogsData from '../Data/blogsData';
import './BlogDetailsPage.css';

const BlogDetailsPage = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchBlogDetails();

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.pageYOffset;
      const progress = totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [slug]);

  const fetchBlogDetails = async () => {
    setLoading(true);
    try {
      const response = await blogService.getBySlug(slug);
      setBlog(response.data);
      
      // Fetch related blogs from the same category
      try {
        const relatedRes = await blogService.getAll({ 
          category: response.data.category,
          page_size: 4 
        });
        if (relatedRes.data && relatedRes.data.results) {
          setRelatedBlogs(relatedRes.data.results.filter(b => b.slug !== slug).slice(0, 3));
        } else {
          const related = blogsData.filter(b => b.category === response.data.category && b.slug !== slug).slice(0, 3);
          setRelatedBlogs(related);
        }
      } catch (relatedErr) {
        console.error('Error fetching related blogs from API:', relatedErr);
        const related = blogsData.filter(b => b.category === response.data.category && b.slug !== slug).slice(0, 3);
        setRelatedBlogs(related);
      }
    } catch (error) {
      console.error('Error fetching blog details, using local fallback:', error);
      const foundBlog = blogsData.find(b => b.slug === slug);
      if (foundBlog) {
        setBlog(foundBlog);
        const related = blogsData.filter(b => b.category === foundBlog.category && b.slug !== slug).slice(0, 3);
        setRelatedBlogs(related);
      } else {
        setBlog(null);
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="blog-details-loading">
        <Navbar />
        <div className="loading-container">
          <div className="loader"></div>
          <p>Unfolding the story...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="blog-details-not-found">
        <Helmet>
          <title>Article Not Found | Blue Panda</title>
        </Helmet>
        <Navbar />
        <div className="not-found-content">
          <h1>Blog Not Found</h1>
          <p>The article you're looking for doesn't exist or has been moved.</p>
          <Link to="/blogs" className="back-btn">Back to Blogs</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="blog-details-container">
      <Helmet>
        <title>{blog.meta_title || `${blog.title} | Blue Panda Blog`}</title>
        <meta name="description" content={blog.meta_description || blog.description} />
        <meta name="keywords" content={blog.keywords || ""} />
        <link rel="canonical" href={`https://bluepanda.com/blogs/${blog.slug}`} />
        <meta property="og:title" content={blog.meta_title || `${blog.title} | Blue Panda`} />
        <meta property="og:description" content={blog.meta_description || blog.description} />
        <meta property="og:image" content={blog.image} />
        <meta property="og:type" content="article" />
      </Helmet>

      {/* Reading Progress Bar */}
      <div className="reading-progress-bar" style={{ width: `${scrollProgress}%` }}></div>

      <Navbar />

      {/* Blog Details Header/Hero */}
      <section className="blog-details-hero" style={{ backgroundImage: `linear-gradient(rgba(2, 11, 28, 0.7), rgba(2, 11, 28, 1)), url(${blog.image})` }}>
        <div className="container" data-aos="fade-up">
          <Link to="/blogs" className="back-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Articles
          </Link>
          <div className="blog-header-content">
            <span className="blog-category-tag">{blog.category}</span>
            <h1 className="blog-full-title">{blog.title}</h1>
            <div className="blog-full-meta">
              <div className="author-info">
                <div className="author-avatar">{blog.author.charAt(0)}</div>
                <span>By {blog.author}</span>
              </div>
              <span className="meta-separator">|</span>
              <span>{blog.date}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="blog-main-content">
        <div className="container">
          <div className="blog-content-wrapper" data-aos="fade-up" data-aos-delay="200">
            <div
              className="blog-text-content"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>
        </div>
      </section>

      {/* Related Blogs Section */}
      {relatedBlogs.length > 0 && (
        <section className="related-blogs-section">
          <div className="container">
            <h2 className="related-title">More Insights <span className="neon-text">For You</span></h2>
            <div className="blogs-grid">
              {relatedBlogs.map((b) => (
                <BlogCard key={b.id} blog={b} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="blog-cta-section">
        <div className="container" data-aos="zoom-in">
          <div className="cta-card">
            <h2>Grow your brand with <span className="neon-text">Blue Panda</span></h2>
            <p>Ready to turn these insights into impact? Let's build your growth engine together.</p>
            <button className="cta-primary-btn">Get Free Consultation</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogDetailsPage;
