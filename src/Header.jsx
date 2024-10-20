import React from "react";
import { Link } from "react-router-dom";
import userImg from "../public/images/img/user_img.jpg";
import theBoys from "../public/images/img/the boys.jpg";
import { FaStar } from "react-icons/fa";
const Header = ({
  movies,
  search,
  setSearch,
  isCardVisible,
  handleSearchBoxClick,
}) => {

 
  return (
    <nav>
      <div className="logo_ul">
        <div className="logo">
          <h3>Movies</h3>
        </div>

        <ul>
          <li>
            <Link className="navList">Home</Link>
          </li>
          <li>
            <Link className="navList">Series</Link>
          </li>
          <li>
            <Link className="navList">movies</Link>
          </li>
          <li>
            <Link className="navList">Kids</Link>
          </li>
        </ul>
      </div>
      <div className="search_user">
        <input
          type="text"
          placeholder="Search..."
          id="search_input"
          role="searchbox"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onClick={handleSearchBoxClick}
        />
        <img src={userImg} alt="User image" />

        <div className="search">
          {isCardVisible && (
            <>
              {movies.map((movie) => (
                <Link className="card" style={{ visibility: "visible" }}>
                  <img src={theBoys} alt="The Boys" />
                  <div className="cont">
                    <h3>{movie.name}</h3>
                    <p>
                      {movie.genre}, {movie.date},<span>IMDB</span>
                      <FaStar />
                      {movie.imdb}
                    </p>
                  </div>
                </Link>
              ))}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
