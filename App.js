//Parcel is a beast !!!

import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement("h1", {
    id:"title1",
    className:"class1",
    style:{
        color: "red"
    }
}, "Heading 1");

const heading2 = React.createElement("h2", {
    id:"title2",
    className:"class1",
    style:{
        color: "green"
    }
}, "Heading 2");

const heading3 = React.createElement("h3", {
    id: "title3",
    className: "class1",
    style : {
        color:"blue"
    }
}, "This is heading 3");

const container = React.createElement("div", {
    id : "container",
    hello: "world"},                     // Props
    [heading1, heading2, heading3]
    );

// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

//Passing a react element inside the root
root.render(container);