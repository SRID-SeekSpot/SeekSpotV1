"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import Header from "@/components/general/header";
import Navbar from "@/components/general/navbar";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { NON_SPECIALIST_ROUTES } from "@/app/constants/NonSpecialistRoutes";
import { BOUNTY_ITEMS, FOUND_ITEMS } from "@/app/constants/AllItems";
import SquareListItem from "@/components/general/squareListItem";
import DashboardTitle from "@/components/general/dashboardTitle";

// Popup component
const Popup = ({}) => {
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-10">
            <div className="bg-white p-5 rounded-lg shadow-lg text-center">
                <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
                <p className="text-sm mb-4">Your lost item is found!</p>
                <Button className="w-56" variant={"secondary"}>
                    <a href="/non-specialist/profile/delivery">Check details</a>
                </Button>
            </div>
        </div>
    );
};

export default function Home() {
    const [showPopup, setShowPopup] = useState(false);
    // Icon Src and Route for Navigation Bar
    const navButtons = NON_SPECIALIST_ROUTES;

    const [bountyHuntList, setBountyHuntList] = useState(BOUNTY_ITEMS); // Product list data
    const [foundItemList, setFoundItemList] = useState(FOUND_ITEMS); // Product list data

    useEffect(() => {
        const showPopup = localStorage.getItem("showPopup");
        if (showPopup === null) {
            localStorage.setItem("showPopup", "false");
            setShowPopup(false);
        } else {
            setShowPopup(showPopup === "true");
        }

        let updatedBountyItemsString = localStorage.getItem("updatedBountyItems");
        if (updatedBountyItemsString && updatedBountyItemsString !== "null") {
            let updatedBountyItems = JSON.parse(updatedBountyItemsString);
            // console.log(updatedBountyItems)
            let updatedFoundList = updatedBountyItems.filter((item: { id: string; }) => item.id.startsWith("f"));
            setFoundItemList(updatedFoundList);
            let updatedBountyList = updatedBountyItems.filter((item: { id: string; }) => item.id.startsWith("l"));
            setBountyHuntList(updatedBountyList);
        }
    }, []);

    return (
        <div className="flex flex-col">
            <title>User Dashboard</title>
            {/* Header that redirects to home */}
            {/* <Header href="/" altText="Hello"/> */}
            <Header href="/" altText="User Dashboard" />
            {/* pop up component */}
            {showPopup && <Popup />}

            {/* Body */}
            <div className="flex flex-col">
                {/* Bounty Hunt List */}

                <div className="flex flex-col m-4">
                    <DashboardTitle
                        iconSrc="/icons/IconMoney.png"
                        title="Bounty Hunt List"
                        description="List of items people have lost. Help them find
                    their treasures and gain a reward!"
                        linkUrl="/non-specialist/bounty"
                    />
                    <div className="mt-4">
                        <ScrollArea className="w-full px-4 whitespace-nowrap rounded-md border">
                            <div className="flex w-max space-x-4 p-4">
                                {bountyHuntList.map((item) => (
                                    <SquareListItem
                                        {...item}
                                        redirectUrl={
                                            "/non-specialist/" + item.id
                                        }
                                        key={item.id}
                                    />
                                ))}
                            </div>
                            <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                    </div>
                </div>
                {/* Found Item Inventory */}
                <div className="flex flex-col m-4">
                    <DashboardTitle
                        iconSrc="/icons/IconSearch.png"
                        title="Found Item Inventory"
                        description="List of items stored in the Lost & Found office.
                    Come and see if your item is here!"
                        linkUrl="/non-specialist/found"
                    />
                    <div className="mt-4">
                        <ScrollArea className="w-full px-4 whitespace-nowrap rounded-md border">
                            <div className="flex w-max space-x-4 p-4">
                                {foundItemList.map((item) => (
                                    <SquareListItem
                                        {...item}
                                        redirectUrl={
                                            "/non-specialist/" + item.id
                                        }
                                        key={item.id}
                                    />
                                ))}
                            </div>
                            <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                    </div>
                </div>
            </div>
            <div
                className="mt-12 flex justify-end mr-6"
                style={{ position: "fixed", bottom: "80px", right: "0px" }}
            >
                <Link href="/non-specialist/createBountyItem" passHref>
                    <Image
                        src="/icons/IconCreate.png"
                        alt="Create Button"
                        width={48}
                        height={48}
                    />
                </Link>
            </div>
            {/* Bottom Navigation Bar */}
            <Navbar navButtons={navButtons} />
        </div>
    );
}
