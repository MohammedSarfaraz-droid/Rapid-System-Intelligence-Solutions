import { AnimatePresence } from 'framer-motion';
import { MobileServiceItem } from './MobileServiceItem';
import { MobileServiceContent } from './MobileServiceContent';

export const MobileServicesLayout = ({ services, activeServiceId, onServiceClick }) => (
  <section className="w-full bg-[#21201F] min-h-screen">
    <div className="max-w-4xl mx-auto">
      <div className="py-12 px-6">
        <h1 className="text-white text-3xl font-bold mb-8 text-center">Our Services</h1>
      </div>
      {services.map((service) => (
        <div key={service.id}>
          <MobileServiceItem
            service={service}
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
