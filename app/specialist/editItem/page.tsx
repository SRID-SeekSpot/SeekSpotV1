"use client";

import Image from "next/image";
// import { useRouter } from 'next/router';
import Header from "@/components/general/header";
import Navbar from "@/components/general/navbar";
import { BOUNTY_ITEMS } from "@/app/constants/BountyItems";
import { SPECIALIST_ROUTES } from "@/app/constants/SpecialistRoutes";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import FoundListItem, {
    FoundListItemProps,
} from "@/components/general/foundListItem";
import EditItemDescriptionForm from "@/components/general/editItemForm";
import { useSearchParams } from "@/node_modules/next/navigation";
import { useState } from "react";

export default function Home() {
    // Icon Src and Route for Navigation Bar
    const navButtons = SPECIALIST_ROUTES;

    const colorFilter = ["White", "Black"];
    const categoryFilter = ["Cloth", "Bottles"];

    // const router = useRouter();
    const searchParams = useSearchParams()
    const itemIndex = searchParams.getAll("ItemId")

    // save the data in local
    // const [itemList, setItemList] = useState('')
    const bountyItemsString = JSON.stringify(BOUNTY_ITEMS);
    localStorage.setItem('dummyData', bountyItemsString);

    let index = itemIndex
    const item = index !== undefined ? BOUNTY_ITEMS[index] : null;
    console.log("item: " + item)



    return (
        <div className="flex flex-col">
            <title>Specialist Edit Item Description</title>
            {/* Header that redirects to home */}
            <Header altText="Report a Found Item" />
            {/* Body */}
            <EditItemDescriptionForm itemName={item!.name} imgSrc={item!.imgSrc} locationLost={""} dateLost={""} additionalDetails={item!.description} />
            {/* Bottom Navigation Bar */}
            <Navbar navButtons={navButtons} />
        </div>
    );
}
