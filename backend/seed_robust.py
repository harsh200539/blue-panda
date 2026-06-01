import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'blue_panda_backend.settings')
django.setup()

from blogs.models import SiteContent

def run():
    print("Starting reliable seeding...")
    items = [
        {'key': 'footer_description', 'section': 'Footer', 'value': "Pandas don't just chill, we build brands!"},
        {'key': 'services_title', 'section': 'About', 'value': 'What We Do'},
        {'key': 'services_subtitle', 'section': 'About', 'value': 'At Blue Panda, We Turn Ideas Into Digital Experiences That Connect, Convert, And Create Long-Term Impact.'},
    ]
    for item in items:
        obj, created = SiteContent.objects.get_or_create(key=item['key'], defaults=item)
        if not created:
            obj.value = item['value']
            obj.section = item['section']
            obj.save()
    print("Done.")

if __name__ == "__main__":
    run()
