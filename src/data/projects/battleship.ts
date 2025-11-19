import { PROJECT } from '../../constants';
import { battleshipImgs } from '../../assets/pictures/projects';
import type { ProjectEntry } from '../../types';

const battleship: ProjectEntry = {
  name: PROJECT.BATTLESHIP,
  src: battleshipImgs,
  description: [
    'The final pure vanilla JavaScript project from The Odin Project, based on the classic Battleship board game. This project challenged me to apply test-driven development throughout the entire build, including game logic, ship placement, hit detection, and game flow. It also pushed me to design a fairly clean UI. Overall, it was a great exercise in structuring logic-heavy code without relying on frameworks.',
  ],
  tech: ['JavaScript', 'CSS', 'Webpack'],
  codeURL: 'https://github.com/kurisumendoza/battleship',
  liveURL: 'https://kurisumendoza.github.io/battleship/',
};

export default battleship;
