import { skills, languages } from "../../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-8 md:px-20 bg-dark/5 dark:bg-light/5"
    >
      <p className="text-accent font-display text-sm tracking-widest uppercase mb-4">
        What I Bring
      </p>
      <h2 className="font-display font-bold text-3xl md:text-5xl mb-16 text-dark dark:text-light">
        Skills & Expertise
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {skills.map((group, idx) => (
          <div key={idx}>
            <h3 className="font-display font-semibold text-xl mb-4 text-accent">
              {group.category}
            </h3>
            <ul className="space-y-3">
              {group.items.map((item, iIdx) => (
                <li
                  key={iIdx}
                  className="text-dark/70 dark:text-light/70 text-sm border-b border-dark/10 dark:border-light/10 pb-2"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex gap-4 flex-wrap">
        <span className="text-dark/50 dark:text-light/50 text-sm font-display tracking-widest uppercase mr-2">
          Languages:
        </span>
        {languages.map((lang, idx) => (
          <span
            key={idx}
            className="px-4 py-1.5 border border-dark/20 dark:border-light/20 rounded-full text-sm text-dark/70 dark:text-light/70"
          >
            {lang}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
