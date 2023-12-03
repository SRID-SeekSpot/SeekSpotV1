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
import { EachFoundItemProps } from "../editItem/page";
// Icon Src and Route for Navigation Bar
const navButtons = SPECIALIST_ROUTES;

const foundItemList: FoundListItemProps[] = BOUNTY_ITEMS;

const colorFilter = ["White", "Black", "Red", "Blue"];
const categoryFilter = ["Cloth", "Bottles", "Phone"];

export default function Home() {
  //Product List Data

  const greenBagItem = {
    name: "Green Bag",
    imgSrc: "/greenBag.avif", // Replace with the path to your image
    description: "A sturdy green bag, lost in the park.",
    price: 25, // Specify the price or any other relevant property
    // Include any other properties required by FoundListItemProps
  };

  const [productList, setProductList] = useState([
    greenBagItem,
    ...BOUNTY_ITEMS,
  ]);

  const [val, setVal] = useState(""); // input value for query
  const [color, setColor] = useState(""); // search by filter color
  const [category, setCategory] = useState(""); // search by filter category
  const [selectedColor, setSelectedColor] = useState(""); // selected color
  const [selectedCategory, setSelectedCategory] = useState(""); // selected category

  // Query content changes or filtering changes trigger the query
  useEffect(() => {
    searchProductList(val, color, category);
  }, [val, color, category]);

  const [foundItemList, setFoundItemList] =
    useState<EachFoundItemProps[]>(BOUNTY_ITEMS);

  // search method
  const searchProductList = (val: string, color: string, category: string) => {
    let filterList = [...BOUNTY_ITEMS];
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
    setProductList([greenBagItem, ...filterList]);
  };
  //save filter value
  const onSave = () => {
    setColor(selectedColor);
    setCategory(selectedCategory);
  };
  // Reset all filter value
  const onReset = () => {
    setColor("");
    setCategory("");
    setSelectedColor("");
    setSelectedCategory("");
  };

  useEffect(() => {
    // Fetch data from localStorage only once when the component mounts
    let updatedBountyItemsString = localStorage.getItem("updatedBountyItems");
    // console.log(updatedBountyItemsString)

    if (updatedBountyItemsString !== "null") {
      let updatedBountyItems = JSON.parse(updatedBountyItemsString);
      console.log(updatedBountyItems);
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
            onChange={(val) => {
              setVal(val.target.value);
            }}
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
                    <Select
                      value={selectedColor}
                      onValueChange={(val) => setSelectedColor(val)}
                    >
                      <SelectTrigger className="w-[160px]">
                        <SelectValue placeholder="Select a Color" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Select a Color</SelectLabel>
                          {colorFilter.map((color) => {
                            return (
                              <SelectItem value={color}>{color}</SelectItem>
                            );
                          })}
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
                      onValueChange={(val) => setSelectedCategory(val)}
                    >
                      <SelectTrigger className="w-[160px]">
                        <SelectValue placeholder="Select a Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Select a Category</SelectLabel>
                          {categoryFilter.map((color) => {
                            return (
                              <SelectItem value={color}>{color}</SelectItem>
                            );
                          })}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                {/* Confirmation */}
                <div className="flex flex-row justify-between items-center">
                  <Button className="w-28 rounded-lg" onClick={onSave}>
                    Save
                  </Button>
                  <Button
                    className="w-28 rounded-lg"
                    variant={"secondary"}
                    onClick={onReset}
                  >
                    Reset
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
