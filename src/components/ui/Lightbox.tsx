import { Project } from "../../data/projects";
import ImageCarousel from "./ImageCarousel";

interface Props {
  project: Project | null;
  onClose: () => void;
}

function Lightbox({ project, onClose }: Props) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 bg-dark/80 dark:bg-dark/95 z-50 flex items-center justify-center p-4 md:p-12"
      onClick={onClose}
    >
      <div
        className="bg-light dark:bg-dark border border-dark/10 dark:border-light/10 rounded-2xl max-w-3xl w-full p-6 md:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-dark/60 dark:text-light/60 hover:text-accent text-2xl"
        >
          ×
        </button>

        <p className="text-accent font-display text-sm tracking-widest uppercase mb-2">
          {project.category}
        </p>
        <h3 className="font-display font-bold text-2xl md:text-3xl mb-4 text-dark dark:text-light">
          {project.title}
        </h3>

        <ImageCarousel media={project.media} />

        {project.description && (
          <p className="text-dark/70 dark:text-light/70 text-sm mt-4 leading-relaxed">
            {project.description}
          </p>
        )}
      </div>
    </div>
  );
}

export default Lightbox;
