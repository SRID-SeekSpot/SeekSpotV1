import React from "react";
import Image from "next/image";
import { Separator } from "../ui/separator";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

// Define the props for the Navbar component
export interface BountyHuntListItemProps {
    id: string;
    name: string;
    imgSrc: string;
    description: string;
    price: number;
    onClick?: any;
    redirectUrl?: string;
}

// Navbar component with props
const BountyHuntListItem: React.FC<BountyHuntListItemProps> = ({
    name,
    imgSrc,
    description,
    price,
    onClick,
    redirectUrl,
    ...props
}) => {
    const content = (
        <Card className="flex flex-row justify-between" onClick={onClick}>
            <div className="flex h-24 w-24 p-2 bg-white rounded-sm">
                <Image
                    alt={name}
                    src={imgSrc}
                    layout="responsive"
                    width={24}
                    height={24}
                    className="rounded-sm"
                />
            </div>
            <CardHeader className="flex flex-1 p-3 text-left justify-center">
                <CardTitle className="text-lg">{name}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <div className="flex w-20 flex-col justify-center items-center">
                <div className="bg-navy text-white p-1 rounded-sm">
                    <p>
                        {new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "USD",
                        }).format(price)}
                    </p>
                </div>
            </div>
        </Card>
        
    );

    if (redirectUrl) {
        return <Link href={redirectUrl}>{content}</Link>;
    } else {
        return content;
    }
};

export default BountyHuntListItem;
