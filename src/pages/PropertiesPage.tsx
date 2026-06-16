import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, Grid, List } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import { properties, locations } from '../data/content';
import { motion, AnimatePresence } from 'framer-motion';

export default function PropertiesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('newest');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const [filters, setFilters] = useState({
    location: searchParams.get('location') || '',
    type: searchParams.get('type') || '',
    priceMin: '',
    priceMax: '',
    featured: searchParams.get('featured') === 'true',
  });

  const filteredProperties = useMemo(() => {
    let result = [...properties];

    if (filters.location) {
      result = result.filter(p => p.region.toLowerCase().includes(filters.location.toLowerCase()));
    }

    if (filters.type) {
      result = result.filter(p => p.type === filters.type);
    }

    if (filters.priceMin) {
      result = result.filter(p => p.price >= parseInt(filters.priceMin));
    }

    if (filters.priceMax) {
      result = result.filter(p => p.price <= parseInt(filters.priceMax));
    }

    if (filters.featured) {
      result = result.filter(p => p.isFeatured);
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
      default:
        break;
    }

    return result;
  }, [filters, sortBy]);

  const handleFilterChange = (key: string, value: string | boolean) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      location: '',
      type: '',
      priceMin: '',
      priceMax: '',
      featured: false,
    });
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary-600 pt-36 pb-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Properties in The Gambia
            </h1>
            <p className="text-primary-200 text-lg max-w-2xl mx-auto">
              Explore our collection of premium residential land and properties across The Gambia
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container-custom py-8">
        {/* Filters Bar */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setFiltersOpen(!filtersOpen)}
                className="btn-secondary btn-sm"
              >
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filters
              </button>
              <div className="hidden sm:flex items-center gap-2">
                <span className="text-sm text-gray-500">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="select-field py-2 w-40"
                >
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500 hidden sm:inline">{filteredProperties.length} properties found</span>
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white shadow text-primary-600' : 'text-gray-500'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-white shadow text-primary-600' : 'text-gray-500'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Expanded Filters */}
          <AnimatePresence>
            {filtersOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 mt-4 border-t border-gray-100">
                  <div>
                    <label className="label">Location</label>
                    <select
                      value={filters.location}
                      onChange={(e) => handleFilterChange('location', e.target.value)}
                      className="select-field"
                    >
                      <option value="">All Locations</option>
                      {locations.map((loc) => (
                        <option key={loc.id} value={loc.name}>{loc.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="label">Property Type</label>
                    <select
                      value={filters.type}
                      onChange={(e) => handleFilterChange('type', e.target.value)}
                      className="select-field"
                    >
                      <option value="">All Types</option>
                      <option value="sale">For Sale</option>
                      <option value="rent">For Rent</option>
                      <option value="mortgage">Mortgage Available</option>
                    </select>
                  </div>
                  <div>
                    <label className="label">Min Price (GMD)</label>
                    <input
                      type="number"
                      placeholder="Min"
                      value={filters.priceMin}
                      onChange={(e) => handleFilterChange('priceMin', e.target.value)}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="label">Max Price (GMD)</label>
                    <input
                      type="number"
                      placeholder="Max"
                      value={filters.priceMax}
                      onChange={(e) => handleFilterChange('priceMax', e.target.value)}
                      className="input-field"
                    />
                  </div>
                </div>
                <div className="flex justify-end mt-4">
                  <button onClick={clearFilters} className="text-primary-600 text-sm font-medium hover:text-primary-700">
                    Clear All Filters
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Properties Grid */}
        {filteredProperties.length > 0 ? (
          <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'}`}>
            {filteredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <PropertyCard property={property} variant={viewMode === 'list' ? 'default' : 'default'} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2">No properties found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your filters to see more results</p>
            <button onClick={clearFilters} className="btn-primary">
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
