const express = require("express");
const router = express.Router();

const productSchema = require("../models/ProductModel");

//Create category needs to be auth (id)
router.post("/:id", async (req, res) => {
  const category = new productSchema({
    category: req.body.category,
  });
  try {
    const savedCategory = await category.save();
    res.json(savedCategory);
  } catch (err) {
    res.json({ message: err });
  }
});

//Get all categories
router.get("/", async (req, res) => {
  try {
    const categories = await productSchema.find();
    res.json(categories);
  } catch (err) {
    res.json({ message: err });
  }
});

//Get product by category
router.get("/:category", async (req, res) => {
  try {
    const category = await product
      .find({ category: req.params.category })
      .populate("category");
    res.json(category);
  } catch (err) {
    res.json({ message: err });
  }
});

//update category needs to be auth (id)
router.patch("/:id", async (req, res) => {
  try {
    const updatedCategory = await productSchema.updateOne(
      { _id: req.params.id },
      { $set: { category: req.body.category } }
    );
    res.json(updatedCategory);
  } catch (err) {
    res.json({ message: err });
  }
});

//Delete category needs to be auth (id)
router.delete("/:id", async (req, res) => {
  try {
    const removedCategory = await productSchema.remove({ _id: req.params.id });
    res.json(removedCategory);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
