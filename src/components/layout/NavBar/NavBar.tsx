import Button from '../../shared/Button';
import Logo from '../../shared/Logo';

type NavBarProps = {
  setIsHomepage: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavBar = ({ setIsHomepage }: NavBarProps) => {
  return (
    <div className="flex items-center justify-between bg-black px-5 py-1.5 align-middle">
      <Button
        className="font-highlight font-bold"
        onClick={() => setIsHomepage(true)}
      >
        <Logo className="h-6 rounded-sm" />
      </Button>
      <div>
        <ul className="flex gap-15">
          <li>About Me</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
