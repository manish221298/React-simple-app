import { useState } from "react";

function useApi(url){
    const [data, setData] = useState()
    function fetchData(){
        fetch(url)
        .then(res => res.json())
        .then(data => setData(data?.data))
    }

    return {data, fetchData}
}

export default useApi