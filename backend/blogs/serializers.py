from rest_framework import serializers
from .models import Blog, SiteContent, Service, Testimonial

class BlogListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ['id', 'title', 'slug', 'description', 'image', 'category', 'author', 'date', 'is_published']
    
    # Custom field to match React frontend data structure if needed
    date = serializers.DateTimeField(source='created_at', format="%B %d, %Y")

class BlogDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = '__all__'
    
    date = serializers.DateTimeField(source='created_at', format="%B %d, %Y")

class SiteContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteContent
        fields = ['key', 'section', 'value', 'is_html']

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'

class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = '__all__'
