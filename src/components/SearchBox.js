import React, { useState } from "react";
import useApi from "../apicomponents/useApi";
import Button from "./Button";
import FormData from "./FormData";

function SearchBox() {
  const [searchVal, setSearchVal] = useState("");
  const { data, fetchData } = useApi(
    `https://reqres.in/api/users/${searchVal}`
  );

  const handleSearch = (e) => {
    const num = e.target.value
    if(num < 11 ){
        setSearchVal(e.target.value);
    }
  };

  console.log("data", data)

  return (
    <div>
      <h1>SearchBox</h1>
      <input type="number" value={searchVal} onChange={handleSearch} />
      <Button fetchData={fetchData} />
      <FormData data={data} />
    </div>
  );
}

export default SearchBox;
