export type ProjectEntry = {
  name: string;
  tech: string[];
  src?: string | string[];
  isLandscape?: boolean;
  description?: string[];
  codeURL?: string;
  codeURLs?: string[];
  liveURL?: string;
  otherURL?: string;
};

export type ProjectGroup = {
  name: string;
  description: string[];
  projects: ProjectEntry[];
};
