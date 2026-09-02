// Image Service
// Uses Unsplash API for dynamic images, with a fallback to placeholder images

const UNSPLASH_API_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
const UNSPLASH_BASE_URL = 'https://api.unsplash.com';

const fallbackImages = [
  'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
];

export const fetchImage = async (query) => {
  if (!UNSPLASH_API_KEY) {
    console.warn('Unsplash API key is missing. Using fallback image.');
    // Return a random fallback image
    return fallbackImages[Math.floor(Math.random() * fallbackImages.length)];
  }

  try {
    const response = await fetch(
      `${UNSPLASH_BASE_URL}/search/photos?query=${encodeURIComponent(query)}&client_id=${UNSPLASH_API_KEY}&per_page=1&orientation=landscape`
    );
    
    if (!response.ok) {
      throw new Error(`Unsplash API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.results && data.results.length > 0) {
      return data.results[0].urls.regular;
    }
    
    return fallbackImages[0];
  } catch (error) {
    console.error('Failed to fetch image:', error);
    return fallbackImages[0];
  }
};
