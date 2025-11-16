import { booksImgs } from '../../../../assets/pictures/interests/books';
import { mangaImgs } from '../../../../assets/pictures/interests/manga';
import ArrowIcon from '../../../icons/ArrowIcon';
import ImageGrid from '../../../shared/ImageGrid';

const OtherModal = () => {
  const interests = [
    {
      title: 'Books',
      src: booksImgs,
    },
    {
      title: 'Manga',
      src: mangaImgs,
    },
  ];

  return (
    <div className="scrollbar scrollbar-thumb-rounded-full scrollbar-thumb-accent scrollbar-track-transparent flex h-full flex-col gap-8 overflow-y-scroll">
      {interests.map(({ title, src }, i) => {
        return (
          <div key={i} className="flex h-full flex-col gap-2">
            <div className="flex items-center justify-start">
              <p className="text-xl font-bold">{title}</p>
              <ArrowIcon className="size-7 rotate-270 opacity-70" />
            </div>
            <ImageGrid imagesArray={src} />
          </div>
        );
      })}
    </div>
  );
};

export default OtherModal;
