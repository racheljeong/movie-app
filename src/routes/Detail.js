import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import styles from "./Detail.module.css";
function Detail() {
    
    const {id} = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState([]);

    const getMovie = async() => {
        const json = await (
            await fetch(`https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`)
        ).json();
        console.log(json.data.results);
        setMovie(json.data.results);
        setIsLoading(false);
    }
    
    useEffect(() => {
        getMovie();
    },[]);

    return (    
        <div className={styles.detail_container}>
            {isLoading ? (
                <div className={styles.detail_loader}>
                    <h1 className={styles.detail_loading}>Loading...</h1>
                </div>
            ) : (
                movie.map((one) => (
                    <div key={one.id}>
                        <h1 className={styles.movie_detail_title}>{one.name}</h1>
                        <img className={styles.detail_movie_img} src={`${one.thumbnail.path}.${one.thumbnail.extension}`}alt={one.name} />
                        {one.description ?? "No Description yet"} 
                        {/* {one.description ? (
                            <span className={styles.info} >{one.description}</span>
                        ) : (
                            one.urls.map((url, index) => (
                                <p className={styles.infoLink} key={index}>{url.url}</p>
                            ))
                        )} */}
                    </div>
                ))
            )}
        </div>
    );
}

export default Detail;