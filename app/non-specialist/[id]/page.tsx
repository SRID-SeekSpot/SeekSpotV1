"use client";

import { usePathname } from "next/navigation";
import { ALL_ITEMS } from "@/app/constants/AllItems";
import { useEffect, useState } from "react";
import { FoundItemProps } from "../found/page";
import LostItemDetailPage_nonspecialist from "@/app/non-specialist/lostItemDetail_nonspecialist/page";
import FoundItemDetailPage_nonspecialist from "@/app/non-specialist/foundItemDetail_nonspecialist/page";

const ItemDetail = () => {
    const path = usePathname();
    const id = path.split("/").pop();
    const [foundItemList, setFoundItemList] =
        useState<FoundItemProps[]>(ALL_ITEMS);

    let item = foundItemList.find((item) => item.id === id);
    useEffect(() => {
        // Fetch data from localStorage only once when the component mounts
        let updatedBountyItemsString =
            localStorage.getItem("updatedBountyItems");
        // console.log(updatedBountyItemsString)

        if (updatedBountyItemsString !== "null") {
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
        return <FoundItemDetailPage_nonspecialist item={item} />;
    } else if (id.startsWith("l")) {
        return <LostItemDetailPage_nonspecialist item={item} />;
    } else {
        return <p>Invalid item ID!</p>;
    }
};

export default ItemDetail;
