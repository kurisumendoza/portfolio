import { PROJECT } from '../../constants';
import type { ProjectAlgorithms } from '../../types';

const algorithms: ProjectAlgorithms = {
  name: PROJECT.ALGORITHMS,
  description:
    "A collection of algorithm-focused projects from The Odin Project, including Knight's Travails, Binary Search Trees, Hashmaps, Linked Lists, and several recursion exercises. They don't have live demos since they're purely code-based, but they show my ability to understand core data structures and implement algorithms.",
  projects: [
    {
      name: 'Knights Travails',
      url: 'https://github.com/kurisumendoza/knights-travails',
    },
    {
      name: 'Binary Search Trees',
      url: 'https://github.com/kurisumendoza/binary-search-trees',
    },
    {
      name: 'Hashmap',
      url: 'https://github.com/kurisumendoza/hashmap',
    },
    {
      name: 'Linked Lists',
      url: 'https://github.com/kurisumendoza/linked-lists',
    },
    {
      name: 'Recursion',
      url: 'https://github.com/kurisumendoza/recursion',
    },
  ],
};

export default algorithms;
