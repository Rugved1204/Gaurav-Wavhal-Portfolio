import { useState } from "react";
import { ProjectMedia } from "../../data/projects";

interface Props {
  media: ProjectMedia[];
}

function ImageCarousel({ media }: Props) {
  const [index, setIndex] = useState(0);
  const current = media[index];

  const prev = () => setIndex((i) => (i === 0 ? media.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === media.length - 1 ? 0 : i + 1));

  return (
    <div className="relative w-full">
      <div className="w-full aspect-[4/3] bg-black rounded-xl overflow-hidden flex items-center justify-center">
        {current.type === "image" ? (
          <img
            src={current.src}
            alt=""
            className="w-full h-full object-contain"
          />
        ) : (
          <video
            src={current.src}
            controls
            className="w-full h-full object-contain"
          />
        )}
      </div>

      {media.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-dark/70 text-light rounded-full w-10 h-10 flex items-center justify-center hover:bg-accent hover:text-dark transition-colors"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-dark/70 text-light rounded-full w-10 h-10 flex items-center justify-center hover:bg-accent hover:text-dark transition-colors"
          >
            ›
          </button>

          <div className="flex justify-center gap-2 mt-4">
            {media.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === index ? "bg-accent" : "bg-light/30"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ImageCarousel;
