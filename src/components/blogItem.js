import React from "react";
import { Link } from "react-router-dom";

function blogItem(props) {
  return (
    <div
      className="row"
      style={{
        backgroundColor: "#202223",
        color: "white",
        marginBottom: 10,
        borderRadius: 10,
      }}
    >
      <div className="col-sm-8" style={{ padding: 20 }}>
        <h4>Test Title</h4>
        <p>
          Hollywood kalitesindeki içerikleri 10 dakikadan kısa bölümler halinde
          sunan Quibi'nin kapanma…
        </p>
        <Link
          to={"/blog/" + props.slug}
          style={{ float: "right" }}
          className="globalButton"
        >
          Read More
        </Link>
      </div>
      <div className="col-sm-4" style={{ padding: 20 }}>
        <img
          style={{ width: "100%", height: "100%", resize: "contain" }}
          src={props.image}
        />
      </div>
    </div>
  );
}

export default blogItem;
