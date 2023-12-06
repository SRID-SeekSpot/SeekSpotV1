"use client";

import { usePathname } from "next/navigation";
import { ALL_ITEMS } from "@/app/constants/AllItems";
import { useEffect, useState } from "react";
// import LostItemDetailPage_nonspecialist from "@/app/non-specialist/lostItemDetail_nonspecialist/page";
// import FoundItemDetailPage_nonspecialist from "@/app/non-specialist/foundItemDetail_nonspecialist/page";
import LostItemDetailPage_nonspecialist from "@/components/general/lostItemDetail_nonspecialist";
import FoundItemDetailPage_nonspecialist from "@/components/general/foundItemDetail_nonspecialist";
import { FoundItemDetailPageProps } from "@/components/general/foundItemDetail_nonspecialist";

const ItemDetail = () => {
    const path = usePathname();
    const id = path.split("/").pop();
    const [foundItemList, setFoundItemList] = useState<FoundItemDetailPageProps[]>(ALL_ITEMS);
    const [item, setItem] = useState<FoundItemDetailPageProps>(() => foundItemList.find((item) => item.id === id)!);

    useEffect(() => {
        const updatedBountyItemsString = localStorage.getItem("updatedBountyItems");
    
        if (updatedBountyItemsString && updatedBountyItemsString !== "null") {
            const updatedBountyItems = JSON.parse(updatedBountyItemsString);
            setFoundItemList(updatedBountyItems);
            const newItem = updatedBountyItems.find((item: { id: any; }) => item.id === id);
            setItem(newItem);
        }
    }, [id]); // Add id as a dependency
    

    // If item is not found
    if (!item || !id) {
        return <p>Item not found!</p>;
    }

    if (id.startsWith("f")) {
        return <FoundItemDetailPage_nonspecialist 
        id={item.id} name={item.name} imgSrc={item.imgSrc} description={item.description} price={item.price}
        color={item.color} category={item.category} location={item.location} date={item.date} 
        claimCode={item.claimCode} claimStatus={item.claimStatus}  />;
    } else if (id.startsWith("l")) {
        return <LostItemDetailPage_nonspecialist id={item.id} name={item.name} imgSrc={item.imgSrc} description={item.description} price={item.price}
        color={item.color} category={item.category} location={item.location} date={item.date} 
        claimCode={item.claimCode} claimStatus={item.claimStatus}  />;
    } else {
        return <p>Invalid item ID!</p>;
    }
};

export default ItemDetail;
