export const PROJECT = {
  SHORT_TASK: 'Short Task Timer',
  MEMORY_GAME: 'Memory Game',
  CV_BUILDER: 'CV Builder',
  BATTLESHIP: 'Battleship Game',
  WEATHER_APP: 'Weather App',
  ALGORITHMS: 'Algorithm Projects',
  OTHER: 'Other Earlier Projects',
};

export type ProjectType = (typeof PROJECT)[keyof typeof PROJECT];
