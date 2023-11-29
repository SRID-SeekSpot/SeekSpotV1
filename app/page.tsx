"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

import LogoSquare from "../public/LogoSquare.png";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const handlePopup = () => {
    localStorage.setItem("showPopup", "true");
    localStorage.setItem("unread", "true");
};
export default function Home() {
    const locationOptions = [
        { value: "Vista Valley Mall", label: "Vista Valley Mall" },
        { value: "Spectrum Square", label: "Spectrum Square" },
        { value: "West Marketplace", label: "West Marketplace" },
    ];

    return (
        <div className="bg-sky h-screen">
            <title>SRID HomePage</title>
            <div className="flex flex-col justify-center items-center bg-sky">
                {/* Logo Panel */}
                <div className="mt-36">
                    <Image alt="mainLogo" src={LogoSquare} width={320}></Image>
                </div>
                {/* Location Selection Panel */}
                <div className="flex flex-row mt-20 justify-center items-center">
                    <p>Location: </p>
                    <div className="ml-10">
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select a location" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Select a Location</SelectLabel>
                                    {locationOptions.map((location) => {
                                        return (
                                            <SelectItem value={location.value}>
                                                {location.label}
                                            </SelectItem>
                                        );
                                    })}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                {/* Button Panel */}
                <div className="flex flex-col mt-20 justify-between space-y-4">
                    <Button className="w-56" asChild>
                        <a href="/specialist/dashboard">Specialist</a>
                    </Button>
                    <Button className="w-56" variant={"secondary"}>
                        Non-Specialist
                    </Button>
                    <Button className="w-56" variant={"outline"} asChild>
                        <a href="/styleguide">Style Guide</a>
                    </Button>
                    <Button className="w-56" asChild onClick={handlePopup}>
                        <a href="/specialist/dashboard">Task 9 & 10 starts from here</a>
                    </Button>
                </div>
            </div>
        </div>
    );
}
