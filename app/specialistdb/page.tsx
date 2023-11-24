"use client";

import Image from "next/image";

import LogoFlat from "../../public/LogoFlat.png";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/general/header";

export default function Home() {
    return (
        <div className="flex flex-col">
            <title>Specialist Dashboard</title>
            {/* Header that redirects to home */}
            {/* <Header href="/" altText="Hello"/> */}
            <Header href="/"/>
        </div>
    );
}
