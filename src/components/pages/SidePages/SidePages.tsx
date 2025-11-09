const SidePages = () => {
  const placeholderPages = ['About Me', 'Projects', 'Contact'];

  return (
    <div className="flex w-1/4 flex-col gap-10 py-10">
      {placeholderPages.map(() => (
        <div
          key={crypto.randomUUID()}
          className="h-full cursor-pointer rounded-2xl bg-blue-900 transition-transform duration-300 hover:scale-105"
        ></div>
      ))}
    </div>
  );
};

export default SidePages;
