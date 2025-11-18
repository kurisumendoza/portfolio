import { PROJECT } from '../constants';

const {
  SHORT_TASK,
  MEMORY_GAME,
  CV_BUILDER,
  BATTLESHIP,
  WEATHER_APP,
  ALGORITHMS,
  OTHER,
} = PROJECT;

const projects = [
  {
    name: SHORT_TASK,
    src: '',
    description: '',
    tech: ['React', 'JavaScript', 'CSS', 'Vite'],
    codeURL: 'https://github.com/kurisumendoza/task-timer',
    liveURL: 'https://shorttasktimer.netlify.app/',
  },
  {
    name: MEMORY_GAME,
    src: '',
    description: '',
    tech: ['React', 'JavaScript', 'CSS', 'Vite'],
    codeURL: 'https://github.com/kurisumendoza/memory-card',
    liveURL: 'https://memorymonstercardgame.netlify.app/',
  },
  {
    name: CV_BUILDER,
    src: '',
    description: '',
    tech: ['React', 'JavaScript', 'CSS', 'Vite'],
    codeURL: 'https://github.com/kurisumendoza/cv-application',
    liveURL: 'https://cv-application-k.netlify.app/',
  },
  {
    name: BATTLESHIP,
    src: '',
    description: '',
    tech: ['JavaScript', 'CSS', 'Webpack'],
    codeURL: 'https://github.com/kurisumendoza/battleship',
    liveURL: 'https://kurisumendoza.github.io/battleship/',
  },
  {
    name: WEATHER_APP,
    src: '',
    description: '',
    tech: ['JavaScript', 'CSS', 'Webpack'],
    codeURL: 'https://github.com/kurisumendoza/weather-app',
    liveURL: 'https://kurisumendoza.github.io/weather-app/',
  },
  {
    name: ALGORITHMS,
    src: '',
    description: '',
    tech: ['JavaScript'],
    codeURL: [
      'https://github.com/kurisumendoza/knights-travails',
      'https://github.com/kurisumendoza/binary-search-trees',
      'https://github.com/kurisumendoza/hashmap',
      'https://github.com/kurisumendoza/linked-lists',
      'https://github.com/kurisumendoza/recursion',
    ],
  },
  {
    name: OTHER,
    description: '',
    otherProjects: [
      {
        name: 'Todo-List',
        src: '',
        tech: ['JavaScript', 'CSS', 'Webpack'],
        liveURL: 'https://kurisumendoza.github.io/todo-list/',
      },
      {
        name: 'Tic Tac Toe',
        src: '',
        tech: ['JavaScript', 'CSS'],
        liveURL: 'https://kurisumendoza.github.io/tic-tac-toe/',
      },
      {
        name: 'MyBooksList / Library',
        src: '',
        tech: ['JavaScript', 'CSS'],
        liveURL: 'https://kurisumendoza.github.io/library/',
      },
      {
        name: 'Calculator',
        src: '',
        tech: ['JavaScript'],
        liveURL: 'https://kurisumendoza.github.io/calculator/',
      },
      {
        name: 'Etch-A-Sketch',
        src: '',
        tech: ['JavaScript'],
        liveURL: 'https://kurisumendoza.github.io/etch-a-sketch/',
      },
      {
        name: 'Rock Paper Scissors',
        src: '',
        tech: ['JavaScript'],
        liveURL: 'https://kurisumendoza.github.io/rock-paper-scissors/',
      },
    ],
  },
];

export default projects;
