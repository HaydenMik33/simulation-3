const login = (req, res) => {
  const { username, password } = req.body;
  req.app
    .get("db")
    .getUser([username, password])
    .then(user => {
      req.session.userid = user.id;
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
      console.log(req.session.userid);
      req.session.userid = user.id;
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
