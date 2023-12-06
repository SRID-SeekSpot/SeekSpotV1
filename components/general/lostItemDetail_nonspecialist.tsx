// app/specialist/itemDetail/page.tsx
import React, { useEffect, useState } from "react";
import Image from "next/image";
// import { useRouter } from 'next/router';
import { Button } from "@/components/ui/button";
import Header from "@/components/general/header";
import Navbar from "@/components/general/navbar";
import { SPECIALIST_ROUTES } from "@/app/constants/SpecialistRoutes";
import { FoundItemDetailPageProps } from "./foundItemDetail_nonspecialist";
import { ALL_ITEMS } from "@/app/constants/AllItems";


const LostItemDetailPage_nonspecialist: React.FC<
    FoundItemDetailPageProps
> = (props) => {
    const navButtons = SPECIALIST_ROUTES;

    const [showPopup, setShowPopup] = useState(false);
    const showPopupClaim = () => {
        setShowPopup(true);
    };
    localStorage.setItem("claimItemIndex", props.id);

    const handlePopupClose = () => {
        setShowPopup(false);
    };
    

    const [thisItemIfClaim, setThisItemIfClaim] = useState<boolean>(false);
    useEffect(() => {
        let updatedBountyItemsString = localStorage.getItem("updatedBountyItems");
        if (updatedBountyItemsString && updatedBountyItemsString!== "null") {
            let updatedBountyItems = JSON.parse(updatedBountyItemsString);
            let updatedProduct = updatedBountyItems
                                    .filter((item: { id: string; }) => item.id === props.id)
                                    .map((item: { claimStatus?: boolean }) => item?.claimStatus);
            setThisItemIfClaim(updatedProduct[0]);
            console.log(updatedProduct[0])
        }
    }, []);

    if (!props) {
        return <p>Item not found!</p>;
    }

    return (
        <div className="flex flex-col h-screen">
            <Header href="/non-specialist/bounty" />
            <div className="flex flex-col items-center bg-gray-100 p-4 shadow rounded-2xl">
                <div className="w-full max-w-xs mb-4 rounded-2xl overflow-hidden">
                    <Image
                        src={props.imgSrc}
                        alt={`Picture of ${props.name}`}
                        width={300}
                        height={180}
                        layout="responsive"
                        className="rounded-2xl"
                    />
                </div>
            </div>
            <div className="flex justify-between items-center mt-12 mx-4">
                <h1 className="text-2xl text-navy font-bold">{props.name}</h1>
                <p className="text-2xl text-navy font-bold">${props.price}</p>
            </div>
            <div className="flex justify-between items-center mt-8 mx-4">
                <p className="text-md">Location Lost: {props.location}</p>
                <p className="text-md text-right">Date Lost: {props.date}</p>
            </div>
            <p className="text-md text-gray-400 mt-8 mx-4">
                {props.description}
            </p>
            <div className="mt-auto px-4 pb-[env(safe-area-inset-bottom)]">
                <div className="flex justify-center mb-20">
                    {thisItemIfClaim? (
                            <p>Item Claimed</p>
                    ):(
                        <Button className="w-56" asChild onClick={showPopupClaim}>
                            <p>Claim</p>
                        </Button>
                    )}
                    {showPopup && (
                        <PopupClaim
                            onClose={handlePopupClose}
                            additionalData={props.id}
                        />
                    )}
                </div>
            </div>

            <Navbar navButtons={navButtons} />
        </div>
    );
};

const PopupClaim = ({onClose, additionalData}:{onClose:any, additionalData:any}) => {
    const [claimCode, setClaimCode] = useState("");
    const [showCongratulations, setShowCongratulations] = useState(false);
    const [showFail, setShowFail] = useState(false);

    const popupContainerStyle: React.CSSProperties = {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        paddingBottom: "80px",
        textAlign: "center",
    };

    const popupContentStyle: React.CSSProperties = {
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        width: "90%", // Adjust as needed
    };

    const popupCongratulationsFailStyle: React.CSSProperties = {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
    };

    const inputStyle: React.CSSProperties = {
        width: "80%",
        padding: "10px",
        margin: "10px auto",
        backgroundColor: "#DCDCDC",
        borderRadius: "5px",
    };

    const paragraphStyle: React.CSSProperties = {
        fontSize: "18px",
        fontWeight: "bold",
    };

    // claim confirm action
    const handleConfirmClaim = () => {
        let itemID = localStorage.getItem("claimItemIndex");
        // find the required claim code
        let targetClaimCode = ALL_ITEMS.find(
            (item) => item.id === itemID
        )?.claimCode;
        if (targetClaimCode == claimCode) {
            setShowCongratulations(true);
        } else {
            setShowFail(true);
        }
    };

    const handleCongratulationsClose = () => {
        setShowCongratulations(false);
        onClose();
    };

    const retryClaim = () => {
        setShowCongratulations(false);
        setShowFail(false);
    };

    const handleClaimSuccess = () => {
        let updatedBountyItemsString =
            localStorage.getItem("updatedBountyItems");

        if (updatedBountyItemsString && updatedBountyItemsString !== "null") {
            let updatedBountyItems = JSON.parse(updatedBountyItemsString);
            const updatedBountyItemsTmp = updatedBountyItems.map(
                (item: { id: string }) => {
                    if (item.id === additionalData) {
                        // Update the status property to true
                        return { ...item, claimStatus: true };
                    }
                    return item;
                }
            );
            localStorage.setItem(
                "updatedBountyItems",
                JSON.stringify(updatedBountyItemsTmp)
            );
            // console.log(updatedBountyItemsTmp);
        } else {
            const updatedBountyItems = ALL_ITEMS.map((item) => {
                if (item.id === additionalData) {
                    // Update the status property to true
                    return { ...item, claimStatus: true };
                }
                return item;
            });
            localStorage.setItem(
                "updatedBountyItems",
                JSON.stringify(updatedBountyItems)
            );
        }
        window.location.href = "/non-specialist/bounty";
    };

    return (
        <div>
            {showCongratulations ? (
                <div
                    className="popup-container"
                    style={popupCongratulationsFailStyle}
                >
                    <div className="popup-content" style={popupContentStyle}>
                        <div className="flex items-center flex-col">
                            <Image
                                src="/icons/congratulations.png"
                                alt="congratulations"
                                width={48}
                                height={48}
                            />
                            <p className="mt-5 text-sm" style={paragraphStyle}>
                                Congratulations!
                            </p>
                            <p>The bounty is now in your wallet.</p>
                            <div className="flex items-center justify-center">
                                <Button
                                    className="mt-5 w-200 h-10"
                                    onClick={() => handleClaimSuccess()}
                                >
                                    Claim
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : showFail ? (
                <div
                    className="popup-container"
                    style={popupCongratulationsFailStyle}
                >
                    <div className="popup-content" style={popupContentStyle}>
                        <div className="flex items-center flex-col">
                            <Image
                                src="/icons/failure.png"
                                alt="Error"
                                width={48}
                                height={48}
                            />
                            <p className="mt-5 text-sm" style={paragraphStyle}>
                                Sorry!
                            </p>
                            <p>
                                The claim code does not match! Please try again!
                            </p>
                            <div className="flex items-center justify-center">
                                <Button
                                    className="mt-5 w-200 h-10"
                                    onClick={retryClaim}
                                >
                                    Retry
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="popup-container" style={popupContainerStyle}>
                    <div className="popup-content" style={popupContentStyle}>
                        <p className="mt-5 text-sm" style={paragraphStyle}>
                            Enter Claim Code
                        </p>
                        <input
                            type="text"
                            value={claimCode}
                            onChange={(e) => setClaimCode(e.target.value)}
                            style={inputStyle}
                        />
                        {/* Button Panel */}
                        <div className="flex mt-35 justify-between ">
                            <Button
                                className="w-30 mt-8 ml-8"
                                asChild
                                onClick={handleConfirmClaim}
                            >
                                <a>Confirm</a>
                            </Button>
                            <Button
                                className="w-30 mt-8 mr-8"
                                onClick={() => onClose()}
                            >
                                <a>Cancel</a>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
export default LostItemDetailPage_nonspecialist;
