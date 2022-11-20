const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");

const usersRoutes = require("./routes/userRoutes");
const postsRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const reviewsRoutes = require("./routes/reviewRoutes");
const historyRoutes = require("./routes/historyRoutes");
const categoryRoutes = require("./routes/categoryRoutes");

app.use(bodyParser.json());

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("Connected to DB")
);

//Routes
app.get("/", (req, res) => {
  res.send("We are on home");
});
app.use(express.json());
app.use(cors());
app.use("/users", usersRoutes);
app.use("/products", postsRoutes);
app.use("/cart", cartRoutes);
app.use("/reviews", reviewsRoutes);
app.use("/history", historyRoutes);
app.use("/category", categoryRoutes);

//Listen to server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
