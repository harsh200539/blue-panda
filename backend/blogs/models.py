from django.db import models
from django.utils.text import slugify
from django.contrib.auth.models import User
from ckeditor.fields import RichTextField

class Blog(models.Model):
    CATEGORY_CHOICES = [
        ('SEO & Search', 'SEO & Search'),
        ('Social Media Marketing', 'Social Media Marketing'),
        ('Paid Advertising (PPC)', 'Paid Advertising (PPC)'),
        ('Content Marketing', 'Content Marketing'),
        ('Branding & Identity', 'Branding & Identity'),
        ('Website & Conversion Optimizations', 'Website & Conversion Optimizations'),
        ('Email Marketing', 'Email Marketing'),
        ('Analytics & Reporting', 'Analytics & Reporting'),
        ('Local Marketing', 'Local Marketing'),
        ('Digital Marketing for Industries', 'Digital Marketing for Industries'),
    ]

    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique=True, blank=True)
    author = models.CharField(max_length=100) # Can be ForeignKey to User if preferred, sticking to user request for CharField or ForeignKey
    description = models.TextField()
    content = RichTextField()
    image = models.ImageField(upload_to='blogs/')
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_published = models.BooleanField(default=False)
    
    # SEO Fields
    meta_title = models.CharField(max_length=255, blank=True)
    meta_description = models.TextField(blank=True)
    keywords = models.CharField(max_length=255, blank=True)

    class Meta:
        ordering = ['-created_at']

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title

class SiteContent(models.Model):
    key = models.CharField(max_length=100, unique=True, help_text="Common key for this content (e.g., 'hero_title')")
    section = models.CharField(max_length=100, help_text="Page section (e.g., 'Home Hero')")
    value = models.TextField()
    is_html = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.section}: {self.key}"

    class Meta:
        verbose_name = "Site Content"
        verbose_name_plural = "Site Content"

class Service(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='services/', blank=True, null=True)
    image_url = models.URLField(max_length=500, blank=True, null=True, help_text="Fallback to external URL")
    order = models.IntegerField(default=0)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['order']

class Testimonial(models.Model):
    name = models.CharField(max_length=100)
    position = models.CharField(max_length=100, blank=True)
    text = models.TextField()
    avatar = models.ImageField(upload_to='avatars/', blank=True, null=True)
    rating = models.IntegerField(default=5)

    def __str__(self):
        return self.name
