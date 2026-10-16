import { Router } from 'express';

const categoryRouter = Router();

categoryRouter.get("/", (req, res) => {
    res.json({message: "categories api"});
});
categoryRouter.get("/:categoryId", (req, res) => {
    const id = req.params.categoryId;
    res.json({message: `subcategories api for category ${id}`});
});

categoryRouter.post("/", (req, res) => {
    res.json({message: "categories api"});
});
categoryRouter.post("/:categoryId/subCategory", (req, res) => {
    const id = req.params.categoryId;
    res.json({message: `subcategories api for category ${id}`});
});

export default categoryRouter;