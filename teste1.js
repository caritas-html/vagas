var fakeData = require("./fakeData");
let userReadCount = {};

getUsers = function (req, res) {
  res.json(fakeData);
};

getUser = function (req, res) {
  const userId = parseInt(req.params.id);

  if (userId) {
    if (userReadCount[userId]) {
      userReadCount[userId]++;
    } else {
      userReadCount[userId] = 1;
    }
  }

  const user = fakeData.find((user) => {
    return user.id === userId;
  });

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: "user not found" });
  }
};

module.exports = {
  getUsers,
  getUser,
  userReadCount,
};
