const API_KEY = `c70c6b881578467e8d65672d0783c383`;
export const HEADLINES_PATH = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
export const CATEGORY_PATH = `${HEADLINES_PATH}&category=`;

export const CATEGORIES = [
  { cat: "Business", display: "Business" },
  { cat: "Entertainment", display: "Entertainment" },
  { cat: "General", display: "General" },
  { cat: "Health", display: "Health" },
  { cat: "Science", display: "Science" },
  { cat: "Sports", display: "Sports" },
  { cat: "Technology", display: "Technology" },
];
