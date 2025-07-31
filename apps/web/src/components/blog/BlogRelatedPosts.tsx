import React from 'react';
import { BlogCard } from './BlogCard';
import { BlogPost } from '@/data/blog';

interface BlogRelatedPostsProps {
  posts: BlogPost[];
  title?: string;
}

export const BlogRelatedPosts: React.FC<BlogRelatedPostsProps> = ({ 
  posts, 
  title = "Related Articles" 
}) => {
  if (posts.length === 0) return null;
  
  return (
    <section className="py-12">
      <h2 className="text-2xl font-display font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} variant="compact" />
        ))}
      </div>
    </section>
  );
};
