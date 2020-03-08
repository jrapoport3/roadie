const express = require("express");
const path = require('path');
const bodyParser = require("body-parser");

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'client/build')));

const port = process.env.PORT || 3001;

const initialData = {
  id: "123",
  title: "Roadie Communicator - Includes Installation Software",
  seller: "Roadie",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod " +
    "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud " +
    "exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  details: [{id: 1, content: 'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla'}],
  reviews: [
    {
      id: 1,
      title: "Perfect",
      user: "Test User",
      date: "01/01/20",
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod " +
        "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud " +
        "exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure " +
        "dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      id: 2,
      title: "Great Device!",
      user: "Test User 2",
      date: "12/20/19",
      rating: 4,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod " +
        "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud " +
        "exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure " +
        "dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      id: 3,
      title: "Easy Installation",
      user: "Test User 3",
      date: "12/03/19",
      rating: 4,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod " +
        "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud " +
        "exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure " +
        "dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      id: 4,
      title: "Not Bad",
      user: "Test User 4",
      date: "12/01/19",
      rating: 3,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod " +
        "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud " +
        "exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure " +
        "dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }
  ]
};

app.get("/api/product/:productId", (_, res) => {
  res.send(
    JSON.stringify({
      title: initialData.title,
      seller: initialData.seller,
      description: initialData.description,
      details: initialData.details
    })
  );
});

app.get("/api/reviews/:productId", (_, res) => {
  res.send(JSON.stringify(initialData.reviews));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
