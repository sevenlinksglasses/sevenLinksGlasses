import { motion, AnimatePresence } from 'framer-motion';
import { Phone } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
}

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  onNavigate: (href: string) => void;
}

const MobileNav = ({ isOpen, onClose, navItems, onNavigate }: MobileNavProps) => {
  
  const toWhatsApp = () =>
    window.open('https://wa.me/971581085140', '_blank')
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-bg/80 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Mobile menu panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="fixed top-0 right-0 h-full w-80 max-w-sm bg-surface border-l border-border/20 z-50 glass"
          >
            <div className="flex flex-col h-full pt-20 pb-8 px-6">
              {/* Navigation Links */}
              <nav className="flex-1">
                <ul className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <button
                        onClick={() => onNavigate(item.href)}
                        className="w-full text-left py-3 px-4 text-text-muted hover:text-text hover:bg-surface-muted rounded-xl transition-all duration-200 font-medium"
                      >
                        {item.label}
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="pt-6 border-t border-border/20"
              >
                <button
                  onClick={toWhatsApp}
                  className="w-full flex items-center justify-center space-x-2 btn-primary"
                >
                  <Phone className="w-4 h-4" />
                  <span>Get Quote</span>
                </button>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;