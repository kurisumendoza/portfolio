import { techLogos } from '../../../assets/tech-logos';

const AboutSkills = () => {
  return (
    <div className="h-10/12 pr-12">
      <p className="mb-5 text-2xl">
        I learned most of my skills through <i>The Odin Project</i> course, and
        I'm still continuing to learn from it. The course has made me very
        comfortable with technologies like HTML, CSS, JavaScript, React, Vite,
        and Git. It has also helped me become knowledgeable about Webpack,
        Vitest, and Jest. I'm also comfortable with TypeScript and Tailwind CSS.
      </p>
      <div className="grid grid-cols-3 gap-5">
        {techLogos.map(({ name, src }, index) => {
          return (
            <div
              key={index}
              className="text-text-dark hover:text-text hover:bg-accent flex items-center gap-7 rounded-xl bg-white p-3 text-xl transition-transform duration-300 hover:scale-110"
            >
              <img src={src} alt="" className="h-12" />
              <p className="font-semibold">{name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutSkills;
