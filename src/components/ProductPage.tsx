import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Mock data for demonstration
const mockProducts = [
  {
    id: 'portrait-1',
    title: 'Ritratto di famiglia',
    imageUrl: 'https://images.pexels.com/photos/5816291/pexels-photo-5816291.jpeg',
    description: 'Ritratto di famiglia inciso al laser su legno d\'acero con cornice personalizzata.'
  },
  {
    id: 'clock-1',
    title: 'Orologio da parete geometrico',
    imageUrl: 'https://images.pexels.com/photos/2853998/pexels-photo-2853998.jpeg',
    description: 'Design geometrico moderno inciso al laser su betulla con movimento al quarzo silenzioso.'
  },
  // Add more mock products as needed
];

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = mockProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-2xl font-serif font-bold text-amber-900 mb-4">Prodotto non trovato</h2>
        <button
          className="px-6 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors duration-300"
          onClick={() => navigate(-1)}
        >
          Torna indietro
        </button>
      </div>
    );
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-auto max-h-[60vh] object-cover"
            />
            <button
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md text-amber-900 hover:text-amber-600 transition-colors duration-200"
              onClick={() => navigate(-1)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-serif font-semibold text-amber-900 mb-4">
              {product.title}
            </h3>
            <p className="text-amber-800 mb-6">
              {product.description}
            </p>
            <div className="flex justify-end">
              <a
                href="#contact"
                className="px-6 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors duration-300"
              >
                Invia una richiesta
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage; 