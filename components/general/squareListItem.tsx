import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export interface SquareListItemProps {
    name: string;
    imgSrc: string;
    onClick?: any;
    redirectUrl?: string;
}

const SquareListItem: React.FC<SquareListItemProps> = ({
    name,
    imgSrc,
    onClick,
    redirectUrl,
    ...props
}) => {
    const content = (
        <Card
            className="flex items-center justify-center p-1 w-40 h-40"
            onClick={onClick}
        >
            <div className="flex flex-col items-center justify-center">
                <div className="w-32 h-32 items-center justify-cente rounded-mdr">
                    <Image
                        alt={name}
                        src={imgSrc}
                        layout="responsive"
                        width={24}
                        height={24}
                    />
                </div>
                <p>{name}</p>
            </div>
        </Card>
    );

    if (redirectUrl) {
        return <Link href={redirectUrl}>{content}</Link>;
    } else {
        return content;
    }
};

export default SquareListItem;
