// specialist/item/[id].tsx
import { useRouter } from 'next/router';
import { BOUNTY_ITEMS } from '@/app/constants/BountyItems';
import ItemDetailPage from '@/app/specialist/itemDetail/page';

const ItemDetail = () => {
    console.log("ItemDetail");
    const router = useRouter();
    const { id } = router.query;
    
    const item = BOUNTY_ITEMS.find((item) => item.id === id);
    console.log(item);

    // If item is not found, you can handle it with an error message or redirect
    if (!item) {
        return <p>Item not found!</p>;
    }

    // Now pass the item data to the ItemDetailPage component
    return <ItemDetailPage item={item} />;
};

export default ItemDetail;
