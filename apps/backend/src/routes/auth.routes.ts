import { Router } from "express";

const authRouter = Router();

authRouter.post("/signup", (req, res) => {
    res.json({message: "signup api"});
});
authRouter.post("/login", (req, res) => {
    res.json({message: "login api"});
});
authRouter.post("/logout", (req, res) => {
    res.json({message: "logout api"});
});

authRouter.get("/me", (req, res) => {
    res.json({message: "me api"});
});


export default authRouter;