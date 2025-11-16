import { gamingImgs } from '../../../../assets/pictures/interests/video-games';

const VideoGamesModal = () => {
  return (
    <div className="-pr-3 grid h-full grid-cols-3 gap-1 overflow-y-scroll">
      {gamingImgs.map((src, i) => {
        return (
          <div key={i} className="flex h-80 items-center justify-center">
            <img src={src} alt="" className="size-full object-cover" />
          </div>
        );
      })}
      <div className="col-span-3 flex flex-col justify-center gap-1 pt-5">
        <p className="font-semibold">My PSN Profile:</p>
        <a href="https://psnprofiles.com/Kazuki14354" target="_blank">
          <img
            className="w-full"
            src="https://card.psnprofiles.com/2/Kazuki14354.png"
          />
        </a>
      </div>
    </div>
  );
};

export default VideoGamesModal;
