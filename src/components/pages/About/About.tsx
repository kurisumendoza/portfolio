import { useState } from 'react';
import { ABOUT, type AboutType } from '../../../constants';
import WindowAccent from '../../shared/WindowAccent';
import AboutOverview from '../AboutOverview';
import AboutSkills from '../AboutSkills';
import AboutExperience from '../AboutExperience';
import AboutInterests from '../AboutInterests';
import SideMenu from '../../shared/SideMenu';

const About = ({ animation }: { animation: string }) => {
  const { OVERVIEW, SKILLS, EXPERIENCE, INTERESTS } = ABOUT;

  const [activeSection, setActiveSection] = useState<AboutType>(OVERVIEW);

  return (
    <div
      className={`bg-background flex size-full justify-center gap-10 rounded-2xl p-3 ${animation}`}
    >
      <WindowAccent />
      <SideMenu
        sections={[OVERVIEW, SKILLS, EXPERIENCE, INTERESTS]}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <div className="h-full w-3/4 px-3 pt-3">
        <h1 className="mb-5">{activeSection}</h1>
        {activeSection === OVERVIEW && <AboutOverview />}
        {activeSection === SKILLS && <AboutSkills />}
        {activeSection === EXPERIENCE && <AboutExperience />}
        {activeSection === INTERESTS && <AboutInterests />}
      </div>
    </div>
  );
};

export default About;
