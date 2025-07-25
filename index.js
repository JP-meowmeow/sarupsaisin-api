const express = require("express");
const app = express();
const cors = require("cors");
const error = require("./middlewares/error");
const notFound = require("./middlewares/notFound");
const authRoute = require("./routes/authRoute");
const bookRoute = require("./routes/bookRoute")
const articleRoute = require("./routes/articleRoute");
const courseRoute = require("./routes/courseRoute");
const paymentRoute = require("./routes/paymentRoute");
const enrollmentRoute = require("./routes/enrollmentRoute");
const adminRoute = require("./routes/adminRoute");
const jlptRoute = require("./routes/jlptRoute");


app.use(cors());
app.use(express.json());

// test brunch

app.use("/auth", authRoute);
app.use("/article", articleRoute);
app.use("/course", courseRoute);
app.use("/book", bookRoute);
app.use("/payment", paymentRoute);
app.use("/jlpt", jlptRoute);
app.use("/enrollment", enrollmentRoute);
app.use("/admin", adminRoute);
app.use(error);
app.use("*", notFound);

app.listen(process.env.PORT, () =>
  console.log(`this server is running in ports ${process.env.PORT}`)
);
