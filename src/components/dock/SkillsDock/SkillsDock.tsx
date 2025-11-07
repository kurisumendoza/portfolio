import { techLogos } from '../../../assets/tech-logos';

const SkillsDock = () => {
  return (
    <div className="mx-auto mb-2 flex items-center justify-center gap-3 rounded-xl bg-neutral-500 p-4">
      {techLogos.map((logo) => (
        <div key={crypto.randomUUID()} className="rounded-lg bg-white p-2">
          <img src={logo} alt="" className="h-10" />
        </div>
      ))}
    </div>
  );
};

export default SkillsDock;
