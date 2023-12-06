"use client";

import { usePathname } from "next/navigation";
import { ALL_ITEMS } from "@/app/constants/AllItems";
import { useEffect, useState } from "react";
import LostItemDetailPage_nonspecialist from "@/app/non-specialist/lostItemDetail_nonspecialist/page";
import FoundItemDetailPage_nonspecialist from "@/app/non-specialist/foundItemDetail_nonspecialist/page";
import { ALL_ITEM_TYPES } from "@/types/AllItemTypes";

const ItemDetail = () => {
    const path = usePathname();
    const id: string | undefined = path.split("/").pop();

    const [foundItemList, setFoundItemList] =
        useState<ALL_ITEM_TYPES[]>(ALL_ITEMS);
    const [item, setItem] = useState<ALL_ITEM_TYPES | undefined>(() =>
        foundItemList.find((item) => item.id === id)
    );

    useEffect(() => {
        const updatedBountyItemsString =
            localStorage.getItem("updatedBountyItems");

        if (updatedBountyItemsString && updatedBountyItemsString !== "null") {
            const updatedBountyItems: ALL_ITEM_TYPES[] = JSON.parse(
                updatedBountyItemsString
            );
            setFoundItemList(updatedBountyItems);
            const newItem: ALL_ITEM_TYPES | undefined = updatedBountyItems.find(
                (updatedItem: ALL_ITEM_TYPES) => updatedItem.id === id
            );
            setItem(newItem);
        }
    }, [id]); // Add id as a dependency

    // If item is not found
    if (item === undefined || id === undefined) {
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
