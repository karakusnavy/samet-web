import React from "react";
import BlogItem from "../../components/blogItem";
import "./style.css";

function Home() {
  return (
    <div
      className="container homeContainer"
      style={{ backgroundColor: "white" }}
    >
      <div className="row">
        <div className="titleBlog">
          <h2>Blogs</h2>
        </div>
        <BlogItem
          title="React JS Conference Releated !"
          launguage="ENG"
          date="9 September 2020"
        />
        <BlogItem
          title="React JS Conference Releated !"
          launguage="ENG"
          date="9 September 2020"
        />
        <BlogItem
          title="React JS Conference Releated !"
          launguage="ENG"
          date="9 September 2020"
        />
      </div>
    </div>
  );
}

export default Home;
