"use client";

import { usePathname } from "next/navigation";
import { ALL_ITEMS } from "@/app/constants/AllItems";
import FoundItemDetailPage from "@/components/general/foundItemDetail";
import LostItemDetailPage from "@/components/general/lostItemDetail";
import { useEffect, useState } from "react";
import { FoundItemDetailPageProps } from "@/components/general/foundItemDetail_nonspecialist";

const ItemDetail = () => {
    const path = usePathname();
    const id = path.split("/").pop();
    const [foundItemList, setFoundItemList] =
        useState<FoundItemDetailPageProps[]>(ALL_ITEMS);

    let item = foundItemList.find((item) => item.id === id);
    useEffect(() => {
        // Fetch data from localStorage only once when the component mounts
        let updatedBountyItemsString =
            localStorage.getItem("updatedBountyItems");
        // console.log(updatedBountyItemsString)

        if (updatedBountyItemsString && updatedBountyItemsString !== "null") {
            let updatedBountyItems = JSON.parse(updatedBountyItemsString);
            console.log(updatedBountyItems);
            setFoundItemList(updatedBountyItems);
        }
        item = foundItemList.find((item) => item.id === id);
    }, []);

    // If item is not found
    if (!item || !id) {
        return <p>Item not found!</p>;
    }

    if (id.startsWith("f")) {
        return <FoundItemDetailPage 
        id={item.id} name={item.name} imgSrc={item.imgSrc} description={item.description} price={item.price}
        color={item.color} category={item.category} location={item.location} date={item.date} 
        claimCode={item.claimCode} claimStatus={item.claimStatus} />;
    } else if (id.startsWith("l")) {
        return <LostItemDetailPage 
        id={item.id} name={item.name} imgSrc={item.imgSrc} description={item.description} price={item.price}
        color={item.color} category={item.category} location={item.location} date={item.date} 
        claimCode={item.claimCode} claimStatus={item.claimStatus} />;
    } else {
        return <p>Invalid item ID!</p>;
    }
};

export default ItemDetail;
