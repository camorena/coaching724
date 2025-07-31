import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BlogPost } from '@/data/blog';

interface BlogCardProps {
  post: BlogPost;
  variant?: 'default' | 'featured' | 'compact';
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, variant = 'default' }) => {
  const isFeatured = variant === 'featured';
  const isCompact = variant === 'compact';
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  return (
    <Card className={`overflow-hidden transition-all duration-300 hover:shadow-md ${isFeatured ? 'lg:flex' : ''}`}>
      <div className={`${isFeatured ? 'lg:w-2/5' : ''}`}>
        <Link to={`/blog/${post.slug}`}>
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className={`w-full h-60 object-cover transition-transform duration-300 hover:scale-105 ${isFeatured ? 'lg:h-full' : ''}`} 
          />
        </Link>
      </div>
      <div className={`p-6 ${isFeatured ? 'lg:w-3/5' : ''}`}>
        <div className="flex flex-wrap gap-2 mb-3">
          {post.categories.slice(0, 2).map((category) => (
            <Badge key={category} variant="secondary" className="text-xs">
              {category}
            </Badge>
          ))}
        </div>
        <Link to={`/blog/${post.slug}`}>
          <h3 className={`font-display font-bold mb-2 hover:text-primary transition-colors ${isFeatured ? 'text-2xl' : 'text-xl'}`}>
            {post.title}
          </h3>
        </Link>
        {!isCompact && (
          <p className="text-foreground/80 mb-4">{post.excerpt}</p>
        )}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <img 
              src={post.author.avatar} 
              alt={post.author.name} 
              className="w-8 h-8 rounded-full mr-2 object-cover" 
            />
            <div>
              <p className="text-sm font-medium">{post.author.name}</p>
              <p className="text-xs text-foreground/60">
                {formatDate(post.publishedAt)} • {post.readTime} min read
              </p>
            </div>
          </div>
          {!isCompact && (
            <Link 
              to={`/blog/${post.slug}`}
              className="text-primary hover:text-primary-hover text-sm font-medium"
            >
              Read more
            </Link>
          )}
        </div>
      </div>
    </Card>
  );
};
