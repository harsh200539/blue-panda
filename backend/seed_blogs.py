import os
import django
from django.core.files.uploadedfile import SimpleUploadedFile

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'blue_panda_backend.settings')
django.setup()

from blogs.models import Blog

# Tiny 1x1 transparent GIF image content
GIF_CONTENT = b'\x47\x49\x46\x38\x39\x61\x01\x00\x01\x00\x80\x00\x00\x00\x00\x00\xff\xff\xff\x21\xf9\x04\x01\x00\x00\x00\x00\x2c\x00\x00\x00\x00\x01\x00\x01\x00\x00\x02\x02\x44\x01\x00\x3b'

def seed_blogs():
    print("Seeding Blogs...")
    
    blogs_to_seed = [
        {
            "slug": "mastering-social-media-2026",
            "title": "Mastering Social Media in 2026",
            "meta_title": "Mastering Social Media in 2026 | Blue Panda Blog",
            "meta_description": "Learn the top social media trends of 2026, from AI content to micro-communities. Boost your brand with Blue Panda's expert strategies.",
            "keywords": "social media trends 2026, digital marketing, AI content, micro-communities, brand engagement",
            "description": "Discover the latest trends and algorithms that are shaping social media marketing this year.",
            "content": """
              <p>Social media is evolving faster than ever. In 2026, the focus has shifted from mere visibility to deep community engagement. Algorithms now prioritize authentic interactions over passive consumption. This means that brands can no longer rely on simple broadcast methods; they must participate in the conversation or risk being left behind.</p>
              <h3>The Rise of AI-Driven Personalization</h3>
              <p>Personalization is at its peak with AI tailoring feeds to individual emotional states. Imagine a user scrolling through their feed and seeing content that doesn't just match their interests, but their current mood. AI models are now capable of analyzing subtle behavioral cues to determine if a user needs inspiration, entertainment, or a solution to a problem, serving content accordingly.</p>
              <h3>The Power of Micro-Communities</h3>
              <p>Smaller, niche groups are becoming more powerful than massive, generic followings. These "digital campfires" are where real trust is built. For brands, this means moving away from mass-market campaigns towards hyper-targeted strategies that resonate with specific subsets of their audience. In 2026, 1,000 highly engaged followers in a niche group are worth more than 100,000 passive followers on a general page.</p>
              <p><strong>Actionable Tips for 2026:</strong></p>
              <ul>
                <li><strong>Focus on Discord and niche forums:</strong> Meet your audience where they feel safe and heard.</li>
                <li><strong>Invest in AI Co-Creation:</strong> Use AI to brainstorm and refine ideas, but keep the human voice for final execution.</li>
                <li><strong>Measure Sentiment, Not Just Clicks:</strong> High click-through rates don't always equal high brand affinity. Use emotional analytics to gauge success.</li>
              </ul>
              <h3>Short-Form Storytelling: The New Narrative</h3>
              <p>15-second narratives that offer immediate value or emotional resonance are winning. This isn't just about "going viral"; it's about consistent value delivery in bite-sized chunks. Multi-part series and "day-in-the-life" transparency are the formats that build long-term loyalty.</p>
              <p>To stay ahead, brands must be agile, responsive, and above all, human. At Blue Panda, we leverage these insights to help our clients build lasting connections.</p>
            """,
            "author": "Alex Rivera",
            "category": "Marketing",
            "is_published": True
        },
        {
            "slug": "future-of-ui-ux-glassmorphism",
            "title": "The Future of UI/UX: Glassmorphism and Beyond",
            "meta_title": "Glassmorphism & The Future of UI/UX Design | Blue Panda",
            "meta_description": "Explore why glassmorphism is becoming the standard for premium UI design. Learn how transparency and depth enhance digital experiences.",
            "keywords": "UI/UX design, glassmorphism, design trends, premium interfaces, digital experience",
            "description": "Why transparency and depth are becoming the standard for premium digital interfaces.",
            "content": """
              <p>Modern design is moving towards tactile, immersive experiences. Glassmorphism, characterized by background blur and transparency, offers a sense of depth that feels both futuristic and organic. This aesthetic trend has taken over high-end SaaS platforms and mobile OS interfaces, providing a layer of sophistication that flat design simply lacks.</p>
              <h3>Why Glassmorphism Works</h3>
              <p>Layers help users understand hierarchy without cognitive overload. When used correctly, glassmorphism creates a premium feel that distinguishes high-end brands from the competition. It simulates physical depth, allowing the eye to naturally categorize foreground and background elements. However, the key to successful glassmorphism is subtlety—too much blur or too high a transparency can lead to readability issues.</p>
              <h3>Beyond the Blur: Neo-Tactile Elements</h3>
              <p>In 2026, we are seeing a shift towards "Neo-Skeuomorphism"—a blend of flat-glass aesthetics with physical-world textures. Think of a digital button that has the subtle reflection of brushed aluminum or the soft glow of a real-world LED. These micro-details increase user satisfaction by making the interface feel "alive" and responsive to touch or mouse movement.</p>
              <p><strong>Design Principles for High-End UX:</strong></p>
              <ul>
                <li><strong>Respect Accessibility:</strong> Ensure contrast ratios remain high, even over blurred backgrounds.</li>
                <li><strong>Logical Depth:</strong> Use z-index and blur levels to represent the actual importance of information.</li>
                <li><strong>Soft Gradients:</strong> Avoid harsh color transitions; use multi-stop gradients for a more premium look.</li>
              </ul>
              <p>In this blog, we explored how to implement these effects without sacrificing performance. The future of UI is not just about looking good—it's about feeling right.</p>
            """,
            "author": "Sarah Chen",
            "category": "Design",
            "is_published": True
        },
        {
            "slug": "web-performance-high-traffic-brands",
            "title": "Web Performance for High-Traffic Brands",
            "meta_title": "High-Performance Web Strategies for Premium Brands | Blue Panda",
            "meta_description": "Learn how to maintain lightning-fast speeds while delivering high-fidelity visuals. Web optimization secrets for high-traffic brands.",
            "keywords": "web performance, site speed, react optimization, high-traffic websites, premium branding",
            "description": "Ensuring your website remains lightning-fast while delivering rich, high-fidelity visuals.",
            "content": """
              <p>Speed is a feature. For a premium brand, a slow-loading site is a silent killer of conversions. Studies show that even a 100ms delay can lead to a 7% drop in conversion rates. But how do you balance rich animations, dynamic gradient blobs, and high-fidelity AI hero images with sub-second load times?</p>
              <h3>The Art of Lazy Optimization</h3>
              <p>Optimization is key. From lazy loading and image compression to efficient React patterns, every millisecond counts. In 2026, "Image Proxies" and edge-computing transformations are the standard. Instead of serving one large file, modern systems serve dynamically resized and transcoded versions based on the user's specific device and connection speed.</p>
              <h3>React Rendering Strategies</h3>
              <p>For high-traffic sites, client-side rendering is often not enough. We advocate for a hybrid approach—Server-Side Rendering (SSR) for initial load and hydration, followed by optimized client-side interactions. This ensures that users see the content immediately while still getting a rich, interactive experience once the JS has loaded.</p>
              <p><strong>Performance Checklist:</strong></p>
              <ul>
                <li><strong>Web Vitals Priority:</strong> Focus on LCP (Largest Contentful Paint) and CLS (Cumulative Layout Shift).</li>
                <li><strong>Bundle Splitting:</strong> Don't force users to download code for pages they aren't visiting.</li>
                <li><strong>Font Optimization:</strong> Use 'swap' display and subsetted fonts to avoid loading delays.</li>
                <li><strong>Dynamic Caching:</strong> Leverage Service Workers and Edge Caching to serve returning visitors instantly.</li>
              </ul>
              <p>At Blue Panda, we believe that performance is the foundation of digital excellence. A fast site isn't just about SEO—it's about respecting the user's time.</p>
            """,
            "author": "James Wilson",
            "category": "Tech",
            "is_published": True
        },
        {
            "slug": "brand-storytelling-through-video",
            "title": "Brand Storytelling through Video",
            "meta_title": "Power of Brand Storytelling: Video Strategies | Blue Panda",
            "meta_description": "Transform your digital presence with story-driven video content. Learn about narrative, color grading, and sound design for brands.",
            "keywords": "video marketing, brand storytelling, video production, digital presence, connection",
            "description": "How powerful editing and narrative can transform your brand's digital presence.",
            "content": """
              <p>Video is no longer just an option; it's the primary language of the internet. A well-told story can turn a viewer into a loyal customer in just a few minutes. However, the market is saturated with "good" content. To stand out, brands must create "unforgettable" content that relies on deep human narratives.</p>
              <h3>The Science of Emotional Narrative</h3>
              <p>We discuss the importance of narrative structure, color grading, and sound design in creating an emotional bond with your audience. A story is not just a sequence of events; it's a journey from a problem to a solution, or an exploration of a value. By using cinematic techniques like color psychology, brands can subconsciously influence how their message is received.</p>
              <h3>Sound: The Often Overlooked Hero</h3>
              <p>Sound design can make or break a video. In a mobile-first world, many watch with sound off, so visual storytelling is vital. But for those who do listen, high-quality audio and a compelling score can increase engagement by up to 50%. It's about creating a multisensory experience that sticks.</p>
              <p><strong>Mastering Video in 2026:</strong></p>
              <ul>
                <li><strong>The First 3 Seconds:</strong> Your hook must be immediate—either a visual shock or an intriguing question.</li>
                <li><strong>Subtitles are Non-Negotiable:</strong> 80% of social video is consumed on mute. Stay readable.</li>
                <li><strong>High-Fidelity vs. Authenticity:</strong> Find the balance. Sometimes a raw, smartphone-shot clip is more powerful than a $50k production.</li>
              </ul>
              <p>Storytelling is what makes us human. When a brand tells a story, they aren't just selling a product—they are starting a relationship.</p>
            """,
            "author": "Alex Rivera",
            "category": "Marketing",
            "is_published": True
        }
    ]
    
    for b in blogs_to_seed:
        img_name = f"{b['slug']}.gif"
        uploaded_image = SimpleUploadedFile(img_name, GIF_CONTENT, content_type="image/gif")
        
        # We search by slug to create or update
        obj, created = Blog.objects.get_or_create(
            slug=b["slug"],
            defaults={
                "title": b["title"],
                "meta_title": b["meta_title"],
                "meta_description": b["meta_description"],
                "keywords": b["keywords"],
                "description": b["description"],
                "content": b["content"],
                "author": b["author"],
                "category": b["category"],
                "image": uploaded_image,
                "is_published": b["is_published"]
            }
        )
        if not created:
            obj.title = b["title"]
            obj.meta_title = b["meta_title"]
            obj.meta_description = b["meta_description"]
            obj.keywords = b["keywords"]
            obj.description = b["description"]
            obj.content = b["content"]
            obj.author = b["author"]
            obj.category = b["category"]
            obj.is_published = b["is_published"]
            if not obj.image:
                obj.image = uploaded_image
            obj.save()
            print(f"Updated blog: {obj.title}")
        else:
            print(f"Created blog: {obj.title}")
            
    print("Blogs Seeding Complete.")

if __name__ == "__main__":
    seed_blogs()
