import { Button } from "primereact/button";
import { Menubar } from "primereact/menubar";

function Navbar() {
  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
      url: "/",
    },
    {
      label: "Services",
      icon: "pi pi-star",
      items: [
        {
          label: "Components",
          icon: "pi pi-bolt",
        },
        {
          label: "Blocks",
          icon: "pi pi-server",
        },
        {
          label: "UI Kit",
          icon: "pi pi-pencil",
        },
        {
          label: "Templates",
          icon: "pi pi-palette",
          items: [
            {
              label: "Apollo",
              icon: "pi pi-palette",
            },
            {
              label: "Ultima",
              icon: "pi pi-palette",
            },
          ],
        },
      ],
    },
    {
      label: "About Us",
      icon: "pi pi-info-circle",
      url: "/aboutUs",
    },
    {
      label: "Our Team",
      icon: "pi pi-users",
      url: "/ourTeam",
    },
    {
      label: "Reviews",
      icon: "pi pi-pen-to-square",
      url: "/reviews",
    },
    {
      label: "Contact Us",
      icon: "pi pi-envelope",
      url: "/contact",
    },
  ];

  const start = (
    <img
      alt="logo"
      src="http://primefaces.org/cdn/primereact/images/logo.png"
      height="40"
      className="mr-2 h-10"
    ></img>
  );

  const end = (
    <Button
      label="Book Now"
      icon="pi pi-whatsapp"
      iconPos="right"
      className="font-semibold px-6 py-2.5 rounded-full"
      style={{
        background: "var(--primary)",
        border: "2px solid var(--primary)",
        fontSize: "1rem",
      }}
    />
  );

  return (
    <div className="customNavbar">
      <Menubar model={items} start={start} end={end} />
    </div>
  );
}

export default Navbar;
