import { techLogos } from '../../../assets/tech-logos';

const TechList = ({ tech }: { tech: string[] | undefined }) => {
  return (
    <div className="bg-primary flex items-center gap-5 rounded-md p-3 pl-5 font-bold">
      <p className="font-semibold">Tech</p>
      <div className="flex gap-3 border-l-2 border-gray-300 pl-3">
        {tech?.map((t: string) => {
          return (
            <div key={t} className="">
              <img
                src={techLogos.find((logo) => logo.name === t)?.src}
                alt=""
                className="h-10 rounded-md bg-white p-1"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechList;
