"use client";

import React, {useEffect, useState  } from 'react';
// import { useRouter } from 'next/router';
import Header from "@/components/general/header";
import Navbar from "@/components/general/navbar";
import { BOUNTY_ITEMS } from "@/app/constants/BountyItems";
import { SPECIALIST_ROUTES } from "@/app/constants/SpecialistRoutes";
import EditItemDescriptionForm from "@/components/general/editItemForm";
import { useSearchParams } from "@/node_modules/next/navigation";
import { FoundItemProps } from '../found/page';

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

export default function Home(){
    
    // Icon Src and Route for Navigation Bar
    const navButtons = SPECIALIST_ROUTES;

    // const [itemDetail, setItemDetail] = useState<Item | null>(null);
    const searchParams = useSearchParams()
    const itemIndex = searchParams.getAll("ItemID")
    

    const [foundItem, setFoundItem] = useState<FoundItemProps>(BOUNTY_ITEMS.find((item) => item.id === itemIndex[0]));

    useEffect(() => {
        let updatedBountyItemsString = localStorage.getItem("updatedBountyItems");
            if (updatedBountyItemsString !== "null") {
            let updatedBountyItems = JSON.parse(updatedBountyItemsString);
            // foundItem = updatedBountyItems.find((item) => item.id === itemIndex[0]);
            setFoundItem(updatedBountyItems.find((item: { id: string; }) => item.id === itemIndex[0]))
        }
    }, []);  


    return (
        <div className="flex flex-col">
            <Header href={`/specialist/${foundItem.id}`}  altText="Report a Found Item" />
            <title>Specialist Edit Item Description</title>
            {/* Header that redirects to home */}
            {/* Body */}
            <EditItemDescriptionForm eachItem={foundItem}></EditItemDescriptionForm>
            {/* Bottom Navigation Bar */}
            <Navbar navButtons={navButtons} />
        </div>
    );
}
