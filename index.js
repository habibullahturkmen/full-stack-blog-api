import express from "express";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import postRoutes from "./routes/posts.js";
import {Database} from "./db.js";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

app.listen(8800, () => {
    console.log("Connected!");
})
