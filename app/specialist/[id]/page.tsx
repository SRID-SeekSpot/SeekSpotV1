"use client";

import { usePathname } from "next/navigation";
import { ALL_ITEMS } from "@/app/constants/AllItems";
import FoundItemDetailPage from "@/app/specialist/foundItemDetail/page";
import LostItemDetailPage from "@/app/specialist/lostItemDetail/page";
import { useEffect, useState } from "react";

import { useRef } from "react";
import { ALL_ITEM_TYPES } from "@/types/AllItemTypes";

// ...

const ItemDetail = () => {
    const path = usePathname();
    const id = path.split("/").pop();
    const [foundItemList, setFoundItemList] =
        useState<ALL_ITEM_TYPES[]>(ALL_ITEMS);

    // Use useRef to store the 'item' variable
    const itemRef = useRef<ALL_ITEM_TYPES | null>(null);

    useEffect(() => {
        // Fetch data from localStorage only once when the component mounts
        let updatedBountyItemsString =
            localStorage.getItem("updatedBountyItems");
        // console.log(updatedBountyItemsString)

        if (updatedBountyItemsString !== "null") {
            let updatedBountyItems = JSON.parse(updatedBountyItemsString);
            console.log(updatedBountyItems);
            setFoundItemList(updatedBountyItems);

            // Assign the value to the 'item' variable using the useRef
            itemRef.current = updatedBountyItems.find((item) => item.id === id);
        }
    }, [id]);

    // Access the 'item' variable from the useRef
    const item = itemRef.current;

    // If item is not found
    if (!item || !id) {
        return <p>Item not found!</p>;
    }

    if (id.startsWith("f")) {
        return <FoundItemDetailPage item={item} />;
    } else if (id.startsWith("l")) {
        return <LostItemDetailPage item={item} />;
    } else {
        return <p>Invalid item ID!</p>;
    }
};

export default ItemDetail;
