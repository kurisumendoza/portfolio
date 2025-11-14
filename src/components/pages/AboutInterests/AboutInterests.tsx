import Button from '../../shared/Button';
import { interestsLogos } from '../../../assets/interests-logos';

const AboutInterests = () => {
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
      src: videoGamesLogo,
      content: '',
    },
    { title: 'Anime', color: 'bg-red-500', src: animeLogo, content: '' },
    { title: 'Movies', color: 'bg-yellow-500', src: moviesLogo, content: '' },
    {
      title: 'TV Series',
      color: 'bg-green-500',
      src: tvSeriesLogo,
      content: '',
    },
    {
      title: 'Stuff I Like',
      description:
        'A small corner highlighting my hobbies, interests, and things I like.',
      color: 'bg-gray-700',
      content: '',
    },
    { title: 'Music', color: 'bg-blue-500', src: musicLogo, content: '' },
    {
      title: 'Collectibles',
      color: 'bg-orange-500',
      src: collectiblesLogo,
      content: '',
    },
    { title: 'Food', color: 'bg-pink-500', src: foodLogo, content: '' },
    { title: 'Cats', color: 'bg-teal-600', src: catsLogo, content: '' },
  ];

  const variant = {
    base: 'px-7 py-5 text-2xl flex-col justify-between rounded-xl font-medium flex items-start font-semibold',
    clickable:
      'transition-all duration-300 hover:scale-103 brightness-90 hover:brightness-110',
    unclickable: 'pointer-events-none',
  };

  return (
    <div className={`grid h-6/7 grid-cols-3 grid-rows-3 gap-3 pr-10`}>
      {interests.map(({ title, color, description, src, content }, i) => (
        <Button
          key={i}
          onClick={() => {}}
          className={`${variant.base} ${color} ${!description ? variant.clickable : variant.unclickable}`}
        >
          {description && <p className="text-left text-xl">{description}</p>}
          {src && (
            <div className="flex size-full justify-center p-8">
              <img src={src} alt="" />
            </div>
          )}
          <p>{title}</p>
        </Button>
      ))}
    </div>
  );
};

export default AboutInterests;
