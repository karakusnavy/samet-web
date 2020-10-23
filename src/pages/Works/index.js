import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";
import firebaseConfig from "../../constants/firebase";
import "./style.css";
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
function Works() {
  const [works, setWorks] = useState([]);
  useEffect(() => {
    firebase
      .database()
      .ref("samedblog/blogs")
      .once("value", (data) => {
        const List = [];
        for (const key in data.toJSON()) {
          if (data.toJSON()[key].work == true) {
            List.push({
              title: data.toJSON()[key].title,
              slug: data.toJSON()[key].slug,
              projectcontent: data.toJSON()[key].projectcontent,
              image: data.toJSON()[key].image,
            });
          }
        }
        setWorks(List.reverse());
      });
  }, []);
  return (
    <div style={{ paddingTop: 10 }}>
      <h2>Works</h2>
      <div className="worksContainer">
        <div className="work">
          <table>
            {works.map((item) => (
              <>
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
                    <h4>{item.title}</h4>
                    <p>{item.projectcontent}</p>
                    <Link
                      to={"/blog/" + item.slug}
                      style={{ float: "right" }}
                      className="globalButton"
                    >
                      Read More
                    </Link>
                  </div>
                  <div className="col-sm-4" style={{ padding: 20 }}>
                    <img
                      style={{
                        width: "100%",
                        resize: "contain",
                      }}
                      src={item.image}
                    />
                  </div>
                </div>
              </>
            ))}
          </table>
          <br />
          <h5 style={{ textDecorationLine: "underline" }}>
            + and more.. contact me.
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Works;
