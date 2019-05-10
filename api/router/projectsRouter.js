const router = require("express").Router();
const db = require(`./projectModels`);

//=====================================Create Router
router.post("/", async (req, res) => {
  const project = req.body;

  if (project.name) {
    try {
      const inserted = await db.add(project);
      res.status(201).json(inserted);
    } catch (error) {
      res
        .status(500)
        .json({ message: "We ran into an error creating the project" });
    }
  } else {
    res.status(400).json({ message: "Please provide name of the project" });
  }
});
//=====================================Read Router
router.get("/", async (req, res) => {
  try {
    const projects = await db.find();
    res.status(200).json(projects);
  } catch (error) {
    res
      .status(500)
      .json({ message: "We ran into an error retrieving the projects" });
  }
});
//-------------------------------By ID
router.get("/:id", async (req, res) => {
  try {
    const [project] = await db.findById(req.params.id);
    const actions = await db.findProjectActions(req.params.id);

    if (project) {
      res.status(200).json({ ...project, actions });
    } else {
      res.status(404).json({ message: "We could not find the project" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "We ran into an error getting that project" });
  }
});
//=====================================Update Router
router.put("/:id", async (req, res) => {
  const changes = req.body;

  if (changes.name) {
    try {
      const updated = await db.update(req.params.id, changes);
      if (updated) {
        res.status(200).json(updated);
      } else {
        res.status(404).json({
          message: "That project does not exist"
        });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "We ran into an error updating the project" });
    }
  } else {
    res.status(400).json({
      message: "Please provide the name of the project"
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
        message: "That project does not exist, perhaps it was deleted already"
      });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "We ran into an error removing the project" });
  }
});

module.exports = router;
