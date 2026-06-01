from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BlogViewSet, SiteContentViewSet, ServiceViewSet, TestimonialViewSet

router = DefaultRouter()
router.register(r'site-content', SiteContentViewSet, basename='site-content')
router.register(r'services', ServiceViewSet, basename='service')
router.register(r'testimonials', TestimonialViewSet, basename='testimonial')
router.register(r'blogs', BlogViewSet, basename='blog')

urlpatterns = [
    path('', include(router.urls)),
]
