import { useDispatch, useSelector } from "react-redux";
import {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import {fetchShowDetails} from "../store/filmSlice.ts";
import {Movie} from "../type.ts";

const Movies = () => {
    const [movieValue, setMovieValue] = useState<string>('');
    const [autocompleteResults, setAutocompleteResults] = useState<Movie[]>([{name: '', description: '', image: '',}]);

    const dispatch = useDispatch();

    const getMovie = async () => {
        void dispatch(fetchShowDetails({movieValue}));

    };

    useEffect(() => {
        const searchMovies = async () => {
            try {

                if (movieValue === '') {
                    setAutocompleteResults([]);
                    return;
                }
                const mockAPIResponse = [
                    { name: 'Movie 1', description: 'Description 1', image: 'image1.jpg' },
                    { name: 'Movie 2', description: 'Description 2', image: 'image2.jpg' },
                    { name: 'Movie 3', description: 'Description 3', image: 'image3.jpg' }
                ];

                setAutocompleteResults(mockAPIResponse);
            } catch (error) {
                console.error('Error fetching movie data:', error);
            }
        };

       void searchMovies();
    }, [movieValue]);

    return (
        <div>
            <div className="bg-primary py-3">
                <div className="container d-flex justify-content-center align-items-center">
                    <h1 className="text-light ms-3">TV Show</h1>
                </div>
            </div>

            <div className="container d-flex justify-content-center align-items-center mt-3">
                <div className="col-md-7 d-flex justify-content-center align-items-center">
                    <p className="me-3 mb-0">Search for TV Show</p>
                    <div className="input-group">
                        <input
                            required
                            className="form-control text-uppercase"
                            type="text"
                            value={movieValue}
                            onChange={e => setMovieValue(e.target.value)}
                        />
                        <button className="btn btn-primary mx-3" onClick={getMovie}>Search</button>
                    </div>
                </div>
            </div>

            {autocompleteResults.length > 0 && (
                <div className="container mt-3">
                    <div className="autocomplete">
                        {autocompleteResults.map((result, index) => (
                            <div key={index} className="autocomplete-item">
                                <NavLink to={`/shows/${result.name}`}>{result.name}</NavLink>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>

    );
};

export default Movies;
