"use client";

import Image from "next/image";

import Header from "@/components/general/header";
import Navbar from "@/components/general/navbar";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { SPECIALIST_ROUTES } from "@/app/constants/SpecialistRoutes";

export default function Home() {
    // Icon Src and Route for Navigation Bar
    const navButtons = SPECIALIST_ROUTES;

    const bountyHuntList = [{}, {}, {}, {}];
    const foundItemList = [{}, {}, {}, {}];

    return (
        <div className="flex flex-col">
            <title>Specialist Dashboard</title>
            {/* Header that redirects to home */}
            {/* <Header href="/" altText="Hello"/> */}
            <Header href="/" />
            {/* Body */}
            <div className="flex flex-col">
                {/* Bounty Hunt List */}
                <div className="flex flex-col m-4">
                    <div className="flex flex-row justify-start items-baseline">
                        <Image
                            src="/icons/IconMoney.png"
                            alt="BountyHunt"
                            width={25}
                            height={25}
                        ></Image>
                        <p className="text-3xl ml-2">Bounty Hunt List</p>
                    </div>
                    <div className="mt-2">
                        <p className="text-sm">
                            List of items people have lost. Help them find their
                            treasures and gain a reward!
                        </p>
                    </div>
                    <div className="mt-4">
                        <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
                            <div className="flex w-max space-x-4 p-4">
                                {bountyHuntList.map((item) => (
                                    <div className="h-40 w-40 bg-grass"></div>
                                ))}
                            </div>
                            <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                    </div>
                </div>
                {/* Found Item Inventory */}
                <div className="flex flex-col m-4">
                    <div className="flex flex-row justify-start items-baseline">
                        <Image
                            src="/icons/IconSearch.png"
                            alt="FoundItem"
                            width={25}
                            height={25}
                        ></Image>
                        <p className="text-3xl ml-2">Found Item Inventory</p>
                    </div>
                    <div className="mt-2">
                        <p className="text-sm">
                            List of items stored in the Lost & Found office.
                            Come and see if your item is here!
                        </p>
                    </div>
                    <div className="mt-4">
                        <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
                            <div className="flex w-max space-x-4 p-4">
                                {foundItemList.map((item) => (
                                    <div className="h-40 w-40 bg-grass"></div>
                                ))}
                            </div>
                            <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                    </div>
                </div>
            </div>
            {/* Bottom Navigation Bar */}
            <Navbar navButtons={navButtons} />
        </div>
    );
}
