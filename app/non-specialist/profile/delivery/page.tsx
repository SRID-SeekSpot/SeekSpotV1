"use client";

import Header from "@/components/general/header";
import React, { useContext, useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/general/navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { NON_SPECIALIST_ROUTES } from "@/app/constants/NonSpecialistRoutes";

const Popup = ({ onClose }: { onClose: any }) => {
    // const handleConfirm = () => {
    //     onClose('DHL');  // Assume user choose DHL
    // };
    const [selectedDeliveryOption, setSelectedDeliveryOption] = useState("");
    const [shipToMeChecked, setShipTopMeChecked] = useState(false);

    // Deal with event for user delivery way
    const handleDeliveryOptionChange = (e: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setSelectedDeliveryOption(e.target.value);
    };

    // the logic to choose deliver way
    const handleConfirm = () => {
        if (
            selectedDeliveryOption === "ups" ||
            selectedDeliveryOption === "dhl"
        ) {
            localStorage.setItem("unread", "false");
            localStorage.setItem("showPopup", "false");
            const shipToMeRadio = document.getElementById(
                "ship-to-me"
            ) as HTMLInputElement | null;
            if (shipToMeRadio) {
                shipToMeRadio.checked = true;
            }
            onClose(selectedDeliveryOption);
        } else {
            // for error message
            console.log("Please select a delivery option.");
        }
    };

    const deliveryOptionStyle = "flex justify-between w-full items-center";

    return (
        <div className="popup-container fixed top-0 right-0 left-0 bottom-0 bg-slate-200 bg-opacity-50 flex items-center  justify-center">
            <div className="popup-content bg-white p-12 rounded-3xl shadow-md ">
                <p className="text-center w-full text-3xl text-grass mb-4">
                    <strong>Delivery</strong>
                </p>
                <div className={deliveryOptionStyle}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <input
                            type="radio"
                            id="ups"
                            name="delivery"
                            value="ups"
                            className="mr-2"
                            onChange={handleDeliveryOptionChange}
                        />
                        <label htmlFor="ups" className="mr-4 text-lg">
                            UPS
                        </label>
                    </div>
                    <div className="text-lg">Shipping fee: $7</div>
                </div>
                <div className={deliveryOptionStyle}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <input
                            type="radio"
                            id="dhl"
                            name="delivery"
                            value="dhl"
                            className="mr-2"
                            onChange={handleDeliveryOptionChange}
                        />
                        <label htmlFor="dhl" className="text-lg">
                            DHL
                        </label>
                    </div>
                    <div className="text-lg">Shipping fee: $9</div>
                </div>
                <p className="text-1xl text-trees mt-8 text-left">
                    Enter Address:
                </p>
                <textarea
                    defaultValue="516 2nd Ave, Mountain View, CA, 90128"
                    className="w-full p-4 mt-4 rounded-md border border-gray-300 resize-none"
                    rows={3}
                />
                {/* Button Panel */}
                <div className="flex flex-col mt-20 justify-between space-y-4">
                    <Button
                        className="w-56"
                        asChild
                        onClick={handleConfirm}
                        disabled={!selectedDeliveryOption}
                    >
                        <a>Confirm</a>
                    </Button>
                    <Button
                        className="w-56"
                        variant={"secondary"}
                        onClick={() => onClose()}
                    >
                        <a>Cancel</a>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default function Home() {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedDelivery, setSelectedDelivery] = useState<String | null>(
        null
    ); // for delivery state
    const navButtons = NON_SPECIALIST_ROUTES;
    const shipToMeRef = useRef(null);

    useEffect(() => {
        localStorage.setItem("showPopup", "false");
    }, []);

    const handleDeliveryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === "ship-to-me") {
            setShowPopup(true);
        }
        localStorage.setItem("unread", "false");
        setSelectedDelivery(e.target.value);
        console.log(e.target.value);
    };

    const handlePopupClose = (choice: React.SetStateAction<String | null>) => {
        setShowPopup(false);
        setSelectedDelivery(choice); // set the delivery way
    };

    return (
        <div className="flex flex-col">
            <Header href="/non-specialist/profile" altText="Message" />
            <div className="m-4 flex flex-col items-center justify-center">
                <Separator />
                <Card className="m-4 w-55 rounded-2xl">
                    <CardContent className="grid gap-4">
                        <p className="lg:text-3xl sm:text-2xl text-navy pt-8">
                            Your reported item: <strong>Black Glasses </strong>
                        </p>
                        <p className="lg:text-3xl sm:text-2xl text-navy">
                            Has Been Founded!
                        </p>
                        {/* image */}
                        <div className="w-full flex justify-center shadow-md rounded-3xl overflow-hidden border-slate-400 border-solid border-2">
                            <Image
                                src="/bountyItems/BlackGlasses.png"
                                alt="Black Glasses"
                                width={300}
                                height={100}
                                //objectFit="contain"
                            />
                        </div>
                        <div className="w-full flex justify-center">
                            <p className="lg:text-3xl sm:text-2xl text-navy">
                                <strong>Get it back now!</strong>
                            </p>
                        </div>
                        <div className="w-full flex items-center">
                            <input
                                type="radio"
                                id="in-person"
                                name="delivery"
                                value="in-person"
                                className="mr-2"
                                onChange={handleDeliveryChange}
                            />
                            <label
                                htmlFor="in-person"
                                className="lg:text-3xl sm:text-2xl text-navy"
                            >
                                Get it in person
                            </label>
                            {selectedDelivery === "in-person" && (
                                <span className="ml-auto text-green-600">
                                    saved!
                                </span>
                            )}
                        </div>
                        <div className="w-full flex items-center">
                            <input
                                type="radio"
                                id="ship-to-me"
                                name="delivery"
                                value="ship-to-me"
                                className="mr-2"
                                onChange={handleDeliveryChange}
                                //ref={shipToMeRef}
                            />
                            <label
                                htmlFor="ship-to-me"
                                className="lg:text-3xl sm:text-2xl text-navy"
                            >
                                Ship it to me
                                {(selectedDelivery === "ups" ||
                                    selectedDelivery === "dhl") && (
                                    <span>
                                        {" "}
                                        via{" "}
                                        <strong>
                                            {selectedDelivery.toUpperCase()}
                                        </strong>
                                    </span>
                                )}
                            </label>
                            {(selectedDelivery === "ups" ||
                                selectedDelivery === "dhl") && (
                                <span className="ml-auto text-green-600">
                                    saved!
                                </span>
                            )}
                        </div>
                    </CardContent>
                </Card>
            </div>
            {(selectedDelivery === "ups" || selectedDelivery === "dhl") && (
                <p className="lg:text-1xl sm:text-1xl text-black-600 mx-6">
                    Congratulations! Your item will come back home shortly. Here
                    is the tracking info:&nbsp;
                    <span
                        style={{
                            textDecoration: "underline",
                            color: "#5B21B6",
                        }}
                    >
                        XX123456ABC
                    </span>
                </p>
            )}
            {showPopup && <Popup onClose={handlePopupClose} />}
            {/* Bottom Navigation Bar */}
            <div className="mt-36"></div>
            <Navbar navButtons={navButtons} />
        </div>
    );
}
