import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';


const contentNode=document.getElementById('contents');
ReactDOM.render(<Layout/>,contentNode,()=>{
    console.log("Load layout");
});