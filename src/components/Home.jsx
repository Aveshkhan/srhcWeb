import HeroCarousel from "./HeroCarousal";
import Navbar from "./Navbar";
// import { Button } from "primereact/button";

function Home() {
  return (
    <div>
      <Navbar />
      {/* <div className="HomeLandingPage">
        <div className="HeroText">
          <h2>
            Compassionate, <br />
            Reliable & Complete <br />
            Care for Your Family
          </h2>
          <p className="descText text-shadow-md mt-4">
            At Shri Ramdev Healthcare Centre, expert medical care is now just a
            tap away. <br /> Get fast, reliable, and compassionate treatment for
            you and your family.
          </p>
          <Button
            label="Make Appointment"
            rounded
            className="mt-4 btn-primary"
            icon="pi pi-arrow-right"
            iconPos="right"
          />
        </div>
      </div> */}
      <HeroCarousel />
    </div>
  );
}

export default Home;
