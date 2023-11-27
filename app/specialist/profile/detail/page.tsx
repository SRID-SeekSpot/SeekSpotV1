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
            <title>Specialist Profile Detail Page</title>
            {/* Header that redirects to home */}
            {/* <Header href="/" altText="Hello"/> */}
            <Header altText="My Profile" href="/specialist/profile"/>
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
            {/* Profile Buttons */}
            <div className="pt-8 space-y-4">
                <ProfileButton
                    iconSrc="/ProfileIcon/User.png"
                    buttonName="Kate"
                    editable={true}
                />
                <ProfileButton
                    iconSrc="/ProfileIcon/Contacts.png"
                    buttonName="123-123-1234"
                    editable={true}
                />
                <ProfileButton
                    iconSrc="/ProfileIcon/Location.png"
                    buttonName="516 2nd Ave"
                    editable={true}
                />
 
            </div>

            {/* Bottom Navigation Bar */}
            <Navbar navButtons={navButtons} />
        </div>
    );
}
