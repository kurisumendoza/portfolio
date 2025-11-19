import { PROJECT } from '../../constants';
import { cvBuilderImgs } from '../../assets/pictures/projects';
import type { ProjectEntry } from '../../types';

const cvBuilder: ProjectEntry = {
  name: PROJECT.CV_BUILDER,
  src: cvBuilderImgs,
  isLandscape: true,
  description: [
    'My first project using React, and the one that made me appreciate the library after working mostly with vanilla JavaScript. It’s a project from The Odin Project, and also with minimal instructions provided. I added a color-customization feature and included a few sample templates to make the CV preview more flexible and useful.',
  ],
  tech: ['ReactJS', 'JavaScript', 'CSS', 'Vite'],
  codeURL: 'https://github.com/kurisumendoza/cv-application',
  liveURL: 'https://cv-application-k.netlify.app/',
};

export default cvBuilder;
