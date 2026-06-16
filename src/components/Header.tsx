import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  {
    name: 'Properties',
    href: '/properties',
    children: [
      { name: 'Land for Sale', href: '/properties?type=sale' },
      { name: 'Rentals', href: '/properties?type=rent' },
      { name: 'Featured', href: '/properties?featured=true' },
    ]
  },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const isHomePage = location.pathname === '/';
  const isTransparent = isHomePage && !isScrolled;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || !isHomePage ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      {/* Top Bar */}
      <div className={`hidden md:block transition-all duration-300 ${isTransparent ? 'bg-white/10 text-white py-2' : 'bg-primary-600 text-white py-2'}`}>
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+2203815709" className="flex items-center gap-2 hover:text-primary-200 transition-colors">
              <Phone className="w-4 h-4" />
              <span>(+220) 381-5709 / 267-6120</span>
            </a>
            <a href="mailto:Info@jiggambia.com" className="flex items-center gap-2 hover:text-primary-200 transition-colors">
              <Mail className="w-4 h-4" />
              <span>Info@jiggambia.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/info.jigrealestate" target="_blank" rel="noopener noreferrer" className="hover:text-primary-200 transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
            </a>
            <a href="https://www.instagram.com/jasseh_investment_group_ltd" target="_blank" rel="noopener noreferrer" className="hover:text-primary-200 transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="py-3">
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:bg-primary-600 transition-colors">
                JIG
              </div>
              <div className={`hidden sm:block transition-colors ${isTransparent ? 'text-white' : 'text-gray-900'}`}>
                <span className="font-heading font-bold text-xl block">JIG Gambia</span>
                <span className="text-xs opacity-70">Real Estate Excellence</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.children ? (
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                      className={`flex items-center gap-1 font-medium transition-colors ${isTransparent ? 'text-white hover:text-primary-200' : 'text-gray-700 hover:text-primary-600'}`}
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className={`font-medium transition-colors ${isTransparent ? 'text-white hover:text-primary-200' : 'text-gray-700 hover:text-primary-600'} ${location.pathname === item.href ? (isTransparent ? 'text-primary-200' : 'text-primary-600') : ''}`}
                    >
                      {item.name}
                    </Link>
                  )}
                  {item.children && (
                    <div className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl py-2 transition-all duration-200 ${openDropdown === item.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link to="/properties" className="btn-primary btn-sm">
                Browse Properties
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${isTransparent ? 'text-white hover:bg-white/10' : 'text-gray-900 hover:bg-gray-100'}`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen mt-4' : 'max-h-0'}`}>
            <div className="bg-white rounded-xl shadow-xl p-4 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                        className="flex items-center justify-between w-full px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-50"
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      {openDropdown === item.name && (
                        <div className="pl-4 mt-1 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              className="block px-4 py-2 text-gray-600 hover:text-primary-600 rounded-lg hover:bg-gray-50"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className="block px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link to="/properties" className="btn-primary btn-sm w-full mt-4">
                Browse Properties
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
