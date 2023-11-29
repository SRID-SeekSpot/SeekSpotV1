// app/specialist/itemDetail/page.tsx
import React from 'react';
import Image from 'next/image';
// import { useRouter } from 'next/router';
import { Button } from "@/components/ui/button";
import Header from "@/components/general/header";
import Navbar from "@/components/general/navbar";
import { BOUNTY_ITEMS } from '@/app/constants/BountyItems'; 
import { SPECIALIST_ROUTES } from "@/app/constants/SpecialistRoutes";

interface FoundItemDetailPage_nonspecialistProps {
    item: {
      name: string;
      imgSrc: string;
      description: string;
      price: number;
      location: string;
      date: string;
    };
}

const FoundItemDetailPage_nonspecialist: React.FC<FoundItemDetailPage_nonspecialistProps> = ({ item }) => {

    const navButtons = SPECIALIST_ROUTES;

    if (!item) {
        return <p>Item not found!</p>;
    }

    return (
        <div className="flex flex-col h-screen">
            <Header href="/specialist/found" />
            <div className="flex flex-col items-center bg-gray-100 p-4 shadow "> 
                <div className="w-full max-w-xs mb-4 rounded-lg overflow-hidden">
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
            <h1 className="text-2xl text-navy font-bold mt-12 mx-4">{item.name}</h1> 
            <div className="flex justify-between items-center mt-8 mx-4">
                <p className="text-md">Location Found: {item.location}</p>
                <p className="text-md text-right">Date Found: {item.date}</p>
            </div>

            
            <Navbar navButtons={navButtons} />
        </div>

    );
};

export default FoundItemDetailPage_nonspecialist;
