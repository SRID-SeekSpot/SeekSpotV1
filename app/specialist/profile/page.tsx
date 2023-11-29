"use client";

import React, {useEffect, useState  } from 'react';
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
import { getLocalStorageItem } from "../../delivery/localStorage"

export default function Home() {
    // Icon Src and Route for Navigation Bar
    const navButtons = SPECIALIST_ROUTES;
    const bountyHuntList: BountyHuntListItemProps[] = BOUNTY_ITEMS;
    
    const [unread, setUnread] = useState(false);
    useEffect(() => {
        // 只在客户端执行
        const unreadValue = localStorage.getItem("unread");
        if (unreadValue === null) {
            // 如果在 localStorage 中找不到 unread，那么设置它为 "true"
            localStorage.setItem("unread", "true");
            setUnread(true);
        } else {
            // 如果找到了，根据存储的值设置状态
            setUnread(unreadValue === "true");
        }
    }, []);

    const handleMessageClick = (e) => {
        // 检查 localStorage 中的 unread 值
        const unreadValue = localStorage.getItem("unread");
        if (unreadValue !== "true") {
            // 如果 unread 不是 "true"，阻止链接的默认行为
            e.preventDefault();
        }
    };
    return (
        <div className="flex flex-col">
            <title>Specialist Profile Page</title>
            {/* Header that redirects to home */}
            {/* <Header href="/" altText="Hello"/> */}
            <Header altText="Profile" />
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
                <a href="/specialist/profile/detail">
                    <ProfileButton
                        iconSrc="/ProfileIcon/User.png"
                        buttonName="My Profile"
                        editable={false}
                    />
                </a>
                <div>
                <a href="../delivery" onClick={handleMessageClick}>
                <ProfileButton
                    iconSrc="/ProfileIcon/Email.png"
                    buttonName="Message"
                    editable={false}
                    unread={unread}
                />
                </a>
                </div>
                
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
            {/* Logout div */}
            <div className="mt-20">
                <a href="/">
                    <div
                        className={`relative flex flex-col justify-center items-center`}
                    >
                        <div className="bg-slate-300 px-5 max-w-[300px] w-full h-10 rounded-3xl justify-center items-center flex flex-row">
                            <p className="font-bold">Logout</p>
                        </div>
                    </div>
                </a>
            </div>
            {/* Bottom Navigation Bar */}
            <Navbar navButtons={navButtons} />
        </div>
    );
}
