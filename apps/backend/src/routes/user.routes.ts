import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
    res.json({ message: "user profile api" });
});
userRouter.get("/bookings", (req, res) => {
    res.json({ message: "user bookings api" });
});

userRouter.patch("/", (req, res) => {
    res.json({ message: "user profile api" });
});

export default userRouter;