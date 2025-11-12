import { ABOUT } from '../../../constants';
import WindowAccent from '../../shared/WindowAccent';
import { useState } from 'react';
import AboutOverview from '../AboutOverview';

type AboutProps = {
  animation: string;
};

const About = ({ animation }: AboutProps) => {
  const { OVERVIEW, SKILLS, EXPERIENCE, INTERESTS } = ABOUT;

  const [activeSection, setActiveSection] = useState(OVERVIEW);

  return (
    <div
      className={`bg-background flex size-full justify-center gap-10 rounded-2xl p-3 ${animation}`}
    >
      <WindowAccent />
      <div className="h-full w-1/4 rounded-2xl border border-gray-400 bg-transparent px-6 py-15">
        <ul className="flex flex-col gap-5 text-xl">
          <li>{OVERVIEW}</li>
          <li>{SKILLS}</li>
          <li>{EXPERIENCE}</li>
          <li>{INTERESTS}</li>
        </ul>
      </div>
      <div className="h-full w-3/4 p-3">
        <h1 className="mb-10">{activeSection}</h1>
        {activeSection === OVERVIEW && <AboutOverview />}
      </div>
    </div>
  );
};

export default About;
