"use client";

import Image from "next/image";

import LogoFlat from "../../public/LogoFlat.png";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/general/header";
import Navbar from "@/components/general/navbar";

export default function Home() {
    // Icon Src and Route for Navigation Bar
    const navButtons = [
        { src: "/icons/IconHome.png", alt: "Home", route: "/specialistdb" },
        { src: "/icons/IconMoney.png", alt: "BountyHunt", route: "/profile" },
        { src: "/icons/IconSearch.png", alt: "Search", route: "/messages" },
        { src: "/icons/IconAvatar.png", alt: "Settings", route: "/settings" },
    ];

    return (
        <div className="flex flex-col">
            <title>Specialist Dashboard</title>
            {/* Header that redirects to home */}
            {/* <Header href="/" altText="Hello"/> */}
            <Header href="/" />

            {/* Bottom Navigation Bar */}
            <Navbar navButtons={navButtons} />
        </div>
    );
}
