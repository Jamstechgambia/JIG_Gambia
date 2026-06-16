import { Link } from 'react-router-dom';
import { Phone, Mail, Facebook, Instagram, ArrowRight } from 'lucide-react';
import { companyInfo, properties } from '../data/content';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Properties', href: '/properties' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

const serviceLinks = [
  { name: 'Land Sales', href: '/services/land-sales' },
  { name: 'Property Leasing', href: '/services/property-leasing' },
  { name: 'Architectural Design', href: '/services/architectural-design' },
  { name: 'Construction', href: '/services/construction' },
  { name: 'Land Consultation', href: '/services/consultation' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white">
      {/* Main Footer */}
      <div className="container-custom section-padding-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                JIG
              </div>
              <div>
                <span className="font-heading font-bold text-xl block">JIG Gambia</span>
                <span className="text-xs text-gray-400">Real Estate Excellence</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Welcome to JIG Real Estate, where dreams take shape in meticulously crafted homes. Our commitment to innovative design and quality construction ensures your future is built on a foundation of excellence.
            </p>
            <div className="space-y-3">
              <a href={`tel:${companyInfo.phone[0]}`} className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-sm">{companyInfo.phone[0]} / {companyInfo.phone[1]}</span>
              </a>
              <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-sm">{companyInfo.email}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm flex items-center gap-2"
                  >
                    <ArrowRight className="w-3 h-3" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm flex items-center gap-2"
                  >
                    <ArrowRight className="w-3 h-3" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Properties */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Featured Properties</h4>
            <div className="space-y-4">
              {properties.slice(0, 2).map((property) => (
                <Link
                  key={property.id}
                  to={`/property/${property.slug}`}
                  className="flex gap-4 group"
                >
                  <img
                    src={property.images[0]}
                    alt={property.title}
                    className="w-20 h-16 object-cover rounded-lg flex-shrink-0"
                  />
                  <div>
                    <h5 className="text-sm font-medium group-hover:text-primary-400 transition-colors">
                      {property.title}
                    </h5>
                    <p className="text-xs text-gray-400">GMD {property.price.toLocaleString()}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Social & Copyright */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            Copyright {currentYear} JIG Gambia. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href={companyInfo.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-primary-500 hover:text-white transition-all"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href={companyInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-primary-500 hover:text-white transition-all"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
          <p className="text-sm text-gray-400">
            Designed by{' '}
            <a
              href="https://jamstechdev.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-500 transition-colors"
            >
              Jamstech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
