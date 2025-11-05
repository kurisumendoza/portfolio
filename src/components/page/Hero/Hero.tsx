import { FIRST_NAME, LAST_NAME } from "../../../constants";
import EnterIcon from "../../icons/EnterIcon";
import Button from "../../shared/Button";

const Hero = () => {
  return (
    <div className="bg-background flex h-full w-full flex-col justify-center gap-10 px-50">
      <div className="flex flex-col gap-2.5">
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
          className="bg-secondary flex items-center gap-3 rounded-lg px-20 py-5 text-2xl font-medium shadow-md"
          onClick={() => {}}
        >
          <div>Explore my portfolio</div>
          <div className="h-8">
            <EnterIcon className="fill-text" />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
