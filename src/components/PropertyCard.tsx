import { Link } from 'react-router-dom';
import { MapPin, Maximize2, Heart, ArrowRight } from 'lucide-react';
import { Property } from '../types';
import { useState } from 'react';

interface PropertyCardProps {
  property: Property;
  variant?: 'default' | 'compact' | 'featured';
}

export default function PropertyCard({ property, variant = 'default' }: PropertyCardProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const formatPrice = (price: number, currency: string) => {
    return `${currency} ${price.toLocaleString()}`;
  };

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImage((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  if (variant === 'compact') {
    return (
      <Link
        to={`/property/${property.slug}`}
        className="card p-4 flex gap-4 group"
      >
        <div className="relative w-24 h-20 flex-shrink-0 overflow-hidden rounded-lg">
          <img
            src={property.images[0]}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 truncate group-hover:text-primary-600 transition-colors">
            {property.title}
          </h3>
          <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
            <MapPin className="w-3 h-3" />
            {property.location}
          </p>
          <p className="text-primary-600 font-semibold mt-2">
            {formatPrice(property.price, property.currency)}
          </p>
        </div>
      </Link>
    );
  }

  return (
    <div className="card overflow-hidden group">
      {/* Image Section */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.images[currentImage]}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Image Navigation Dots */}
        {property.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
            >
              <span className="sr-only">Previous image</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
            >
              <span className="sr-only">Next image</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {property.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setCurrentImage(idx);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${idx === currentImage ? 'bg-white w-4' : 'bg-white/50'}`}
                />
              ))}
            </div>
          </>
        )}

        {/* Overlays */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700">
            {property.region}
          </span>
        </div>

        <div className="absolute top-4 right-4 flex gap-2">
          {property.isFeatured && (
            <span className="px-3 py-1 bg-primary-500 rounded-full text-xs font-medium text-white">
              Featured
            </span>
          )}
          <span className="px-3 py-1 bg-navy-800/90 backdrop-blur-sm rounded-full text-xs font-medium text-white">
            {property.type === 'mortgage' ? 'Sale in Mortgage' : 'Sale'}
          </span>
        </div>

        {/* Like Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className={`absolute bottom-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
            isLiked ? 'bg-red-500 text-white' : 'bg-white/90 text-gray-600 hover:bg-white hover:text-red-500'
          }`}
        >
          <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
        </button>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Content Section */}
      <div className="p-5">
        <Link to={`/property/${property.slug}`}>
          <h3 className="font-heading font-semibold text-lg text-gray-900 group-hover:text-primary-600 transition-colors">
            {property.title}
          </h3>
        </Link>

        <p className="text-sm text-gray-500 flex items-center gap-1 mt-2">
          <MapPin className="w-4 h-4" />
          {property.location}
        </p>

        <p className="text-gray-600 text-sm mt-3 line-clamp-2">
          {property.description}
        </p>

        {/* Features */}
        <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <Maximize2 className="w-4 h-4" />
            {property.size} {property.sizeUnit}
          </span>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 my-4" />

        {/* Footer */}
        <div className="flex items-center justify-between">
          <p className="text-primary-600 font-bold text-lg">
            {formatPrice(property.price, property.currency)}
          </p>
          <Link
            to={`/property/${property.slug}`}
            className="w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center hover:bg-primary-600 transition-colors"
          >
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
