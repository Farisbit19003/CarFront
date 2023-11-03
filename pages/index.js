import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context";
import Link from "next/link";
import React from "react";
import axios from "axios";
import Head from "next/head";
import Login from "./login";

const Home = ({ posts }) => {
  const [state, setState] = useContext(UserContext);
 

  const head = () => (
    <Head>
      <title>Cars</title>
      <meta name="description" content="Carzz" />
      <meta property="og:description" content="Carzz" />
      <meta property="og:type" content="website" />
    </Head>
  );
  return (
    <>
      {head()}
      
      <div className="">
        <div className="">     
        <Login/>
        </div>
      </div>
    </>
  );
};


export default Home;
