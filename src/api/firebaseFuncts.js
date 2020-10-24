import firebase from "firebase";
import firebaseConfig from "../constants/firebase";
import currentDate from "../constants/currentDate";
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const getBlogs = async () => {
  var List = [];
  await firebase
    .database()
    .ref("samedblog/blogs")
    .once("value", (data) => {
      for (const key in data.toJSON()) {
        if (data.toJSON()[key].work == false) {
          List.push({
            title: data.toJSON()[key].title,
            launguage: data.toJSON()[key].launguage,
            date: data.toJSON()[key].date,
            slug: data.toJSON()[key].slug,
            image: data.toJSON()[key].image,
            content: data.toJSON()[key].content,
          });
        }
      }
    });
  return List;
};

export const getSingleBlog = async (slug) => {
  var blogObject = [];
  await firebase
    .database()
    .ref("samedblog/blogs")
    .orderByChild("slug")
    .equalTo(slug)
    .once("value", function (snapshot) {
      if (!snapshot.exists()) {
        blogObject = "notfound";
        return;
      } else {
        var object = snapshot.val();
        for (const prop in object) {
          blogObject = [
            {
              content: object[prop].content == null ? "" : object[prop].content,
              date: object[prop].date,
              image: object[prop].image,
              title: object[prop].title,
              blogid: prop,
              commentLists: object[prop].comments,
            },
          ];
        }
        /**/
      }
    });
  return blogObject;
};

export const setNewComment = async (blogid, name, comment) => {
  await firebase
    .database()
    .ref()
    .child("samedblog/blogs/" + blogid + "/comments")
    .push()
    .set({
      name: name,
      comment: comment,
      date: currentDate,
    });
};

export const auth = async () => {
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");
  var state = false;
  await firebase
    .database()
    .ref("samedblog/users")
    .orderByChild("username")
    .equalTo(username)
    .once("value", function (snapshot) {
      if (!snapshot.exists()) {
        return;
      } else {
        // set
        var object = snapshot.val();
        for (const prop in object) {
          if (object[prop].password == password) {
            state = true;
          }
        }
      }
    });
  return state;
};

export const login = async (username, password) => {
  var state = false;
  await firebase
    .database()
    .ref("samedblog/users")
    .orderByChild("username")
    .equalTo(username)
    .once("value", function (snapshot) {
      if (!snapshot.exists()) {
        return;
      } else {
        // set
        var object = snapshot.val();
        for (const prop in object) {
          if (object[prop].password == password) {
            state = true;
          }
        }
      }
    });
  return state;
};
