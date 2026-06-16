import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Eye, Award, ArrowRight, Users, Shield, Heart } from 'lucide-react';
import { team } from '../data/content';

export default function AboutPage() {
  const timeline = [
    { year: '2019', title: 'Founded', description: 'JIG Real Estate was established in The Gambia' },
    { year: '2020', title: 'First Development', description: 'Completed our first residential housing estate' },
    { year: '2022', title: 'Expansion', description: 'Expanded operations across Kombo District' },
    { year: '2024', title: 'Growing Strong', description: 'Continued growth with multiple estates under development' },
  ];

  const values = [
    { icon: Shield, title: 'Integrity', description: 'Honest and transparent dealings in every transaction' },
    { icon: Heart, title: 'Customer Focus', description: 'Prioritizing our clients\' best interests always' },
    { icon: Award, title: 'Excellence', description: 'Delivering premium quality in everything we do' },
    { icon: Users, title: 'Teamwork', description: 'Collaborating for the success of our clients' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-36 pb-20 bg-primary-600">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="4" height="4" patternUnits="userSpaceOnUse">
                <path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2" stroke="white" strokeWidth="0.5" fill="none" />
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
              About JIG Gambia
            </h1>
            <p className="text-xl text-primary-200">
              Your trusted partner for real estate excellence in The Gambia since 2019
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary-500 font-medium text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="section-title mt-2 mb-6">Welcome to Jasseh Investment Group</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Established in 2019, JIG Real Estate stands as a prominent force in the real estate landscape, dedicated to providing exceptional properties in The Gambia real estate market. Committed to offering high-quality homeownership solutions at attainable rates, JIG Real Estate believes in fostering a harmonious work environment for success.
                </p>
                <p>
                  Our full-time team comprises well-trained professionals who continuously strive to deliver top-quality services to our valued clients. Specializing in the Gambia real estate sector, we focus on developments, marketing, and selling residential housing estates in prime locations within the Kombo District.
                </p>
                <p>
                  At JIG Real Estate, our mission is to elevate living standards by providing affordable yet exemplary homes. We take pride in offering valuable real estate advice to our partners and clients, and we are dedicated to providing our employees with exceptional opportunities for personal and professional development.
                </p>
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
                  src="https://images.pexels.com/photos/322729/pexels-photo-322729.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="JIG Gambia Office"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary-600 text-white p-6 rounded-xl shadow-xl">
                <p className="text-4xl font-bold">{new Date().getFullYear() - 2019}+</p>
                <p className="text-primary-200">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm"
            >
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-4">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To elevate living standards by providing affordable yet exemplary homes. We take pride in offering valuable real estate advice to our partners and clients, creating lasting relationships built on trust and mutual success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm"
            >
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-4">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading real estate company in The Gambia, recognized for excellence in property development, customer service, and community impact. We envision a future where quality homeownership is accessible to all Gambians.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary-500 font-medium text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="section-title mt-2">What We Stand For</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mx-auto mb-4">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary-500 font-medium text-sm uppercase tracking-wider">Our Journey</span>
            <h2 className="section-title mt-2">Company Timeline</h2>
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 -translate-x-1/2" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center gap-8 mb-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1 hidden md:block" />
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full -translate-x-1/2 z-10" />
                <div className="flex-1 bg-white p-6 rounded-xl shadow-sm ml-8 md:ml-0">
                  <span className="text-primary-600 font-bold text-lg">{item.year}</span>
                  <h4 className="font-heading font-semibold text-gray-900 mt-1">{item.title}</h4>
                  <p className="text-gray-600 text-sm mt-2">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary-500 font-medium text-sm uppercase tracking-wider">Meet Our Experts</span>
            <h2 className="section-title mt-2">Our Leadership Team</h2>
            <p className="section-subtitle mx-auto mt-4">
              Dedicated professionals committed to helping you achieve your real estate goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card overflow-hidden text-center group"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <a href={`tel:${member.phone}`} className="text-primary-600 font-medium text-sm hover:text-primary-700 transition-colors">
                    {member.phone}
                  </a>
                  <h3 className="font-heading font-semibold text-gray-900 mt-2">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Ready to Find Your Dream Home?
            </h2>
            <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
              Let JIG Gambia guide you on your journey to homeownership
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/properties" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                Browse Properties
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/contact" className="btn-outline-white">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
