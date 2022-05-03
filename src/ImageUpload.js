import { Button } from "@mui/material";
import React, { useState } from "react";
import { db, storage } from "./firebase.js";
import "./ImageUpload.css";

function ImageUpload() {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [caption, setCaption] = useState("");

  const handleChange = (event) => {
    if (event.target.file[0]) {
      setImage(event.target.file[0]);
    }
  };
  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
        alert(error.message);
      }
    );
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Write a caption.."
        onChange={(event) => setCaption(event.target.value)}
        value={handleUpload}
      />
      <input type="file" onChange={handleChange} />
      <Button onClick={handleUpload}>Upload</Button>
    </div>
  );
}

export default ImageUpload;
