function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-8 md:px-20 relative overflow-hidden">
      <div className="grid md:grid-cols-[1fr_300px] gap-12 items-center max-w-6xl">
        <div>
          <p className="text-accent font-display text-sm md:text-base tracking-widest uppercase mb-4">
            Graphic Designer · 8+ Years Experience
          </p>

          <h1 className="font-display font-bold text-5xl md:text-8xl leading-tight mb-6 text-dark dark:text-light">
            Gaurav
            <br />
            Wavhal
          </h1>

          <p className="text-dark/70 dark:text-light/70 text-lg md:text-xl max-w-xl mb-10">
            Crafting bold visual identities, web banners, and brand stories —
            from print to digital, with a designer's eye for detail.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="px-8 py-4 bg-accent text-dark font-display font-semibold rounded-full hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark transition-colors"
            >
              View My Work
            </a>

            <a
              href="https://www.behance.net/gauravwavhal95"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-dark/30 dark:border-light/30 font-display font-semibold rounded-full hover:border-accent hover:text-accent transition-colors"
            >
              Behance Profile
            </a>

            <a
              href="/resume.pdf"
              download
              className="px-8 py-4 border border-dark/30 dark:border-light/30 font-display font-semibold rounded-full hover:border-accent hover:text-accent transition-colors flex items-center gap-2"
            >
              Download Resume
              <span>↓</span>
            </a>
          </div>
        </div>

        <img
          src="/profile.png"
          alt="Gaurav Wavhal"
          className="hidden md:block w-full max-h-[500px] rounded-2xl object-contain border border-dark/10 dark:border-light/10"
        />
      </div>

      <div className="absolute bottom-8 left-8 md:left-20 text-dark/40 dark:text-light/40 text-sm font-display tracking-widest">
        Pune, Maharashtra
      </div>
    </section>
  );
}

export default Hero;
