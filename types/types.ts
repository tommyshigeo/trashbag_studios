// types.ts
export interface ProjectItem {
  id: string;
  title: string;
  year: string;
  description: string; // Short description for cards
  imageUrl: string;
  longDescription?: string; // For detail pages
  tags?: string[];
  // Add any other common fields
}

export interface Series extends ProjectItem {
  genre: string;
  episodes?: number;
  status?: "Released" | "In Production" | "Upcoming";
}

export interface Game extends ProjectItem {
  platform: string;
  genre?: string;
  developer?: string;
}

// New Film type
export interface Film extends ProjectItem {
  director: string;
  genre: string;
  runtime?: string; // e.g., "120 min"
  releaseDate?: string; // More specific than just year
}