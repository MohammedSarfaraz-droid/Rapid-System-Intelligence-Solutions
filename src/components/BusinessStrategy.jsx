'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const strategies = [
  {
    title: "Small & Medium Businesses Startups",
    description: "From tech startups to Small & Medium Businesses, We help many enterprises and small and medium businesses save time and grow their businesses. We train an organization’s employees, both international and local, in different batches around the clock.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop", // Placeholder: Meeting/Startup
    link: "#"
  },
  {
    title: "Courses",
    description: "Training courses give your business a competitive edge, helping your organization gain and retain top talent, boosting employee experience, and increasing productivity and profits.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop", // Placeholder: Education/Classroom
    link: "#"
  },
  {
    title: "Consulting Support",
    description: "We provide Consulting support to Enterprises and SMBs around the globe in migrating their existing in-house data centers to IaaS/PaaS private/public clouds. We also provide consulting on Hybrid (partial private & public) clouds. We helped a couple of start-ups in architecting highly scalable SaaS products in a short span. We provide End-to-End consulting support for Tech start-ups around the globe.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop", // Placeholder: Consulting/Planning
    link: "#"
  }
];

const BusinessStrategy = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--brand-blue)] mb-12 text-center">
          Our Business Strategy
        </h2>
        
        <div className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-4 md:gap-8 pb-8 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
          {strategies.map((item, index) => (
            <motion.div
              key={index}
              className="min-w-[85vw] md:min-w-0 snap-center group flex flex-col h-full transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-xl cursor-pointer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Content Container */}
              <div className="flex-1 flex flex-col bg-white border border-[#E2E2E2] border-t-0 p-6 text-left transition-shadow duration-300 group-hover:shadow-lg">
                <h3 className="text-2xl font-[500] mb-3 uppercase leading-tight transition-colors duration-300 group-hover:text-[var(--brand-blue)] text-[var(--brand-text)]">
                  {item.title}
                </h3>
                
                <p className="text-[var(--brand-muted-text)] font-light leading-relaxed mb-6 flex-1">
                  {item.description}
                </p>
                
                {/* Learn More Button */}
                <a href={item.link} className="relative inline-flex items-center group/btn mt-auto self-start">
                  <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[var(--brand-gold)] opacity-85 transition-all duration-300 group-hover:w-[calc(100%+16px)] group-hover:opacity-100 group-hover:bg-black shadow-sm group-hover:shadow-md"></span>
                  <span className="relative z-10 text-sm text-[#1f2933] group-hover:text-white px-2  uppercase transition-colors duration-300">
                    Learn More
                  </span>
                  <ArrowRight className="relative z-10 w-5 h-5 text-[#1f2933] group-hover:text-[var(--brand-gold)] ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessStrategy;
