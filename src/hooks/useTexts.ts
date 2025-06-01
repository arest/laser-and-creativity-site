import { useEffect, useState } from 'react';
import { contentfulClient } from '../utils/contentfulClient';

interface TextEntry {
  id: number;
  label: string;
  text: string;
  paragraphs: string[];
}

function extractParagraphs(contenuto: any): string[] {
  if (!contenuto?.content) return [];
  return contenuto.content
    .filter((node: any) => node.nodeType === 'paragraph')
    .map((para: any) =>
      para.content
        .filter((n: any) => n.nodeType === 'text')
        .map((n: any) => n.value)
    );
}

async function fetchTexts(): Promise<TextEntry[]> {
  const entries = await contentfulClient.getEntries({
    content_type: 'testo',
  });

  return entries.items.map((item: any) => ({
    id: item.fields.id,
    label: item.fields.titolo,
    text: item.fields.contenuto,
    paragraphs: extractParagraphs(item.fields.contenuto),
  }));
}

export function useTexts() {
  const [texts, setTexts] = useState<TextEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTexts().then(fetchedTexts => {
      setTexts(fetchedTexts);
      setLoading(false);
    });
  }, []);

  return { texts, loading };
}