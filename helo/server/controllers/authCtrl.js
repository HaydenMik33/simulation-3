const login = (req, res) => {
  console.log("hit the endpoinnt get /api/auth/logi");
  const { username, password } = req.body;
  const { session } = req;
  req.app
    .get("db")
    .getUser([username, password])
    .then(user => {
      session.userid = user[0].id;
      session.username = user[0].username;
      console.log(req.session);
      res.status(200).send(user);
    });
};
const addUser = (req, res) => {
  console.log("hit POST '/api/auth/register' ");
  const { username, password } = req.body;

  req.app
    .get("db")
    .addUser([
      username,
      password,
      "http://www.bbosch.cl/wp-content/uploads/2017/11/avatar_bbosch.jpg"
    ])
    .then(user => {
      req.session.userid = user[0].id;
      req.session.username = user[0].username;
      console.log(req.session);
      res.status(200).send(user);
    })
    .catch(() => {
      res.status(500).send();
    });
};
const logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect("http://localhost:3000/#/");
  });
};

module.exports = {
  login,
  logout,
  addUser
};
