import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";

export interface SquareListItemProps {
    name: string;
    imgSrc: string;
    onClick?: any;
}

const SquareListItem: React.FC<SquareListItemProps> = ({
    name,
    imgSrc,
    onClick,
    ...props
}) => {
    return (
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
};

export default SquareListItem;
