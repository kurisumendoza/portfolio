import ArrowIcon from '../../icons/ArrowIcon';
import Button from '../Button';

type ModalProps = {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  className: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal = ({
  children,
  title,
  subtitle,
  className,
  isOpen,
  setIsOpen,
}: ModalProps) => {
  return (
    <div
      className={`${isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'} absolute size-full transition-all duration-300`}
    >
      <div
        className={`absolute p-10 pt-18 transition-all duration-300 ${
          isOpen ? 'scale-100' : 'scale-80'
        } ${className}`}
      >
        <div className="absolute top-4 left-7 flex items-center gap-2">
          <Button
            className="hover:text-text-dark flex size-5 items-center justify-center rounded-full bg-red-400 text-transparent"
            onClick={() => setIsOpen(false)}
          >
            &#10005;
          </Button>
          <div className="size-5 rounded-full bg-gray-500"></div>
          <div className="size-5 rounded-full bg-gray-500"></div>
          <Button
            className="mr-2 ml-5 size-9 rounded-full border-2 border-neutral-400"
            onClick={() => setIsOpen(false)}
          >
            <ArrowIcon className="rotate-90 text-neutral-200" />
          </Button>
          <div>
            <h2 className="text-xl leading-none font-semibold">{title}</h2>
            <p className="text-sm opacity-80">{subtitle}</p>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
