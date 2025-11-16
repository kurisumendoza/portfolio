import { animeImgs } from '../../../../assets/pictures/interests/anime';

const AnimeModal = () => {
  return (
    <div className="-pr-3 grid h-full grid-cols-3 gap-1 overflow-y-scroll">
      {animeImgs.map((src, i) => {
        return (
          <div key={i} className="flex h-80 items-center justify-center">
            <img src={src} alt="" className="size-full object-cover" />
          </div>
        );
      })}
    </div>
  );
};

export default AnimeModal;
