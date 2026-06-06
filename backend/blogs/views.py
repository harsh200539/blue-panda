from rest_framework import viewsets, permissions, filters, status
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Blog, SiteContent, Service, Testimonial
from .serializers import BlogListSerializer, BlogDetailSerializer, SiteContentSerializer, ServiceSerializer, TestimonialSerializer


class StaffWritePermission(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        return bool(request.user and request.user.is_staff)


class StaffAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        if not user.is_staff:
            return Response(
                {'detail': 'Only staff users can access the frontend admin panel.'},
                status=status.HTTP_403_FORBIDDEN,
            )
        token, _ = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user': {
                'id': user.pk,
                'username': user.username,
                'email': user.email,
                'is_staff': user.is_staff,
            },
        })


class CurrentAdminView(APIView):
    permission_classes = [permissions.IsAdminUser]

    def get(self, request):
        return Response({
            'id': request.user.pk,
            'username': request.user.username,
            'email': request.user.email,
            'is_staff': request.user.is_staff,
        })


class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all()
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['title', 'content', 'description']
    ordering_fields = ['created_at', 'title']
    lookup_field = 'slug'

    def get_serializer_class(self):
        if self.action == 'list' and not self.request.user.is_staff:
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
    queryset = SiteContent.objects.all().order_by('section', 'key')
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
    permission_classes = [StaffWritePermission]

class TestimonialViewSet(viewsets.ModelViewSet):
    queryset = Testimonial.objects.all().order_by('id')
    serializer_class = TestimonialSerializer
    permission_classes = [StaffWritePermission]
