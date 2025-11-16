type ImageGridProps = {
  children?: React.ReactNode;
  imagesArray: string[];
  names?: string[];
};

const ImageGrid = ({ children, imagesArray, names }: ImageGridProps) => {
  return (
    <div className="scrollbar scrollbar-thumb-rounded-full scrollbar-thumb-accent scrollbar-track-transparent grid h-full grid-cols-3 gap-1 overflow-y-scroll">
      {imagesArray.map((src, i) => {
        return (
          <div
            key={i}
            className={`${names && 'relative'} flex h-80 items-center justify-center`}
          >
            <img
              src={src}
              alt=""
              className="size-full object-cover"
              draggable={false}
            />
            {names && (
              <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-[hsla(0,0%,0%,0.7)] p-2 pt-5">
                <p className="text-xl font-bold">{names[i]}</p>
              </div>
            )}
          </div>
        );
      })}
      {children}
    </div>
  );
};

export default ImageGrid;
