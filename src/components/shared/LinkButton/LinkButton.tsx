type LinkButtonProps = {
  label: string;
  url: string | undefined;
  className: string;
};

const LinkButton = ({ label, url, className }: LinkButtonProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {label}
    </a>
  );
};

export default LinkButton;
