type ActivePageProps = { children: React.ReactNode };

const ActivePage = ({ children }: ActivePageProps) => {
  return <div className="h-full">{children}</div>;
};

export default ActivePage;
