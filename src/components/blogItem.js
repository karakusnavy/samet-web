import React from "react";
import { Link } from "react-router-dom";
import Image from "../assets/images/test.jpg";

function blogItem(props) {
  return (
    <div className="container blogItem">
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
      <div className="container homeContainer">
        <div className="row">
          <div className="col-sm-9">
            <h3 className="blogTitle">{props.title}</h3>
          </div>
          <div className="col-sm-3">
            <a style={{ float: "right" }}>{props.date}</a>
            <br />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-9">
            <a>
              Launguage: <b>{props.launguage}</b>
            </a>
          </div>
          <div className="col-sm-3">
            <Link
              to={"/blog/" + props.slug}
              style={{ float: "right" }}
              className="globalButton"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default blogItem;
