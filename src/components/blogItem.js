import React from "react";

function blogItem(props) {
  return (
    <div className="container blogItem">
      <div className="row imageRow" style={{ height: 360 }}>
        <img
          src={require("../assets/images/test.jpg")}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
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
            <a style={{ float: "right" }} className="globalButton">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default blogItem;
