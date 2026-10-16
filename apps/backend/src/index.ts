import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import {prisma} from "./lib/prisma.js";
import authRouter from "./routes/auth.routes.js";
import bookingRouter from "./routes/booking.routes.js";
import categoryRouter from "./routes/category.routes.js";
import providerRouter from "./routes/provider.routes.js";
import reviewRouter from "./routes/review.routes.js";
import serviceRouter from "./routes/service.routes.js";
import userRouter from "./routes/user.routes.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
    res.status(200).json("server is up and running");
});

app.get("/dbCheck", async (req, res) => {
    try {
        const allUsers = await prisma.user.findMany();
        res.status(200).json(allUsers);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: "Failed to fetch users" });
    }
});

app.use("/api/auth", authRouter);
app.use("/api/bookings", bookingRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/provider", providerRouter);
app.use("/api/review", reviewRouter);
app.use("/api/service", serviceRouter);
app.use("/api/user", userRouter);


app.listen(PORT, () => {
    console.log("Server is running...");
    console.log(`Visit: http://localhost:${PORT}/health`);
});


