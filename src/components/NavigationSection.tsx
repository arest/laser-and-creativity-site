import React from 'react';
import { useNavigationItems } from '../hooks/useNavigationItems';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export const NavigationSection: React.FC = () => {
  const { navigationItems, loading } = useNavigationItems();

  if (loading) {
    return (
      <div className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="animate-pulse space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-12 bg-orange-200 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Flatten all children items into a single array
  const allChildren = navigationItems.reduce<Array<{ label: string; href: string }>>((acc, item) => {
    if (item.children) {
      return [...acc, ...item.children];
    }
    return acc;
  }, []);

  return (
    <section id="navigation" className="py-16 bg-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-semibold text-amber-900 text-center mb-12">
          Le nostre opere
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allChildren.map((item) => (
            <div key={item.label} className="group">
              <Link
                to={item.href}
                className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-serif font-medium text-amber-900">
                    {item.label}
                  </h3>
                  <ChevronRight className="h-5 w-5 text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 