type ImageGridProps = {
  children?: React.ReactNode;
  imagesArray: string[];
};

const ImageGrid = ({ children, imagesArray }: ImageGridProps) => {
  return (
    <div className="scrollbar scrollbar-thumb-rounded-full scrollbar-thumb-accent scrollbar-track-transparent grid h-full grid-cols-3 gap-1 overflow-y-scroll">
      {imagesArray.map((src, i) => {
        return (
          <div key={i} className="flex h-80 items-center justify-center">
            <img
              src={src}
              alt=""
              className="size-full object-cover"
              draggable={false}
            />
          </div>
        );
      })}
      {children}
    </div>
  );
};

export default ImageGrid;
