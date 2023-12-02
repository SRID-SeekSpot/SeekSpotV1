"use client";

import Link from "next/link";
import Image from "next/image";

import Header from "@/components/general/header";
import Navbar from "@/components/general/navbar";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

import { SPECIALIST_ROUTES } from "@/app/constants/SpecialistRoutes";

export default function Home() {
  const router = useRouter();

  // Icon Src and Route for Navigation Bar
  const navButtons = SPECIALIST_ROUTES;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name: event.target.itemName.value,
      itemDescription: event.target.itemDescription.value,
      locationFound: event.target.locationFound.value,
      dateFound: event.target.dateFound.value,
      itemColor: event.target.itemColor.value,
      itemCategory: event.target.itemCategory.value,
    };

    const imageFile = event.target.itemImage.files[0];

    if (imageFile) {
      const imageFormData = new FormData();
      imageFormData.append("image", imageFile);

      try {
        const response = await fetch("https://api.imgur.com/3/image", {
          method: "POST",
          headers: {
            //Authorization: "Bearer cb697543746e1713c13a284153a74244e19fc63e", // Replace with your actual Imgur client ID
            Authorization: "Client-ID 70d9db442c9850a",
          },
          body: imageFormData,
        });

        const data = await response.json();

        if (data.success) {
          // Add the Imgur image link to formData
          formData.image = data.data.link;
        } else {
          console.error("Image upload to Imgur failed:", data);
        }
      } catch (error) {
        console.error("Error uploading image to Imgur:", error);
        return; // Exit the function if the image upload fails
      }
    }

    const existingItems = JSON.parse(
      localStorage.getItem("foundItems") || "[]"
    );
    existingItems.push(formData);
    localStorage.setItem("foundItems", JSON.stringify(existingItems));

    router.push("/specialist/found");

    // const imageFile = event.target.itemImage.files[0];
    // const formData = new FormData();
    // formData.append("image", imageFile);

    // try {
    //   const response = await fetch("https://api.imgur.com/3/image/", {
    //     method: "POST",
    //     headers: {
    //       Authorization: "Client-ID 70d9db442c9850a",
    //     },
    //     body: formData,
    //   });

    //   const data = await response.json();

    //   if (data.success) {
    //     const imageUrl = data.data.link;
    //     router.push("/found");
    //   } else {
    //     console.error("Image upload to Imgur failed:", data);
    //   }
    // } catch (error) {
    //   console.error("Error uploading image to Imgur:", error);
    // }
  };

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
        <form onSubmit={handleSubmit} className="m-5 space-y-6">
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
              <option value="White">White</option>
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
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
