const Content = require("../models/Content");

exports.createContent = async (req, res) => {
  const { title, description, mediaHash } = req.body;
  const userId = req.user.id;

  try {
    const content = new Content({
      title,
      description,
      mediaHash,
      owner: userId,
    });

    await content.save();
    res.status(201).json(content);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.getContents = async (req, res) => {
  try {
    const contents = await Content.find().populate("owner", "username");
    res.json(contents);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
