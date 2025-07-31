import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { MainLayout } from '@/components/layout';
import { BlogSidebar, BlogRelatedPosts, BlogShareButtons } from '@/components/blog';
import { getBlogPostBySlug, getRelatedPosts, blogPosts } from '@/data/blog';
import { Badge } from '@/components/ui/badge';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = getBlogPostBySlug(slug || '');
  const relatedPosts = post ? getRelatedPosts(post.id) : [];
  const recentPosts = [...blogPosts]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .filter(p => p.id !== post?.id)
    .slice(0, 4);
  
  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  // If post not found, navigate to blog index
  useEffect(() => {
    if (!post && slug) {
      navigate('/blog');
    }
  }, [post, slug, navigate]);
  
  if (!post) return null;
  
  return (
    <MainLayout
      title={`${post.title} | Coaching724 Blog`}
      description={post.excerpt}
    >
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary-hover mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Blog
            </Link>
            
            <div className="flex flex-wrap gap-2 mb-3">
              {post.categories.map((category) => (
                <Badge key={category} variant="secondary" className="text-xs">
                  <Link to={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}>
                    {category}
                  </Link>
                </Badge>
              ))}
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">{post.title}</h1>
            
            <div className="flex items-center mb-6">
              <img 
                src={post.author.avatar} 
                alt={post.author.name} 
                className="w-12 h-12 rounded-full mr-4 object-cover" 
              />
              <div>
                <p className="font-medium">{post.author.name}</p>
                <p className="text-sm text-foreground/70">
                  {post.author.title} • {formatDate(post.publishedAt)} • {post.readTime} min read
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Cover Image */}
      <div className="w-full h-96 bg-muted relative">
        <img 
          src={post.coverImage} 
          alt={post.title} 
          className="w-full h-full object-cover" 
        />
      </div>
      
      {/* Main Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Article Content */}
            <div className="lg:w-2/3">
              {/* Vertical Share Buttons (for desktop) */}
              <div className="hidden lg:block fixed left-8 top-1/2 transform -translate-y-1/2">
                <BlogShareButtons url={window.location.href} title={post.title} vertical={true} />
              </div>
              
              {/* Article Body */}
              <article className="max-w-3xl mx-auto">
                {/* Horizontal Share Buttons (for mobile) */}
                <div className="mb-6 lg:hidden">
                  <BlogShareButtons url={window.location.href} title={post.title} />
                </div>
                
                {/* Render Content */}
                <div className="prose prose-lg max-w-none">
                  {post.content.split('\n\n').map((paragraph, index) => {
                    // Check if paragraph is a heading
                    if (paragraph.startsWith('# ')) {
                      return <h1 key={index} className="text-3xl font-display font-bold mt-8 mb-4">{paragraph.replace('# ', '')}</h1>;
                    } else if (paragraph.startsWith('## ')) {
                      return <h2 key={index} className="text-2xl font-display font-bold mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
                    } else if (paragraph.startsWith('### ')) {
                      return <h3 key={index} className="text-xl font-display font-bold mt-6 mb-3">{paragraph.replace('### ', '')}</h3>;
                    } else if (paragraph.startsWith('- ')) {
                      // Handle list items
                      const items = paragraph.split('\n').map(item => item.replace('- ', ''));
                      return (
                        <ul key={index} className="list-disc pl-5 my-4">
                          {items.map((item, i) => <li key={i} className="mb-1">{item}</li>)}
                        </ul>
                      );
                    } else {
                      return <p key={index} className="mb-4">{paragraph}</p>;
                    }
                  })}
                </div>
                
                {/* Tags */}
                <div className="mt-8 border-t border-b py-6 border-muted-foreground/20">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-medium">Tags:</span>
                    {post.tags.map((tag) => (
                      <Link 
                        key={tag}
                        to={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                        className="px-3 py-1 bg-muted text-foreground/70 text-xs rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
                
                {/* Author Bio */}
                <div className="mt-8 bg-muted/30 rounded-lg p-6">
                  <div className="flex items-center">
                    <img 
                      src={post.author.avatar} 
                      alt={post.author.name} 
                      className="w-16 h-16 rounded-full mr-4 object-cover" 
                    />
                    <div>
                      <h3 className="font-display font-bold text-lg">{post.author.name}</h3>
                      <p className="text-foreground/70">{post.author.title}</p>
                    </div>
                  </div>
                  <p className="mt-4">
                    {post.author.name} is a passionate coach specializing in {post.categories.join(' and ')}. 
                    With years of experience helping clients achieve their goals, they bring practical insights 
                    and evidence-based strategies to their coaching practice.
                  </p>
                </div>
                
                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <BlogRelatedPosts posts={relatedPosts} />
                )}
              </article>
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
            <h2 className="text-3xl font-display font-bold mb-4">Enjoyed This Article?</h2>
            <p className="text-lg mb-6">
              Subscribe to our newsletter to receive more insights, tips, and resources.
            </p>
            <form className="flex flex-col md:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button
                type="submit"
                className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-hover transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default BlogPostPage;
