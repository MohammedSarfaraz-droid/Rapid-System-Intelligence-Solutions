import { AnimatePresence } from 'framer-motion';
import { StackedServicePanel } from './StackedServicePanel';
import { ExpandedServicePanel } from './ExpandedServicePanel';

export const DesktopServicesLayout = ({ services, activeServiceId, onServiceClick, isExpandingFromRight }) => (
  <section className="w-full h-screen bg-white overflow-hidden">
    <div className="h-full flex relative">
      <AnimatePresence mode="popLayout">
        {services.map((service) => (
          service.id === activeServiceId ? (
            <ExpandedServicePanel 
              key={service.id} 
              service={service}
              isExiting={false}
              isRightSide={isExpandingFromRight}
            />
          ) : (
            <StackedServicePanel
              key={service.id}
              service={service}
              onClick={() => onServiceClick(service.id)}
            />
          )
        ))}
      </AnimatePresence>
    </div>
  </section>
);
