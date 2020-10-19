import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Parse from "html-react-parser";
import firebase from "firebase";
import firebaseConfig from "../../constants/firebase";
import NotFound from "../404";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function SingleBlog() {
  let { slug } = useParams();
  const [content, setContent] = useState("");
  const [date, setDate] = useState(null);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState(null);
  const [notfound, setNotFound] = useState(false);

  useEffect(() => {
    firebase
      .database()
      .ref("samedblog/blogs")
      .orderByChild("slug")
      .equalTo(slug)
      .once("value", function (snapshot) {
        if (!snapshot.exists()) {
          setNotFound(true);
          return;
        } else {
          var object = snapshot.val();
          for (const prop in object) {
            setContent(object[prop].content);
            setDate(object[prop].date);
            setImage(object[prop].image);
            setTitle(object[prop].title);
          }
        }
      });
  }, []);

  return notfound == true ? (
    <NotFound />
  ) : (
    <div className="container blogItem">
      <div className="row" style={{ paddingTop: 15 }}>
        <div className="col-sm-9">
          <h3 className="blogTitle">{title}</h3>
        </div>
        <div className="col-sm-3">
          <a style={{ float: "right" }}>{date}</a>
          <br />
        </div>
      </div>
      <div
        className="row imageRow"
        style={{
          height: 360,
          width: "100%",
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      {Parse(content)}
    </div>
  );
}

export default SingleBlog;
