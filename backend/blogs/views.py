from rest_framework import viewsets, permissions, filters
from .models import Blog, SiteContent, Service, Testimonial
from .serializers import BlogListSerializer, BlogDetailSerializer, SiteContentSerializer, ServiceSerializer, TestimonialSerializer

class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['title', 'content', 'description']
    ordering_fields = ['created_at', 'title']
    lookup_field = 'slug'

    def get_serializer_class(self):
        if self.action == 'list':
            return BlogListSerializer
        return BlogDetailSerializer

    def get_queryset(self):
        queryset = Blog.objects.all()
        category = self.request.query_params.get('category')
        
        # Public users only see published blogs
        if not self.request.user.is_staff:
            queryset = queryset.filter(is_published=True)
            
        if category:
            queryset = queryset.filter(category=category)
            
        return queryset

    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            permission_classes = [permissions.AllowAny]
        else:
            permission_classes = [permissions.IsAdminUser]
        return [permission() for permission in permission_classes]

class SiteContentViewSet(viewsets.ModelViewSet):
    queryset = SiteContent.objects.all()
    serializer_class = SiteContentSerializer
    lookup_field = 'key'

    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            permission_classes = [permissions.AllowAny]
        else:
            permission_classes = [permissions.IsAdminUser]
        return [permission() for permission in permission_classes]

class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class TestimonialViewSet(viewsets.ModelViewSet):
    queryset = Testimonial.objects.all()
    serializer_class = TestimonialSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
