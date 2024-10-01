import { motion, AnimatePresence } from 'framer-motion';

export interface IAnimationFadeInProps {
  code: string;
  children: React.ReactNode;
  className?: string;
}
export function AnimationFadeIn({
  children,
  code,
  className,
}: IAnimationFadeInProps) {
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={code}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
