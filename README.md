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

### VR Field Trip
Why not complete: It requires lots of work on game designing, such as VR development platform and 3D models creation. Then, we need database to store our games.
What we have now: The VR page will show an error page indicating the feature is still under development.
### Game search bar
Why not complete: It requires work on backend. First, we should have a database to store all available games. Second, we should have backend api to handle queries and retrieve games from the database.
What we have now: The search bar and a search button
### Create Game
Why not complete: It requires work on backend. We need relevant apis to create new games and store in database.
What we have now: A game creation page providing style options and text input for game notes and quiz.
### AI Chat search bar
Why not complete: Same as “Game search bar”
What we have now: Same as “Game search bar”
### Download CSV
Why not complete: It requires work on backend. First, we need apis to convert the leaderboard as a csv file. Second, in order to realize downloading, a client-server communication should be established, which always involves using HTTP or FTP protocols.
What we have now: a button to allow users to download and a pop-up window to inform users the success of downloading.
### Export to Canvas
Why not complete: It requires integration with third-party application. We probably need to use Canvas provided api to integrate our app and Canvas.
What we have now: a button to allow users to export and a pop-up window to inform users the success of exporting.
### Go to Canvas
Why not complete: Same as “Export to Canvas”
What we have now: a button to allow users to go to Canvas.
### Only the example student profile can be viewed in leaderboard
Why not complete: Avoid duplicate work. One example student is enough to show the functoionality.
What we have now: We can view the example student’s profile by clicking on the user in the leaderboard.

