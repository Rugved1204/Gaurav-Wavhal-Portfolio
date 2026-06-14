function Footer() {
  return (
    <footer className="py-10 px-8 md:px-20 border-t border-dark/10 dark:border-light/10 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-dark/50 dark:text-light/50 text-sm">
        © {new Date().getFullYear()} Gaurav Wavhal. All rights reserved.
      </p>
      <div className="flex gap-6 text-sm">
        <a
          href="https://www.behance.net/gauravwavhal95"
          target="_blank"
          rel="noopener noreferrer"
          className="text-dark/50 dark:text-light/50 hover:text-accent transition-colors"
        >
          Behance
        </a>
        <a
          href="mailto:gauravwav95@gmail.com"
          className="text-dark/50 dark:text-light/50 hover:text-accent transition-colors"
        >
          Email
        </a>
      </div>
    </footer>
  );
}

export default Footer;
