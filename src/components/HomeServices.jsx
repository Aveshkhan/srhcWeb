import { Button } from "primereact/button";

const services = [
  {
    icon: "pi pi-heart",
    color: "#14B8A6",
    name: "ECG",
    price: "₹500",
    desc: "Home Visit ECG – ₹1000",
  },
  {
    icon: "pi pi-cloud",
    color: "#22D3EE",
    name: "Nebulisation",
    price: "₹200",
    desc: "",
  },
  {
    icon: "pi pi-home",
    color: "#06B6D4",
    name: "Home Visit",
    price: "₹500 - ₹1500",
    desc: "Doctor ₹1000 • Nurse ₹500",
  },
  {
    icon: "pi pi-tint",
    color: "#14B8A6",
    name: "IV Fluid Day Care",
    price: "₹1,000",
    desc: "",
  },

  {
    icon: "pi pi-file",
    color: "#22D3EE",
    name: "Dressing",
    price: "₹500 - ₹1500",
    desc: "",
  },
  {
    icon: "pi pi-apple",
    color: "#14B8A6",
    name: "Diet Chart",
    price: "₹1,500",
    desc: "",
  },
  {
    icon: "pi pi-chart-line",
    color: "#06B6D4",
    name: "BP Check",
    price: "₹50",
    desc: "",
  },
  {
    icon: "pi pi-chart-bar",
    color: "#14B8A6",
    name: "RBS (Blood Sugar)",
    price: "₹100",
    desc: "",
  },

  {
    icon: "pi pi-syringe",
    color: "#22D3EE",
    name: "IM Injection",
    price: "₹100",
    desc: "",
  },
  {
    icon: "pi pi-plus-circle",
    color: "#14B8A6",
    name: "Suturing",
    price: "₹2,500",
    desc: "",
  },
  {
    icon: "pi pi-chart-scatter",
    color: "#06B6D4",
    name: "Body Composition",
    price: "₹300",
    desc: "",
  },
  {
    icon: "pi pi-syringe",
    color: "#14B8A6",
    name: "IV Injection",
    price: "₹500",
    desc: "",
  },

  {
    icon: "pi pi-brain",
    color: "#F472B6",
    name: "EEG (Brain)",
    price: "₹4,500",
    desc: "",
  },
  {
    icon: "pi pi-wave-pulse",
    color: "#22D3EE",
    name: "Nerve Conduction Study",
    price: "₹4,500",
    desc: "",
  },
  {
    icon: "pi pi-camera",
    color: "#14B8A6",
    name: "X-Ray (Clinic)",
    price: "₹600/view",
    desc: "Home Visit X-Ray – ₹1500/view",
  },
  {
    icon: "pi pi-search",
    color: "#F59E0B",
    name: "Endoscopy (Diagnostic)",
    price: "₹7,000",
    desc: "With Biopsy – ₹9,000",
  },
];

export default function ServicesCharges() {
  return (
    <section className="services-dark-section py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-teal-400 text-sm font-semibold tracking-widest">
            TRANSPARENT PRICING
          </p>
          <h2 className="text-white text-4xl md:text-5xl font-bold mt-3">
            Our Services & Charges
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            No hidden fees. Honest, affordable pricing so you always know what
            to expect.
          </p>
        </div>

        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="service-dark-card group">
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
                  style={{
                    backgroundColor: `${service.color}15`,
                    color: service.color,
                  }}
                >
                  <i className={service.icon}></i>
                </div>
              </div>

              <h3 className="text-white text-xl font-semibold mb-1">
                {service.name}
              </h3>

              <div className="text-3xl font-bold text-white mb-2">
                {service.price}
              </div>

              {service.desc && (
                <p className="text-slate-400 text-sm leading-snug">
                  {service.desc}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button
            label="Book Appointment Now"
            icon="pi pi-calendar"
            className="font-semibold px-8 py-3 text-lg"
            style={{ background: "var(--primary)", border: "none" }}
            rounded
          />
        </div>
      </div>
    </section>
  );
}
