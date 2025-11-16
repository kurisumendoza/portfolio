import { useState } from 'react';
import { interestsLogos } from '../../../assets/interests-logos';
import Button from '../../shared/Button';
import Modal from '../../shared/Modal';
import VideoGamesModal from './content/VideoGamesModal';

type InterestType = {
  title?: string;
  subtitle?: string;
  color: string;
  src?: string;
  content?: React.ReactNode;
};

const AboutInterests = () => {
  const [active, setActive] = useState<InterestType | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const [
    videoGamesLogo,
    animeLogo,
    moviesLogo,
    tvSeriesLogo,
    musicLogo,
    catsLogo,
  ] = interestsLogos;

  const interests = [
    {
      title: 'Video Games',
      subtitle: 'My Gaming Hall of Fame',
      color: 'bg-sky-500',
      src: videoGamesLogo,
      content: <VideoGamesModal />,
    },
    {
      title: 'Anime',
      subtitle: 'Best anime I have watched',
      color: 'bg-red-500',
      src: animeLogo,
      content: '',
    },
    {
      title: 'Movies',
      subtitle: 'Films that left a strong impression',
      color: 'bg-yellow-500',
      src: moviesLogo,
      content: '',
    },
    {
      title: 'TV Series',
      subtitle: 'Shows I loved watching',
      color: 'bg-green-500',
      src: tvSeriesLogo,
      content: '',
    },
    {
      title: 'Music',
      subtitle: 'Music that always hits right',
      color: 'bg-blue-500',
      src: musicLogo,
      content: '',
    },
    {
      title: 'Other',
      subtitle: 'More stuff I like',
      color: 'bg-teal-500',
      src: catsLogo,
      content: '',
    },
  ];

  const cardStyle =
    'flex flex-col items-start justify-between rounded-xl px-7 py-5 text-2xl font-semibold brightness-90 transition-all duration-300 hover:scale-105 hover:brightness-110';

  const handleClick = (interest: InterestType) => {
    setActive(interest);
    setIsOpen(true);
  };

  return (
    <>
      <p className="mb-3 text-xl">
        A small corner showcasing my hobbies, interests, and things I like.
      </p>
      <div
        className={`relative mr-10 grid h-4/5 grid-cols-2 grid-rows-3 gap-5 select-none`}
      >
        {interests.map((interest, i) => {
          const { title, color, src } = interest;

          return (
            <Button
              key={i}
              onClick={() => handleClick(interest)}
              className={`${cardStyle} ${color} `}
            >
              {src && (
                <div className="flex size-full justify-center p-8">
                  <img src={src} alt="" />
                </div>
              )}
              {title && <p>{title}</p>}
            </Button>
          );
        })}
        <Modal
          title={active?.title || ''}
          subtitle={active?.subtitle || ''}
          className={`inset-0 rounded-xl bg-gray-800`}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        >
          {active?.content}
        </Modal>
      </div>
    </>
  );
};

export default AboutInterests;
