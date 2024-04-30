function getUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = {
        id: 123,
        username: "david",
        lastName: "lala",
      };

      if (userId === user.id) {
        resolve(user);
      } else {
        reject("El usuario no existe");
      }
    }, 1000);
  });
}

function getUserPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const post = [
        { id: 1, title: "post 1" },
        { id: 2, title: "post 2" },
      ];

      resolve(post);
    }, 1000);
  });
}

function displayUserPost(userId) {
  getUser(userId)
    .then((user) => {
      return getUserPosts(user.id);
    })
    .then((post) => {
      console.log(`Posts for user ${userId}`);

      post.forEach((post) => {
        console.log(`- ${post.title}`);
      });
    })
    .catch((error) => {
      console.error("error: ", error);
    });
}

displayUserPost(123);

displayUserPost(321);
