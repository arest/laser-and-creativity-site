import { useEffect, useState } from 'react';
import { NavItem } from '../types';
import { contentfulClient } from '../utils/contentfulClient';
import { navigationItems as staticNavigationItems } from '../data/navigation';

// Minimal type for Contentful product entry
interface ContentfulNavigationEntry {
  sys: {
    id: string;
  };
  fields: {
    titolo: string;
    posizione: number;
  };
}

async function fetchNavigationItems(): Promise<NavItem[]> {
  const entries = await contentfulClient.getEntries({
    content_type: 'categoria', // Replace with your actual content type ID for navigation
    order: ['fields.posizione'], // Adjust as needed
  });

  return (entries.items as unknown as ContentfulNavigationEntry[]).map((item) => ({
    label: item.fields.titolo,
    href: `/categoria/${item.sys.id}`,
    children: []
  }));
}

export function useNavigationItems() {
  const [navigationItems, setNavigationItems] = useState<NavItem[]>(staticNavigationItems);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNavigationItems().then(dynamicItems => {
      // Clone the static navigation to avoid mutating the original
      const updatedNavigation = staticNavigationItems.map(item => {
        if (item.href === '#works') {
          return {
            ...item,
            children: dynamicItems
          };
        }
        return item;
      });
      setNavigationItems(updatedNavigation);
      setLoading(false);
    });
  }, []);

  return { navigationItems, loading };
}