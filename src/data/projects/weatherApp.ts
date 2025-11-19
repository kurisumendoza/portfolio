import { PROJECT } from '../../constants';
import { weatherAppImgs } from '../../assets/pictures/projects';
import type { ProjectEntry } from '../../types';

const weatherApp: ProjectEntry = {
  name: PROJECT.WEATHER_APP,
  src: weatherAppImgs,
  description: [
    'A simple weather app where you can search for any city and instantly get its current weather data. The project focuses on working with APIs, handling loading states, and presenting data clearly. I also added dynamic styling so the page theme updates based on the weather conditions. This helped me practice asynchronous JavaScript and data handling.',
  ],
  tech: ['JavaScript', 'CSS', 'Webpack'],
  codeURL: 'https://github.com/kurisumendoza/weather-app',
  liveURL: 'https://kurisumendoza.github.io/weather-app/',
};

export default weatherApp;
