export default function Footer() {
  const navLinks = ["Home", "About Us", "Our Team", "Reviews", "Contact Us"];
  const services = [
    "Consultations",
    "Lupin Diagnostics",
    "Home Visits",
    "Home Nursing",
    "Pharmacy 15% Off",
    "24/7 Support",
  ];

  const socials = [
    { icon: "pi-whatsapp", href: "http://wa.me/918591371535" },
    { icon: "pi-envelope", href: "mailto:srhc.0001@gmail.com" },
    { icon: "pi-phone", href: "tel:+918591371535" },
    { icon: "pi-instagram", href: "#" },
  ];

  const contacts = [
    {
      icon: "pi-map-marker",
      content: (
        <div>
          <p className="text-slate-400 text-sm leading-relaxed m-0">
            Shop No. 1, Golders Green Bldg No. 1, Holy Cross Road, I.C. Colony
            (Ext.), Borivali West, Mumbai – 400103
          </p>
          <p className="text-sm mt-1 m-0" style={{ color: "var(--primary)" }}>
            Near HCG Hospital
          </p>
        </div>
      ),
    },
    {
      icon: "pi-phone",
      content: (
        <a href="tel:+918591371535" className="footer-link text-sm">
          +91 8591371535
        </a>
      ),
    },
    {
      icon: "pi-envelope",
      content: (
        <a href="mailto:srhc.0001@gmail.com" className="footer-link text-sm">
          srhc.0001@gmail.com
        </a>
      ),
    },
    {
      icon: "pi-clock",
      content: (
        <span
          className="font-semibold text-sm"
          style={{ color: "var(--primary-light)" }}
        >
          Open 24/7 — Always Here
        </span>
      ),
    },
  ];

  return (
    <footer className="footer">
      <div className="max-w-11/12 mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand — full width on mobile */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="http://primefaces.org/cdn/primereact/images/logo.png"
                alt="SRHC"
                className="rounded-xl object-cover"
                style={{ width: 48, height: 48 }}
              />
              <div>
                <p
                  className="font-bold text-white text-xl m-0"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  SRHC
                </p>
                <p className="footer-label m-0">
                  SHRI RAMDEV HEALTHCARE CENTRE
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              A trusted multispeciality polyclinic in Borivali West delivering
              complete medical care for your family under one modern roof.
            </p>

            <div className="flex gap-3">
              {socials.map((s) => (
                <a key={s.icon} href={s.href} className="footer-social-btn">
                  <i className={`pi ${s.icon} text-base`} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="footer-label mb-5">Navigation</p>
            <ul className="list-none p-0 m-0 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="footer-link text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="footer-label mb-5">Services</p>
            <ul className="list-none p-0 m-0 flex flex-col gap-3">
              {services.map((s) => (
                <li key={s}>
                  <a href="#" className="footer-link text-sm">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — full width on tablet */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="footer-label mb-5">Contact Us</p>
            <div className="flex flex-col gap-4">
              {contacts.map((c, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <i
                    className={`pi ${c.icon} text-base mt-0.5 flex-shrink-0`}
                    style={{ color: "var(--primary-light)" }}
                  />
                  {c.content}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-slate-500 text-sm m-0 text-center md:text-left">
            © 2025 Shri Ramdev Healthcare Centre. All Rights Reserved.
          </p>
          <p className="text-slate-500 text-sm m-0 text-center md:text-right">
            Crafted with <span className="text-rose-500">♥</span> for better
            healthcare
          </p>
        </div>
      </div>
    </footer>
  );
}
