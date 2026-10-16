import { Router } from "express";

const reviewRouter = Router();

reviewRouter.get("/providers/:providerId", (req, res) => {
    const id = req.params.providerId;
    res.json({ message: `provider reviews api for provider ${id}` });
});

reviewRouter.post("/", (req, res) => {
    res.json({ message: "create review api" });
});

reviewRouter.patch("/:reviewId", (req, res) => {
    const id = req.params.reviewId;
    res.json({ message: `update review api for review ${id}` });
});

reviewRouter.delete("/:reviewId", (req, res) => {
    res.json({ message: "delete review api" });
});

export default reviewRouter;