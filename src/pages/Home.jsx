import React from 'react';
import products from '../data/products.json';
import ProductGrid from '../components/ProductGrid';

const Home = () => {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Our Products</h1>
        <p className="text-gray-500 mt-2">Discover our curated collection of premium goods.</p>
      </header>
      <ProductGrid products={products} />
    </div>
  );
};

export default Home;
