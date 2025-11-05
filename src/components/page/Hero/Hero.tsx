import { FIRST_NAME, LAST_NAME } from "../../../constants";

type HeroProps = { children: React.ReactNode };

const Hero = ({ children }: HeroProps) => {
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
      <div>{children}</div>
    </div>
  );
};

export default Hero;
