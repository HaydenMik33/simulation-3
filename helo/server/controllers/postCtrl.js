const getPostsByUserId = (req, res) => {
  console.log("hit post/api/posts");
  console.log(req.body);
  const { search, userposts } = req.body;
  const { userid } = req.session;
  console.log(userid);
  userposts
    ? req.app
        .get("db")
        .getAllPosts()
        .then(posts => {
          !!search
            ? res
                .status(200)
                .send(
                  posts.filter(
                    el =>
                      el.title.includes(search) || el.content.includes(search)
                  )
                )
            : res.status(200).send(posts);
        })
    : req.app
        .get("db")
        .getAllPostsButUser([userid])
        .then(posts => {
          !!search
            ? res
                .status(200)
                .send(
                  posts.filter(
                    el =>
                      el.title.includes(search) || el.content.includes(search)
                  )
                )
            : res.status(200).send(posts);
        });
};

const getPost = (req, res) => {
  console.log("hit /api/post/:postid");
  const { postid } = req.params;
};

const uploadPost = (req, res) => {
  console.log("hit /api/post/:userid");
  const { title, img, content } = req.body;
  const { userid } = req.session;
};

module.exports = {
  getPost,
  getPostsByUserId,
  uploadPost
};
