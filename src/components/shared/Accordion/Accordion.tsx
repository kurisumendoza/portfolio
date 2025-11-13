import { useEffect, useState } from 'react';
import Button from '../Button';
import ArrowIcon from '../../icons/ArrowIcon/ArrowIcon';

type ContentType = {
  content: React.ReactNode;
  className: string;
};

type AccordionProps = {
  label: ContentType;
  body: ContentType;
  id: string;
  activeElement: string;
  setActiveElement: React.Dispatch<React.SetStateAction<string>>;
};

const Accordion = ({
  label,
  body,
  id,
  activeElement,
  setActiveElement,
}: AccordionProps) => {
  const [isActive, setIsActive] = useState(false);

  const labelVariant = {
    active: 'rounded-t-lg',
    inactive: 'rounded-lg',
  };

  const contentVariant = {
    active: 'h-auto rounded-b-lg py-5 px-7',
    inactive: 'h-0 overflow-hidden',
  };

  const handleClick = () => {
    setActiveElement(id);
    setIsActive(!isActive);
  };

  useEffect(() => {
    if (id !== activeElement) setIsActive(false);
  }, [id, activeElement]);

  return (
    <>
      <div
        className={`flex items-center justify-between transition-all duration-100 ${label.className} ${isActive ? labelVariant.active : labelVariant.inactive}`}
      >
        {label.content}
        <Button className="" onClick={handleClick}>
          <ArrowIcon
            className={`h-10 transition-transform duration-200 ${isActive ? 'rotate-180' : 'rotate-360'}`}
          />
        </Button>
      </div>
      <div
        className={`transition-all duration-300 ${body.className} ${isActive ? contentVariant.active : contentVariant.inactive}`}
      >
        {body.content}
      </div>
    </>
  );
};

export default Accordion;
