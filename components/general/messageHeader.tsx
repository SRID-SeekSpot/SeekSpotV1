import React, { CSSProperties } from "react";
import Image from "next/image";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";
import LogoFlat from "../../public/icons/message.jpg";
import { Button } from "../ui/button";

interface HeaderProps {
    className?: string;
    style?: CSSProperties;
    href?: string;
    altText?: string;
}

const Header: React.FC<HeaderProps> = ({
    className = "",
    style,
    href,
    altText,
    ...props
}) => {
    return (
        <div
            className={`relative flex flex-col justify-center items-center ${className}`}
            style={style}
        >
            <div className="flex flex-row justify-center items-center">
                {href && (
                    <div className="absolute top-0 left-0">
                        <Button asChild variant={"link"}>
                            <a href={href} className="m-4">
                                <p className="text-3xl text-grass">{"<"}</p>
                            </a>
                        </Button>
                    </div>
                )}
                {!altText && (
                    <Image
                        alt="FlatLogo"
                        src={LogoFlat}
                        height={50}
                        className={cn("mt-3", className)}
                    />
                )}
                {altText && (
                    <div className="mt-5 text-center">
                        <p className="text-3xl text-grass">{altText}</p>
                    </div>
                )}
            </div>
            <Separator className="mt-2" />
        </div>
    );
};

export default Header;
