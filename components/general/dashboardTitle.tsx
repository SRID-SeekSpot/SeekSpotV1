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
                <div className="relative" style={{ top: '8px' }}>
                    <Image src={iconSrc} alt={title} width={40} height={40} />
                </div>
                <p className="text-2xl ml-2 font-semibold">{title}</p>
            </div>
            <div className="mt-2">
                <p className="text-sm">{description}</p>
            </div>
        </a>
    );
};

export default DashboardTitle;
