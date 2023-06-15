var { userReadCount } = require("./teste1");

function getUserReadCount(req, res) {
  const id = req.params.id;

  if (userReadCount[id]) {
    console.log(userReadCount[id]);

    res.send(`O usuário foi lido ${userReadCount[id]} vezes.`);
  } else {
    res.status(400).json({ error: "Nome do usuário não fornecido." });
  }
}

module.exports = {
  getUserReadCount,
};
