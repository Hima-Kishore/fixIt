import { Router } from "express";

const serviceRouter = Router();

serviceRouter.post("/", (req, res) => {
    res.json({ message: "create service api" });
});

serviceRouter.patch("/:serviceId", (req, res) => {
    res.json({ message: "update service api" });
});

serviceRouter.delete("/:serviceId", (req, res) => {
    res.json({ message: "delete service api" });
});

export default serviceRouter;