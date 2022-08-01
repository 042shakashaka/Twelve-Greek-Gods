import React from "react";
import ReactDom from "react-dom";
import './index.css';
import Booklist from "./Gods";
import Footer from "./Footer";
import Gods from "./Gods";
import Header from "./Header";


function App() {
    return ( <
        div className = "app" >
        <
        Booklist / >
        <
        Header / >
        <
        Gods / >
        <
        Footer / >
        <
        /div>
    );
}


ReactDom.render( < App / > , document.getElementById("root"));