// Public CMS API Client for Speeddex Website

const BACKEND_ORIGIN =
  import.meta.env.VITE_BACKEND_ORIGIN || 'http://localhost:3000';
const API_BASE_URL =
  import.meta.env.VITE_API_URL || `${BACKEND_ORIGIN}/api/v1`;

export const resolveMediaUrl = (media?: any): string => {
  if (!media) return '';
  let url: unknown = '';
  if (typeof media === 'string') {
    url = media;
  } else if (typeof media === 'object' && media !== null) {
    url = media.url || media.src || media.path || '';
    if (typeof url === 'object' && url !== null) {
      url = (url as any).url || (url as any).src || '';
    }
  }
  if (typeof url !== 'string' || !url) return '';
  const trimmed = url.trim();
  if (!trimmed) return '';

  if (
    trimmed.startsWith('http://') ||
    trimmed.startsWith('https://') ||
    trimmed.startsWith('blob:') ||
    trimmed.startsWith('data:')
  ) {
    return trimmed;
  }
  if (trimmed.startsWith('/uploads')) {
    return `${BACKEND_ORIGIN}${trimmed}`;
  }
  return trimmed;
};

export interface BannerMediaItem {
  _id?: string;
  mediaType: 'IMAGE' | 'VIDEO';
  url: string;
  thumbnailUrl?: string;
  caption?: string;
  order?: number;
}

export interface CmsBanner {
  _id: string;
  title: string;
  subtitle: string;
  placement: string;
  mediaType: 'IMAGE' | 'VIDEO';
  mediaUrl: string;
  thumbnailUrl?: string;
  badge?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  mediaList?: BannerMediaItem[];
  displayOrder?: number;
  isActive: boolean;
}

export interface CmsProject {
  _id: string;
  title: string;
  slug?: string;
  status: 'UPCOMING' | 'ONGOING' | 'COMPLETED';
  category: string;
  categoryLabel?: string;
  location?: string;
  area?: string;
  value?: string;
  timeline?: string;
  description?: string;
  clientName?: string;
  featuredImage: string;
  mediaType?: 'IMAGE' | 'VIDEO';
  videoUrl?: string;
  gallery?: Array<{ type: 'IMAGE' | 'VIDEO'; url: string; caption?: string }>;
  features?: string[];
  isFeatured?: boolean;
}

export interface CmsTestimonial {
  _id: string;
  name: string;
  role: string;
  company?: string;
  project?: string;
  avatar: string;
  quote: string;
  rating?: number;
  isFeatured?: boolean;
}

export const fetchPublicBanners = async (
  placement: string = 'HERO'
): Promise<CmsBanner[]> => {
  try {
    const res = await fetch(
      `${API_BASE_URL}/cms/public/banners?placement=${placement}&limit=20`
    );
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    return json.data || [];
  } catch (err) {
    console.warn('Failed to fetch public banners from CMS API:', err);
    return [];
  }
};

export const fetchPublicProjects = async (params: {
  status?: string;
  category?: string;
} = {}): Promise<CmsProject[]> => {
  try {
    const query = new URLSearchParams();
    if (params.status && params.status !== 'ALL') {
      query.set('status', params.status);
    }
    if (params.category && params.category !== 'ALL') {
      query.set('category', params.category);
    }
    query.set('limit', '50');

    const res = await fetch(`${API_BASE_URL}/cms/public/projects?${query.toString()}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    return json.data || [];
  } catch (err) {
    console.warn('Failed to fetch public projects from CMS API:', err);
    return [];
  }
};

export const fetchPublicTestimonials = async (): Promise<CmsTestimonial[]> => {
  try {
    const res = await fetch(`${API_BASE_URL}/cms/public/testimonials?limit=30`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    return json.data || [];
  } catch (err) {
    console.warn('Failed to fetch public testimonials from CMS API:', err);
    return [];
  }
};
