import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Facebook, Instagram } from 'lucide-react';
import { companyInfo } from '../data/content';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: companyInfo.phone,
      action: `tel:${companyInfo.phone[0].replace(/[()-\s]/g, '')}`,
    },
    {
      icon: Mail,
      title: 'Email',
      details: [companyInfo.email],
      action: `mailto:${companyInfo.email}`,
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['The Gambia', 'West Coast Region'],
      action: null,
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 8:00 AM - 5:00 PM', 'Sat: 9:00 AM - 1:00 PM'],
      action: null,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-36 pb-20 bg-primary-600">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="dots" width="4" height="4" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="0.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#dots)" />
          </svg>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-primary-200">
              Get in touch with our team for any inquiries about properties in The Gambia
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-8 -mt-12 relative z-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-4">
                  <info.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-semibold text-gray-900 mb-2">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  info.action ? (
                    <a
                      key={idx}
                      href={info.action}
                      className="block text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      {detail}
                    </a>
                  ) : (
                    <p key={idx} className="text-gray-600">{detail}</p>
                  )
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-padding-sm">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="label">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="input-field"
                      required
                    />
                  </div>
                  <div>
                    <label className="label">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="input-field"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="label">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+220 XXX XXXX"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="label">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="select-field"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="property">Property Inquiry</option>
                      <option value="consultation">Consultation Request</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="support">Customer Support</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="label">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="How can we help you?"
                    className="input-field resize-none"
                    required
                  />
                </div>

                <button type="submit" className="btn-primary btn-lg">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Map & Social */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">
                  Our Location
                </h2>
                <div className="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden">
                  {/* Map placeholder */}
                  <div className="w-full h-full flex items-center justify-center bg-gray-200">
                    <div className="text-center">
                      <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500">The Gambia, West Coast Region</p>
                      <p className="text-sm text-gray-400 mt-2">Interactive map coming soon</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-gray-900 mb-2">
                      Chat on WhatsApp
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Get quick responses to your queries via WhatsApp
                    </p>
                    <a
                      href={`https://wa.me/${companyInfo.phone[0].replace(/[+-]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Start Chat
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-heading font-semibold text-gray-900 mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <a
                    href={companyInfo.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center text-gray-600 hover:bg-primary-500 hover:text-white transition-all"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href={companyInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center text-gray-600 hover:bg-primary-500 hover:text-white transition-all"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
                <p className="text-gray-500 text-sm mt-4">
                  Stay updated with our latest properties and news
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding-sm bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle mx-auto mt-4">
              Find answers to common questions about buying property in The Gambia
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'What documents do I need to buy land in The Gambia?',
                a: 'You need a valid ID, proof of address, and the funds for purchase. Our team will guide you through the documentation process and ensure all paperwork is properly handled.',
              },
              {
                q: 'Can foreigners buy property in The Gambia?',
                a: 'Yes, foreigners can buy property in The Gambia. The process is straightforward and we assist with all legal requirements.',
              },
              {
                q: 'What payment options are available?',
                a: 'We offer various payment options including cash payment and mortgage plans. Specific terms depend on the property and are discussed during the purchase process.',
              },
              {
                q: 'How long does the buying process take?',
                a: 'The typical buying process takes 2-4 weeks, depending on documentation and payment processing. We work to make it as smooth and quick as possible.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm p-6"
              >
                <h3 className="font-heading font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
