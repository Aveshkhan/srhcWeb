import { useState } from "react";
import { Galleria } from "primereact/galleria";
import { Button } from "primereact/button";

const slides = [
  {
    image: "http://srhc.life/wp-content/uploads/2025/12/MG_7971-scaled.jpg",
    title: "Compassionate, Reliable & Complete Care for Your Family",
    subtitle:
      "At Shri Ramdev Healthcare Centre, expert medical care is now just a tap away. Get fast, reliable, and compassionate treatment for you and your family.",
  },
  {
    image: "https://srhc.life/wp-content/uploads/2025/12/MG_8005-scaled.jpg",
    title: "Expert Doctors, Modern Treatment",
    subtitle:
      "Our experienced team of doctors provides world-class healthcare with a personal touch.",
  },
  {
    image: "https://srhc.life/wp-content/uploads/2025/12/MG_7965-scaled.jpg",
    title: "Your Health, Our Priority",
    subtitle:
      "Affordable, accessible healthcare for every member of your family — from children to seniors.",
  },
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const itemTemplate = (slide) => {
    return (
      <div
        className="relative w-full overflow-hidden"
        style={{ height: "90vh" }}
      >
        {/* Background Image — key forces re-animation on every slide */}
        <img
          key={`img-${activeIndex}`}
          src={slide.image}
          alt={slide.title}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            animation: "fadeSlide 1s ease forwards",
          }}
        />

        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.1))",
          }}
        />

        {/* Content — key forces re-animation on every slide */}
        <div
          key={`content-${activeIndex}`}
          className="absolute inset-0 flex items-center"
          style={{ animation: "contentFadeUp 0.9s ease forwards" }}
        >
          <div className="px-12 md:px-24 max-w-2xl HeroText">
            <h1
              className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                textShadow: "0 4px 20px rgba(0,0,0,0.35)",
              }}
            >
              {slide.title}
            </h1>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              {slide.subtitle}
            </p>
            <Button
              label="Make Appointment"
              icon="pi pi-arrow-right"
              iconPos="right"
              className="font-semibold px-6 py-3 rounded-full"
              style={{
                background: "var(--primary)",
                border: "2px solid var(--primary)",
                fontSize: "1rem",
              }}
            />
          </div>
        </div>
      </div>
    );
  };

  const thumbnailTemplate = () => null;

  return (
    <div className="w-full" style={{ height: "90vh" }}>
      <Galleria
        value={slides}
        activeIndex={activeIndex}
        onItemChange={(e) => setActiveIndex(e.index)}
        item={itemTemplate}
        thumbnail={thumbnailTemplate}
        showThumbnails={false}
        showIndicators
        showIndicatorsOnItem
        indicatorsPosition="bottom"
        autoPlay
        transitionInterval={4000}
        circular
        style={{ height: "100vh" }}
        pt={{
          root: { style: { height: "100vh" } },
          content: { style: { height: "100vh" } },
          itemsContainer: { style: { height: "100vh" } },
          item: { style: { height: "100vh" } },
          indicators: {
            style: {
              position: "absolute",
              bottom: "2rem",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 10,
              display: "flex",
              gap: "8px",
              background: "transparent",
              padding: 0,
            },
          },
          indicator: {
            style: {
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.5)",
              cursor: "pointer",
              border: "none",
              padding: 0,
            },
          },
        }}
      />
    </div>
  );
}
