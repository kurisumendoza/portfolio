import Button from '../../shared/Button';
import { interestsLogos } from '../../../assets/interests-logos';
import Modal from '../../shared/Modal';
import { useState } from 'react';

type InterestType = {
  title?: string;
  description?: string;
  color: string;
  background?: string;
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
    collectiblesLogo,
    foodLogo,
    catsLogo,
  ] = interestsLogos;

  const interests = [
    {
      title: 'Video Games',
      color: 'bg-sky-500',
      background: 'bg-sky-200',
      src: videoGamesLogo,
      content: '',
    },
    {
      title: 'Anime',
      color: 'bg-red-500',
      background: 'bg-red-200',
      src: animeLogo,
      content: '',
    },
    {
      title: 'Movies',
      color: 'bg-yellow-500',
      background: 'bg-yellow-200',
      src: moviesLogo,
      content: '',
    },
    {
      title: 'TV Series',
      color: 'bg-green-500',
      background: 'bg-green-200',
      src: tvSeriesLogo,
      content: '',
    },
    {
      description:
        'A small corner highlighting my hobbies, interests, and things I like.',
      color: 'bg-transparent',
      content: '',
    },
    {
      title: 'Music',
      color: 'bg-blue-500',
      background: 'bg-blue-200',
      src: musicLogo,
      content: '',
    },
    {
      title: 'Collectibles',
      color: 'bg-orange-500',
      background: 'bg-orange-200',
      src: collectiblesLogo,
      content: '',
    },
    {
      title: 'Food',
      color: 'bg-pink-500',
      background: 'bg-pink-200',
      src: foodLogo,
      content: '',
    },
    {
      title: 'Cats',
      color: 'bg-teal-500',
      background: 'bg-teal-200',
      src: catsLogo,
      content: '',
    },
  ];

  const variant = {
    base: 'px-7 py-5 text-2xl flex-col justify-between rounded-xl font-medium flex items-start font-semibold',
    clickable:
      'transition-all duration-300 hover:scale-103 brightness-90 hover:brightness-110',
    unclickable: 'pointer-events-none',
  };

  const handleClick = (interest: InterestType) => {
    setActive(interest);
    setIsOpen(true);
  };

  return (
    <div
      className={`relative mr-10 grid h-6/7 grid-cols-3 grid-rows-3 gap-3 select-none`}
    >
      {interests.map((interest, i) => {
        const { title, color, description, src } = interest;

        return (
          <Button
            key={i}
            onClick={() => handleClick(interest)}
            className={`${variant.base} ${color} ${!description ? variant.clickable : variant.unclickable}`}
          >
            {description && <p className="text-lg">{description}</p>}
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
        className={`inset-[3%] rounded-xl ${active?.background}`}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <p></p>
      </Modal>
    </div>
  );
};

export default AboutInterests;
