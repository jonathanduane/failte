const WORDPRESS_BASE_URL = import.meta.env.VITE_WORDPRESS_URL || 'https://failtedab.ie';
const WORDPRESS_USERNAME = import.meta.env.VITE_WORDPRESS_USERNAME || 'failtedab';
const WORDPRESS_APP_PASSWORD = import.meta.env.VITE_WORDPRESS_APP_PASSWORD || 'IpVu XZZg WY2w V7FJ VoeN V4D8';

export interface WordPressPost {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  featured_media: number;
  date: string;
  slug: string;
}

export interface WordPressPage {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  slug: string;
}

export interface WordPressMedia {
  id: number;
  source_url: string;
  alt_text: string;
  title: { rendered: string };
}

export class WordPressAPI {
  private baseUrl: string;
  private headers: HeadersInit;

  constructor(baseUrl: string = WORDPRESS_BASE_URL) {
    this.baseUrl = `${baseUrl}/wp-json/wp/v2`;
    
    // Create basic auth header
    const credentials = btoa(`${WORDPRESS_USERNAME}:${WORDPRESS_APP_PASSWORD.replace(/\s/g, '')}`);
    this.headers = {
      'Authorization': `Basic ${credentials}`,
      'Content-Type': 'application/json',
    };
  }

  async getPosts(params: { per_page?: number; page?: number } = {}): Promise<WordPressPost[]> {
    const searchParams = new URLSearchParams({
      per_page: (params.per_page || 10).toString(),
      page: (params.page || 1).toString(),
    });

    const response = await fetch(`${this.baseUrl}/posts?${searchParams}`, {
      headers: this.headers,
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.statusText}`);
    }
    return response.json();
  }

  async getPost(id: number): Promise<WordPressPost> {
    const response = await fetch(`${this.baseUrl}/posts/${id}`, {
      headers: this.headers,
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch post: ${response.statusText}`);
    }
    return response.json();
  }

  async getPages(): Promise<WordPressPage[]> {
    const response = await fetch(`${this.baseUrl}/pages`, {
      headers: this.headers,
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch pages: ${response.statusText}`);
    }
    return response.json();
  }

  async getPage(id: number): Promise<WordPressPage> {
    const response = await fetch(`${this.baseUrl}/pages/${id}`, {
      headers: this.headers,
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch page: ${response.statusText}`);
    }
    return response.json();
  }

  async getMedia(id: number): Promise<WordPressMedia> {
    const response = await fetch(`${this.baseUrl}/media/${id}`, {
      headers: this.headers,
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch media: ${response.statusText}`);
    }
    return response.json();
  }
}

export const wordpressAPI = new WordPressAPI();
