# SeekSpotV1

## Operation Instructions

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technology Stacks

-   Next.js
-   Node.js
-   React
-   Redux
-   Tailwind
-   TypeScript

## Style Guide Link

[Style Guide](https://www.figma.com/community/file/1309397346869220914)


## Limitations
### Essential Terms explained:
#### Bounty Hunt List: 
list of “bounty hunt” items created by users. The list contains items that people lost and want to get back by paying the finder a certain amount of “bounty” as a reward.
#### Found Item Inventory: 
list of “found” items managed by lost & found managers (specialists). This inventory contains unclaimed items that are sent to the lost & found office.
#### Specialist: 
a manager at the lost & found office. A specialist can create a lost item (that someone else has found and hand it over to the L&F office), and provide a claim code to someone who finds something on the bounty hunt list.
#### Non-Specialist:
anyone who either loses something or finds something that other people have lost. Non-specialists can create bounty items for something they have lost. If someone finds the items and sends them back to the lost & found office, the owner can receive a notification & request delivery. They can also get a reward for finding something on the bounty list. 

> Our MVP for SeekSpot has the following limitations:  

### For all features:
- Please use mobile resolution when browsing our app
- Please select ‘Vista Valley Mall’ at the welcome screen
- No Database Storage.

> When using the app as a specialist:

### Create a Lost Item:
- No storage after creating an item due to no database & backend handling storage logic. Image uploading is not available at this point.
- Can only create the specified item as prompted in the form. The created item will not be visible after navigating to another page.

### Retrieving Claim Code for Bounty Hunt items:
- No Claim code generation algorithm. The same claim code placeholder is displayed for all available bounty hunt items

> When using the app as a non-specialist:
### Create a Bounty Item:
- No storage after creating an item due to no database & backend handling storage logic. Image uploading is not available at this point.
- Can only create the specified item as prompted in the form. The created item will not be visible after navigating to another page.

### Receive Notification:
- Popup notification is only available through using the “Notification Experience” link from the starting page.

### Request Delivery:
- Not connected to any actual shipping partner’s API. The system will provide a static shipping number once the user chooses to get their item back via mail.
