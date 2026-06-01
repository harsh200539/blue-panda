import os
import django

# Set up Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'blue_panda_backend.settings')
django.setup()

from blogs.models import Blog, SiteContent
from django.utils.text import slugify

# Sample data representing blogsData.js contents
blogs_to_migrate = [
    {
        "title": "Mastering Social Media in 2026",
        "slug": "mastering-social-media-2026",
        "description": "Discover the latest trends and algorithms that are shaping social media marketing this year.",
        "author": "Alex Rivera",
        "category": "Marketing",
        "content": """
          <p>Social media is evolving faster than ever. In 2026, the focus has shifted from mere visibility to deep community engagement. Algorithms now prioritize authentic interactions over passive consumption. This means that brands can no longer rely on simple broadcast methods; they must participate in the conversation or risk being left behind.</p>
          <h3>The Rise of AI-Driven Personalization</h3>
          <p>Personalization is at its peak with AI tailoring feeds to individual emotional states...</p>
        """,
        "is_published": True
    },
    {
        "title": "The Future of UI/UX: Glassmorphism and Beyond",
        "slug": "future-of-ui-ux-glassmorphism",
        "description": "Why transparency and depth are becoming the standard for premium digital interfaces.",
        "author": "Sarah Chen",
        "category": "Design",
        "content": "<p>Modern design is moving towards tactile, immersive experiences...</p>",
        "is_published": True
    },
    {
        "title": "Web Performance for High-Traffic Brands",
        "slug": "web-performance-high-traffic-brands",
        "description": "Ensuring your website remains lightning-fast while delivering rich, high-fidelity visuals.",
        "author": "James Wilson",
        "category": "Tech",
        "content": "<p>Speed is a feature. For a premium brand, a slow-loading site is a silent killer of conversions...</p>",
        "is_published": True
    },
    {
        "title": "Brand Storytelling through Video",
        "slug": "brand-storytelling-through-video",
        "description": "How powerful editing and narrative can transform your brand's digital presence.",
        "author": "Alex Rivera",
        "category": "Marketing",
        "content": "<p>Video is no longer just an option; it's the primary language of the internet...</p>",
        "is_published": True
    }
]

# Site Content to migrate
site_content_to_migrate = [
    {"key": "hero_title", "section": "Home Hero", "value": "Bold Creativity, Powered by Strategy", "is_html": False},
    {"key": "hero_subheading", "section": "Home Hero", "value": "We build digital experiences that move people and markets.", "is_html": False},
    {"key": "blogs_hero_title", "section": "Blogs Hero", "value": "Insights That Drive Growth", "is_html": False},
    {"key": "blogs_hero_subheading", "section": "Blogs Hero", "value": "Data-driven strategies, creative insights, and digital trends from our experts.", "is_html": False},
]

def migrate_data():
    print("Starting migration...")
    
    # Migrate Blogs
    for blog_data in blogs_to_migrate:
        blog, created = Blog.objects.get_or_create(
            slug=blog_data['slug'],
            defaults={
                'title': blog_data['title'],
                'description': blog_data['description'],
                'author': blog_data['author'],
                'category': blog_data['category'],
                'content': blog_data['content'],
                'is_published': blog_data['is_published']
            }
        )
        if created:
            print(f"Created blog: {blog.title}")
        else:
            print(f"Blog already exists: {blog.title}")

    # Migrate Site Content
    for content in site_content_to_migrate:
        item, created = SiteContent.objects.get_or_create(
            key=content['key'],
            defaults={
                'section': content['section'],
                'value': content['value'],
                'is_html': content['is_html']
            }
        )
        if created:
            print(f"Created site content: {item.key}")
        else:
            print(f"Site content already exists: {item.key}")

    print("Migration complete!")

if __name__ == "__main__":
    migrate_data()
