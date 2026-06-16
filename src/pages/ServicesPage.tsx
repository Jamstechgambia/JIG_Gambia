import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Key, PenTool, Hammer, Package, MessageCircle, ArrowRight, Check } from 'lucide-react';
import { services, companyInfo } from '../data/content';

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  'MapPin': MapPin,
  'Key': Key,
  'PenTool': PenTool,
  'Hammer': Hammer,
  'Package': Package,
  'MessageCircle': MessageCircle,
};

export default function ServicesPage() {
  const getServiceIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName] || MapPin;
    return IconComponent;
  };

  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'Share your vision and requirements with our expert team',
    },
    {
      step: '02',
      title: 'Property Selection',
      description: 'Explore curated options that match your needs and budget',
    },
    {
      step: '03',
      title: 'Documentation',
      description: 'We handle all paperwork and legal requirements seamlessly',
    },
    {
      step: '04',
      title: 'Possession',
      description: 'Receive your property and begin your new chapter',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-36 pb-20 bg-primary-600">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Our Services
            </h1>
            <p className="text-xl text-primary-200">
              Comprehensive real estate solutions from land acquisition to construction and beyond
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = getServiceIcon(service.icon);
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card p-8 group hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-primary-600 font-medium text-sm group-hover:gap-3 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary-500 font-medium text-sm uppercase tracking-wider">How We Work</span>
            <h2 className="section-title mt-2">Our Process</h2>
            <p className="section-subtitle mx-auto mt-4">
              A simple, transparent journey to finding your perfect property
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative text-center"
              >
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-primary-200" />
                )}

                <div className="relative inline-block">
                  <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                    {step.step}
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-lg text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary-500 font-medium text-sm uppercase tracking-wider">Why JIG</span>
              <h2 className="section-title mt-2 mb-6">
                The JIG Gambia Advantage
              </h2>
              <p className="text-gray-600 mb-8">
                With years of experience and a dedicated team, we provide comprehensive real estate solutions. From finding your perfect property to building your dream home, we're with you every step of the way.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Expert Market Knowledge',
                  'Transparent Pricing',
                  'Full Legal Support',
                  'Quality Assurance',
                  'Flexible Payment Plans',
                  'Dedicated Customer Service',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 flex-shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link to="/contact" className="btn-primary">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="JIG Gambia Services"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-6 rounded-xl shadow-xl">
                <p className="text-sm text-primary-200">Since</p>
                <p className="text-3xl font-bold">{companyInfo.founded}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Property Journey?
            </h2>
            <p className="text-xl text-navy-300 mb-8 max-w-2xl mx-auto">
              Whether you're buying land, building a home, or need expert advice, we're here for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/properties" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                Browse Properties
              </Link>
              <Link to="/contact" className="btn-outline-white border-navy-700 text-navy-300 hover:bg-navy-800">
                Contact Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
