import React from "react";

function FormData({ data }) {
  console.log("form data form page", data);

  return (
    <>
      <h1>Listing Data</h1>
      <label>First Name</label>
      <label>Last Name</label>
      <label>Email</label>
    </>
  );
}

export default FormData;
