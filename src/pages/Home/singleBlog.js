import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Parse from "html-react-parser";
import NotFound from "../404";
import "./style.css";

import { getSingleBlog, setNewComment } from "../../api/firebaseFuncts";

function SingleBlog() {
  let { slug } = useParams();
  const [content, setContent] = useState("");
  const [date, setDate] = useState(null);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState(null);
  const [blogid, setBlogId] = useState(null);
  const [notfound, setNotFound] = useState(false);
  //comment
  const [commentList, setCommentList] = useState([]);
  const [name, setName] = useState(null);
  const [comment, setComment] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    getSingleBlog(slug).then((data) => {
      const blogData = data[0];
      if (blogData.content == undefined) {
        return setNotFound(true);
      }
      setContent(blogData.content);
      setDate(blogData.date);
      setImage(blogData.image);
      setTitle(blogData.title);
      setBlogId(blogData.blogid);
      const newList = [];
      for (const prop in blogData.commentLists) {
        newList.push({
          date: blogData.commentLists[prop].date,
          comment: blogData.commentLists[prop].comment,
          name: blogData.commentLists[prop].name,
        });
      }
      setCommentList(newList);
    });
  };

  const postComment = () => {
    setNewComment(blogid, name, comment);
    setName("");
    setComment("");
    getData();
  };

  return notfound == true ? (
    <NotFound />
  ) : (
    <div className="blogItem">
      <div className="row" style={{ paddingTop: 15 }}>
        <div className="col-sm-9">
          <h3 className="blogTitle">{title}</h3>
        </div>
        <div className="col-sm-3">
          <a style={{ float: "right", color: "gray" }}>{date}</a>
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
      <div style={{ padding: 10 }}>{Parse(content)}</div>
      <div className="commentTitle">
        <a>Comments</a>
      </div>
      <div className="commentContainer">
        {commentList.length <= 0 ? (
          <a style={{ color: "gray" }}>No Comment</a>
        ) : (
          commentList.map((item) => (
            <div
              style={{
                backgroundColor: "#202223",
                padding: 15,
                marginTop: 5,
              }}
            >
              <strong style={{ color: "white" }}>{item.name}</strong>
              <a style={{ float: "right", color: "gray", fontSize: 13 }}>
                {item.date}
              </a>
              <p>{item.comment}</p>
            </div>
          ))
        )}
        <hr />
        <a style={{ color: "white" }}>Leave a Comment</a>
        <input
          value={name}
          onChange={(text) => setName(text.target.value)}
          placeholder="Enter your name"
          className="commentInput"
        />
        <textarea
          value={comment}
          onChange={(text) => setComment(text.target.value)}
          placeholder="Your comment"
          className="commentInput"
        />
        <br />
        <br />
        <a onClick={() => postComment()} className="globalButton">
          Post Comment
        </a>
        <br />
        <br />
      </div>
    </div>
  );
}

export default SingleBlog;
