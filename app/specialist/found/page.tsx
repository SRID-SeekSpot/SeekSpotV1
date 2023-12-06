"use client";

import Image from "next/image";
import Link from "next/link";

import Header from "@/components/general/header";
import Navbar from "@/components/general/navbar";
import { BOUNTY_ITEMS, FOUND_ITEMS } from "@/app/constants/AllItems";
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
import { EachFoundItemProps } from "../editItem/page";
import { COLORS_CATEGORY } from "@/app/constants/ColorsCategory";
import { ITEMS_CATEGORY } from "@/app/constants/ItemCategory";
// Icon Src and Route for Navigation Bar
const navButtons = SPECIALIST_ROUTES;

const colorFilter = COLORS_CATEGORY;
const categoryFilter = ITEMS_CATEGORY;

export default function Home() {
    const foundItems = FOUND_ITEMS;
    const [productList, setProductList] = useState(foundItems); // Product list data
    const [val, setVal] = useState(""); // input value for query
    const [color, setColor] = useState(""); // search by filter color
    const [category, setCategory] = useState(""); // search by filter category
    const [selectedColor, setSelectedColor] = useState(""); // selected color
    const [selectedCategory, setSelectedCategory] = useState(""); // selected category
    const [foundItemList, setFoundItemList] =
        useState<EachFoundItemProps[]>(BOUNTY_ITEMS);
    // Query content changes or filtering changes trigger the query
    useEffect(() => {
        searchProductList(val, color, category);
    }, [val, color, category]);

    const [filterApplied, setFilterApplied] = useState(false);

    // search method
    const searchProductList = (
        val: string,
        color: string,
        category: string
    ) => {
        let filterList = foundItems;
        if (val) {
            // filter val
            filterList = filterList.filter(
                (v) => v.name.toLowerCase().indexOf(val.toLowerCase()) > -1
            );
        }
        if (color) {
            // filter color
            filterList = filterList.filter((v) => v.color === color);
        }
        if (category) {
            // filter category
            filterList = filterList.filter((v) => v.category === category);
        }
        setProductList(filterList);
    };
    //save filter value
    const onSave = () => {
        setColor(selectedColor);
        setCategory(selectedCategory);
        setFilterApplied(!(selectedColor === "" && selectedCategory === ""));
    };
    // Reset all filter value
    const onReset = () => {
        setColor("");
        setCategory("");
        setSelectedColor("");
        setSelectedCategory("");
        setFilterApplied(false);
    };

    useEffect(() => {
        let updatedBountyItemsString =
            localStorage.getItem("updatedBountyItems");

        if (updatedBountyItemsString && updatedBountyItemsString !== "null") {
            let updatedBountyItems = JSON.parse(updatedBountyItemsString);

            setProductList((prevProductList) => {
                return prevProductList.map((item) => {
                    const updatedItem = updatedBountyItems.find(
                        (updatedItem: { id: string }) =>
                            updatedItem.id === item.id
                    );
                    return updatedItem || item;
                });
            });
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
                        placeholder="Enter some Keyword ..."
                        onChange={(val) => {
                            setVal(val.target.value);
                        }}
                        className="rounded-2xl"
                    />
                    <Button variant={"link"}>
                        <Image
                            alt="searchIcon"
                            src="/icons/IconZoom.png"
                            width={25}
                            height={25}
                        />
                    </Button>
                    {/* Sidebar for Filter */}
                    <Sheet>
                        <SheetTrigger className="p-4">
                            <Image
                                alt="filterIcon"
                                src="/icons/IconFilter.png"
                                width={22}
                                height={22}
                            />
                            {filterApplied && (
                                <div className="bg-red-700 h-2 w-2 rounded-full relative top-[-25px] right-[-20px]"></div>
                            )}
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
                                    <div>
                                        <Select
                                            value={selectedColor}
                                            onValueChange={(val) =>
                                                setSelectedColor(val)
                                            }
                                        >
                                            <SelectTrigger className="w-[160px]">
                                                <SelectValue placeholder="Color?" />
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
                                                                    key={color}
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
                                <div className="flex flex-row justify-between items-center">
                                    <p>Category:</p>
                                    <div className="">
                                        <Select
                                            value={selectedCategory}
                                            onValueChange={(val) =>
                                                setSelectedCategory(val)
                                            }
                                        >
                                            <SelectTrigger className="w-[160px]">
                                                <SelectValue placeholder="Category?" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>
                                                        Select a Category
                                                    </SelectLabel>
                                                    {categoryFilter.map(
                                                        (color) => {
                                                            return (
                                                                <SelectItem
                                                                    key={color}
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
                                    <Button
                                        className="w-28 rounded-lg"
                                        variant={"secondary"}
                                        onClick={onReset}
                                    >
                                        Reset
                                    </Button>
                                    <Button
                                        className="w-28 rounded-lg"
                                        onClick={onSave}
                                    >
                                        Save
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
                {/* Display Div */}
                <div className="mt-8">
                    <div className="grid grid-cols-2 gap-x-8 gap-y-8">
                        {productList.map((item) => {
                            return (
                                <FoundListItem
                                    key={item.id}
                                    {...item}
                                    redirectUrl={"/specialist/" + item.id}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
            {/* Bottom Navigation Bar */}
            <Navbar navButtons={navButtons} />
        </div>
    );
}
