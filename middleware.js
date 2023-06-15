var fakeData = require("./fakeData");

function checkPermission(permission) {
  return function (req, res, next) {
    const userId = req.query.id; // Supondo que a ID do usuário seja enviada no param

    console.log(userId);

    const user = fakeData.find((user) => user.id == userId);

    if (user && user.role === permission) {
      next();
    } else {
      res.status(403).send("Permissão negada.");
    }
  };
}

module.exports = {
  checkPermission,
};
