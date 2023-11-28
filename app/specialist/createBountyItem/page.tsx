"use client";

import Image from "next/image";

import Header from "@/components/general/header";
import Navbar from "@/components/general/navbar";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

import { SPECIALIST_ROUTES } from "@/app/constants/SpecialistRoutes";

export default function Home() {
  // Icon Src and Route for Navigation Bar
  const navButtons = SPECIALIST_ROUTES;

  return (
    <div className="flex flex-col text-navy">
      <title>Specialist BountyHunt Page</title>
      {/* Header that redirects to home */}
      <Header altText="Report a Lost Item" />
      {/* Scrollable Body */}
      <ScrollArea className="flex-grow pb-20">
        <form className="m-5 space-y-6">
          <div className="space-y-2">
            {/* Item Name */}
            <label htmlFor="itemName" className="text-sm font-semibold">
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
            <label htmlFor="itemDescription" className="text-sm font-semibold">
              Item Description
            </label>
            <input
              id="itemDescription"
              name="itemDescription"
              type="text"
              placeholder="Black glasses with silver decoration"
              className="w-full p-2 border rounded"
            />

            {/* Location Lost */}
            <label htmlFor="locationLost" className="text-sm font-semibold">
              Location Lost
            </label>
            <input
              id="locationLost"
              name="locationLost"
              type="text"
              placeholder="1st Floor"
              className="w-full p-2 border rounded"
            />

            {/* Date Lost */}
            <label htmlFor="dateLost" className="text-sm font-semibold">
              Date Lost
            </label>
            <input
              id="dateLost"
              name="dateLost"
              type="date"
              className="w-full p-2 border rounded"
            />

            {/* Contact Details */}
            <label htmlFor="contactDetails" className="text-sm font-semibold">
              Contact Details (only visible to specialists)
            </label>
            <input
              id="contactDetails"
              name="contactDetails"
              type="text"
              placeholder="123-123-1234"
              className="w-full p-2 border rounded"
            />

            {/* Bounty Offer */}
            <label htmlFor="bountyOffer" className="text-sm font-semibold">
              Bounty Offer (optional)
            </label>
            <input
              id="bountyOffer"
              name="bountyOffer"
              type="number"
              placeholder="$15"
              className="w-full p-2 border rounded"
            />

            {/* Item Color */}
            <label htmlFor="itemColor" className="text-sm font-semibold">
              Item Color
            </label>
            <select
              id="itemColor"
              name="itemColor"
              className="w-full p-2 border rounded"
            >
              <option value="Black">Black</option>
              {/* Add more color options here */}
            </select>

            {/* Item Category */}
            <label htmlFor="itemCategory" className="text-sm font-semibold">
              Item Category
            </label>
            <select
              id="itemCategory"
              name="itemCategory"
              className="w-full p-2 border rounded"
            >
              <option value="Black">Bag</option>
              {/* Add more color options here */}
            </select>
          </div>

          {/* Image Upload Placeholder */}
          <div className="flex flex-col items-center justify-center bg-gray-200 p-4 border border-dashed rounded">
            <p className="mb-3 text-sm">Upload a picture of the item</p>
            <Image
              src="/imageUpload.png" // replace with your actual upload icon path
              alt="Upload Image Icon"
              width={200}
              height={200}
              className="mb-3"
            />
            <input
              type="file"
              name="itemImage"
              accept="image/*"
              className="text-navy"
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
