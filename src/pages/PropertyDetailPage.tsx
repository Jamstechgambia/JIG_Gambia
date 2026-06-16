import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin, Maximize2, Phone, Mail, Heart, Share2, ChevronLeft, ChevronRight,
  Check, ArrowLeft
} from 'lucide-react';
import { properties, companyInfo } from '../data/content';
import PropertyCard from '../components/PropertyCard';

export default function PropertyDetailPage() {
  const { slug } = useParams();
  const [currentImage, setCurrentImage] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);

  const property = properties.find(p => p.slug === slug);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Property Not Found</h1>
          <Link to="/properties" className="btn-primary">
            Back to Properties
          </Link>
        </div>
      </div>
    );
  }

  const relatedProperties = properties.filter(p => p.id !== property.id).slice(0, 3);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 md:pt-28">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container-custom py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-primary-600">Home</Link>
            <span className="text-gray-300">/</span>
            <Link to="/properties" className="text-gray-500 hover:text-primary-600">Properties</Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-900 font-medium">{property.title}</span>
          </div>
        </div>
      </div>

      <div className="container-custom py-8">
        {/* Back Button */}
        <Link
          to="/properties"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-primary-600 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Properties
        </Link>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Images and Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100"
            >
              <img
                src={property.images[currentImage]}
                alt={property.title}
                className="w-full h-full object-cover"
              />

              {/* Navigation Arrows */}
              {property.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6 text-gray-900" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                  >
                    <ChevronRight className="w-6 h-6 text-gray-900" />
                  </button>
                </>
              )}

              {/* Badges */}
              <div className="absolute top-4 left-4 flex gap-2">
                {property.isFeatured && (
                  <span className="px-4 py-2 bg-primary-500 rounded-full text-white text-sm font-medium">
                    Featured
                  </span>
                )}
                <span className="px-4 py-2 bg-navy-800/90 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                  For {property.type === 'mortgage' ? 'Sale in Mortgage' : 'Sale'}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="absolute top-4 right-4 flex gap-2">
                <button className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors">
                  <Heart className="w-5 h-5 text-gray-600" />
                </button>
                <button className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors">
                  <Share2 className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {property.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentImage ? 'bg-white w-4' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Thumbnail Gallery */}
            {property.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {property.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden transition-all ${
                      idx === currentImage ? 'ring-2 ring-primary-500' : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Property Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl shadow-sm p-6"
            >
              <h1 className="font-heading text-3xl font-bold text-gray-900 mb-4">
                {property.title}
              </h1>

              <div className="flex items-center gap-4 text-gray-500 mb-6">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {property.location}, {property.region}
                </span>
              </div>

              <div className="prose prose-gray max-w-none">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed">{property.description}</p>
              </div>

              {/* Features */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Features & Amenities</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                    <Maximize2 className="w-5 h-5 text-primary-600" />
                    <div>
                      <p className="text-sm text-gray-500">Size</p>
                      <p className="font-semibold text-gray-900">{property.size} {property.sizeUnit}</p>
                    </div>
                  </div>
                  {property.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                      <Check className="w-5 h-5 text-primary-600" />
                      <div>
                        <p className="text-sm text-gray-500">{feature}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location Map Placeholder */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Location</h3>
                <div className="aspect-[16/9] bg-gray-100 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">{property.location}, {property.region}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Price Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl shadow-sm p-6 sticky top-24"
            >
              <div className="mb-6">
                <p className="text-sm text-gray-500">Price</p>
                <p className="text-3xl font-bold text-primary-600">
                  {property.currency} {property.price.toLocaleString()}
                </p>
              </div>

              <button
                onClick={() => setShowContactForm(!showContactForm)}
                className="btn-primary w-full mb-4"
              >
                <Phone className="w-4 h-4 mr-2" />
                Contact Agent
              </button>

              <a
                href={`tel:${companyInfo.phone[0]}`}
                className="btn-secondary w-full"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>

              {/* Contact Form */}
              {showContactForm && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-6 pt-6 border-t border-gray-100"
                >
                  <h4 className="font-semibold text-gray-900 mb-4">Request Information</h4>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="input-field"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="input-field"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="input-field"
                    />
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="input-field resize-none"
                      defaultValue={`I'm interested in ${property.title}. Please provide more information.`}
                    />
                    <button type="submit" className="btn-primary w-full">
                      Send Message
                    </button>
                  </form>
                </motion.div>
              )}

              {/* Company Info */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-500 text-center">
                  Contact JIG Gambia for more information
                </p>
                <div className="flex justify-center gap-4 mt-4">
                  <a
                    href={`tel:${companyInfo.phone[0]}`}
                    className="text-gray-500 hover:text-primary-600"
                  >
                    <Phone className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="text-gray-500 hover:text-primary-600"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Related Properties */}
        {relatedProperties.length > 0 && (
          <div className="mt-16">
            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">
              Related Properties
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProperties.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
