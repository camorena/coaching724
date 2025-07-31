import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { getCategories, getTags, BlogPost } from '@/data/blog';

interface BlogSidebarProps {
  recentPosts?: BlogPost[];
}

export const BlogSidebar: React.FC<BlogSidebarProps> = ({ recentPosts = [] }) => {
  const location = useLocation();
  const categories = getCategories();
  const tags = getTags();
  
  return (
    <div className="space-y-8">
      {/* Search */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-display font-semibold mb-4">Search</h3>
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-foreground/60 hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </CardContent>
      </Card>
      
      {/* Categories */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-display font-semibold mb-4">Categories</h3>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category}>
                <Link 
                  to={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`flex justify-between items-center transition-colors ${
                    location.pathname.includes(`/category/${category.toLowerCase().replace(/\s+/g, '-')}`)
                      ? 'text-primary font-medium'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  <span>{category}</span>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {/* Placeholder count - would be dynamic in real app */}
                    {Math.floor(Math.random() * 10) + 1}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      
      {/* Recent Posts */}
      {recentPosts.length > 0 && (
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-display font-semibold mb-4">Recent Posts</h3>
            <ul className="space-y-4">
              {recentPosts.map((post) => (
                <li key={post.id}>
                  <Link to={`/blog/${post.slug}`} className="flex group">
                    <img 
                      src={post.coverImage} 
                      alt={post.title} 
                      className="w-20 h-16 object-cover rounded-md mr-3 flex-shrink-0" 
                    />
                    <div>
                      <h4 className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-xs text-foreground/60 mt-1">
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
      
      {/* Tags */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-display font-semibold mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Link 
                key={tag}
                to={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                className={`inline-block px-3 py-1 text-xs rounded-full transition-colors ${
                  location.pathname.includes(`/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`)
                    ? 'bg-primary text-white'
                    : 'bg-muted text-foreground/70 hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {tag}
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
      
      {/* Newsletter Signup */}
      <Card className="bg-primary/5">
        <CardContent className="p-6">
          <h3 className="text-lg font-display font-semibold mb-2">Subscribe to Our Newsletter</h3>
          <p className="text-sm text-foreground/80 mb-4">Get the latest articles and resources straight to your inbox.</p>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <button 
              type="submit"
              className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-hover transition-colors"
            >
              Subscribe
            </button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
