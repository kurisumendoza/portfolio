type ButtonProps = {
  children: React.ReactNode;
  className: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  style?: React.CSSProperties;
};

const Button = ({ children, className, onClick, style }: ButtonProps) => {
  return (
    <button className={className} onClick={onClick} style={style}>
      {children}
    </button>
  );
};

export default Button;
