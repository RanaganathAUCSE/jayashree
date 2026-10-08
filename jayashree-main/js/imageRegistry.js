/**
 * Product Image Registry & Fallback Loader
 * 
 * Maps each product to its real image number, category folder, and fallback chain.
 * Supported file formats: .heif, .heic, .jpg, .jpeg, .png, .webp
 */

export const IMAGE_EXTENSIONS = ['.heif', '.heic', '.jpg', '.jpeg', '.png', '.webp'];

export interface ProductImageConfig {
  number: number;
  folder: string;
  name: string;
  category: string;
  subcat: string;
  fallbackUrl: string;
}

export const HOMEPAGE_IMAGES = [
  { id: 'h1', name: 'Homepage image 1', folder: 'Homepage Images', fallback: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=300&q=80' },
  { id: 'h2', name: 'Homepage image 2', folder: 'Homepage Images', fallback: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&q=80' },
  { id: 'h3', name: 'Homepage image 3', folder: 'Homepage Images', fallback: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=300&q=80' },
  { id: 'h4', name: 'Homepage image 4', folder: 'Homepage Images', fallback: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=300&q=80' },
  { id: 'h5', name: 'Homepage image 5', folder: 'Homepage Images', fallback: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&q=80' },
  { id: 'h6', name: 'Homepage image 6', folder: 'Homepage Images', fallback: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=300&q=80' }
];

export function getProductImagePath(folder: string, identifier: string | number, ext = '.heif'): string {
  return `/${encodeURIComponent(folder)}/${identifier}${ext}`;
}

export function setupImageFallback(imgElement: HTMLImageElement, folder: string, identifier: string | number, fallbackUrl: string) {
  let extIndex = 0;
  
  imgElement.onerror = () => {
    extIndex++;
    if (extIndex < IMAGE_EXTENSIONS.length) {
      imgElement.src = `/${encodeURIComponent(folder)}/${identifier}${IMAGE_EXTENSIONS[extIndex]}`;
    } else {
      imgElement.onerror = null;
      if (fallbackUrl) {
        imgElement.src = fallbackUrl;
      }
    }
  };
}
