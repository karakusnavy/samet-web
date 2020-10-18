import React from "react";
import BlogItem from "../../components/blogItem";
import HomeInformation from "../../components/HomeInformation";

import Blogs from "../../constants/mockData";

import "./style.css";

function Home() {
  return (
    <div>
      <HomeInformation />
      <div
        className="container homeContainer"
        style={{ backgroundColor: "white" }}
      >
        <div className="row">
          <div className="titleBlog">
            <h2>Blogs</h2>
          </div>
          {Blogs.blogs.map((item) => (
            <BlogItem
              title={item.title}
              launguage={item.launguage}
              date={item.date}
              slug={item.slug}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
