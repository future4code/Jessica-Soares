"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const movieRouter_1 = require("./routes/movieRouter");
const userRouter_1 = require("./routes/userRouter");
app_1.app.use("/user", userRouter_1.userRouter);
app_1.app.use("/movie", movieRouter_1.movieRouter);
