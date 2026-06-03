export default function AboutSection() {
  const cards = [
    {
      image: "http://srhc.life/wp-content/uploads/2025/12/MG_7971-scaled.jpg",
      eyebrow: "About Us",
      title: "Welcome to SRHC — Borivali West",
      description:
        "A trusted multispeciality polyclinic delivering quality, affordable care for every member of your family.",
      link: "/aboutUs",
      linkLabel: "Learn more",
    },
    {
      image: "http://srhc.life/wp-content/uploads/2025/12/MG_8005-scaled.jpg",
      eyebrow: "Our Team",
      title: "15+ Specialities Under One Roof",
      description:
        "From general physicians to neurologists, a diverse panel of qualified doctors ready for you every single day.",
      link: "/ourTeam",
      linkLabel: "Explore specialties",
    },
    {
      image: "http://srhc.life/wp-content/uploads/2025/12/MG_7965-scaled.jpg",
      eyebrow: "Key Services",
      title: "Diagnostics, Pharmacy & Home Care",
      description:
        "Lupin diagnostics, an in-house pharmacy (15% off), and home visits by qualified doctors at your doorstep.",
      link: "/services",
      linkLabel: "View all services",
    },
  ];

  return (
    <section className="HomeAboutSection bg-white py-16 md:py-24">
      <div className="max-w-11/12 mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-eyebrow">Who We Are</p>
          <h2 className="about-title">
            A Clinic Built Around{" "}
            <span style={{ color: "var(--primary)", fontStyle: "italic" }}>
              You
            </span>
          </h2>
          <p
            className="section-subtitle mx-auto text-center"
            style={{ maxWidth: 520 }}
          >
            SRHC brings every specialist under one modern roof — so your family
            never has to go far for great care.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div key={card.title} className="about-card">
              <img
                src={card.image}
                alt={card.title}
                className="about-card-image"
              />
              <div className="about-card-body">
                <p className="section-eyebrow mb-3">{card.eyebrow}</p>
                <h3 className="about-card-title">{card.title}</h3>
                <p className="about-card-desc">{card.description}</p>
                <a
                  href={card.link}
                  target="_blank"
                  rel="noreferrer"
                  className="about-card-link"
                >
                  {card.linkLabel} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
