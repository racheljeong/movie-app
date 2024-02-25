import Movie from "../components/Movie";
import { useEffect, useState } from "react";
import styles from "./Home.module.css";

function Home () {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getMovies = async() => {
        const json = await 
        (await fetch(`https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023`
        )
        ).json();
        console.log(json.data.results);
        setMovies(json.data.results);
        setIsLoading(false);
    }

    useEffect(() => {
        getMovies();
    },[]);

    return (
        <div className={styles.container}>
        {isLoading ? (
        <div className={styles.loader}>
            <h1 className={styles.loading}>Loading...</h1>
        </div>
        ) : (
        <div className={styles.movies}>
        <h1 className={styles.home_title}>Marvel</h1>
            {movies.every(movie => movie.thumbnail.path) && movies.map((movie) => (
            <Movie 
                key={movie.id}
                id={movie.id}
                coverImg={`${movie.thumbnail.path}.${movie.thumbnail.extension}`}
                title={movie.name}
                summary={movie.description ?? null}
            />
            ))}
        </div>
        )}
        </div>
    );
}

export default Home;