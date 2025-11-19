import { PROJECT } from '../../constants';
import { memoryGameImgs } from '../../assets/pictures/projects';
import type { ProjectEntry } from '../../types';

const memoryGame: ProjectEntry = {
  name: PROJECT.MEMORY_GAME,
  src: memoryGameImgs,
  description: [
    'A memory game project from The Odin Project, where we were given minimal instructions and asked to build the game using images from an external API instead of local files. The goal is to pick images without repeating any choice. I added a difficulty system to make it more engaging and to go beyond the basic requirements.',
  ],
  tech: ['ReactJS', 'JavaScript', 'CSS', 'Vite'],
  codeURL: 'https://github.com/kurisumendoza/memory-card',
  liveURL: 'https://memorymonstercardgame.netlify.app/',
};

export default memoryGame;
