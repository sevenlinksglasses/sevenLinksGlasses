import { motion } from 'framer-motion';
import { services } from '@/data/services';
import SectionHeading from './SectionHeading';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  return (
    <section id="services" className="section py-4 bg-surface">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Our Services"
          title="From Design To Execution, We've Got You Covered"
          breakAfter="Execution,"
          breakMode="all"            // or omit for md+ only
          subtitle="Comprehensive glass and aluminium solutions tailored to your needs"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>

        {/* Additional Services CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-12"
        >
          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Discuss Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;