const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv").config();
const {mongooseConn} = require("./config/db");
const authRouter = require("./routes/authRoutes");
const path = require("path");



const app = express();
// dotenv.config();
mongooseConn(process.env.DB_URI);

// port
const port = process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, './client/build')))
app.use(cors());
app.use(morgan("dev"));

//routes
app.get("/", (req, res) => {
    res.status(201).send({
        success : true,
        message : "Message from Node backend",
    });
});

app.use("/api/v1/auth", authRouter);

app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
 

app.listen(port, () => {
    console.log(`server is running in ${process.env.MODE} mode on port ${port}`);
});