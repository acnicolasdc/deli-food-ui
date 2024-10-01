import { motion, AnimatePresence } from 'framer-motion';

export interface IAnimationEnterProps {
  code: string;
  children: React.ReactNode;
  className?: string;
}
export function AnimationEnter({
  children,
  code,
  className,
}: IAnimationEnterProps) {
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={code}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
