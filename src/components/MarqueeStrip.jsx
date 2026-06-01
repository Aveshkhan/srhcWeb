const items = [
  { icon: "pi pi-check-circle", text: "24 / 7 Medical Support" },
  { icon: "pi pi-check-circle", text: "In-House Pharmacy · 15% Off" },
  { icon: "pi pi-check-circle", text: "ECG · X-Ray · Endoscopy On-Site" },
  { icon: "pi pi-check-circle", text: "Near HCG Hospital, IC Colony" },
  { icon: "pi pi-check-circle", text: "Lupin Diagnostics Partner" },
  { icon: "pi pi-check-circle", text: "Expert Doctors Available Daily" },
];

export default function MarqueeStrip() {
  return (
    <div className="marquee-strip">
      <div className="marquee-track">
        {/* Duplicate for seamless loop */}
        {[...items, ...items].map((item, i) => (
          <div className="marquee-item" key={i}>
            <i className={`${item.icon} marquee-icon`} />
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
