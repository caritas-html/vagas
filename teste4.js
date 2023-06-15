var fakeData = require("./fakeData");

const { checkPermission } = require("./middleware");

module.exports = [
  checkPermission("admin"),
  function (req, res) {
    const id = req.params.id;
    const { name, job } = req.body;

    const user = fakeData.find((user) => user.id == id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.name = name;
    user.job = job;

    res.json(user);
  },
];
