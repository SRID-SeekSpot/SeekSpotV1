"use client";

import Image from "next/image";

import Header from "@/components/general/header";
import Navbar from "@/components/general/navbar";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import BountyHuntListItem, {
    BountyHuntListItemProps,
} from "@/components/general/bountyhuntListItem";
import { BOUNTY_ITEMS } from "@/app/constants/AllItems";
import { SPECIALIST_ROUTES } from "@/app/constants/SpecialistRoutes";

export default function Home() {
    // Icon Src and Route for Navigation Bar
    const navButtons = SPECIALIST_ROUTES;

    const yellowUmbrellaItem: BountyHuntListItemProps = {
        id: "unique_id",
        name: "Yellow Umbrella",
        description: "A  yellow umbrella lost during a rainy day.",
        imgSrc: "/yelloUmbrella.jpg",
        price: 5.0,
    };

    const bountyHuntList: BountyHuntListItemProps[] = [
        ...BOUNTY_ITEMS,
        yellowUmbrellaItem,
    ];

    //const bountyHuntList: BountyHuntListItemProps[] = BOUNTY_ITEMS;

    return (
        <div className="flex flex-col">
            <title>Specialist BountyHunt Page</title>
            {/* Header that redirects to home */}
            {/* <Header href="/" altText="Hello"/> */}
            <Header altText="Bounty Hunt List" />
            {/* Body */}
            <div className="flex flex-col m-5 space-y-4">
                {bountyHuntList.map((item) => {
                    return (
                        <BountyHuntListItem
                            key={item.id}
                            {...item}
                            onClick={() => {
                                console.log(
                                    "Item " + item.name + " was clicked"
                                );
                            }}
                        />
                    );
                })}
            </div>
            {/* Bottom Navigation Bar */}
            <Navbar navButtons={navButtons} />
        </div>
    );
}
