function Contact() {
  return (
    <section id="contact" className="py-24 px-8 md:px-20">
      <div className="max-w-3xl">
        <p className="text-accent font-display text-sm tracking-widest uppercase mb-4">
          Get In Touch
        </p>
        <h2 className="font-display font-bold text-3xl md:text-6xl mb-8 text-dark dark:text-light">
          Let's Create Something Great Together
        </h2>
        <p className="text-dark/70 dark:text-light/70 text-lg mb-10">
          Have a project in mind or just want to say hi? Reach out — I'm always
          open to discussing new ideas and opportunities.
        </p>

        <div className="space-y-4">
          <a
            href="mailto:gauravwav95@gmail.com"
            className="flex items-center gap-3 text-lg text-dark dark:text-light hover:text-accent transition-colors"
          >
            <span className="text-accent font-display text-sm w-20">Email</span>
            gauravwav95@gmail.com
          </a>
          <a
            href="tel:+917709890921"
            className="flex items-center gap-3 text-lg text-dark dark:text-light hover:text-accent transition-colors"
          >
            <span className="text-accent font-display text-sm w-20">Phone</span>
            +91 7709890921
          </a>
          <a
            href="https://www.behance.net/gauravwavhal95"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-lg text-dark dark:text-light hover:text-accent transition-colors"
          >
            <span className="text-accent font-display text-sm w-20">
              Behance
            </span>
            behance.net/gauravwavhal95
          </a>
          <div className="flex items-center gap-3 text-lg text-dark dark:text-light">
            <span className="text-accent font-display text-sm w-20">
              Location
            </span>
            Ravet, Pune, Maharashtra
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
