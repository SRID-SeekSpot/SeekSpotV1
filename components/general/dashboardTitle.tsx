import React from "react";
import Image from "next/image";

interface DashboardTitleProps {
    iconSrc: string;
    title: string;
    description: string;
    linkUrl: string;
}

const DashboardTitle: React.FC<DashboardTitleProps> = ({
    iconSrc,
    title,
    description,
    linkUrl,
}) => {
    return (
        <a href={linkUrl}>
            <div className="flex flex-row justify-start items-baseline">
                <Image src={iconSrc} alt={title} width={25} height={25} />
                <p className="text-3xl ml-2 font-semibold">{title}</p>
            </div>
            <div className="mt-2">
                <p className="text-sm">{description}</p>
            </div>
        </a>
    );
};

export default DashboardTitle;
