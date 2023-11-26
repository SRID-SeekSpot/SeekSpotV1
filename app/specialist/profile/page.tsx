"use client";

import Image from "next/image";

import Header from "@/components/general/header";
import Navbar from "@/components/general/navbar";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import BountyHuntListItem, {
    BountyHuntListItemProps,
} from "@/components/general/bountyhuntListItem";
import { BOUNTY_ITEMS } from "@/app/constants/BountyItems";
import { SPECIALIST_ROUTES } from "@/app/constants/SpecialistRoutes";
import ProfileButton from "@/components/general/profileButton";

export default function Home() {
    // Icon Src and Route for Navigation Bar
    const navButtons = SPECIALIST_ROUTES;
    const bountyHuntList: BountyHuntListItemProps[] = BOUNTY_ITEMS;

    return (
        <div className="flex flex-col">
            <title>Specialist BountyHunt Page</title>
            {/* Header that redirects to home */}
            {/* <Header href="/" altText="Hello"/> */}
            <Header altText="Profile Page" />
            {/* Body */}
            <div className="flex flex-col justify-center items-center">
                {/* Avatar */}
                <div className="h-36 w-36 rounded-full mt-12">
                    <Image
                        alt="KateAvatar"
                        src="/avatar/Kate.png"
                        layout="responsive"
                        height={36}
                        width={36}
                    />
                </div>
            </div>
            {/* Buttons */}
            <div className="pt-8 space-y-4">
                <ProfileButton
                    iconSrc="/ProfileIcon/User.png"
                    buttonName="My Profile"
                    editable={false}
                />
                <ProfileButton
                    iconSrc="/ProfileIcon/Email.png"
                    buttonName="Message"
                    editable={false}
                />
                <ProfileButton
                    iconSrc="/ProfileIcon/Wallet.png"
                    buttonName="Wallet"
                    editable={false}
                />
                <ProfileButton
                    iconSrc="/ProfileIcon/Settings.png"
                    buttonName="Setting"
                    editable={false}
                />
            </div>
            {/* Bottom Navigation Bar */}
            <Navbar navButtons={navButtons} />
        </div>
    );
}
