import os
import django

# Set up Django environment properly
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'blue_panda_backend.settings')
django.setup()

from blogs.models import SiteContent, Service, Testimonial

# Additional Site Content to migrate
extra_site_content = [
    {"key": "about_tagline", "section": "About Section 1", "value": "Blue Panda Was Born From A Simple Belief - Great Ideas Deserve To Be Seen!", "is_html": False},
    {"key": "about_description", "section": "About Section 1", "value": "We Started As A Small Team Passionate About Creativity, Strategy, And Storytelling, And Grew Into A Digital Marketing Agency That Helps Brands Shine Online.", "is_html": False},
    {"key": "mission_title", "section": "About Section 2", "value": "Our Mission", "is_html": False},
    {"key": "mission_text", "section": "About Section 2", "value": "To empower brands through innovative digital solutions that bridge the gap between imagination and execution.", "is_html": False},
]

# Services to migrate
services_to_migrate = [
    {
        "title": "Social Media",
        "description": "We Build Engaging Social Media Identities That Keep Your Audience Connected And Your Brand Top-Of-Mind.",
        "image_url": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop",
        "order": 1
    },
    {
        "title": "Design",
        "description": "From Branding To Creatives, We Craft Visuals That Speak For You And Leave A Lasting Impression.",
        "image_url": "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
        "order": 2
    },
    {
        "title": "UI/UX",
        "description": "We Design Seamless, User-Friendly Digital Experiences That Feel Intuitive And Elevate Every Interaction.",
        "image_url": "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400&h=300&fit=crop",
        "order": 3
    }
]

def migrate():
    print("Seeding extra content...")
    for content in extra_site_content:
        SiteContent.objects.get_or_create(key=content['key'], defaults=content)
    
    for s in services_to_migrate:
        Service.objects.get_or_create(title=s['title'], defaults=s)
        
    print("Seeding complete.")

if __name__ == "__main__":
    migrate()
