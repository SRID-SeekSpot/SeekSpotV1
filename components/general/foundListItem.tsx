import React from "react";
import Image from "next/image";
import Link from 'next/link';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

// Define the props for the Navbar component
export interface FoundListItemProps {
    id: string;
    name: string;
    imgSrc: string;
    onClick?: any;
}

// Navbar component with props
const FoundListItem: React.FC<FoundListItemProps> = ({
    id,
    name,
    imgSrc,
    onClick,
    ...props
}) => {
    return (
        <a href={`/specialist/${id}`}>
            <div className="bg-slate-100 w-full h-40 rounded-3xl flex flex-col items-center justify-center cursor-pointer">
                <div className="h-28 w-28 rounded-2xl overflow-hidden">
                    <Image
                        alt={name}
                        src={imgSrc}
                        layout="responsive"
                        width={24}
                        height={24}
                    />
                </div>
                <p className="text-sm">{name}</p>
            </div>
        </a>
    );
};

export default FoundListItem;
