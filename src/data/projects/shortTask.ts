import { PROJECT } from '../../constants';
import { shortTaskTimerImgs } from '../../assets/pictures/projects';
import type { ProjectEntry } from '../../types';

const shortTask: ProjectEntry = {
  name: PROJECT.SHORT_TASK,
  src: shortTaskTimerImgs,
  description: [
    'A timer I built for the short, timed tasks I handled in my previous job. It includes an OFFSET feature that alerts me a few seconds earlier or later based on task difficulty, tracks my total work time for the day, and logs how many of each task type I complete.',
    'This is an improved version of an older timer I made, rebuilt with a cleaner UI, better structure, and features tailored to the workflow. You can still view that one here:',
  ],
  tech: ['ReactJS', 'JavaScript', 'Tailwind', 'Vite'],
  codeURL: 'https://github.com/kurisumendoza/task-timer',
  liveURL: 'https://shorttasktimer.netlify.app/',
  otherURL: 'https://kurisumendoza.github.io/workflow-timer/',
};

export default shortTask;
