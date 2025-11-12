import { FIRST_NAME, LAST_NAME } from '../../../constants';
import myPhoto from '../../../assets/pictures/my-photo.jpeg';
import WindowAccent from '../../shared/WindowAccent';

type AboutProps = {
  animation: string;
};

const About = ({ animation }: AboutProps) => {
  return (
    <div
      className={`bg-background flex size-full justify-center gap-10 rounded-2xl p-3 ${animation}`}
    >
      <WindowAccent />
      <div className="h-full w-1/4 rounded-2xl border border-gray-400 bg-transparent px-6 py-15">
        <ul className="flex flex-col gap-5 text-xl">
          <li>Overview</li>
          <li>Skills</li>
          <li>Experience</li>
          <li>Personal</li>
        </ul>
      </div>
      <div className="h-full w-3/4 p-3">
        <h1 className="mb-10">Overview</h1>
        <div className="flex size-full flex-col gap-5 pr-12 text-2xl">
          <div className="flex h-1/2 justify-between gap-10">
            <div className="flex flex-col gap-5">
              <p className="w-full font-medium">
                Hey! I'm {FIRST_NAME} {LAST_NAME}.
                <br />
                Here are some <i>quick facts</i> about me:
              </p>
              <p>🇵🇭 Filipino / Bulakenyo</p>
              <p>
                🎂{' '}
                {new Date().getMonth() >= 11
                  ? new Date().getFullYear() - 1991
                  : new Date().getFullYear() - 1992}{' '}
                years old
              </p>
              <p>📚 Addicted to Learning </p>
              <p>🐈 Cat Lover</p>
              <p>🎮 Video Games Enjoyer</p>
            </div>
            <img src={myPhoto} alt="" className="rounded-xl" />
          </div>
          <div>
            <h2 className="mb-5 font-bold">About My Web Dev Journey</h2>
            <p>
              I started learning web development{' '}
              {new Date().getFullYear() - 2023} years ago during my free time
              after work, and I quickly realized how much I enjoy building
              things. Learning can be challenging, but that's what makes it
              rewarding. I've always loved challenges — in fact, even my
              favorite games are tough ones — Dark Souls, Elden Ring, and the
              likes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
