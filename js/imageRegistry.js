/**
 * Product Image Registry & Fallback Loader
 * 
 * Maps each product to its real image number, category folder, and fallback chain.
 * Supported file formats: .heif, .heic, .jpg, .jpeg, .png, .webp
 */

export const IMAGE_EXTENSIONS = ['.webp', '.heif', '.heic', '.jpg', '.jpeg', '.png'];

export interface ProductImageConfig {
  number: number;
  folder: string;
  name: string;
  category: string;
  subcat: string;
  src: string;
}

export const HOMEPAGE_IMAGES = [
  { id: 'h1', name: 'Homepage image 1', folder: 'Homepage Images', src: '/Homepage Images/h1.webp' },
  { id: 'h2', name: 'Homepage image 2', folder: 'Homepage Images', src: '/Homepage Images/h2.webp' },
  { id: 'h3', name: 'Homepage image 3', folder: 'Homepage Images', src: '/Homepage Images/h3.webp' },
  { id: 'h4', name: 'Homepage image 4', folder: 'Homepage Images', src: '/Homepage Images/h4.webp' },
  { id: 'h5', name: 'Homepage image 5', folder: 'Homepage Images', src: '/Homepage Images/h5.webp' },
  { id: 'h6', name: 'Homepage image 6', folder: 'Homepage Images', src: '/Homepage Images/h6.webp' }
];

export function getProductImagePath(folder: string, identifier: string | number, ext = '.webp'): string {
  return `/${encodeURIComponent(folder)}/${identifier}${ext}`;
}

export function setupImageFallback(imgElement: HTMLImageElement, folder: string, identifier: string | number) {
  let extIndex = 0;
  
  imgElement.onerror = () => {
    extIndex++;
    if (extIndex < IMAGE_EXTENSIONS.length) {
      imgElement.src = `/${encodeURIComponent(folder)}/${identifier}${IMAGE_EXTENSIONS[extIndex]}`;
    } else {
      imgElement.onerror = null;
    }
  };
}
