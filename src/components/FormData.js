import React from "react";

function FormData({ data }) {
 

  return (
    <>
      <h1>Listing Data</h1>
      <label>First Name</label>
      <input type="text" defaultValue={data?.first_name} /><br /><br />
      <label>Last Name</label>
      <input type="text" defaultValue={data?.last_name} /><br /><br />
      <label>Email</label>
      <input type="text" defaultValue={data?.email} /><br /><br />
      <img src={data?.avatar}  />
    </>
  );
}

export default FormData;
