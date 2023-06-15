var data = require("./fakeData");

function createUser(req, res) {
  const name = req.body.name;
  const job = req.body.job;
  const role = "user";

  const newUser = {
    id: Date.now(), // date now para ser id unico \o/
    name,
    job,
    role,
  };

  data.push(newUser);

  res.send(newUser);
}

module.exports = createUser;
