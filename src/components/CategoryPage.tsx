import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import { useNavigationItems } from '../hooks/useNavigationItems';

// ProductCard component for displaying a single product
const ProductCard: React.FC<{
  product: import('../hooks/useProducts').Product;
  onMediaClick: (mediaType: 'image' | 'image2' | 'video') => void;
}> = ({ product, onMediaClick }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
    <h3 className="text-xl font-serif font-semibold text-amber-900 p-4 border-b border-amber-100">{product.titolo}</h3>
    <div className="flex flex-col md:grid md:grid-cols-4 w-full">
      {/* First Column - Primary Media */}
      <div className="p-4 border-b md:border-b-0 border-amber-100">
        {product.immagine ? (
          <div className="h-48 cursor-pointer" onClick={() => onMediaClick('image')}>
            <img src={product.immagine} alt={product.titolo} className="w-full h-full object-contain" />
          </div>
        ) : product.video ? (
          <div className="h-48 cursor-pointer" onClick={() => onMediaClick('video')}>
            <video
              src={product.video}
              controls
              className="w-full h-full object-contain"
            />
          </div>
        ) : null}
      </div>

      {/* Second Column - Secondary Image */}
      <div className="p-4 border-b md:border-b-0 border-amber-100">
        {product.immagine2 ? (
          <div className="h-48 cursor-pointer" onClick={() => onMediaClick('image2')}>
            <img src={product.immagine2} alt={`${product.titolo} - Seconda immagine`} className="w-full h-full object-contain" />
          </div>
        ) : null}
      </div>

      {/* Third Column - Video (only if there's a primary image) */}
      <div className="p-4 border-b md:border-b-0 border-amber-100">
        {product.video && product.immagine ? (
          <div className="h-48 cursor-pointer" onClick={() => onMediaClick('video')}>
            <video
              src={product.video}
              controls
              className="w-full h-full object-contain"
            />
          </div>
        ) : null}
      </div>

      {/* Content Column */}
      <div className="p-4">
        <p className="text-amber-800">{product.descrizione}</p>
      </div>
    </div>
  </div>
);

const CategoryPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { products, loading } = useProducts();
  const { navigationItems } = useNavigationItems();

  // Find the category title from navigation items
  let categoryTitle = id;
  const worksNav = navigationItems.find((item) => item.href === '#works');
  if (worksNav && worksNav.children) {
    const found = worksNav.children.find((child) => child.href === `/categoria/${id}`);
    if (found) {
      categoryTitle = found.label;
    }
  }

  // Filter products by category id
  const filteredProducts = products.filter((p) => p.categoria === id);

  // Modal state for selected product and media type
  const [selectedProduct, setSelectedProduct] = useState<import('../hooks/useProducts').Product | null>(null);
  const [selectedMedia, setSelectedMedia] = useState<'image' | 'image2' | 'video' | null>(null);

  const closeModal = () => {
    setSelectedProduct(null);
    setSelectedMedia(null);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-white overflow-hidden p-8 text-center mb-8">
          <h2 className="text-2xl font-serif font-bold text-amber-900 mb-4">{categoryTitle}</h2>
        </div>
        {loading ? (
          <div className="text-center text-amber-700">Caricamento prodotti...</div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center text-amber-700">Nessun prodotto trovato per questa categoria.</div>
        ) : (
          <div className="max-w-4xl mx-auto">
            {filteredProducts.map((product, idx) => (
              <ProductCard
                key={idx}
                product={product}
                onMediaClick={(mediaType) => {
                  setSelectedProduct(product);
                  setSelectedMedia(mediaType);
                }}
              />
            ))}
          </div>
        )}
      </div>
      {/* Modal for Selected Product */}
      {selectedProduct && selectedMedia && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto relative"
            onClick={e => e.stopPropagation()}
          >
            {selectedMedia === 'video' && selectedProduct.video ? (
              <video
                src={selectedProduct.video}
                controls
                className="w-full h-auto max-h-[80vh] object-contain rounded-t-lg"
              />
            ) : selectedMedia === 'image' && selectedProduct.immagine ? (
              <img
                src={selectedProduct.immagine}
                alt={selectedProduct.titolo}
                className="w-full h-auto max-h-[80vh] object-contain rounded-t-lg"
              />
            ) : selectedMedia === 'image2' && selectedProduct.immagine2 ? (
              <img
                src={selectedProduct.immagine2}
                alt={`${selectedProduct.titolo} - Seconda immagine`}
                className="w-full h-auto max-h-[80vh] object-contain rounded-t-lg"
              />
            ) : null}
            <button
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md text-amber-900 hover:text-amber-600 transition-colors duration-200"
              onClick={closeModal}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default CategoryPage;