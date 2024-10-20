import React from "react";
import { FaStar } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
import { IoMdCloudDownload } from "react-icons/io";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <div className="content">
      <h1 id="title">The Boys</h1>
      <p>
        Superheroes are often as popular as celebrities, as influential as
        politicians, and sometimes even as revered as gods. But that's when
        they're using their powers for good.
      </p>
      <div className="details">
        <h6>A Netflix Original Flim</h6>
        <h5 id="gen">Thriller</h5>
        <h4>2019</h4>
        <h3 id="rate">
          <span>IMDB</span>
          <FaStar />
          8.7
        </h3>
      </div>
      <div className="btns">
        <Link id="play">
          watch
          <FaPlay />
        </Link>
        <Link id="download_main">
          <IoMdCloudDownload />
        </Link>
      </div>
    </div>
  );
};

export default Content;
