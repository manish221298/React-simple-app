import React from "react"

function Button({fetchData}){
    const handleSubmit = () => {
        fetchData()
    }
    return(
        <>
            <button onClick={handleSubmit}>SUBMIT</button>
        </>
    )
}

export default Button