const express = require("express");

const router = express.Router();

const categoriesController = require("../controllers/categoriesControllers");

router.post("/api/categories", categoriesController.createCategory);
router.get("/api/categories", categoriesController.getAllCategories);
router.delete("/api/categories/:id", categoriesController.deleteCategory);

module.exports = router;
