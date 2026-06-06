from django.contrib.auth.models import User
from django.core.files.uploadedfile import SimpleUploadedFile
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

from .models import Blog, Service, SiteContent


class AdminApiTests(APITestCase):
    def setUp(self):
        self.staff = User.objects.create_user(
            username='admin',
            password='strong-test-password',
            is_staff=True,
        )
        self.regular_user = User.objects.create_user(
            username='visitor',
            password='strong-test-password',
        )

    def test_staff_can_login_and_update_shared_site_content(self):
        content = SiteContent.objects.create(
            key='hero_title',
            section='Hero',
            value='Original',
        )
        login_response = self.client.post(reverse('admin-login'), {
            'username': 'admin',
            'password': 'strong-test-password',
        })

        self.assertEqual(login_response.status_code, status.HTTP_200_OK)
        self.client.credentials(HTTP_AUTHORIZATION=f"Token {login_response.data['token']}")
        update_response = self.client.patch(
            f'/api/site-content/{content.key}/',
            {'value': 'Updated from frontend admin'},
            format='json',
        )

        self.assertEqual(update_response.status_code, status.HTTP_200_OK)
        content.refresh_from_db()
        self.assertEqual(content.value, 'Updated from frontend admin')

    def test_non_staff_user_cannot_login_to_frontend_admin(self):
        response = self.client.post(reverse('admin-login'), {
            'username': 'visitor',
            'password': 'strong-test-password',
        })

        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    def test_anonymous_user_cannot_create_service(self):
        response = self.client.post('/api/services/', {
            'title': 'New Service',
            'description': 'Should not be created',
            'order': 1,
        })

        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertFalse(Service.objects.filter(title='New Service').exists())

    def test_staff_blog_list_contains_fields_needed_by_editor(self):
        Blog.objects.create(
            title='Editable article',
            author='Blue Panda',
            description='Description',
            content='<p>Full article body</p>',
            image='blogs/test.jpg',
            category='SEO & Search',
        )
        self.client.force_authenticate(self.staff)

        response = self.client.get('/api/blogs/')

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['results'][0]['content'], '<p>Full article body</p>')
        self.assertIn('meta_description', response.data['results'][0])

    def test_staff_can_create_blog_without_supplying_generated_date(self):
        self.client.force_authenticate(self.staff)
        image = SimpleUploadedFile(
            'test.gif',
            b'GIF89a\x01\x00\x01\x00\x80\x00\x00\x00\x00\x00\xff\xff\xff!'
            b'\xf9\x04\x01\x00\x00\x00\x00,\x00\x00\x00\x00\x01\x00\x01\x00'
            b'\x00\x02\x02D\x01\x00;',
            content_type='image/gif',
        )

        response = self.client.post('/api/blogs/', {
            'title': 'Created in frontend admin',
            'author': 'Blue Panda',
            'description': 'Description',
            'content': '<p>Article</p>',
            'image': image,
            'category': 'SEO & Search',
            'is_published': True,
        }, format='multipart')

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        blog = Blog.objects.get(slug='created-in-frontend-admin')
        self.assertTrue(blog.image)
        blog.image.delete(save=False)

    def test_all_approved_blog_categories_are_exposed_by_serializer(self):
        expected_categories = [
            'SEO & Search',
            'Social Media Marketing',
            'Paid Advertising (PPC)',
            'Content Marketing',
            'Branding & Identity',
            'Website & Conversion Optimizations',
            'Email Marketing',
            'Analytics & Reporting',
            'Local Marketing',
            'Digital Marketing for Industries',
        ]

        self.client.force_authenticate(self.staff)
        response = self.client.options('/api/blogs/')
        choices = response.data['actions']['POST']['category']['choices']

        self.assertEqual([choice['value'] for choice in choices], expected_categories)
