import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "../ui/separator";

// Define the type for the button
interface NavButton {
  src: string;
  alt: string;
  route: string;
}

// Define the props for the Navbar component
interface NavbarProps {
  navButtons: NavButton[]; // Array of NavButton objects
}

// Navbar component with props
const Navbar: React.FC<NavbarProps> = ({ navButtons }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0">
      <Separator />
      <div className="bg-white shadow-lg flex justify-around items-center h-16">
        {navButtons.map((button, index) => (
          <Link key={index} href={button.route} passHref>
            <Image src={button.src} alt={button.alt} width={24} height={24} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
