import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const ScrollAnimation = ({
  children,
  delay = 0,
  className = '',
  type = 'fadeUp',
  duration = 0.6,
  threshold = 0.1,
  amount = 0.1
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: threshold,
    rootMargin: '-50px 0px',
  });

  const getVariants = () => {
    switch (type) {
      case 'fadeIn':
        return {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              duration: duration,
              delay: delay,
              ease: [0.16, 1, 0.3, 1],
            },
          },
        };
      case 'fadeUp':
        return {
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: duration,
              delay: delay,
              ease: [0.16, 1, 0.3, 1],
            },
          },
        };
      case 'fadeLeft':
        return {
          hidden: { opacity: 0, x: -50 },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              duration: duration,
              delay: delay,
              ease: [0.16, 1, 0.3, 1],
            },
          },
        };
      case 'fadeRight':
        return {
          hidden: { opacity: 0, x: 50 },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              duration: duration,
              delay: delay,
              ease: [0.16, 1, 0.3, 1],
            },
          },
        };
      case 'scaleUp':
        return {
          hidden: { opacity: 0, scale: 0.95 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              duration: duration,
              delay: delay,
              ease: [0.16, 1, 0.3, 1],
            },
          },
        };
      case 'staggerChildren':
        return {
          hidden: { opacity: 1 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: delay,
            },
          },
        };
      default:
        return {
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: duration,
              delay: delay,
              ease: [0.16, 1, 0.3, 1],
            },
          },
        };
    }
  };

  const variants = getVariants();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
      viewport={{ amount: amount, once: true }}
    >
      {children}
    </motion.div>
  );
};

// Child component for staggered animations
export const StaggerChild = ({ children, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1],
        },
      },
    }}
    className={className}
  >
    {children}
  </motion.div>
);
