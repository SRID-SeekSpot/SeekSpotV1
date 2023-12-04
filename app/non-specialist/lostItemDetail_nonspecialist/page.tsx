// app/specialist/itemDetail/page.tsx
import React from "react";
import Image from "next/image";
// import { useRouter } from 'next/router';
import { Button } from "@/components/ui/button";
import Header from "@/components/general/header";
import Navbar from "@/components/general/navbar";
import { SPECIALIST_ROUTES } from "@/app/constants/SpecialistRoutes";

interface LostItemDetailPage_nonspecialistProps {
    item: {
        name: string;
        imgSrc: string;
        description: string;
        price: number;
        location: string;
        date: string;
        claimCode: string;
    };
}

const LostItemDetailPage_nonspecialist: React.FC<
    LostItemDetailPage_nonspecialistProps
> = ({ item }) => {
    const navButtons = SPECIALIST_ROUTES;

    if (!item) {
        return <p>Item not found!</p>;
    }

    return (
        <div className="flex flex-col h-screen">
            <Header href="/specialist/found" />
            <div className="flex flex-col items-center bg-gray-100 p-4 shadow rounded-2xl">
                <div className="w-full max-w-xs mb-4 rounded-2xl overflow-hidden">
                    <Image
                        src={item.imgSrc}
                        alt={`Picture of ${item.name}`}
                        width={300}
                        height={180}
                        layout="responsive"
                        className="rounded-2xl"
                    />
                </div>
            </div>
            <div className="flex justify-between items-center mt-12 mx-4">
                <h1 className="text-2xl text-navy font-bold">{item.name}</h1>
                <p className="text-2xl text-navy font-bold">${item.price}</p>
            </div>
            <div className="flex justify-between items-center mt-8 mx-4">
                <p className="text-md">Location Lost: {item.location}</p>
                <p className="text-md text-right">Date Lost: {item.date}</p>
            </div>
            <p className="text-md text-gray-400 mt-8 mx-4">
                {item.description}
            </p>
            <div className="mt-auto px-4 pb-[env(safe-area-inset-bottom)]">
                <div className="flex justify-center mb-20">
                    <Button className="w-56" asChild>
                        <a href="/specialist/found">Claim</a>
                    </Button>
                </div>
            </div>

            <Navbar navButtons={navButtons} />
        </div>
    );
};

export default LostItemDetailPage_nonspecialist;
