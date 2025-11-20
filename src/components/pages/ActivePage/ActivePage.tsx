type ActivePageProps = { children: React.ReactNode };

const ActivePage = ({ children }: ActivePageProps) => {
  return <div className="size-full">{children}</div>;
};

export default ActivePage;
