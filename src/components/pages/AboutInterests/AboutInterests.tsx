import Button from '../../shared/Button';

const AboutInterests = () => {
  const items = Array.from({ length: 9 }, (_, i) => i);

  const interests = [
    { title: 'Video Games', color: 'bg-sky-500', content: '' },
    { title: 'Anime', color: 'bg-red-500', content: '' },
    { title: 'Movies', color: 'bg-yellow-500', content: '' },
    { title: 'TV Series', color: 'bg-green-500', content: '' },
    {
      title: 'Stuff I Like',
      description:
        'A small corner highlighting my hobbies, interests, and things I like.',
      color: 'bg-gray-700',
      content: '',
    },
    { title: 'Music', color: 'bg-blue-500', content: '' },
    { title: 'Collectibles', color: 'bg-orange-500', content: '' },
    { title: 'Food', color: 'bg-pink-500', content: '' },
    { title: 'Cats', color: 'bg-teal-600', content: '' },
  ];

  const variant = {
    base: 'pl-7 pb-5 text-2xl rounded-xl font-medium flex',
    clickable: 'transition-transform duration-300 hover:scale-103 items-end',
    unclickable:
      'pointer-events-none flex-col justify-between pt-5 pr-7 items-start',
  };

  return (
    <div className={`grid h-6/7 grid-cols-3 grid-rows-3 gap-3 pr-10`}>
      {items.map((i) => (
        <Button
          key={i}
          onClick={() => {}}
          className={`${variant.base} ${interests[i].color} ${!interests[i].description ? variant.clickable : variant.unclickable}`}
        >
          {interests[i]?.description && (
            <p className="text-left text-lg">{interests[i].description}</p>
          )}
          <p>{interests[i].title}</p>
        </Button>
      ))}
    </div>
  );
};

export default AboutInterests;
