import { techLogos } from '../../../assets/tech-logos';
import type { ProjectEntry } from '../../../types';

type ProjectSectionProps = {
  project: ProjectEntry | undefined;
};

const ProjectSection = ({ project }: ProjectSectionProps) => {
  const buttonStyle =
    'bg-accent flex w-1/2 items-center justify-center rounded-xl p-3 font-bold text-nowrap transition-all duration-300 hover:scale-105 hover:brightness-120';

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="mx-auto flex h-96 max-h-1/2 items-center">
        <img
          src={project?.src?.[0]}
          alt=""
          className="h-full max-w-9/12 object-contain"
        />
        <img
          src={project?.src?.[1]}
          alt=""
          className={`${project?.isLandscape && '-translate-x-1/2 rotate-270'} h-full`}
        />
      </div>
      <div className="flex items-center justify-between gap-10 pr-10">
        <div className="bg-primary flex items-center gap-5 rounded-md p-3 pl-5 font-bold">
          <p>Tech</p>
          <div className="flex gap-3 border-l-2 border-gray-300 pl-3">
            {project?.tech.map((tech) => {
              return (
                <div key={tech} className="">
                  <img
                    src={techLogos.find((logo) => logo.name === tech)?.src}
                    alt=""
                    className="h-10 rounded-md bg-white p-1"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="justify-left flex w-1/2 gap-5 py-5">
          <a
            href={project?.codeURL}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonStyle}
          >
            View Code
          </a>
          <a
            href={project?.liveURL}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonStyle}
          >
            Live Preview
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-2 pr-10">
        {project?.description?.map((desc: string, i: number) => {
          return (
            <p key={i}>
              {desc}
              {project?.otherURL &&
                i === (project?.description?.length ?? 0) - 1 && (
                  <span>
                    {' '}
                    <a
                      href={project.otherURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent font-bold"
                    >
                      View Previous Version
                    </a>
                    .
                  </span>
                )}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectSection;
