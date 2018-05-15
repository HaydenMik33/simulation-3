const getPostsByUserId = (req, res) => {
  console.log("hit /api/posts/:userid");
  const { search, userposts } = req.query;
  const { userid } = req.params;
  userposts
    ? app
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
    : app
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
  const { userid } = req.params;
};

module.exports = {
  getPost,
  getPostsByUserId,
  uploadPost
};
