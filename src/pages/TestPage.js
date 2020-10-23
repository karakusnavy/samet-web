import React, { Component, useState } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import firebase from "firebase";
import firebaseConfig from "../constants/firebase";
import currentDate from "../constants/currentDate";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function string_to_slug(str) {
  str = str.replace(/^\s+|\s+$/g, ""); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
  var to = "aaaaeeeeiiiioooouuuunc------";
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  }

  str = str
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-"); // collapse dashes

  return str;
}

function App() {
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);
  const [inputImage, setinputImage] = useState(null); // selecting image address with input
  const [process, setProcess] = useState(false);
  const [checkbox, setCheckbox] = useState(false);
  const [projectContent, setProjectContent] = useState(null);

  const onChangeFileInput = async (e) => {
    const fileAdress = e.target.files;
    await setinputImage(fileAdress);
  };

  const addNewBlog = async () => {
    setProcess(true);
    var ref = firebase
      .storage()
      .ref()
      .child("samedblog/" + inputImage[0].name);
    await ref.put(inputImage[0]);
    await firebase
      .storage()
      .ref()
      .child("samedblog/" + inputImage[0].name)
      .getDownloadURL()
      .then((ress) => {
        firebase
          .database()
          .ref()
          .child("samedblog/blogs")
          .push()
          .set({
            launguage: "TR",
            title: title,
            image: ress,
            content: content,
            date: currentDate,
            slug: string_to_slug(title),
            work: checkbox,
            projectcontent: projectContent,
          });
        setProcess(false);
      });
  };

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;

    setCheckbox(value);
    console.log(value);
  };

  return (
    <div className="App" style={{ padding: 10, color: "white" }}>
      <center style={{ display: process == true ? "block" : "none" }}>
        <Loader type="Puff" color="rgb(70, 48, 235)" height={100} width={100} />
      </center>
      <div style={{ display: process == true ? "none" : "block" }}>
        <h2>Add New Blog</h2>
        <a>Select Banner Image</a>
        <input
          type="file"
          onChange={(e) => onChangeFileInput(e)}
          style={{ width: "100%", marginTop: 10, marginBottom: 10 }}
        />
        <input
          type="text"
          onChange={(text) => setTitle(text.target.value)}
          placeholder="Title"
          style={{ width: "100%", marginTop: 10, marginBottom: 10 }}
        />
        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from CKEditor 5!</p>"
          onInit={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            setContent(data);
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
        <label>
          <input
            name="isGoing"
            type="checkbox"
            checked={checkbox}
            onChange={handleInputChange}
            style={{ marginRight: 10 }}
          />
          It is Works Page ?
        </label>
        <br />
        <input
          type="text"
          onChange={(text) => setProjectContent(text.target.value)}
          placeholder="Project Content"
          style={{
            width: "100%",
            marginTop: 10,
            marginBottom: 10,
            display: checkbox == true ? "block" : "none",
          }}
        />
        <br />
        <button
          onClick={() => addNewBlog()}
          className="globalButton"
          style={{ border: "none", marginTop: 10 }}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default App;
