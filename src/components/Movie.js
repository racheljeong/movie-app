import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie ({ id, coverImg, title}) {
  //console.log(`movie arrived`);
  return ( 
        <div className={styles.eachMovieContainer}>
          <img className={styles.image} src={coverImg} alt={title} />
          <h2 className={styles.title}>
            <Link className={styles.title.a} to={`/character/${id}`}>{title}</Link>
          </h2>
          {/* <p className={styles.summary}>{summary}</p> */}
        </div>
    );
}


Movie.propTypes = {
    id : PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    //genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

export default Movie;