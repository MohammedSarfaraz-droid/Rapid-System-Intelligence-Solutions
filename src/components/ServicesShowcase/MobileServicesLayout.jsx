import { AnimatePresence } from 'framer-motion';
import { MobileServiceItem } from './MobileServiceItem';
import { MobileServiceContent } from './MobileServiceContent';

export const MobileServicesLayout = ({ services, activeServiceId, onServiceClick }) => (
  <section className="w-full bg-[var(--brand-blue)] min-h-screen">
    <div className="max-w-4xl mx-auto">
      <div className="py-12 px-6">
        <h1 className="text-white text-3xl font-bold text-center">Our Services</h1>
      </div>
      {services.map((service) => (
        <div key={service.id} className="mb-4 overflow-hidden  border border-white/10 bg-white/5 backdrop-blur-sm">
          <MobileServiceItem
            service={service}
            isOpen={activeServiceId === service.id}
            onClick={() => onServiceClick(service.id)}
          />
          <AnimatePresence>
            {activeServiceId === service.id && (
              <MobileServiceContent service={service} />
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  </section>
);
