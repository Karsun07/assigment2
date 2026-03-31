import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
function App(){
    return(
        <>
        <Header></Header>
    
        </>
    )

}
const reactRoot=ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<App/>);