import { FIRST_NAME, LAST_NAME } from '../../../constants';
import myPhoto from '../../../assets/pictures/my-photo.jpeg';

const AboutOverview = () => {
  return (
    <>
      <div className="flex h-10/12 w-full flex-col justify-between pr-12 text-2xl">
        <div className="flex h-1/2 justify-between">
          <div className="flex flex-col gap-5">
            <p className="w-full font-medium">
              Hey! I'm {FIRST_NAME} {LAST_NAME}.
              <br />
              Here are some <i>quick facts</i> about me:
            </p>
            <p>🇵🇭 Filipino / Bulakeño</p>
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
          <img src={myPhoto} alt="" className="h-90 rounded-xl" />
        </div>
        <div>
          <h2 className="mb-5 font-bold">About My Web Dev Journey</h2>
          <p>
            I started learning web development {new Date().getFullYear() - 2023}{' '}
            years ago during my free time after work, and I quickly realized how
            much I enjoy building things. Learning can be tough, but that's what
            makes it more rewarding. I've always enjoyed pushing myself — in
            fact, I immerse myself in challenges even in my leisure time —
            playing Dark Souls, Elden Ring, Sekiro, and the likes.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutOverview;
