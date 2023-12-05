export const BOUNTY_ITEMS = [
    {
        id: "l1",
        name: "BlackGlasses",
        imgSrc: "/bountyItems/BlackGlasses.png",
        description: "Black glasses with silver decoration",
        price: 15.0,
        color: "black",
        category: "Cloth",
        location: "2nd floor",
        date: "Nov.6",
        claimCode: "1234",
        claimStatus: true,
    },
    {
        id: "l2",
        name: "Airpods",
        imgSrc: "/bountyItems/Airpods.png",
        description: "White airpods with charging case",
        price: 13.0,
        color: "White",
        category: "Cloth",
        location: "1st floor",
        date: "Nov.3",
        claimCode: "1234",
        claimStatus: true,
    },
    {
        id: "l3",
        name: "PinkScarf",
        imgSrc: "/bountyItems/PinkScarf.png",
        description: "Pink scarf with flower pattern",
        price: 10.0,
        color: "pink",
        category: "Cloth",
        location: "2nd floor",
        date: "Nov.5",
        claimCode: "1234",
        claimStatus: true,
    },
    {
        id: "l4",
        name: "SilverRing",
        imgSrc: "/bountyItems/SilverRing.png",
        description: "Silver ring with carved 's' on it",
        price: 18.0,
        color: "sliver",
        category: "Cloth",
        location: "3rd floor",
        date: "Nov.10",
        claimCode: "1234",
        claimStatus: true,
    },
];

export const FOUND_ITEMS = [
    {
        id: "f1",
        name: "Black Backpack",
        imgSrc: "/foundItems/BlackBackpack.png",
        description: "16 inch x 13 inch",
        price: 21.0,
        color: "Black",
        category: "Cloth",
        location: "2nd floor",
        date: "Nov.4",
        claimCode: "0000",
        claimStatus: false,
    },
    {
        id: "f2",
        name: "Red Mug",
        imgSrc: "/foundItems/RedMug.png",
        description: "500ml",
        price: 20.0,
        color: "Red",
        category: "Bottles",
        location: "1st floor",
        date: "Nov.5",
        claimCode: "0000",
        claimStatus: false,
    },
    {
        id: "f3",
        name: "Blue Waterbottle",
        imgSrc: "/foundItems/BlueWaterbottle.png",
        description: "500 ml, silver bottle cap",
        price: 19.0,
        color: "Blue",
        category: "Bottles",
        location: "3rd floor",
        date: "Nov.5",
        claimCode: "0000",
        claimStatus: false,
    },
    {
        id: "f4",
        name: "Silver Smartphone",
        imgSrc: "/foundItems/SilverSmartphone.png",
        description: "iPhone 7 ",
        price: 19.0,
        color: "White",
        category: "Phone",
        location: "parking lot",
        date: "Nov.6",
        claimCode: "0000",
        claimStatus: false,
    },
];

export const ALL_ITEMS = [...FOUND_ITEMS, ...BOUNTY_ITEMS];
