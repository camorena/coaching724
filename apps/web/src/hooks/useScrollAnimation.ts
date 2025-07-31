import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation, Variant } from 'framer-motion';

interface ScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  variants?: {
    hidden: Variant;
    visible: Variant;
  };
}

export const useScrollAnimation = (options?: ScrollAnimationOptions) => {
  const {
    threshold = 0.1,
    triggerOnce = true,
    variants = {
      hidden: { opacity: 0, y: 20 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6 }
      }
    }
  } = options || {};

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold, triggerOnce });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return { ref, controls, variants };
};
