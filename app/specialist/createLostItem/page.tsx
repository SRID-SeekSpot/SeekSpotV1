"use client";

import Link from "next/link";
import Image from "next/image";

import Header from "@/components/general/header";
import Navbar from "@/components/general/navbar";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { SPECIALIST_ROUTES } from "@/app/constants/SpecialistRoutes";

export default function Home() {
  // Icon Src and Route for Navigation Bar
  const navButtons = SPECIALIST_ROUTES;

  return (
    <div className="flex flex-col text-navy">
      <title>Create a Found Item</title>

      {/* Header with Back Button and Centered Title */}
      <div className="flex items-center justify-between">
        <div className="flex items-center px-2">
          {" "}
          {/* Add padding to the left */}
          <Link href="/specialist/dashboard" passHref>
            <Image
              src="/icons/IconBack.png"
              alt="Back"
              width={24}
              height={24}
            />
          </Link>
        </div>
        <Header altText="Report a Found Item" />
        <div className="px-2">
          {" "}
          {/* Dummy div for spacing */}
          {/* Empty div to balance the flex space */}
        </div>
      </div>

      {/* Scrollable Body */}
      <ScrollArea className="flex-grow pb-20">
        <form className="m-5 space-y-6">
          <div className="space-y-2">
            {/* Item Name */}
            <label htmlFor="itemName" className=" font-semibold">
              Item Name
            </label>
            <input
              id="itemName"
              name="itemName"
              type="text"
              placeholder="Black Glasses"
              className="w-full p-2 border rounded"
            />

            {/* Item Description */}
            <label htmlFor="itemDescription" className=" font-semibold">
              Item Description
            </label>
            <input
              id="itemDescription"
              name="itemDescription"
              type="text"
              placeholder="Black glasses with silver decoration"
              className="w-full p-2 border rounded"
            />

            {/* Location Found */}
            <label htmlFor="locationFound" className=" font-semibold">
              Location Found
            </label>
            <input
              id="locationFound"
              name="locationFound"
              type="text"
              placeholder="Parking Lot"
              className="w-full p-2 border rounded"
            />

            {/* Date Found */}
            <label htmlFor="dateFound" className=" font-semibold">
              Date Found
            </label>
            <input
              id="dateFound"
              name="dateFound"
              type="date"
              className="w-full p-2 border rounded"
            />

            {/* Item Color */}
            <label htmlFor="itemColor" className=" font-semibold">
              Item Color
            </label>
            <select
              id="itemColor"
              name="itemColor"
              className="w-full p-2 border rounded"
            >
              <option value="Black">Black</option>
              <option value="Black">White</option>
              <option value="Black">Red</option>
              <option value="Black">Blue</option>
              {/* Add more color options here */}
            </select>

            {/* Item Category */}
            <label htmlFor="itemCategory" className="font-semibold">
              Item Category
            </label>
            <select
              id="itemCategory"
              name="itemCategory"
              className="w-full p-2 border rounded"
            >
              <option value="Black">Bags and Luggage</option>
              <option value="Black">Clothing</option>
              <option value="Black">Electronics</option>
              <option value="Black">Personal Accessories</option>
              <option value="Black">Personal Documents</option>
            </select>
          </div>

          {/* Image Upload Placeholder */}
          <div className="flex flex-col items-center justify-center bg-gray-200 p-4 border border-dashed rounded">
            <p className="mb-3 ">Upload a picture of the item</p>
            <Image
              src="/imageUpload.png"
              alt="Upload Image Icon"
              width={200}
              height={200}
              className="mb-3"
            />
            <Input
              type="file"
              name="itemImage"
              accept="image/*"
              className="text-navy file:cursor-pointer file:text-sm file:font-medium"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            {/* Submit Button */}
            <Button type="submit" size="lg">
              Submit
            </Button>
          </div>
        </form>
      </ScrollArea>
      {/* Bottom Navigation Bar */}
      <Navbar navButtons={navButtons} />
    </div>
  );
}
