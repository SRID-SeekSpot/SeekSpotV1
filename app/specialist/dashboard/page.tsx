"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import Header from "@/components/general/header";
import Navbar from "@/components/general/navbar";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { SPECIALIST_ROUTES } from "@/app/constants/SpecialistRoutes";

// Popup component
const Popup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-10">
      <div className="bg-white p-5 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
        <p className="text-sm mb-4">Your lost item is found!</p>
        <Button className="w-56" variant={"secondary"}>
          <a href="/specialist/profile/delivery">Check details</a>
        </Button>
      </div>
    </div>
  );
};

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  // Icon Src and Route for Navigation Bar
  const navButtons = SPECIALIST_ROUTES;

  const bountyHuntList = [{}, {}, {}, {}];
  const foundItemList = [{}, {}, {}, {}];
  useEffect(() => {
    // 只在客户端执行
    const showPopup = localStorage.getItem("showPopup");
    if (showPopup === null) {
      // 如果在 localStorage 中找不到 unread，那么设置它为 "true"
      localStorage.setItem("showPopup", "false");
      setShowPopup(false);
    } else {
      // 如果找到了，根据存储的值设置状态
      setShowPopup(showPopup === "true");
    }
  }, []);

  return (
    <div className="flex flex-col">
      <title>Specialist Dashboard</title>
      {/* Header that redirects to home */}
      {/* <Header href="/" altText="Hello"/> */}
      <Header href="/" />
      {/* pop up component */}
      {showPopup && <Popup />}

      {/* Body */}
      <div className="flex flex-col">
        {/* Bounty Hunt List */}
        <div className="flex flex-col m-4">
          <div className="flex flex-row justify-start items-baseline">
            <Image
              src="/icons/IconMoney.png"
              alt="BountyHunt"
              width={25}
              height={25}
            ></Image>
            <p className="text-3xl ml-2">Bounty Hunt List</p>
          </div>
          <div className="mt-2">
            <p className="text-sm">
              List of items people have lost. Help them find their treasures and
              gain a reward!
            </p>
          </div>
          <div className="mt-4">
            <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
              <div className="flex w-max space-x-4 p-4">
                {bountyHuntList.map((item) => (
                  <div className="h-40 w-40 bg-grass"></div>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        </div>
        {/* Found Item Inventory */}
        <div className="flex flex-col m-4">
          <div className="flex flex-row justify-start items-baseline">
            <Image
              src="/icons/IconSearch.png"
              alt="FoundItem"
              width={25}
              height={25}
            ></Image>
            <p className="text-3xl ml-2">Found Item Inventory</p>
          </div>
          <div className="mt-2">
            <p className="text-sm">
              List of items stored in the Lost & Found office. Come and see if
              your item is here!
            </p>
          </div>
          <div className="mt-4">
            <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
              <div className="flex w-max space-x-4 p-4">
                {foundItemList.map((item) => (
                  <div className="h-40 w-40 bg-grass"></div>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        </div>
      </div>
      {/* Bottom Navigation Bar */}
      <Navbar navButtons={navButtons} />
    </div>
  );
}
