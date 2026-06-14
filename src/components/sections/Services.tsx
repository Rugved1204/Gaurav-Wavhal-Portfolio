const services = [
  {
    title: "Branding & Visual Identity",
    desc: "Logos, brand guidelines, and cohesive visual systems that make brands memorable."
  },
  {
    title: "Website Banner Design",
    desc: "Conversion-focused banners optimized for performance and responsiveness."
  },
  {
    title: "Print & Digital Advertising",
    desc: "Flyers, brochures, backdrops, and marketing collateral for any campaign."
  },
  {
    title: "Social Media Creatives",
    desc: "Eye-catching posts and graphics tailored to each platform."
  },
  {
    title: "Photo & Video Editing",
    desc: "Polished visuals and edits using Photoshop, Premiere Pro, and Filmora."
  },
  {
    title: "CMS & Client Website Management",
    desc: "Uploading, managing, and optimizing creatives directly on client platforms."
  }
];

function Services() {
  return (
    <section id="services" className="py-24 px-8 md:px-20">
      <p className="text-accent font-display text-sm tracking-widest uppercase mb-4">
        Services
      </p>
      <h2 className="font-display font-bold text-3xl md:text-5xl mb-16 text-dark dark:text-light">
        What I Can Do For You
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="border border-dark/10 dark:border-light/10 rounded-2xl p-6 hover:border-accent transition-colors"
          >
            <div className="text-accent font-display font-bold text-3xl mb-4">
              {String(idx + 1).padStart(2, '0')}
            </div>
            <h3 className="font-display font-semibold text-lg mb-2 text-dark dark:text-light">
              {service.title}
            </h3>
            <p className="text-dark/60 dark:text-light/60 text-sm leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;