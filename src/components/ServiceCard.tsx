import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Service } from '@/data/services';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      whileHover={{ y: -8 }}
      className="group h-fit"
    >
      <div className="bg-surface-muted rounded-2xl overflow-hidden border border-border/20 shadow-md hover:shadow-lg transition-all duration-300">
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden">
          <motion.img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
            decoding="async"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-text mb-3 group-hover:text-primary transition-colors duration-200">
            {service.title}
          </h3>
          
          <p className="text-text-muted leading-relaxed mb-6">
            {service.blurb}
          </p>

          {/* Learn More Link */}
          <motion.button
            className="flex items-center space-x-2 text-primary hover:text-primary-hover transition-colors duration-200 font-medium group/btn"
            whileHover={{ x: 5 }}
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </motion.button>
        </div>

        {/* Hover Border Effect */}
        <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 rounded-2xl transition-all duration-300 pointer-events-none" />
      </div>
    </motion.div>
  );
};

export default ServiceCard;