import { gamingImgs } from '../../../../assets/pictures/interests/video-games';
import ImageGrid from '../../../shared/ImageGrid';

const VideoGamesModal = () => {
  return (
    <>
      <ImageGrid imagesArray={gamingImgs}>
        <div className="col-span-3 flex flex-col justify-center gap-1 pt-5">
          <p className="font-semibold">My PSN Profile:</p>
          <a href="https://psnprofiles.com/Kazuki14354" target="_blank">
            <img
              className="w-full"
              src="https://card.psnprofiles.com/2/Kazuki14354.png"
            />
          </a>
        </div>
      </ImageGrid>
    </>
  );
};

export default VideoGamesModal;
