"use client";

import React, {useEffect, useState  } from 'react';
// import { useRouter } from 'next/router';
import Header from "@/components/general/header";
import Navbar from "@/components/general/navbar";
import { BOUNTY_ITEMS } from "@/app/constants/BountyItems";
import { SPECIALIST_ROUTES } from "@/app/constants/SpecialistRoutes";
import EditItemDescriptionForm from "@/components/general/editItemForm";
import { useSearchParams } from "@/node_modules/next/navigation";


export default function Home(){
    
    // Icon Src and Route for Navigation Bar
    const navButtons = SPECIALIST_ROUTES;

    // const [itemDetail, setItemDetail] = useState<Item | null>(null);
    const searchParams = useSearchParams()
    const itemIndex = searchParams.getAll("ItemID")

    // useEffect(() => {
    //     if (itemIndex.length > 0) {
    //       const foundItem = BOUNTY_ITEMS.find((item) => item.id === itemIndex[0]);
    //       setItemDetail(foundItem || null);
    //     }
    //   }, [itemIndex]);

    const foundItem = BOUNTY_ITEMS.find((item) => item.id === itemIndex[0]);

    return (
        <div className="flex flex-col">
            <title>Specialist Edit Item Description</title>
            {/* Header that redirects to home */}
            <Header altText="Report a Found Item" />
            {/* Body */}
            {/* <EditItemDescriptionForm itemName={itemDetail?.name} imgSrc={itemDetail?.imgSrc} locationLost={itemDetail?.location} dateLost={itemDetail?.date} additionalDetails={itemDetail?.description} /> */}
            <EditItemDescriptionForm item={foundItem}></EditItemDescriptionForm>
            {/* Bottom Navigation Bar */}
            <Navbar navButtons={navButtons} />
        </div>
    );
}
