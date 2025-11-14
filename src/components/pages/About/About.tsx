import { useState } from 'react';
import { ABOUT, type AboutType } from '../../../constants';
import WindowAccent from '../../shared/WindowAccent';
import AboutOverview from '../AboutOverview';
import AboutSkills from '../AboutSkills';
import AboutExperience from '../AboutExperience';
import AboutInterests from '../AboutInterests';

const About = ({ animation }: { animation: string }) => {
  const { OVERVIEW, SKILLS, EXPERIENCE, INTERESTS } = ABOUT;

  const [activeSection, setActiveSection] = useState<AboutType>(OVERVIEW);

  const handleClick = (section: AboutType) => {
    setActiveSection(section);
  };

  const sectionStyle =
    'hover:text-text-dark rounded-sm px-5 py-1.5 transition-colors duration-300 hover:bg-gray-300';
  const activeStyle = 'bg-accent';

  return (
    <div
      className={`bg-background flex size-full justify-center gap-10 rounded-2xl p-3 ${animation}`}
    >
      <WindowAccent />
      <div className="h-full w-1/4 rounded-2xl border border-gray-400 bg-transparent py-15">
        <ul className="flex flex-col gap-1 px-1.5 text-xl">
          <li
            className={`${sectionStyle} ${activeSection === OVERVIEW && activeStyle}`}
            onClick={() => handleClick(OVERVIEW)}
          >
            {OVERVIEW}
          </li>
          <li
            className={`${sectionStyle} ${activeSection === SKILLS && activeStyle}`}
            onClick={() => handleClick(SKILLS)}
          >
            {SKILLS}
          </li>
          <li
            className={`${sectionStyle} ${activeSection === EXPERIENCE && activeStyle}`}
            onClick={() => handleClick(EXPERIENCE)}
          >
            {EXPERIENCE}
          </li>
          <li
            className={`${sectionStyle} ${activeSection === INTERESTS && activeStyle}`}
            onClick={() => handleClick(INTERESTS)}
          >
            {INTERESTS}
          </li>
        </ul>
      </div>
      <div className="h-full w-3/4 p-3">
        <h1 className="mb-10">{activeSection}</h1>
        {activeSection === OVERVIEW && <AboutOverview />}
        {activeSection === SKILLS && <AboutSkills />}
        {activeSection === EXPERIENCE && <AboutExperience />}
        {activeSection === INTERESTS && <AboutInterests />}
      </div>
    </div>
  );
};

export default About;
