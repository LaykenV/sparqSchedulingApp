import React, {useState} from "react";

const DevNote = ({message, header, page}) => {
    const [display, setDisplay] = useState("flex");
    if (page === "landingPage") {
        return(
            <div style={{height: "300px", width: "450px", display: display, flexDirection: "column", justifyContent: "flex-start", alignItems: "center", gap: "20px", position: "fixed", top: "500px", left: "100px", backgroundColor: "white", border: "2px solid red"}}>
                <div style={{width: "100%", textAlign: "center", fontSize: "xx-large", borderBottom: "1px solid black"}}>{header}</div>
                <div style={{width: "100%", textAlign: "center", fontSize: "medium"}}>{message}</div>
                <button onClick={() => {setDisplay("none")}} style={{height: "30px", width: "100px", position: "absolute", bottom: "5px", right: "5px", border: "2px solid red", backgroundColor: "white", color: "red", cursor: "pointer"}}>Close</button>
            </div>
        )      
    }
    if (page === "profilePage") {
        return(
            <div style={{height: "250px", width: "450px", display: display, flexDirection: "column", justifyContent: "flex-start", alignItems: "center", gap: "20px", position: "fixed", top: "400px", right: "400px", backgroundColor: "white", border: "2px solid red"}}>
                <div style={{width: "100%", textAlign: "center", fontSize: "xx-large", borderBottom: "1px solid black"}}>{header}</div>
                <div style={{width: "100%", textAlign: "center", fontSize: "medium"}}>{message}</div>
                <button onClick={() => {setDisplay("none")}} style={{height: "30px", width: "100px", position: "absolute", bottom: "5px", right: "5px", border: "2px solid red", backgroundColor: "white", color: "red", cursor: "pointer"}}>Close</button>
            </div>
        )  
    }
    if (page === "dashboard") {
        return(
            <div style={{height: "250px", width: "450px", display: display, flexDirection: "column", justifyContent: "flex-start", alignItems: "center", gap: "20px", position: "fixed", top: "350px", right: "650px", backgroundColor: "white", border: "2px solid red"}}>
                <div style={{width: "100%", textAlign: "center", fontSize: "xx-large", borderBottom: "1px solid black"}}>{header}</div>
                <div style={{width: "90%", textAlign: "center", fontSize: "medium"}}>{message}</div>
                <button onClick={() => {setDisplay("none")}} style={{height: "30px", width: "100px", position: "absolute", bottom: "5px", right: "5px", border: "2px solid red", backgroundColor: "white", color: "red", cursor: "pointer"}}>Close</button>
            </div>
        )  
    }
}

export {DevNote};