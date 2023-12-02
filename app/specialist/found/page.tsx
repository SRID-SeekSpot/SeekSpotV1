"use client";

import Image from "next/image";
import Link from "next/link";

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
import { useEffect, useState } from "react";


export interface FoundItemProps {
    item: {
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
  }

export default function Home() {
    // Icon Src and Route for Navigation Bar
    const navButtons = SPECIALIST_ROUTES;

    const [foundItemList, setFoundItemList] = useState<FoundItemProps[]>(BOUNTY_ITEMS);

    const colorFilter = ["White", "Black"];
    const categoryFilter = ["Cloth", "Bottles"];

    useEffect(() => {
        // Fetch data from localStorage only once when the component mounts
        let updatedBountyItemsString = localStorage.getItem("updatedBountyItems");
        console.log(updatedBountyItemsString)
    
        if (updatedBountyItemsString !== "null") {
          let updatedBountyItems = JSON.parse(updatedBountyItemsString);
          console.log(updatedBountyItems)
          setFoundItemList(updatedBountyItems);
        }
      }, []); 

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
                            alt="searchIcon"
                            src="/icons/IconZoom.png"
                            width={12}
                            height={12}
                        />
                    </Button>
                    {/* Sidebar for Filter */}
                    <Sheet>
                        <SheetTrigger className="p-4">
                            <Image
                                alt="filterIcon"
                                src="/icons/IconFilter.png"
                                width={12}
                                height={12}
                            />
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader className="flex flex-row justify-start items-center">
                                <div className="">
                                    <Image
                                        alt="filterIcon"
                                        src="/icons/IconFilter1.png"
                                        height={24}
                                        width={24}
                                    />
                                </div>
                                <SheetTitle className="ml-4 text-navy text-3xl">
                                    Filter
                                </SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col mt-8 space-y-8">
                                {/* Color Filter */}
                                <div className="flex flex-row justify-between items-center">
                                    <p>Color:</p>
                                    <div className="">
                                        <Select>
                                            <SelectTrigger className="w-[160px]">
                                                <SelectValue placeholder="Select a Color" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>
                                                        Select a Color
                                                    </SelectLabel>
                                                    {colorFilter.map(
                                                        (color) => {
                                                            return (
                                                                <SelectItem
                                                                    value={
                                                                        color
                                                                    }
                                                                >
                                                                    {color}
                                                                </SelectItem>
                                                            );
                                                        }
                                                    )}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                {/* Category Filter */}
                                <div className="flex flex-row justify-between items-center">
                                    <p>Category:</p>
                                    <div className="">
                                        <Select>
                                            <SelectTrigger className="w-[160px]">
                                                <SelectValue placeholder="Select a Category" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Select a Category</SelectLabel>
                                                    {categoryFilter.map(
                                                        (color) => {
                                                            return (
                                                                <SelectItem
                                                                    value={
                                                                        color
                                                                    }
                                                                >
                                                                    {color}
                                                                </SelectItem>
                                                            );
                                                        }
                                                    )}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                {/* Confirmation */}
                                <div className="flex flex-row justify-between items-center">
                                    <Button className="w-28 rounded-lg">Save</Button>
                                    <Button className="w-28 rounded-lg" variant={"secondary"}>Reset</Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
                {/* Display Div */}
                <div className="mt-8">
                    <div className="grid grid-cols-2 gap-x-8 gap-y-8">
                        {foundItemList.map((item) => {
                            return( <FoundListItem key={item.id} {...item} />);
                        })}
                    </div>
                </div>
            </div>
            {/* Bottom Navigation Bar */}
            <Navbar navButtons={navButtons} />
        </div>
    );
}
