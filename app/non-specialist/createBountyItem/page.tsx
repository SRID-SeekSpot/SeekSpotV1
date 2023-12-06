"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Header from "@/components/general/header";
import Navbar from "@/components/general/navbar";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

import { NON_SPECIALIST_ROUTES } from "@/app/constants/NonSpecialistRoutes";

export default function Home() {
    const router = useRouter();
    // Icon Src and Route for Navigation Bar
    const navButtons = NON_SPECIALIST_ROUTES;

    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault(); // Prevents the default form submission
        router.push("/non-specialist/newBounty"); // Use the correct path for your new page
    };

    return (
        <div className="flex flex-col text-navy">
            <title>Create a Bounty Item</title>

            {/* Header with Back Button and Centered Title */}
            <Header
                altText="Create a Bounty Item"
                href="/non-specialist/dashboard"
            />

            {/* Scrollable Body */}
            <ScrollArea className="flex-grow pb-20">
                <form className="m-5 space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                        {/* Item Name */}
                        <label htmlFor="itemName" className=" font-semibold">
                            Item Name
                        </label>
                        <input
                            id="itemName"
                            name="itemName"
                            type="text"
                            placeholder="Yellow Umbrella"
                            className="w-full p-2 border rounded"
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
                            placeholder="Yellow umbrella with wooden handle"
                            className="w-full p-2 border rounded"
                        />

                        {/* Location Lost */}
                        <label
                            htmlFor="locationLost"
                            className=" font-semibold"
                        >
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
                        <label htmlFor="dateLost" className=" font-semibold">
                            Date Lost
                        </label>
                        <input
                            id="dateLost"
                            name="dateLost"
                            type="date"
                            className="w-full p-2 border rounded"
                        />

                        {/* Contact Details */}
                        <label
                            htmlFor="contactDetails"
                            className=" font-semibold"
                        >
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
                        <label htmlFor="bountyOffer" className=" font-semibold">
                            Bounty Offer (Optional)
                        </label>
                        <input
                            id="bountyOffer"
                            name="bountyOffer"
                            type="number"
                            placeholder="$5"
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

                    {/* Image Placeholder */}
                    <div className="flex flex-col items-center justify-center p-4">
                        <Image
                            src="/yelloUmbrella.jpg"
                            alt="Item Image"
                            width={200}
                            height={200}
                            className="rounded"
                        />
                    </div>

                    {/* Image Upload Placeholder */}
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
