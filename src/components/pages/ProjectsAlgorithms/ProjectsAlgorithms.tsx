import type { ProjectAlgorithms } from '../../../types';
import LinkButton from '../../shared/LinkButton';

const ProjectsAlgorithms = ({ projects }: { projects: ProjectAlgorithms }) => {
  return (
    <div className="flex h-full flex-col gap-5 pr-8">
      <p>{projects.description}</p>
      <div className="flex flex-col gap-2">
        {projects?.projects?.map((proj, i) => (
          <div key={i}>
            <div className="flex h-20 items-center justify-between rounded-md px-5 text-xl font-bold transition-colors duration-300 hover:bg-gray-700">
              <p>{proj.name}</p>
              <LinkButton
                label="View Code"
                url={proj.url}
                className="bg-secondary rounded-lg px-10 py-2 transition-all duration-300 hover:scale-105 hover:brightness-125"
              />
            </div>
            {i !== projects.projects.length - 1 && (
              <div className="mx-auto mt-2 border-b border-gray-500"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsAlgorithms;
