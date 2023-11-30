"use client";

import Header from "@/components/general/header";
import React, { useContext ,useState, useRef} from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import Navbar from "@/components/general/navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SPECIALIST_ROUTES } from "@/app/constants/SpecialistRoutes";

const Popup = ({ onClose }) => {
    const popupContainerStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const popupContentStyle = {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    };
    const deliveryOptionStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%', 
        alignItems: 'center',
    };
    const deliveryTitleStyle = {
        textAlign: 'center', 
        width: '100%', 
        fontSize: '1.875rem', 
        color: '#003366', 
        marginBottom: '1rem', 
    };
    const addressTitleStyle = {
        fontSize: '1rem', 
        color: '#003366', 
        marginTop: '2rem', 
        textAlign: 'left',
    };
    const addressTextAreaStyle = {
        width: '100%', 
        padding: '10px', 
        marginTop: '1rem', 
        borderRadius: '5px',
        border: '1px solid #ccc',
        resize: 'none', 
    };
    // const handleConfirm = () => {
    //     onClose('DHL');  // Assume user choose DHL
    // };
    const [selectedDeliveryOption, setSelectedDeliveryOption] = useState('');

    // Deal with event for user delivery way
    const handleDeliveryOptionChange = (e) => {
        setSelectedDeliveryOption(e.target.value);
    };

    // the logic to choose deliver way
    const handleConfirm = () => {
        if (selectedDeliveryOption === 'ups' || selectedDeliveryOption === 'dhl') {
            localStorage.setItem("unread", "false");
            localStorage.setItem("showPopup", "false");
            const shipToMeRadio = document.getElementById('ship-to-me');
            if (shipToMeRadio) {
                shipToMeRadio.checked = true;
            }
            onClose(selectedDeliveryOption);
        } else {
            // for error message
            console.log('Please select a delivery option.');
        }
    };
    return (
        <div className="popup-container" style={popupContainerStyle}>
            <div className="popup-content" style={popupContentStyle}>
                <p style={deliveryTitleStyle}>
                    <strong>Delivery</strong></p>
                <div style={deliveryOptionStyle}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
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
                    <div className="text-lg">
                        Shipping fee: $7
                    </div>
                </div>
                <div style={deliveryOptionStyle}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
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
                    <div className="text-lg">
                        Shipping fee: $9
                    </div>
                </div>
                <p style={addressTitleStyle}>
                    Enter Address:
                </p>
                <textarea
                    defaultValue="516 2nd Ave, Mountain View, CA, 90128"
                    style={addressTextAreaStyle}
                    rows={3}
                />
                {/* Button Panel */}
                <div className="flex flex-col mt-20 justify-between space-y-4">
                    <Button className="w-56" asChild onClick={handleConfirm} disabled={!selectedDeliveryOption}>
                        <a>Confirm</a>
                    </Button>
                    <Button className="w-56" variant={"secondary"} onClick={()=> onClose()}>
                    <a>Cancel</a>
                    </Button>
                </div>
            </div>
            
        </div>
    );
};

export default function Home() {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedDelivery, setSelectedDelivery] = useState(null); // for delivery state
    const navButtons = SPECIALIST_ROUTES;
    const shipToMeRef = useRef(null);
    

    const handleDeliveryChange = (e) => {
        if (e.target.value === 'ship-to-me') {
            setShowPopup(true);
        }
        localStorage.setItem("unread", "false")
        setSelectedDelivery(e.target.value)
    };

    const handlePopupClose = (choice) => {
        setShowPopup(false);
        setSelectedDelivery(choice); // set the delivery way
    };

    
    return (
        <div className="flex flex-col">
            <Header href="specialist/profile" altText="Message" />
            <div className="m-4 flex flex-col items-center justify-center">
            <Separator />
                <Card className="m-4 w-55">
                    <CardContent className="grid gap-4">
                        <p className="text-3xl text-navy">
                            Your reported item: <strong>Black Glasses </strong>
                        </p>
                        <p className="text-3xl text-navy">
                        Has Been Founded!
                        </p>
                         {/* image */}
                         <div className="w-full flex justify-center">
                        <Image
                            src="/bountyItems/BlackGlasses.png" 
                            alt="Black Glasses"
                            width={300} 
                            height={100} 
                            //objectFit="contain" 
                        />
                        </div>
                        <div className="w-full flex justify-center">
                            <p className="text-3xl text-navy">
                            <strong>Get it back now!</strong>
                            </p>
                        </div>
                        <div className="flex items-center">
                        <input
                            type="radio"
                            id="in-person"
                            name="delivery"
                            value="in-person"
                            className="mr-2"
                            onChange={handleDeliveryChange}
                        />
                        <label htmlFor="in-person" className="mr-4 text-lg">
                            Get it in person
                        </label>
                        </div>
                        <div className="flex items-center">
                        <input
                            type="radio"
                            id="ship-to-me"
                            name="delivery"
                            value="ship-to-me"
                            className="mr-2"
                            onChange={handleDeliveryChange}
                            ref={shipToMeRef}
                        />
                        <label htmlFor="ship-to-me" className="text-lg">
                            Ship it to me
                        </label>
                    </div>
                    </CardContent>
                </Card>
            </div>
            {selectedDelivery && (
            <p className="text-xl text-green-600 mx-6">
                Congratulations! Your item will come back home shortly.
                Here is the tracking info: XX123456ABC
            </p>
            
        )}
        {showPopup && <Popup onClose={handlePopupClose} />}
            {/* Bottom Navigation Bar */}
            <div className="mt-36">

            </div>
            <Navbar navButtons={navButtons} />
        </div>
        
    );
}
