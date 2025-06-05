import { useEffect, useState } from 'react';
import { contentfulClient } from '../utils/contentfulClient';

export interface Product {
  titolo: string;
  descrizione: string;
  categoria: string;
  immagine?: string;
  immagine2?: string;
  video?: string;
  videoUrl?: string;
}

// Define minimal types for rich text
interface RichTextChild {
  value?: string;
}
interface RichTextNode {
  content?: RichTextChild[];
}

// Helper to extract plain text from Contentful rich text
function extractRichText(riche: { content?: RichTextNode[] }): string {
  if (!riche || !riche.content) return '';
  return riche.content
    .map((node: RichTextNode) =>
      node.content
        ? node.content.map((child: RichTextChild) => child.value || '').join('')
        : ''
    )
    .join('\n');
}

// Minimal type for Contentful asset
interface ContentfulAsset {
  sys: { id: string };
  fields: { file: { url: string } };
}

// Minimal type for Contentful product item
interface ContentfulProductItem {
  fields: {
    titolo: string;
    descrizione: any;
    categoria?: { sys: { id: string } };
    immagine?: { fields: { file: { url: string } } };
    immagine2?: { fields: { file: { url: string } } };
    video?: { sys: { id: string } };
    videoUrl?: string;
  };
}

async function fetchProducts(): Promise<Product[]> {
  const entries = await contentfulClient.getEntries({
    content_type: 'prodotto',
  });

  // Build a map of assetId -> asset for quick lookup
  const assetMap: Record<string, ContentfulAsset> = {};
  if (entries.includes && entries.includes.Asset) {
    for (const asset of entries.includes.Asset as ContentfulAsset[]) {
      assetMap[asset.sys.id] = asset;
    }
  }

  return (entries.items as unknown as ContentfulProductItem[]).map((item) => {
    // Prefer videoUrl if present, else resolve asset video
    let video = '';
    if (item.fields.video && item.fields.video.sys && assetMap[item.fields.video.sys.id]) {
      video = assetMap[item.fields.video.sys.id].fields.file.url || '';
      // Ensure full URL if needed
      if (video && video.startsWith('//')) {
        video = 'https:' + video;
      }
    }
    return {
      titolo: item.fields.titolo,
      descrizione: extractRichText(item.fields.descrizione),
      categoria: item.fields.categoria?.sys?.id || '',
      immagine: item.fields.immagine?.fields?.file?.url || '',
      immagine2: item.fields.immagine2?.fields?.file?.url || '',
      video,
      videoUrl: item.fields.videoUrl || '',
    };
  });
}

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts().then(fetchedProducts => {
      setProducts(fetchedProducts);
      setLoading(false);
    });
  }, []);

  return { products, loading };
}
