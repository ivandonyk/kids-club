# KidsClub Analytics Solution

Inside of this repository there are two directories:

```shell

├── client
└── server
```

The `client` folder contains the frontend part of the solution. It is built with react and uses Twitter Bootstrap as the styling framework. It communicates to the `server` using the port `4000`.

The `server` folder contains an Express server running on port `4000`. Inside of it there are three endpoints implemented: `/members`, `/games` and `/member_games/:memberName`.

### To run the application locally:

- Install dependencies using `npm install` on both the `client` and `server` folders.
- In the `server` directory, run `npm run start` or `node index.js` to start the express server.
  Alternatively, run `npm run dev` to use `nodemon` to run the server in watch mode.
- In the `client` directory, run `npm start` to run the app in the development mode.

- Open [http://localhost:3000](http://localhost:3000) to view the development app in the browser.
