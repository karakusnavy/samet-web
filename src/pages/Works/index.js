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
                <Link
                  to={"/blog/" + item.slug}
                  style={{ float: "right" }}
                  className="globalButton"
                >
                  <tr>
                    <td>
                      <h5>{item.title}</h5>
                      <a>{item.projectcontent}</a>
                    </td>
                  </tr>
                </Link>
                <tr>
                  <td>
                    <hr />
                  </td>
                </tr>
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
