import React, { useState } from "react";

function Upload() {
  const [file, setFile] = useState(null);

  const handleUpload = () => {
    const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
    if (!loggedInUser) {
      alert("Please log in first!");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const files = JSON.parse(localStorage.getItem("files")) || [];
      files.push({
        name: file.name,
        content: event.target.result,
        uploader: loggedInUser.username,
        uploadDate: new Date().toISOString(),
      });
      localStorage.setItem("files", JSON.stringify(files));
      alert("File uploaded successfully!");
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <h2>Upload File</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default Upload;
