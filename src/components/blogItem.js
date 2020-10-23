import React from "react";
import { Link } from "react-router-dom";

function reString(data) {
  var newString = data.replace(/(<([^>]+)>)/gi, "");
  return newString.substring(0, 140) + "...";
}

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
      <div className="col-sm-4" style={{ padding: 20 }}>
        <img
          style={{ width: "100%", height: "100%", resize: "contain" }}
          src={props.image}
        />
      </div>
      <div className="col-sm-8" style={{ padding: 20 }}>
        <h5>{props.title}</h5>
        <p>{reString(props.content)}</p>
        <div>
          <table style={{ width: "100%" }}>
            <tr>
              <td>
                <a style={{ float: "left" }}>
                  Launguage: <strong>{props.launguage}</strong>
                </a>
              </td>
              <td>
                <Link
                  to={"/blog/" + props.slug}
                  style={{ float: "right" }}
                  className="globalButton"
                >Read More</Link>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default blogItem;
