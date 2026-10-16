import { Router } from "express";

const bookingRouter = Router();

bookingRouter.get("/", (req, res) => {
    res.json({message: "booking api"});
});
bookingRouter.get("/:bookingId", (req, res) => {
    const id = req.params.bookingId;
    res.json({message: `booking api for booking ${id}`});
});

bookingRouter.post("/", (req, res) => {
    res.json({message: "booking api"});
});

bookingRouter.patch("/:bookingId", (req, res) => {
    const id = req.params.bookingId;
    res.json({message: `booking api for booking ${id}`});
});
bookingRouter.patch("/:bookingId/status", (req, res) => {
    const id = req.params.bookingId;
    res.json({message: `booking status api for booking ${id}`});
});

export default bookingRouter;