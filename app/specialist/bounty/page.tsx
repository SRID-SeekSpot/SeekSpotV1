"use client";

import Image from "next/image";

import Header from "@/components/general/header";
import Navbar from "@/components/general/navbar";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import BountyHuntListItem, {
    BountyHuntListItemProps,
} from "@/components/general/bountyhuntListItem";
import { BOUNTY_ITEMS } from "@/app/constants/BountyItems";

export default function Home() {
    // Icon Src and Route for Navigation Bar
    const navButtons = [
        {
            src: "/icons/IconHome.png",
            alt: "Home",
            route: "/specialist/dashboard",
        },
        {
            src: "/icons/IconMoney.png",
            alt: "BountyHunt",
            route: "/specialist/bounty",
        },
        { src: "/icons/IconSearch.png", alt: "Search", route: "/messages" },
        { src: "/icons/IconAvatar.png", alt: "Settings", route: "/settings" },
    ];

    const bountyHuntList: BountyHuntListItemProps[] = BOUNTY_ITEMS;

    return (
        <div className="flex flex-col">
            <title>Specialist BountyHunt Page</title>
            {/* Header that redirects to home */}
            {/* <Header href="/" altText="Hello"/> */}
            <Header altText="Bounty Hunt List" />
            {/* Body */}
            <div className="flex flex-col m-5 space-y-4">
                {bountyHuntList.map((item) => {
                    return <BountyHuntListItem {...item} onClick={()=>{
                        console.log("Item " + item.name + " was clicked")
                    }}/>;
                })}
            </div>
            {/* Bottom Navigation Bar */}
            <Navbar navButtons={navButtons} />
        </div>
    );
}
