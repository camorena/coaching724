import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOOptions {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  twitterCard?: 'summary' | 'summary_large_image';
}

export const useSEO = (options: SEOOptions) => {
  const {
    title,
    description,
    keywords,
    ogImage,
    ogType = 'website',
    twitterCard = 'summary_large_image'
  } = options;
  
  const location = useLocation();
  const currentUrl = window.location.origin + location.pathname;
  
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta tags
    const metaTags = {
      description,
      keywords,
      'og:title': title,
      'og:description': description,
      'og:type': ogType,
      'og:url': currentUrl,
      'twitter:title': title,
      'twitter:description': description,
      'twitter:card': twitterCard,
    };
    
    if (ogImage) {
      metaTags['og:image'] = ogImage;
      metaTags['twitter:image'] = ogImage;
    }
    
    // Update existing meta tags or create new ones
    Object.entries(metaTags).forEach(([name, content]) => {
      if (!content) return;
      
      // Handle Open Graph tags
      if (name.startsWith('og:')) {
        let element = document.querySelector(`meta[property="${name}"]`);
        if (!element) {
          element = document.createElement('meta');
          element.setAttribute('property', name);
          document.head.appendChild(element);
        }
        element.setAttribute('content', content);
        return;
      }
      
      // Handle Twitter tags
      if (name.startsWith('twitter:')) {
        let element = document.querySelector(`meta[name="${name}"]`);
        if (!element) {
          element = document.createElement('meta');
          element.setAttribute('name', name);
          document.head.appendChild(element);
        }
        element.setAttribute('content', content);
        return;
      }
      
      // Handle regular meta tags
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    });
  }, [title, description, keywords, ogImage, ogType, twitterCard, currentUrl]);
};
