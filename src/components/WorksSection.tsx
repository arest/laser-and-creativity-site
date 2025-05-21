import React, { useState } from 'react';
import { workCategories } from '../data/workCategories';
import { WorkCategory, WorkItem } from '../types';

export const WorksSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<WorkCategory>(workCategories[0]);
  const [selectedItem, setSelectedItem] = useState<WorkItem | null>(null);

  const handleCategorySelect = (category: WorkCategory) => {
    setSelectedCategory(category);
    setSelectedItem(null);
  };

  const handleItemSelect = (item: WorkItem) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <section id="works" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-900 mb-4">
            Le nostre opere
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          <p className="text-amber-800 max-w-2xl mx-auto">
            Scopri la nostra collezione di opere di legno artigianali. Ogni pezzo è unico e creato con precisione grazie al taglio laser e alle tecniche di intarsio tradizionali.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {workCategories.map((category) => (
            <button
              key={category.id}
              id={category.id}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory.id === category.id
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
              }`}
              onClick={() => handleCategorySelect(category)}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Category Description */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h3 className="text-2xl font-serif font-semibold text-amber-800 mb-4">
            {selectedCategory.title}
          </h3>
          <p className="text-amber-700">
            {selectedCategory.description}
          </p>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {selectedCategory.items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => handleItemSelect(item)}
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-serif font-medium text-amber-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-amber-700 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Selected Item */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={closeModal}>
            <div
              className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedItem.imageUrl}
                  alt={selectedItem.title}
                  className="w-full h-auto max-h-[60vh] object-cover"
                />
                <button
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md text-amber-900 hover:text-amber-600 transition-colors duration-200"
                  onClick={closeModal}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif font-semibold text-amber-900 mb-4">
                  {selectedItem.title}
                </h3>
                <p className="text-amber-800 mb-6">
                  {selectedItem.description}
                </p>
                <div className="flex justify-end">
                  <a
                    href="#contact"
                    className="px-6 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors duration-300"
                    onClick={closeModal}
                  >
                    Invia una richiesta
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};