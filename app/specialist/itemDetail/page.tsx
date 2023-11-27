// app/specialist/itemDetail/page.tsx
import React from 'react';
import Image from 'next/image';
// import { useRouter } from 'next/router';
import { BOUNTY_ITEMS } from '@/app/constants/BountyItems'; 

interface ItemDetailPageProps {
    item: {
      name: string;
      imgSrc: string;
      description: string;
      price: number;
      location: string;
      date: string;
    };
}

const ItemDetailPage: React.FC<ItemDetailPageProps> = ({ item }) => {

    if (!item) {
        return <p>Item not found!</p>;
    }

    return (
        <div className="flex flex-col h-screen">
            <div className="bg-gray-100 p-4 shadow-md">
                <div className="max-w-screen-md mx-auto">
                    <Image
                        src={item.imgSrc}
                        alt={`Picture of ${item.name}`}
                        width={1024}
                        height={576}
                        layout="responsive"
                    />
                    <h1 className="text-2xl font-bold mt-2">{item.name}</h1>
                    <p className="text-md text-gray-600">{item.description}</p>
                    <p className="text-md"><strong>Location Lost:</strong> {item.location}</p>
                    <p className="text-md"><strong>Date Lost:</strong> {item.date}</p>
                </div>
            </div>
            <div className="flex-grow p-4">
                {/* TODO: Buttons */}
            </div>
        </div>
    );
};

export default ItemDetailPage;
