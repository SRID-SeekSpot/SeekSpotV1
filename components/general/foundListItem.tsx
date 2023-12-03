import React from "react";
import Image from "next/image";
import Link from "next/link";

// Define the props for the FoundListItem component
export interface FoundListItemProps {
    id: string;
    name: string;
    imgSrc: string;
    redirectUrl?: string;
    onClick?: any;
}

// FoundListItem component with props
const FoundListItem: React.FC<FoundListItemProps> = ({
    id,
    name,
    imgSrc,
    redirectUrl,
    onClick,
    ...props
}) => {
    const content = (
        <div
            className="bg-slate-100 w-full h-40 rounded-3xl flex flex-col items-center justify-center cursor-pointer"
            onClick={onClick}
        >
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

    return redirectUrl ? <Link href={redirectUrl}>{content}</Link> : content;
};

export default FoundListItem;
