import { UserProvider } from "../context";
import React from "react";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "../app/globals.css"
import Nav from "@/components/Nav";
function MyApp({Component,pageProps}){
    return (
        <UserProvider>
        <ToastContainer position="top-right"/>
        <Nav/>
        <Component{...pageProps}/>
        </UserProvider>
)}
export default MyApp;