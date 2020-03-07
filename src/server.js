const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 3001;

app.get("/", (_, res) => {
  res.send("Hello Theo");
});

app.get("/api/getProduct", (req, res) => {
  res.send(
    JSON.stringify({
      title: "Roadie Communicator - Includes Installation Software",
      seller: "Roadie",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod " +
        "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud " +
        "exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure " +
        "dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      reviews: [
        {
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
    })
  );
});

app.post("/api/world", (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));
