export const PAGE = {
  HOME: 'home',
  ABOUT: 'about me',
  PROJECTS: 'projects',
  CONTACT: 'contact',
} as const;

export type PageType = (typeof PAGE)[keyof typeof PAGE];
