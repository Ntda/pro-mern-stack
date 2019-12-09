import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout.jsx'

const contentNode=document.getElementById('contents');
ReactDOM.render(<Layout/>,contentNode,()=>{
    console.log("Load layout");
});