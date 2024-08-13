const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const authRoutes = require("./routes/auth");
const contentRoutes = require("./routes/content");
const transactionRoutes = require("./routes/transactions");
const governanceRoutes = require("./routes/governance");

const app = express();

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/content", contentRoutes);
app.use("/transactions", transactionRoutes);
app.use("/governance", governanceRoutes);

mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Connected to MongoDB");
  }
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
