from django.contrib import admin
from django.utils.html import format_html
from .models import Blog, SiteContent, Service, Testimonial

@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'author', 'created_at', 'is_published', 'image_preview')
    list_filter = ('category', 'is_published', 'created_at')
    search_fields = ('title', 'content', 'description')
    prepopulated_fields = {'slug': ('title',)}
    readonly_fields = ('image_preview_large',)
    actions = ['make_published', 'make_unpublished']

    @admin.display(description='Preview')
    def image_preview(self, obj):
        if obj.image:
            return format_html('<img src="{}" style="width: 50px; height: auto; border-radius: 5px;" />', obj.image.url)
        return "No Image"

    @admin.display(description='Featured Image')
    def image_preview_large(self, obj):
        if obj.image:
            return format_html('<img src="{}" style="max-width: 300px; height: auto; border-radius: 10px;" />', obj.image.url)
        return "No Image"

    @admin.action(description='Publish selected blogs')
    def make_published(self, request, queryset):
        queryset.update(is_published=True)

    @admin.action(description='Unpublish selected blogs')
    def make_unpublished(self, request, queryset):
        queryset.update(is_published=False)

    fieldsets = (
        ('Article Content', {
            'fields': ('title', 'slug', 'author', 'category', 'description', 'content', 'image', 'image_preview_large')
        }),
        ('Status & SEO', {
            'fields': ('is_published', 'meta_title', 'meta_description', 'keywords'),
            'classes': ('collapse',),
        }),
    )

@admin.register(SiteContent)
class SiteContentAdmin(admin.ModelAdmin):
    list_display = ('key', 'section', 'is_html')
    list_filter = ('section',)
    search_fields = ('key', 'value', 'section')

@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('title', 'order')
    list_editable = ('order',)
    search_fields = ('title', 'description')

@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ('name', 'position', 'rating')
    list_filter = ('rating',)
    search_fields = ('name', 'text')
