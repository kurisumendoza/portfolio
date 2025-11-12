export const ABOUT = {
  OVERVIEW: 'Overview',
  SKILLS: 'Skills',
  EXPERIENCE: 'Experience',
  INTERESTS: 'Interests',
} as const;

export type AboutType = (typeof ABOUT)[keyof typeof ABOUT];
