import { Project } from "../../data/projects";

interface Props {
  project: Project;
  onClick: () => void;
}

function ProjectCard({ project, onClick }: Props) {
  const cover = project.media[0];

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer rounded-xl overflow-hidden border border-dark/10 dark:border-light/10 hover:border-accent transition-colors"
    >
      <div className="aspect-square bg-dark/5 dark:bg-black overflow-hidden relative">
        {cover.type === "image" ? (
          <img
            src={cover.src}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <video src={cover.src} className="w-full h-full object-cover" muted />
        )}
        {project.media.length > 1 && (
          <span className="absolute top-2 right-2 bg-dark/70 text-light text-xs px-2 py-1 rounded-full font-display">
            {project.media.length}{" "}
            {project.media[0].type === "video" ? "clips" : "views"}
          </span>
        )}
      </div>
      <div className="p-4">
        <p className="text-accent text-xs font-display tracking-widest uppercase mb-1">
          {project.category}
        </p>
        <h3 className="font-display font-semibold text-lg text-dark dark:text-light">
          {project.title}
        </h3>
      </div>
    </div>
  );
}

export default ProjectCard;
