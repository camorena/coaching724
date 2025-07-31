import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
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
        <Link to={`/blog/${
