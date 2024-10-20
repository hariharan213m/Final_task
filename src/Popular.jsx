import theBoys from "../public/images/img/the boys.jpg";
import moneyHeist from "../public/images/img/money heist.jpg";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";

const Popular = ({
  posters,
  movies,
  scrollContainerRef,
  scrollToLeft,
  scrollToRight,
}) => {
  return (
    <section>
      <h4>Popular</h4>
      <FaChevronLeft className="leftArrow" onClick={scrollToLeft} />
      <FaChevronRight className="rightArrow" onClick={scrollToRight} />
      <div className="cards" ref={scrollContainerRef}>
        {movies.map((movie) => (
          <Link className="card">
            {posters.map((poster, index) => (
              <img
                key={index}
                src={poster}
                alt={`Movie Poster ${index + 1}`}
                className="poster"
              />
            ))}

            <div className="rest_card">
              <img src="" alt={movie.name} />
              <div className="cont">
                <h4>{movie.name}</h4>
                <div className="sub">
                  <p>
                    {movie.genre}, {movie.date}
                  </p>
                  <h3>
                    <span>IMDB</span>
                    <FaStar />
                    {movie.imdb}
                  </h3>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Popular;
