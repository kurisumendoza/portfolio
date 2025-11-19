import { PROJECT } from '../../constants';
import { otherProjectsImgs } from '../../assets/pictures/projects';
import type { ProjectGroup } from '../../types';

const [
  calculator,
  etchSketch,
  myBooksList,
  rockPaperScissors,
  ticTacToe,
  todoList,
] = otherProjectsImgs;

const otherProjects: ProjectGroup = {
  name: PROJECT.OTHER,
  description: [
    "These are some of my earliest projects, where I built small but complete applications that strengthened my understanding of the fundamentals. They're simple, but they laid the groundwork that helped me transition into more complex projects later on.",
  ],
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
};

export default otherProjects;
