import React, { useEffect, useState } from "react";
import BlogItem from "../../components/blogItem";
import HomeInformation from "../../components/HomeInformation";
import "./style.css";
import firebase from "firebase";
import firebaseConfig from "../../constants/firebase";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function Home() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    firebase
      .database()
      .ref("samedblog/blogs")
      .once("value", (data) => {
        const List = [];
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
        setBlogs(List);
      });
  }, []);
  return (
    <div>
      <HomeInformation />

      <div className="row">
        {blogs.map((item) => (
          <BlogItem
            title={item.title}
            launguage={item.launguage}
            date={item.date}
            slug={item.slug}
            image={item.image}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
