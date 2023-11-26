import React from "react";
import Image from "next/image";
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
    name: string;
    imgSrc: string;
    onClick?: any;
}

// Navbar component with props
const FoundListItem: React.FC<FoundListItemProps> = ({
    name,
    imgSrc,
    onClick,
    ...props
}) => {
    return (
        <div className="bg-slate-100 w-full h-40 rounded-3xl flex flex-col items-center justify-center">
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
    );
};

export default FoundListItem;
