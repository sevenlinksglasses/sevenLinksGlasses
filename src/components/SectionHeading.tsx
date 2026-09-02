import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import Eyebrow from './Eyebrow';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string | ReactNode;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  /** Insert a line break after the first occurrence of this text (string titles only) */
  breakAfter?: string;
  /** 'mdUp' = break only on md+; 'all' = break on all screens */
  breakMode?: 'mdUp' | 'all';
}

const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
  breakAfter,
  breakMode = 'mdUp',
}: SectionHeadingProps) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  // Render title with an injected <br/> after `breakAfter` (strings only)
  const renderTitle = () => {
    if (typeof title !== 'string' || !breakAfter) return title;

    const idx = title.indexOf(breakAfter);
    if (idx === -1) return title;

    const before = title.slice(0, idx + breakAfter.length);
    const after = title.slice(idx + breakAfter.length);
    const brClass = breakMode === 'mdUp' ? 'hidden md:block' : 'block';

    return (
      <>
        {before}
        <br className={brClass} />
        {after}
      </>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`${alignmentClasses[align]} ${className}`}
    >
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Eyebrow text={eyebrow} />
        </motion.span>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl md:text-5xl font-400 font-montserrat text-white"
      >
        {renderTitle()}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xs px-10 md:px-0 text-text-muted leading-relaxed max-w-2xl mx-auto mt-4"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
