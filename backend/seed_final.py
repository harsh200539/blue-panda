import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'blue_panda_backend.settings')
django.setup()

from blogs.models import SiteContent, Service, Testimonial

def seed():
    print("Final Seeding Started...")
    
    # Site Content
    content_items = [
        # Hero
        {'key': 'hero_title', 'section': 'Hero', 'value': 'Transforming Brands with Blue Panda'},
        {'key': 'hero_description', 'section': 'Hero', 'value': 'Pandas do not just chill, we build brands with bold creativity and powerful digital strategies.'},
        # About
        {'key': 'about_tagline', 'section': 'About', 'value': 'Great Ideas Deserve To Be Seen!'},
        {'key': 'about_description', 'section': 'About', 'value': 'We are a digital marketing agency that helps brands shine online through creativity and strategy.'},
        # Contact
        {'key': 'contact_title', 'section': 'Contact', 'value': 'Have A Question On Your Mind?'},
        {'key': 'contact_email', 'section': 'Contact', 'value': 'bluepandamarketing30@gmail.com'},
        {'key': 'contact_phone', 'section': 'Contact', 'value': '+91 99093 98542'},
        {'key': 'contact_location', 'section': 'Contact', 'value': 'Vadodara, Gujarat'},
        {'key': 'contact_form_title', 'section': 'Contact', 'value': 'Join Us Today'},
        # Stats
        {'key': 'stats_title', 'section': 'Stats', 'value': 'Trusted By 200+ Happy Clients'},
        {'key': 'stats_done_count', 'section': 'Stats', 'value': '350+'},
        {'key': 'stats_team_count', 'section': 'Stats', 'value': '25+'},
        # Footer
        {'key': 'footer_description', 'section': 'Footer', 'value': "Pandas don't just chill, we build brands!"},
    ]
    
    for item in content_items:
        SiteContent.objects.update_or_create(key=item['key'], defaults=item)
        
    # Services
    services = [
        {'title': 'Social Media Marketing', 'description': 'Engaging identities that keep your audience connected.', 'order': 1},
        {'title': 'Graphic Design', 'description': 'Crafting visuals that leave a lasting impression.', 'order': 2},
        {'title': 'UI/UX Design', 'description': 'Seamless digital experiences that feel intuitive.', 'order': 3},
    ]
    
    for s in services:
        Service.objects.get_or_create(title=s['title'], defaults=s)
        
    print("Seeding Complete.")

if __name__ == "__main__":
    seed()
