"use client";

import Link from "next/link";
import Image from "next/image";

import Header from "@/components/general/header";
import Navbar from "@/components/general/navbar";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

import ImageKit from "imagekit-javascript";

import { SPECIALIST_ROUTES } from "@/app/constants/SpecialistRoutes";

export default function Home() {
    const router = useRouter();

    const imagekit = new ImageKit({
        publicKey: "public_rV86OzvQJTcJmTvRzN8P/9RcMDE=", // Replace with your actual public API key
        urlEndpoint: "https://ik.imagekit.io/seekspotv1/", // Replace with your actual ImageKit URL endpoint
    });

    // Icon Src and Route for Navigation Bar
    const navButtons = SPECIALIST_ROUTES;

    const handleSubmit = async (event: { preventDefault: () => void }) => {
        event.preventDefault();

        // const formData = {
        //   name: event.target.itemName.value,
        //   itemDescription: event.target.itemDescription.value,
        //   locationFound: event.target.locationFound.value,
        //   dateFound: event.target.dateFound.value,
        //   itemColor: event.target.itemColor.value,
        //   itemCategory: event.target.itemCategory.value,
        // };

        // const imageFile = event.target.itemImage.files[0];

        // if (imageFile) {
        //   try {
        //     // Use ImageKit's upload method
        //     const result = imagekit.upload({
        //       file: imageFile,
        //       fileName: "user_uploaded_image.jpg",
        //       signature: "",
        //       token: "",
        //       expire: 0,
        //     });

        //     if ((await result).url) {
        //       // Add the ImageKit image URL to formData
        //       formData.image = (await result).url;
        //     }
        //   } catch (error) {
        //     console.error("Error uploading image to ImageKit:", error);
        //     return; // Exit the function if the image upload fails
        //   }
        // }

        // const existingItems = JSON.parse(
        //   localStorage.getItem("foundItems") || "[]"
        // );
        // existingItems.push(formData);
        // localStorage.setItem("foundItems", JSON.stringify(existingItems));

        router.push("/specialist/newFound");
    };

    const today = new Date().toISOString().split("T")[0];
    const lastYear = new Date(
        new Date().setFullYear(new Date().getFullYear() - 1)
    )
        .toISOString()
        .split("T")[0];

    return (
        <div className="flex flex-col text-navy">
            <title>Create a Found Item</title>

            {/* Header with Back Button and Centered Title */}
            <Header altText="Create a Lost Item" href="/specialist/dashboard" />

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
                            placeholder="Green Backpack"
                            className="w-full p-2 border rounded"
                            pattern="^[a-zA-Z\s]*$"
                            title="Only letters and spaces are allowed"
                        />

                        {/* Item Description */}
                        <label
                            htmlFor="itemDescription"
                            className=" font-semibold"
                        >
                            Item Description
                        </label>
                        <input
                            id="itemDescription"
                            name="itemDescription"
                            type="text"
                            placeholder="Backpack with a small tear on the side."
                            className="w-full p-2 border rounded"
                            pattern="^[a-zA-Z\s]*$"
                            title="Only letters and spaces are allowed"
                        />

                        {/* Location Found */}
                        <label
                            htmlFor="locationFound"
                            className=" font-semibold"
                        >
                            Location Found
                        </label>
                        <input
                            id="locationFound"
                            name="locationFound"
                            type="text"
                            placeholder="Parking Lot"
                            className="w-full p-2 border rounded"
                            pattern="^[a-zA-Z\s]*$"
                            title="Only letters and spaces are allowed"
                        />

                        {/* Date Found */}
                        <label htmlFor="dateFound" className=" font-semibold">
                            Date Found
                        </label>
                        <input
                            id="dateLost"
                            name="dateLost"
                            type="date"
                            className="w-full p-2 border rounded"
                            min={lastYear}
                            max={today}
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
                            <option value="Black">Green</option>
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

                    <div className="flex flex-col items-center justify-center p-4">
                        <Image
                            src="/greenBag.avif"
                            alt="Item Image"
                            width={200}
                            height={200}
                            className="rounded"
                        />
                    </div>
                    {/* Image Upload Placeholder */}
                    {/* <div className="flex flex-col items-center justify-center bg-gray-200 p-4 border border-dashed rounded">
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
          </div> */}
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
