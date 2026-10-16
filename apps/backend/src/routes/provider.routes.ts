import { Router } from "express";

const providerRouter = Router();

providerRouter.get("/", (req, res) => {
    res.json({ message: "providers api" });
});
providerRouter.get("/:providerId", (req, res) => {
    const id = req.params.providerId;
    res.json({ message: `provider details api for provider ${id}` });
});
providerRouter.get("/me/services", (req, res) => {
    res.json({ message: "provider services api" });
});
providerRouter.get("/me/bookings", (req, res) => {
    res.json({ message: "provider bookings api" });
});

providerRouter.post("/me", (req, res) => {
    res.json({ message: "provider profile api" });
});

providerRouter.patch("/me", (req, res) => {
    res.json({ message: "provider profile api" });
});

export default providerRouter;