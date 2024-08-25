import React from "react";
import Picture from "../component/Picture";
import data from "../helper/data";

const Homepage = ({ src, photographer }) => {
  return (
    <div className="container">
        <h1 className="baslik">Image Gallery</h1>
        <div className="main">
      
      {data.map((item) => {
        const { photographer, src } = item;
        return (
          <div  className="flex" >
           <Picture  src={src.large} photographer={photographer} />
          </div>
        );
      })}</div>
    </div>
  );
};
export default Homepage;
