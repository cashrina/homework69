import {useDispatch} from "react-redux";
import React, {useState} from "react";
import {fetchMoviesSlice} from "../store/filmSlice.ts";

const Movies = () => {

    const [movieValue, setMovieValue]= useState<string>('');
    const dispatch = useDispatch();

    const getMovie = async () => {
        dispatch(fetchMoviesSlice({name: movieValue}));
    };

    const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMovieValue(event.target.value);
    };

    return (
        <div>
            <div className="bg-primary">
                <h1 className="text-light ms-3">TV Show</h1>
            </div>
            <div className="container d-flex justify-content-center align-items-center">
                <p className="me-3">Search for TV Show</p>
                <input type="text" value={movieValue} onChange={inputChange} />
                <button className="btn btn-primary mx-3" onClick={getMovie}>Serch</button>
                <div className="border-primary"></div>
            </div>
        </div>
    );
};

export default Movies;