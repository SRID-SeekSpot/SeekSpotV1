"use client";

import { usePathname } from 'next/navigation'
import { BOUNTY_ITEMS } from '@/app/constants/BountyItems';
import ItemDetailPage from '@/app/specialist/itemDetail/page';

const ItemDetail = () => {
    const path = usePathname();
    const id = path.split("/").pop();
    
    const item = BOUNTY_ITEMS.find((item) => item.id === id);
    console.log(item);

    // If item is not found
    if (!item) {
        return <p>Item not found!</p>;
    }

    return <ItemDetailPage item={item} />;
};

export default ItemDetail;
