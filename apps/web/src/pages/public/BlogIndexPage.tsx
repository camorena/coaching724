import React, { useState } from 'react';
import { MainLayout } from '@/components/layout';
import { BlogCard } from '@/components/blog/BlogCard';
import { BlogSidebar } from '@/components/blog/BlogSidebar';
import { blogPosts, getCategories } from '@/data/blog';
import { Button } from '@/components/ui/button';

const BlogIndexPage: React.FC = () => {
  const [visiblePosts, setVisiblePosts] = useState(6);
  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);
  const recentPosts = [...blogPosts].sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  ).slice(0, 4);
  
  const loadMorePosts = () => {
    setVisiblePosts(prev => Math.min(prev + 6, regularPosts.length));
  };
  
  return (
    <MainLayout
      title="Blog | Coaching724"
      description="Explore our collection of articles on leadership, career development, personal growth, and more."
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">The Coaching724 Blog</h1>
            <p className="text-xl">
              Insights, strategies, and inspiration to help you achieve your personal and professional goals.
            </p>
          </div>
        </div>
      </section>
      
      {/* Featured Post */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-display font-bold mb-6">Featured Article</h2>
          <BlogCard post={featuredPost} variant="featured" />
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Blog Posts */}
            <div className="lg:w-2/3">
              <h2 className="text-2xl font-display font-bold mb-6">Latest Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {regularPosts.slice(0, visiblePosts).map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
              
              {visiblePosts < regularPosts.length && (
                <div className="text-center">
                  <Button onClick={loadMorePosts} variant="outline" size="lg">
                    Load More Articles
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
      
      {/* Categories Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-display font-bold mb-6">Browse by Category</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {getCategories().map((category) => (
                <a 
                  key={category}
                  href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-6 py-3 bg-background rounded-lg hover:bg-primary hover:text-white transition-colors"
                >
                  {category}
                </a>
              ))}
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

export default BlogIndexPage;
