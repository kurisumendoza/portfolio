type SideMenuProps<T extends string> = {
  sections: T[];
  activeSection: T;
  setActiveSection: React.Dispatch<React.SetStateAction<T>>;
};

const SideMenu = <T extends string>({
  sections,
  activeSection,
  setActiveSection,
}: SideMenuProps<T>) => {
  const sectionStyle =
    'hover:text-text-dark rounded-sm px-5 py-1.5 transition-colors duration-300 hover:bg-gray-300';
  const activeStyle = 'bg-accent';

  const handleClick = (section: T) => {
    setActiveSection(section);
  };

  return (
    <>
      <div className="h-full w-1/4 rounded-2xl border border-gray-400 bg-transparent py-15">
        <ul className="flex flex-col gap-1 px-1.5 text-xl">
          {sections.map((section) => {
            return (
              <li
                key={section}
                className={`${sectionStyle} ${activeSection === section && activeStyle}`}
                onClick={() => handleClick(section)}
              >
                {section}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SideMenu;
