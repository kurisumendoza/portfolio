import { FIRST_NAME, LAST_NAME } from '../../../constants';
import EnterIcon from '../../icons/EnterIcon';
import Button from '../../shared/Button';

type HeroProps = {
  animation: string;
  isHomepage: boolean;
  setIsHomepage: React.Dispatch<React.SetStateAction<boolean>>;
};

const Hero = ({ animation, isHomepage, setIsHomepage }: HeroProps) => {
  return (
    <div
      className={`bg-background flex size-full flex-col justify-center gap-10 ${animation}`}
    >
      <div
        className={`flex flex-col gap-2.5 ${isHomepage ? 'px-50' : 'scale-75'}`}
      >
        <div>
          <p className="text-6xl">Hello, I am</p>
          <p className="font-highlight text-primary text-9xl font-bold">
            {FIRST_NAME}
          </p>
          <p className="font-highlight text-primary text-9xl font-bold">
            {LAST_NAME}
          </p>
          <p className="text-5xl">an aspiring web developer.</p>
        </div>
        <div>
          <Button
            className="bg-secondary flex items-center gap-5 rounded-lg px-20 py-5 text-2xl font-medium shadow-md"
            onClick={() => setIsHomepage(!isHomepage)}
          >
            <div className="text-nowrap">
              {isHomepage ? 'Explore my portfolio' : 'Back to homepage'}
            </div>
            <EnterIcon className="fill-text h-7" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
