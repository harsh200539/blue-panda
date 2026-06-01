import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCard.css';

const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card" data-aos="fade-up">
      <div className="blog-card-image">
        <img src={blog.image} alt={blog.title} />
        <div className="blog-category">{blog.category}</div>
      </div>
      <div className="blog-card-content">
        <div className="blog-meta">
          <span>{blog.date}</span>
          <span className="dot"></span>
          <span>{blog.author}</span>
        </div>
        <h3 className="blog-card-title">{blog.title}</h3>
        <p className="blog-card-description">{blog.description}</p>
        <Link to={`/blogs/${blog.slug}`} className="read-more-btn">
          Read More
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
