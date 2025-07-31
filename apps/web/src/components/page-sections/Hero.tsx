import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '../ui/button'

// Default hero image path
const DEFAULT_HERO_IMAGE = '/images/hero/hero.png'

interface HeroProps {
  title: string
  subtitle: string
  ctaText?: string
  ctaLink?: string
  secondaryCta?: {
    text: string
    link: string
  }
  image?: string
  imageAlt?: string
  backgroundClass?: string
  imageSize?: 'standard' | 'large' | 'fullwidth'
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText = 'Get Started',
  ctaLink = '/signup',
  secondaryCta,
  image = DEFAULT_HERO_IMAGE,
  imageAlt = 'Professional coaching services',
  backgroundClass = 'bg-gradient-subtle',
  imageSize = 'standard',
}) => {
  // Determine image container classes based on size prop
  const getImageContainerClasses = () => {
    switch (imageSize) {
      case 'large':
        return 'md:w-3/5 lg:w-2/3'
      case 'fullwidth':
        return 'md:w-full md:mt-12'
      default: // standard
        return 'md:w-1/2'
    }
  }

  // Determine content width based on image size
  const getContentClasses = () => {
    switch (imageSize) {
      case 'large':
        return 'md:w-2/5 lg:w-1/3'
      case 'fullwidth':
        return 'md:w-full md:text-center md:max-w-3xl md:mx-auto'
      default: // standard
        return 'md:w-1/2'
    }
  }

  // Determine image specific styling based on size
  const getImageClasses = () => {
    switch (imageSize) {
      case 'large':
        return 'w-full h-auto max-h-[550px] object-cover object-center'
      case 'fullwidth':
        return 'w-full h-auto max-h-[600px] object-cover object-center'
      default: // standard
        return 'w-full max-w-md h-auto object-cover object-center'
    }
  }

  // Check if we should render in fullwidth layout
  const isFullWidth = imageSize === 'fullwidth'

  return (
    <section className={`relative py-20 overflow-hidden ${backgroundClass}`}>
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${isFullWidth ? '' : 'md:flex-row'} items-center`}>
          <motion.div
            className={`${getContentClasses()} mb-10 md:mb-${isFullWidth ? '10' : '0'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-4 ${isFullWidth ? 'md:mx-auto' : ''}`}
            >
              {title}
            </h1>
            <p className={`text-lg md:text-xl mb-8 max-w-lg ${isFullWidth ? 'md:mx-auto' : ''}`}>
              {subtitle}
            </p>
            <div
              className={`flex flex-wrap gap-4 ${isFullWidth ? 'justify-center md:justify-center' : ''}`}
            >
              <Button size="lg">
                <Link to={ctaLink}>{ctaText}</Link>
              </Button>

              {secondaryCta && (
                <Button variant="outline" size="lg">
                  <Link to={secondaryCta.link}>{secondaryCta.text}</Link>
                </Button>
              )}
            </div>
          </motion.div>

          <motion.div
            className={`${getImageContainerClasses()} flex justify-center ${isFullWidth ? '' : 'md:justify-end'}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <img
                src={image}
                alt={imageAlt}
                className={`${getImageClasses()} rounded-lg shadow-lg relative z-10`}
              />

              {/* Enhanced decorative elements */}
              <div
                className={`absolute -bottom-4 -right-4 w-full h-full bg-primary/10 rounded-lg z-0 ${imageSize === 'fullwidth' ? 'hidden md:block' : ''}`}
              ></div>

              {/* Add extra visual elements for larger images */}
              {imageSize !== 'standard' && (
                <>
                  <div className="absolute -top-3 -left-3 w-24 h-24 bg-highlight/10 rounded-full z-0 hidden md:block"></div>
                  <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-secondary/10 rounded-full z-0 hidden md:block"></div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div
        className="absolute -bottom-1 left-0 right-0 h-16 bg-background"
        style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}
      ></div>
    </section>
  )
}
