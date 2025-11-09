import type { PageType } from '../../../constants';
import Button from '../../shared/Button';

type SidePagesProps = {
  activePage: PageType;
  inactivePages: PageType[];
  setActivePage: React.Dispatch<React.SetStateAction<PageType>>;
  setInactivePages: React.Dispatch<React.SetStateAction<PageType[]>>;
  setFromSidePage: React.Dispatch<React.SetStateAction<boolean>>;
};

const SidePages = ({
  activePage,
  inactivePages,
  setActivePage,
  setInactivePages,
  setFromSidePage,
}: SidePagesProps) => {
  const handleClick = (page: PageType) => {
    const current = activePage;

    setFromSidePage(true); // flag for changing Hero origin animation
    // active page replaces clicked inactive page at the same position
    setInactivePages((prev) => prev.map((p) => (p === page ? current : p)));
    setActivePage(page);
  };

  return (
    <div className="flex w-1/5 flex-col gap-10 py-10">
      {inactivePages.map((page) => (
        <Button
          key={crypto.randomUUID()}
          className="align-center bg-background font-highlight h-full cursor-pointer rounded-2xl text-3xl transition-transform duration-300 hover:scale-105"
          onClick={() => handleClick(page)}
        >
          {page.toUpperCase()}
        </Button>
      ))}
    </div>
  );
};

export default SidePages;
