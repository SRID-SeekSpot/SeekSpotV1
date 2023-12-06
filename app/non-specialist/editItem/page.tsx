"use client";

import React, { useEffect, useState } from "react";
// import { useRouter } from 'next/router';
import Header from "@/components/general/header";
import Navbar from "@/components/general/navbar";
import { ALL_ITEMS } from "@/app/constants/AllItems";
import { NON_SPECIALIST_ROUTES } from "@/app/constants/NonSpecialistRoutes";
import EditItemDescriptionForm from "@/components/general/editItemForm";
import { useSearchParams } from "@/node_modules/next/navigation";
import { FoundItemDetailPageProps } from "@/components/general/foundItemDetail_nonspecialist";
import { fips } from "crypto";

export interface EachFoundItemProps {
    name: string;
    imgSrc: string;
    description: string;
    color: string;
    category: string;
    price: number;
    location: string;
    date: string;
    id: string;
}

export default function Home() {
    // Icon Src and Route for Navigation Bar
    const navButtons = NON_SPECIALIST_ROUTES;

    // const [itemDetail, setItemDetail] = useState<Item | null>(null);
    const searchParams = useSearchParams();
    const itemIndex = searchParams.getAll("ItemID");

    const [foundItem, setFoundItem] = useState<FoundItemDetailPageProps | undefined>(
        ALL_ITEMS.length > 0 ? ALL_ITEMS.find((item) => item.id === itemIndex[0]) : undefined
    );

    useEffect(() => {
        let updatedBountyItemsString =
            localStorage.getItem("updatedBountyItems");
        if (updatedBountyItemsString && updatedBountyItemsString !== "null") {
            let updatedBountyItems = JSON.parse(updatedBountyItemsString);
            // foundItem = updatedBountyItems.find((item) => item.id === itemIndex[0]);
            setFoundItem(
                updatedBountyItems.find(
                    (item: { id: string }) => item.id === itemIndex[0]
                )
            );
        }
    }, []);

    return (
        <div className="flex flex-col">
            <Header
                href={`/specialist/${foundItem?.id}`}
                altText="Report a Found Item"
            />
            <title>Specialist Edit Item Description</title>
            {/* Header that redirects to home */}
            {/* Body */}
            <EditItemDescriptionForm 
                id={foundItem?.id || ""} name={foundItem?.name || ""} 
                imgSrc={foundItem?.imgSrc || ""} description={foundItem?.description || ""} 
                price={foundItem?.price || 0} color={foundItem?.color || ""} category={foundItem?.category || ""} 
                location={foundItem?.location || ""} date={foundItem?.date || ""} claimCode={foundItem?.claimCode || ""} 
                claimStatus={foundItem?.claimStatus || false}                
            ></EditItemDescriptionForm>
            {/* Bottom Navigation Bar */}
            <Navbar navButtons={navButtons} />
        </div>
    );
}
