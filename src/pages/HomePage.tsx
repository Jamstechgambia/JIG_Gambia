import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Search, Home, Star,
  ArrowRight
} from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import {
  heroContent, properties, aboutContent, whyChooseUs, services,
  stats, testimonials, team, blogPosts, companyInfo, locations
} from '../data/content';

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Search Section */}
      <SearchSection />

      {/* Featured Properties */}
      <FeaturedProperties />

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Stats Section */}
      <StatsSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Blog Section */}
      <BlogSection />

      {/* Team Section */}
      <TeamSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Gambia real estate"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-900/70 to-primary-900/50" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-32 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 bg-primary-500/20 backdrop-blur-sm border border-primary-400/30 rounded-full text-primary-300 text-sm font-medium mb-6"
          >
            {companyInfo.motto}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            {heroContent.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl"
          >
            {heroContent.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/properties" className="btn-primary btn-lg">
              {heroContent.primaryCta}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link to="/contact" className="btn-outline-white btn-lg">
              {heroContent.secondaryCta}
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}

function SearchSection() {
  return (
    <section className="relative -mt-16 z-20 px-4">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-6 md:p-8"
        >
          <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="label">Location</label>
              <select className="select-field">
                <option value="">All Locations</option>
                {locations.map((loc) => (
                  <option key={loc.id} value={loc.id}>{loc.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="label">Property Type</label>
              <select className="select-field">
                <option value="">All Types</option>
                <option value="sale">For Sale</option>
                <option value="rent">For Rent</option>
                <option value="mortgage">Mortgage</option>
              </select>
            </div>
            <div>
              <label className="label">Price Range</label>
              <select className="select-field">
                <option value="">Any Price</option>
                <option value="0-200000">Up to GMD 200,000</option>
                <option value="200000-400000">GMD 200,000 - 400,000</option>
                <option value="400000-600000">GMD 400,000 - 600,000</option>
                <option value="600000+">GMD 600,000+</option>
              </select>
            </div>
            <div className="flex items-end">
              <button type="submit" className="btn-primary w-full h-[50px]">
                <Search className="w-5 h-5 mr-2" />
                Search
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

function FeaturedProperties() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary-500 font-medium text-sm uppercase tracking-wider">THE GAMBIA</span>
          <h2 className="section-title mt-2">Featured Properties</h2>
          <p className="section-subtitle mx-auto mt-4">
            Discover our handpicked selection of prime real estate opportunities across The Gambia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link to="/properties" className="btn-secondary btn-lg">
            View All Properties
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="JIG Gambia"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white">
                  <span className="font-bold text-xl">{new Date().getFullYear() - companyInfo.founded}+</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">Years</p>
                  <p className="text-gray-500">Experience</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary-500 font-medium text-sm uppercase tracking-wider">About Us</span>
            <h2 className="section-title mt-2 mb-6">{aboutContent.title}</h2>
            {aboutContent.paragraphs.map((paragraph, idx) => (
              <p key={idx} className="text-gray-600 mb-4 leading-relaxed">{paragraph}</p>
            ))}
            <Link to="/about" className="btn-primary mt-4">
              Learn More About Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary-500 font-medium text-sm uppercase tracking-wider">What We Offer</span>
          <h2 className="section-title mt-2">Build Your Dream Home With Us</h2>
          <p className="section-subtitle mx-auto mt-4">
            Comprehensive real estate services from land acquisition to architectural design and construction.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card p-8 group hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                <Home className="w-8 h-8" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link to="/services" className="text-primary-600 font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary-500 font-medium text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="section-title mt-2">{companyInfo.fullName}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mx-auto mb-4">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="py-16 bg-primary-600">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center text-white"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-primary-200 text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary-500 font-medium text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="section-title mt-2">Trusted By Thousands</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 md:p-10 text-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
              />
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">{testimonial.content}</p>
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary-500 font-medium text-sm uppercase tracking-wider">Our Blog</span>
          <h2 className="section-title mt-2">Latest Articles</h2>
          <p className="section-subtitle mx-auto mt-4">
            Stay updated with the latest real estate news, tips, and insights from JIG Gambia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(0, 3).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card overflow-hidden group"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                  <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <span>{post.date}</span>
                </div>
                <h3 className="font-heading font-semibold text-lg text-gray-900 group-hover:text-primary-600 transition-colors mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                <a href="#" className="text-primary-600 font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary-500 font-medium text-sm uppercase tracking-wider">Contact</span>
          <h2 className="section-title mt-2">Our Team</h2>
          <p className="section-subtitle mx-auto mt-4">
            Meet our dedicated professionals ready to help you with your real estate needs.
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
  );
}

function CTASection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Gambia landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-900/80" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center text-white"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Find The Perfect House
          </h2>
          <p className="text-lg text-primary-200 mb-8">
            Your dream home awaits in The Gambia. Let JIG Real Estate guide you home.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/properties" className="btn-primary btn-lg">
              Search Properties
            </Link>
            <Link to="/contact" className="btn-outline-white btn-lg">
              Contact Us Today
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
