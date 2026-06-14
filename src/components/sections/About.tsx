function About() {
  return (
    <section id="about" className="py-24 px-8 md:px-20">
      <div className="grid md:grid-cols-[1fr_200px] gap-12 items-start">
        <div>
          <p className="text-accent font-display text-sm tracking-widest uppercase mb-4">
            About Me
          </p>
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-6 text-dark dark:text-light">
            7+ Years Shaping Brands Through Design
          </h2>
          <p className="text-dark/70 dark:text-light/70 text-lg leading-relaxed mb-4">
            I'm a creative and results-driven graphic designer with over 7 years
            of experience across print, digital, and web design. Currently
            working in the U.S. automotive industry, I specialize in website
            banner design, CMS management, and client website optimization.
          </p>
          <p className="text-dark/70 dark:text-light/70 text-lg leading-relaxed">
            Proficient in Adobe Creative Suite, Salesforce, and modern design
            tools, I collaborate closely with teams and clients to deliver
            visually compelling, brand-consistent solutions — even under tight
            deadlines.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
