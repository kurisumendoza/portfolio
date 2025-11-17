import { useState } from 'react';
import WindowAccent from '../../shared/WindowAccent';
import SideMenu from '../../shared/SideMenu';

const Projects = ({ animation }: { animation: string }) => {
  const [activeSection, setActiveSection] = useState('a');

  return (
    <div
      className={`bg-background flex size-full justify-center gap-10 rounded-2xl p-3 ${animation}`}
    >
      <WindowAccent />
      <SideMenu
        sections={['a', 'b', 'c']}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <div className="h-full w-3/4 px-3 pt-3">
        <h1 className="mb-5">{activeSection}</h1>
      </div>
    </div>
  );
};

export default Projects;
