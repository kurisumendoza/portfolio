import { useState } from 'react';
import { workLogos } from '../../../assets/work-logos';
import Accordion from '../../shared/Accordion';

const AboutExperience = () => {
  const [activeExperience, setActiveExperience] = useState('');

  const [odinLogo, telusLogo, oneSpaceLogo, humanaticLogo, workLogo] =
    workLogos;

  const workDetails = [
    {
      name: 'The Odin Project',
      short: 'Self-Directed Learning',
      duration: 'Ongoing',
      description:
        "Not exactly a work experience, but this is where my programming journey began. I started around May 2023 and have been learning steadily in my free time. The later projects offer very little guidance, which really helped me to think like a developer. I'm currently on the React section, but I also explore beyond it and have already built several React projects on my own.",
      src: odinLogo,
    },
    {
      name: 'Telus Digital',
      short: 'Maps Data Evaluator, AI Quality Evaluator',
      duration: 'Feb 2020 - Oct 2025',
      description:
        'A remote role focused on evaluating map data and AI-generated content for accuracy, relevance, and quality. I reviewed search results and geographic information based on set guidelines to help improve user experience. While not directly related to web development, this role strengthened my attention to detail and ability to work independently.',
      src: telusLogo,
    },
    {
      name: 'OneSpace',
      short: 'Data and Content Specialist',
      duration: 'Sept 2014 - Feb 2024',
      description:
        'A remote position where I handled various content and data tasks such as writing, editing, and product categorization. I ensured accuracy and consistency across projects while meeting deadlines. The platform’s online forum also gave me opportunities to collaborate with teammates and admins effectively.',
      src: oneSpaceLogo,
    },
    {
      name: 'CallBox / Humanatic',
      short: 'Call Quality Analyst',
      duration: 'Jan 2014 - Dec 2016',
      description:
        'A remote position where I reviewed and evaluated recorded calls for accuracy, tone, and overall quality. I provided feedback to help improve call handling and service performance. This role also helped refine my communication skills and understanding of the English language.',
      src: humanaticLogo,
    },
    {
      name: 'Other',
      short: 'BPO / Sales Associate',
      duration: '2010 - 2016',
      description:
        'Before transitioning to remote work, I spent some time in BPO companies and worked as a sales associate in various direct selling and real estate companies. These experiences helped me improve my communication and interpersonal skills.',
      src: workLogo,
    },
  ];

  return (
    <div className="h-160 overflow-y-scroll pr-10">
      {workDetails.map(({ name, short, duration, description, src }, index) => {
        return (
          <Accordion
            key={index}
            label={{
              content: (
                <div className="flex items-center gap-5">
                  <img
                    className="size-15 rounded-lg bg-white p-2"
                    src={src}
                    alt=""
                  />
                  <div>
                    <p className="text-2xl font-semibold">{name}</p>
                    <p>
                      {short} | {duration}
                    </p>
                  </div>
                </div>
              ),
              className: 'bg-secondary h-20 w-full px-5 py-12',
            }}
            body={{
              content: <p className="max-w-3xl">{description}</p>,
              className: 'bg-gray-300 mb-5 text-text-dark',
            }}
            id={name}
            activeElement={activeExperience}
            setActiveElement={setActiveExperience}
          />
        );
      })}
    </div>
  );
};

export default AboutExperience;
