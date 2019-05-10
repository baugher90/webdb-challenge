const router = require("express").Router();
const db = require(`./actionModels`);

//=====================================Create Router
router.post("/", async (req, res) => {
  const action = req.body;

  if (action.description) {
    try {
      const inserted = await db.add(action);
      res.status(201).json(inserted);
    } catch (error) {
      res
        .status(500)
        .json({ message: "We ran into an error creating the action" });
    }
  } else {
    res.status(400).json({ message: "Please provide description of the action" });
  }
});
//=====================================Read Router
router.get("/", async (req, res) => {
  try {
    const actions = await db.find();
    res.status(200).json(actions);
  } catch (error) {
    res
      .status(500)
      .json({ message: "We ran into an error retrieving the actions" });
  }
});
//-------------------------------By ID
router.get("/:id", async (req, res) => {
  try {
    const action = await db.findById(req.params.id);
    if (action) {
      res.status(200).json(action);
    } else {
      res.status(404).json({ message: "We could not find the action" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "We ran into an error retrieving the action" });
  }
});
//=====================================Update Router
router.put("/:id", async (req, res) => {
  const changes = req.body;

  if (changes.description) {
    try {
      const updated = await db.update(req.params.id, changes);
      if (updated) {
        res.status(200).json(updated);
      } else {
        res.status(404).json({
          message: "That action does not exist"
        });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "We ran into an error updating the action" });
    }
  } else {
    res.status(400).json({
      message: "Please provide the description of the action"
    });
  }
});
//=====================================Delete Router
router.delete("/:id", async (req, res) => {
  try {
    const count = await db.remove(req.params.id);
    if (count > 0) {
      res.status(204).end();
    } else {
      res.status(404).json({
        message: "That action does not exist, perhaps it was deleted already"
      });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "We ran into an error removing the action" });
  }
});

module.exports = router;