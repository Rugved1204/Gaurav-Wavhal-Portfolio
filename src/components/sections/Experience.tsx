import { experience, education } from "../../data/experience";

function Experience() {
  return (
    <section id="experience" className="py-24 px-8 md:px-20">
      <p className="text-accent font-display text-sm tracking-widest uppercase mb-4">
        Career Journey
      </p>
      <h2 className="font-display font-bold text-3xl md:text-5xl mb-16 text-dark dark:text-light">
        Experience
      </h2>

      <div className="space-y-12 mb-20">
        {experience.map((item, idx) => (
          <div
            key={idx}
            className="grid md:grid-cols-[200px_1fr] gap-6 border-l-2 border-dark/10 dark:border-light/10 pl-6 md:pl-10 relative"
          >
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-accent" />
            <div>
              <p className="font-display font-semibold text-accent">
                {item.duration}
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl md:text-2xl mb-1 text-dark dark:text-light">
                {item.role}
              </h3>
              <p className="text-dark/60 dark:text-light/60 mb-4">
                {item.company}
              </p>
              <ul className="space-y-2">
                {item.points.map((point, pIdx) => (
                  <li
                    key={pIdx}
                    className="text-dark/70 dark:text-light/70 text-sm leading-relaxed flex gap-2"
                  >
                    <span className="text-accent mt-1">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h3 className="font-display font-bold text-2xl mb-6 text-dark dark:text-light">
          Education
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="border border-dark/10 dark:border-light/10 rounded-xl p-6"
            >
              <p className="text-accent font-display text-sm mb-2">
                {edu.duration}
              </p>
              <h4 className="font-display font-semibold text-lg mb-1 text-dark dark:text-light">
                {edu.degree}
              </h4>
              <p className="text-dark/60 dark:text-light/60 text-sm">
                {edu.institute}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
