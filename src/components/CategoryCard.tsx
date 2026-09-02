import { motion } from 'framer-motion';
import { Category } from '@/data/categories';

interface CategoryCardProps {
  category: Category;
  index: number;
}

const CategoryCard = ({ category, index }: CategoryCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-2xl bg-surface border border-border/20 shadow-md hover:shadow-lg transition-all duration-300">
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={category.image}
            alt={category.alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
            decoding="async"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-lg font-semibold text-text group-hover:text-primary transition-colors duration-200">
            {category.title}
          </h3>
        </div>

        {/* Hover Effect */}
        <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 rounded-2xl transition-all duration-300" />
      </div>
    </motion.div>
  );
};

export default CategoryCard;