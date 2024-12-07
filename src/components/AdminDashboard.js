import React from "react";

function AdminDashboard() {
  const files = JSON.parse(localStorage.getItem("files")) || [];

  return (
    <div>
      <h2>All Uploaded Files</h2>
      <ul>
        {files.map((file, index) => (
          <li key={index}>
            Name: {file.name}, Uploader: {file.uploader}, Date: {file.uploadDate}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminDashboard;
