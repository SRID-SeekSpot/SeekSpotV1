"use client";

import { usePathname } from 'next/navigation'
import { BOUNTY_ITEMS } from '@/app/constants/BountyItems';
import FoundItemDetailPage from '@/app/specialist/foundItemDetail/page';
import LostItemDetailPage from '@/app/specialist/lostItemDetail/page';

const ItemDetail = () => {
    const path = usePathname();
    const id = path.split("/").pop();
    const item = BOUNTY_ITEMS.find((item) => item.id === id);

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
