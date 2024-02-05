const router = require("express").Router();
const { Traveller } = require("../../models");

router.get("/", async (req, res) => {
  console.log("Hi.");
  try {
    const travellerData = await Traveller.findAll();
    res.status(200).json(travellerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const userData = await Traveller.create(req.body);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const travellerData = await Traveller.findByPk(req.params.id);

    if (!travellerData) {
      res.status(404).json({ message: "No traveller data found id that id!" });
      return;
    }

    res.status(200).json(travellerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const travellerData = await Traveller.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!travellerData) {
      res.status(404).json({ message: "No traveller found with that id!" });
      return;
    }

    res.status(200).json({ message: "Traveller successfully destroyed!" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
