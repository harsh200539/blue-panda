import { useState, useEffect } from 'react';
import { siteService } from '../services/api';

export const useSiteContent = () => {
  const [content, setContent] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await siteService.getAllContent();
        // The API might be paginated, if so we might need to handle it.
        // For now assuming all content fits in one page or we just need the first few.
        const contentMap = response.data.results.reduce((acc, item) => {
          acc[item.key] = item.value;
          return acc;
        }, {});
        setContent(contentMap);
      } catch (error) {
        console.error('Error fetching site content:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  return { content, loading };
};
