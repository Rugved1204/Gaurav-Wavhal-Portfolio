import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 px-8 md:px-20 py-5 flex items-center justify-between transition-colors duration-300 ${
        scrolled
          ? "bg-light/80 dark:bg-dark/80 backdrop-blur-md border-b border-dark/10 dark:border-light/10"
          : "bg-transparent"
      }`}
    >
      <a
        href="#"
        className="font-display font-bold text-xl tracking-tight text-dark dark:text-light"
      >
        GW<span className="text-accent">.</span>
      </a>

      <div className="hidden md:flex gap-8">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-display text-dark/70 dark:text-light/70 hover:text-accent transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>

      <button
        className="md:hidden flex flex-col gap-1.5 w-7 z-50 mr-16"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`h-0.5 w-full bg-dark dark:bg-light transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`}
        />
        <span
          className={`h-0.5 w-full bg-dark dark:bg-light transition-opacity ${isOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`h-0.5 w-full bg-dark dark:bg-light transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-light dark:bg-dark flex flex-col items-center justify-center gap-8 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-display font-semibold text-dark dark:text-light hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
