import React from "react";
import { useParams } from "react-router-dom";
import Image from "../../assets/images/test.jpg";
import Blogs from "../../constants/mockData";
import Parse from "html-react-parser";

function SingleBlog() {
  let { slug } = useParams();
  return (
    <div className="container blogItem">
      <div className="row" style={{ paddingTop: 15 }}>
        <div className="col-sm-9">
          <h3 className="blogTitle">React JS Conference Releated !</h3>
        </div>
        <div className="col-sm-3">
          <a style={{ float: "right" }}>9 September 2020</a>
          <br />
        </div>
      </div>
      <div
        className="row imageRow"
        style={{
          height: 360,
          width: "100%",
          backgroundImage: `url(${Image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      {Parse(Blogs.blogs[0].content)}
    </div>
  );
}

export default SingleBlog;
