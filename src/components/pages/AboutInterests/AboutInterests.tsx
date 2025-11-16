import { useState } from 'react';
import { coverImages } from '../../../assets/pictures/interests/cover-images';
import Button from '../../shared/Button';
import Modal from '../../shared/Modal';
import VideoGamesModal from './content/VideoGamesModal';
import AnimeModal from './content/AnimeModal';
import MoviesModal from './content/MoviesModal';
import TVShowsModal from './content/TVShowsModal';
import MusicModal from './content/MusicModal';
import OtherModal from './content/OtherModal';

type InterestType = {
  title?: string;
  subtitle?: string;
  src?: string;
  content?: React.ReactNode;
};

const AboutInterests = () => {
  const [active, setActive] = useState<InterestType | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const [videoGamesImg, animeImg, moviesImg, tvShowsImgs, musicImg, otherImg] =
    coverImages;

  const interests = [
    {
      title: 'Video Games',
      subtitle: 'My Gaming Hall of Fame',
      src: videoGamesImg,
      content: <VideoGamesModal />,
    },
    {
      title: 'Anime',
      subtitle: 'Best anime I have watched',
      src: animeImg,
      content: <AnimeModal />,
    },
    {
      title: 'Movies',
      subtitle: 'Films that left a strong impression',
      src: moviesImg,
      content: <MoviesModal />,
    },
    {
      title: 'TV Series',
      subtitle: 'Shows I loved watching',
      src: tvShowsImgs,
      content: <TVShowsModal />,
    },
    {
      title: 'Music',
      subtitle: 'Any songs from these artists',
      src: musicImg,
      content: <MusicModal />,
    },
    {
      title: 'Other',
      subtitle: 'More stuff I like',
      src: otherImg,
      content: <OtherModal />,
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
          const { title, src } = interest;

          return (
            <Button
              key={i}
              onClick={() => handleClick(interest)}
              className={`${cardStyle}`}
              style={{
                backgroundImage: `url(${src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              {title && <p className="absolute bottom-6">{title}</p>}
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
