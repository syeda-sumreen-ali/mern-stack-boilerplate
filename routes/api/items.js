const express = require("express");
const router = express.Router();

// IMPORTING ITEM MODEL
const Item = require("../../models/items");

// @route   get api/items
// @desc    get all items
// @access  public

router.get("/", (req, res) => {
  Item.find()
    .then((item) => res.json(item))
    .catch((err) => res.send({ err }));
});

// @route   post api/items
// @desc    create an item
// @access  public

router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  });
  newItem
    .save()
    .then((item) => res.json({ success: true, item }))
    .catch((err) => res.json({ success: false, err }));
});

// @route   delete api/items
// @desc    delete an item
// @access  public

router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then((item) => {
      item.remove().then(() => {
        res.json({ success: true });
        console.log(`Item Removed: ${item.name} having id :${item.id}`);
      });
    })
    .catch((err) => res.status(404).json({ success: false, err }));
});

// @route   edit api/items
// @desc    edit an item
// @access  public

router.put("/:id", (req, res) => {
  Item.findByIdAndUpdate(req.params.id, {
    $inc: { modifiedCounter: 1 },
    name: req.body.name,
    date: Date.now(),
  })
    .then((item) => res.json({ success: true, item }))
    .catch((err) => res.json({ success: false, err }));
});

// @route   get api/items/:id
// @desc    get single item
// @access  public

router.get("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then((item) => res.json({ success: true, item }))
    .catch((err) => res.json({ success: false, err }));
});

// @route   delete api/items/
// @desc    delete all item
// @access  public

router.delete("/", (req, res) => {
  Item.deleteMany({})
    .then(() => {
      res.json({ success: true });
    })
    .catch((err) => res.json({ success: false, err }));
});

module.exports = router;
