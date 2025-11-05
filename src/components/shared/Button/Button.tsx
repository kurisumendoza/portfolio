type ButtonProps = {
  children: React.ReactNode;
  className: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
