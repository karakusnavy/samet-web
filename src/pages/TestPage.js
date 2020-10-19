import React, { Component, useState } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import firebase from "firebase";
import firebaseConfig from "../constants/firebase";
import currentDate from "../constants/currentDate";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
firebase.initializeApp(firebaseConfig);

function App() {
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);
  const [inputImage, setinputImage] = useState(null); // selecting image address with input
  const [process, setProcess] = useState(false);

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
        firebase.database().ref().child("samedblog/blogs").push().set({
          launguage: "ENG",
          title: title,
          image: ress,
          content: content,
          date: currentDate,
        });
        setProcess(false);
      });
  };

  return (
    <div className="App" style={{ padding: 10 }}>
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
