const Content = require("../models/Content");

exports.createContent = async (req, res) => {
  try {
    const { title, description, contentURL } = req.body;
    const content = new Content({
      title,
      description,
      contentURL,
      creator: req.user.id,
    });
    await content.save();
    res.status(201).json({ message: "Content created successfully", content });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllContent = async (req, res) => {
  try {
    const content = await Content.find().populate("creator", "username");
    res.status(200).json(content);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getContentById = async (req, res) => {
  try {
    const content = await Content.findById(req.params.id).populate(
      "creator",
      "username"
    );
    if (!content) return res.status(404).json({ message: "Content not found" });
    res.status(200).json(content);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
