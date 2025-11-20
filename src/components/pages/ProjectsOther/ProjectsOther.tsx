import type { ProjectGroup } from '../../../types';
import LinkButton from '../../shared/LinkButton';
import TechList from '../../shared/TechList';

type ProjectsOtherProps = {
  projects: ProjectGroup;
};

const ProjectsOther = ({ projects }: ProjectsOtherProps) => {
  return (
    <div className="flex h-full flex-col gap-5 pr-8">
      <p>{projects.description}</p>
      <div className="scrollbar scrollbar-thumb-rounded-full scrollbar-thumb-accent scrollbar-track-transparent flex max-h-[550px] flex-wrap gap-x-1 gap-y-10 overflow-y-scroll">
        {projects.projects.map((proj, i) => (
          <div
            key={i}
            className="mx-auto flex w-[49%] flex-col gap-2 rounded-md p-2 transition-colors duration-300 hover:bg-gray-700"
          >
            <p className="text-xl font-bold">{proj.name}</p>
            <img
              src={Array.isArray(proj.src) ? proj.src[0] : proj.src}
              alt=""
            />
            <div className="flex items-center justify-between gap-2">
              <TechList tech={proj.tech} />
              <LinkButton
                label="Live Preview"
                url={proj.liveURL}
                className="bg-accent flex h-full flex-1 items-center justify-center rounded-md px-3 font-bold transition-all duration-300 hover:scale-105 hover:brightness-120"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsOther;
