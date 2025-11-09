type OverviewProps = { children: React.ReactNode };

const Overview = ({ children }: OverviewProps) => {
  return (
    <div className="flex h-full flex-col justify-between gap-10">
      {children}
    </div>
  );
};

export default Overview;
