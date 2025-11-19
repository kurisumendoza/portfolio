import { PROJECT } from '../../constants';
import type { ProjectEntry } from '../../types';

const algorithms: ProjectEntry = {
  name: PROJECT.ALGORITHMS,
  description: [
    "A collection of algorithm-focused projects from The Odin Project, including Knight's Travails, Binary Search Trees, Hashmaps, Linked Lists, and several recursion exercises. They don't have live demos since they're purely code-based, but they show my ability to understand core data structures and implement algorithms.",
  ],
  tech: ['JavaScript'],
  codeURLs: [
    'https://github.com/kurisumendoza/knights-travails',
    'https://github.com/kurisumendoza/binary-search-trees',
    'https://github.com/kurisumendoza/hashmap',
    'https://github.com/kurisumendoza/linked-lists',
    'https://github.com/kurisumendoza/recursion',
  ],
};

export default algorithms;
