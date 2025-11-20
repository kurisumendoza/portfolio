import { useState } from 'react';
import { PROJECT, type ProjectType } from '../../../constants';
import { earlyProjects, projects } from '../../../data/projects';
import WindowAccent from '../../shared/WindowAccent';
import SideMenu from '../../shared/SideMenu';
import ProjectSection from '../ProjectSection';
import ProjectsOther from '../ProjectsOther';
import ProjectsAlgorithms from '../ProjectsAlgorithms';
import algorithms from '../../../data/projects/algorithms';

const Projects = ({ animation }: { animation: string }) => {
  const { SHORT_TASK, ALGORITHMS, OTHER } = PROJECT;

  const [activeSection, setActiveSection] = useState<ProjectType>(SHORT_TASK);

  return (
    <div
      className={`bg-background flex size-full justify-center gap-10 rounded-2xl p-3 ${animation}`}
    >
      <WindowAccent />
      <SideMenu
        sections={Object.values(PROJECT)}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <div className="h-full w-3/4 px-3 pt-3">
        <h1 className="mb-5">{activeSection}</h1>
        {activeSection === ALGORITHMS && (
          <ProjectsAlgorithms projects={algorithms} />
        )}
        {activeSection === OTHER && <ProjectsOther projects={earlyProjects} />}
        {activeSection !== ALGORITHMS && activeSection !== OTHER && (
          <ProjectSection
            project={projects.find((proj) => proj.name === activeSection)}
          />
        )}
      </div>
    </div>
  );
};

export default Projects;
