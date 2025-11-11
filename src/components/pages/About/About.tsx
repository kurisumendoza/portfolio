type AboutProps = {
  animation: string;
};

const About = ({ animation }: AboutProps) => {
  return (
    <div
      className={`bg-background flex size-full justify-center gap-10 rounded-2xl p-5 ${animation}`}
    >
      <div className="h-full w-1/4 rounded-2xl border-2 bg-transparent"></div>
      <div className="h-full w-3/4 p-3">
        <h1>About Me</h1>
        <div className="flex size-full items-center gap-10">
          <p className="w-full text-2xl font-medium">
            Hi, Thanks for visiting. I've been working remotely for the past 12
            years. It was decent but I felt like nothing was improving, so I
            started learning programming two years ago during my free time after
            work. It quickly became something I genuinely enjoy, and I wished I
            had started sooner, as it made me realize how much I love building
            stuff. I find learning to be challenging, but that's part of what
            makes it rewarding. I've always enjoyed overcoming challenges, even
            in my free time. In fact, even my favorite video games are pretty
            challenging too - Dark Souls, Elden Ring, and the likes.
          </p>
          <div className="h-4/5 w-full rounded-2xl bg-gray-400">
            {/* Photo Here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
