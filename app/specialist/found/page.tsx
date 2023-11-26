"use client";

import Image from "next/image";

import Header from "@/components/general/header";
import Navbar from "@/components/general/navbar";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { BOUNTY_ITEMS } from "@/app/constants/BountyItems";
import { SPECIALIST_ROUTES } from "@/app/constants/SpecialistRoutes";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FoundListItem, {
    FoundListItemProps,
} from "@/components/general/foundListItem";

export default function Home() {
    // Icon Src and Route for Navigation Bar
    const navButtons = SPECIALIST_ROUTES;

    const foundItemList: FoundListItemProps[] = BOUNTY_ITEMS;

    return (
        <div className="flex flex-col">
            <title>Specialist Found Item Inventory</title>
            {/* Header that redirects to home */}
            {/* <Header href="/" altText="Hello"/> */}
            <Header altText="Found Item Inventory" />
            {/* Body */}
            <div className="m-4">
                {/* Search Div */}
                <div className="flex flex-row justify-between space-x-2">
                    <Input
                        type="search"
                        placeholder="Enter Some Keyword For Searching"
                    />
                    <Button variant={"link"}>
                        <Image
                            alt="filterIcon"
                            src="/icons/IconFilter.png"
                            width={12}
                            height={12}
                        />
                    </Button>
                    <Button variant={"link"}>
                        <Image
                            alt="searchIcon"
                            src="/icons/IconZoom.png"
                            width={12}
                            height={12}
                        />
                    </Button>
                </div>
                {/* Display Div */}
                <div className="mt-8">
                    <div className="grid grid-cols-2 gap-x-8 gap-y-8">
                        {foundItemList.map((item) => {
                            return <FoundListItem {...item} />;
                        })}
                    </div>
                </div>
            </div>
            {/* Bottom Navigation Bar */}
            <Navbar navButtons={navButtons} />
        </div>
    );
}
