import { Container, Movie, MovieList } from "./components";
import { useState, useEffect } from "react";
import { API_IMAGE, API_KEY } from "../../config/api_key";
import { Link } from "react-router-dom";
import SearchBox from "../../components/movie-filter";


interface Movie {
    id: number;
    title: string;
    poster_path: string;
}

export default function Home(){

    const [movies, setMovies] = useState<Movie[]>([]);
    const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);


    useEffect(() => {
        //Consumir a api
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`)
            .then(response => response.json())
            .then(data => setMovies(data.results))
    }, [])

    const handleFilter = (filtered: Movie[]) => {
        setFilteredMovies(filtered);
    };

    return (
        <Container>
            <h1>Net Filmes</h1>
            <SearchBox movies={movies} onFilter={handleFilter} />
            <MovieList>
                {
                    filteredMovies.map(movie => {
                        return (
                            <Movie>
                                <a href="#"><img src={`${API_IMAGE}${movie.poster_path}`} alt={movie.title}></img></a>
                                <span>{movie.title}</span>
                            </Movie>
                        )
                    })
                }
            </MovieList>
        </Container>
    );
}