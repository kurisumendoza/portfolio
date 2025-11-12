import { useState } from 'react';
import { techLogos } from '../../../assets/tech-logos';

const SkillsDock = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={`mx-auto mb-2 flex items-center justify-center gap-3 rounded-xl bg-neutral-500 p-4 transition-[padding] duration-300 ease-out ${hoveredIndex !== null && 'px-10'}`}
    >
      {techLogos.map(({ src }, index) => {
        let scale = 1;
        let translateX = 0;

        if (hoveredIndex === index) {
          scale = 1.6;
        } else if (hoveredIndex === index - 1) {
          scale = 1.3;
          translateX = 15;
        } else if (hoveredIndex === index + 1) {
          scale = 1.3;
          translateX = -15;
        } else if (hoveredIndex !== null && hoveredIndex < index - 1)
          translateX = 25;
        else if (hoveredIndex !== null && hoveredIndex > index + 1)
          translateX = -25;

        return (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative origin-bottom rounded-lg bg-white p-2 transition-transform duration-300 ease-out will-change-transform"
            style={{
              transform: `scale(${scale}) translateX(${translateX}px)`,
            }}
          >
            <div className="absolute -inset-2.5 z-0" />
            <img
              src={src}
              alt=""
              className="pointer-events-none h-10 select-none"
            />
          </div>
        );
      })}
    </div>
  );
};

export default SkillsDock;
