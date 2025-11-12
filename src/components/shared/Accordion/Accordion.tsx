import { useState } from 'react';
import Button from '../Button';
import ArrowIcon from '../../icons/ArrowIcon/ArrowIcon';

type AccordionProps = {
  label: React.ReactNode;
  content: React.ReactNode;
  labelClassName: string;
  contentClassName: string;
  isOpen?: boolean;
};

const Accordion = ({
  label,
  content,
  labelClassName,
  contentClassName,
  isOpen = false,
}: AccordionProps) => {
  const [isActive, setIsActive] = useState(isOpen);

  const labelVariant = {
    active: 'rounded-t-lg',
    inactive: 'rounded-lg',
  };

  const contentVariant = {
    active: 'h-auto rounded-b-lg py-5 px-7',
    inactive: 'h-0 overflow-hidden',
  };

  return (
    <>
      <div
        className={`flex items-center justify-between transition-all duration-100 ${labelClassName} ${isActive ? labelVariant.active : labelVariant.inactive}`}
      >
        {label || 'Placeholder'}
        <Button className="" onClick={() => setIsActive(!isActive)}>
          <ArrowIcon
            className={`h-12 transition-transform duration-300 ${isActive ? 'rotate-180' : 'rotate-360'}`}
          />
        </Button>
      </div>
      <div
        className={`transition-all duration-300 ${contentClassName} ${isActive ? contentVariant.active : contentVariant.inactive}`}
      >
        {content}
      </div>
    </>
  );
};

export default Accordion;
