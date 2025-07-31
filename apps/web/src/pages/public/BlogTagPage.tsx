import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MainLayout } from '@/components/layout';
import { BlogCard } from '@/components/blog/BlogCard';
import { BlogSidebar } from '@/components/blog/BlogSidebar';
import { getTags, getPostsByTag, blogPosts } from '@/data/blog';
import { Button } from '@/components/ui/button';

const BlogTagPage: React.FC = () => {
  const { tag } = useParams<{ tag: string }>();
  const navigate = useNavigate();
  const [visiblePosts, setVisiblePosts] = useState(6);
  
  // Get tag name with proper capitalization
  const tagName = getTags().find(
    t => t.toLowerCase().replace(/\s+/g, '-') === tag
  );
  
  // Get posts for this tag
  const tagPosts = tagName 
    ? getPostsByTag(tagName)
    : [];
  
  const recentPosts = [...blogPosts]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 4);
  
  // If tag not found, navigate to blog index
  useEffect(() => {
    if (!tagName && tag) {
      navigate('/blog');
    }
  }, [tagName, tag, navigate]);
  
  const loadMorePosts = () => {
    setVisiblePosts(prev => Math.min(prev + 6, tagPosts.length));
  };
  
  if (!tagName) return null;
  
  return (
    <MainLayout
      title={`#${tagName} | Coaching724 Blog`}
      description={`Browse our collection of articles tagged with ${tagName} to enhance your knowledge and skills.`}
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary-hover mb-4 justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">#{tagName}</h1>
            <p className="text-xl">
              Explore articles tagged with #{tagName} to enhance your knowledge and skills.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Blog Posts */}
            <div className="lg:w-2/3">
              {tagPosts.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {tagPosts.slice(0, visiblePosts).map((post) => (
                      <BlogCard key={post.id} post={post} />
                    ))}
                  </div>
                  
                  {visiblePosts < tagPosts.length && (
                    <div className="text-center">
                      <Button onClick={loadMorePosts} variant="outline" size="lg">
                        Load More Articles
                      </Button>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-12">
                  <h2 className="text-2xl font-display font-bold mb-4">No Articles Found</h2>
                  <p className="text-foreground/70 mb-6">
                    We couldn't find any articles with this tag. Please check back later or explore other tags.
                  </p>
                  <Button>
                    <Link to="/blog">Browse All Articles</Link>
                  </Button>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              <BlogSidebar recentPosts={recentPosts} />
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-lg mb-6">
              Get the latest articles, resources, and coaching tips delivered straight to your inbox.
            </p>
            <form className="flex flex-col md:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default BlogTagPage;
