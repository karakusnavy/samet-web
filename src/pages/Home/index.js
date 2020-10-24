import React, { useEffect, useState } from "react";
import BlogItem from "../../components/blogItem";
import HomeInformation from "../../components/HomeInformation";
import "./style.css";
import { getBlogs } from "../../api/firebaseFuncts";

function Home() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    getBlogs().then((data) => {
      setBlogs(data);
    });
  }, []);
  return (
    <div>
      <HomeInformation />

      <div className="row">
        {blogs.reverse().map((item) => (
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
