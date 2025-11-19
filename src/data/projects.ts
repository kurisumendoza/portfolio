import { PROJECT } from '../constants';
import {
  battleshipImgs,
  cvBuilderImgs,
  memoryGameImgs,
  otherProjectsImgs,
  shortTaskTimerImgs,
  weatherAppImgs,
} from '../assets/pictures/projects';

export type ProjectItem = {
  name: string;
  tech: string[];
  src?: string | string[];
  description?: string | string[];
  codeURL?: string | string[];
  liveURL?: string;
  otherURL?: string;
};

export type ProjectGroup = {
  name: string;
  description?: string | string[];
  projects: ProjectItem[];
};

const {
  SHORT_TASK,
  MEMORY_GAME,
  CV_BUILDER,
  BATTLESHIP,
  WEATHER_APP,
  ALGORITHMS,
  OTHER,
} = PROJECT;

const [
  calculator,
  etchSketch,
  myBooksList,
  rockPaperScissors,
  ticTacToe,
  todoList,
] = otherProjectsImgs;

export const projects: (ProjectItem | ProjectGroup)[] = [
  {
    name: SHORT_TASK,
    src: shortTaskTimerImgs,
    description: [
      'A timer I built for the short, timed tasks I handled in my previous job. It includes an OFFSET feature that alerts me a few seconds earlier or later based on task difficulty, tracks my total work time for the day, and logs how many of each task type I complete.',
      'This is an improved version of an older tool I used for years, rebuilt with a cleaner UI, better structure, and features tailored to the workflow.',
    ],
    tech: ['React', 'JavaScript', 'Tailwind', 'Vite'],
    codeURL: 'https://github.com/kurisumendoza/task-timer',
    liveURL: 'https://shorttasktimer.netlify.app/',
    otherURL: 'https://kurisumendoza.github.io/workflow-timer/',
  },
  {
    name: MEMORY_GAME,
    src: memoryGameImgs,
    description:
      'A memory game project from The Odin Project, where we were given minimal instructions and asked to build the game using images from an external API instead of local files. The goal is to pick images without repeating any choice. I added a difficulty system to make it more engaging and to go beyond the basic requirements.',
    tech: ['React', 'JavaScript', 'CSS', 'Vite'],
    codeURL: 'https://github.com/kurisumendoza/memory-card',
    liveURL: 'https://memorymonstercardgame.netlify.app/',
  },
  {
    name: CV_BUILDER,
    src: cvBuilderImgs,
    description:
      'My first project using React, and the one that made me appreciate the library after working mostly with vanilla JavaScript. It’s a project from The Odin Project, and also with minimal instructions provided. I added a color-customization feature and included a few sample templates to make the CV preview more flexible and useful.',
    tech: ['React', 'JavaScript', 'CSS', 'Vite'],
    codeURL: 'https://github.com/kurisumendoza/cv-application',
    liveURL: 'https://cv-application-k.netlify.app/',
  },
  {
    name: BATTLESHIP,
    src: battleshipImgs,
    description:
      'The final pure vanilla JavaScript project from The Odin Project, based on the classic Battleship board game. This project challenged me to apply test-driven development throughout the entire build, including game logic, ship placement, hit detection, and game flow. It also pushed me to design a fairly clean UI. Overall, it was a great exercise in structuring logic-heavy code without relying on frameworks.',
    tech: ['JavaScript', 'CSS', 'Webpack'],
    codeURL: 'https://github.com/kurisumendoza/battleship',
    liveURL: 'https://kurisumendoza.github.io/battleship/',
  },
  {
    name: WEATHER_APP,
    src: weatherAppImgs,
    description:
      'A simple weather app where you can search for any city and instantly get its current weather data. The project focuses on working with APIs, handling loading states, and presenting data clearly. I also added dynamic styling so the page theme updates based on the weather conditions. This helped me practice asynchronous JavaScript and data handling.',
    tech: ['JavaScript', 'CSS', 'Webpack'],
    codeURL: 'https://github.com/kurisumendoza/weather-app',
    liveURL: 'https://kurisumendoza.github.io/weather-app/',
  },
  {
    name: ALGORITHMS,
    description:
      "A collection of algorithm-focused projects from The Odin Project, including Knight's Travails, Binary Search Trees, Hashmaps, Linked Lists, and several recursion exercises. They don't have live demos since they're purely code-based, but they show my ability to understand core data structures and implement algorithms.",
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
    description:
      "These are some of my earliest projects, where I built small but complete applications that strengthened my understanding of the fundamentals. They're simple, but they laid the groundwork that helped me transition into more complex projects later on.",
    projects: [
      {
        name: 'Todo-List',
        src: todoList,
        tech: ['JavaScript', 'CSS', 'Webpack'],
        liveURL: 'https://kurisumendoza.github.io/todo-list/',
      },
      {
        name: 'Tic Tac Toe',
        src: ticTacToe,
        tech: ['JavaScript', 'CSS'],
        liveURL: 'https://kurisumendoza.github.io/tic-tac-toe/',
      },
      {
        name: 'MyBooksList / Library',
        src: myBooksList,
        tech: ['JavaScript', 'CSS'],
        liveURL: 'https://kurisumendoza.github.io/library/',
      },
      {
        name: 'Calculator',
        src: calculator,
        tech: ['JavaScript'],
        liveURL: 'https://kurisumendoza.github.io/calculator/',
      },
      {
        name: 'Etch-A-Sketch',
        src: etchSketch,
        tech: ['JavaScript'],
        liveURL: 'https://kurisumendoza.github.io/etch-a-sketch/',
      },
      {
        name: 'Rock Paper Scissors',
        src: rockPaperScissors,
        tech: ['JavaScript'],
        liveURL: 'https://kurisumendoza.github.io/rock-paper-scissors/',
      },
    ],
  },
];
