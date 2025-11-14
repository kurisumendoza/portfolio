import Button from '../Button';

type ModalProps = {
  children: React.ReactNode;
  className: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal = ({ children, className, isOpen, setIsOpen }: ModalProps) => {
  return (
    <div
      className={`${isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'} absolute size-full transition-all duration-300`}
    >
      <div
        className={`absolute transition-all duration-300 ${
          isOpen ? 'scale-100' : 'scale-80'
        } ${className}`}
      >
        <div className="absolute top-5 left-5 flex gap-2">
          <Button
            className="hover:text-text-dark flex size-5 items-center justify-center rounded-full bg-red-400 text-transparent"
            onClick={() => setIsOpen(false)}
          >
            &#10005;
          </Button>
          <div className="size-5 rounded-full bg-gray-500"></div>
          <div className="size-5 rounded-full bg-gray-500"></div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
