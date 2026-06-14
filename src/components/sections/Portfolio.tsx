import { useState } from "react";
import { projects, categories, Project } from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";
import Lightbox from "../ui/Lightbox";

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 px-8 md:px-20">
      <p className="text-accent font-display text-sm tracking-widest uppercase mb-4">
        Selected Work
      </p>
      <h2 className="font-display font-bold text-3xl md:text-5xl mb-10 text-dark dark:text-light">
        Portfolio
      </h2>

      <div className="flex gap-3 flex-wrap mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-display transition-colors border ${
              activeCategory === cat
                ? "bg-accent text-dark border-accent"
                : "border-dark/20 dark:border-light/20 text-dark/70 dark:text-light/70 hover:border-accent hover:text-accent"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelected(project)}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-dark/50 dark:text-light/50 text-center py-12">
          No projects in this category yet.
        </p>
      )}

      <Lightbox project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

export default Portfolio;
