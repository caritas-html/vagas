var data = require("./fakeData");

const { checkPermission } = require("./middleware");

module.exports = [
  checkPermission("admin"),
  function (req, res) {
    var id = req.params.id;

    var filteredData = data.filter((user) => user.id === id);

    if (filteredData.length < data.length) {
      data = filteredData;
      res.send("success");
    } else {
      res.status(404).send("User not found");
    }
  },
];
