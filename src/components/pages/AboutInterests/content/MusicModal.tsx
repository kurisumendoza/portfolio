import { musicImgs } from '../../../../assets/pictures/interests/music';
import ImageGrid from '../../../shared/ImageGrid';

const MusicModal = () => {
  const images = musicImgs.map((img) => img.src);
  const names = musicImgs.map((img) => img.name);

  return <ImageGrid imagesArray={images} names={names} />;
};

export default MusicModal;
