import type { ProjectEntry, ProjectGroup } from '../../types';
import shortTask from './shortTask';
import memoryGame from './memoryGame';
import cvBuilder from './cvBuilder';
import battleship from './battleship';
import weatherApp from './weatherApp';
import algorithms from './algorithms';
import otherProjects from './otherProjects';

export const projects: ProjectEntry[] = [
  shortTask,
  memoryGame,
  cvBuilder,
  battleship,
  weatherApp,
  algorithms,
];

export const earlyProjects: ProjectGroup = otherProjects;
