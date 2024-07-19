import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../app/store";
import { fetchShowDetails, clearSelectedShow } from "../store/filmSlice";

const ShowDetails = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch();
    const selectedShow = useSelector((state: RootState) => state.films.selectedShow);

    useEffect(() => {
        dispatch(fetchShowDetails(Number(id)));

        return () => {
            dispatch(clearSelectedShow());
        };
    }, [dispatch, id]);

    if (!selectedShow) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{selectedShow.name}</h1>
            <img src={selectedShow.image?.medium} alt={selectedShow.name} />
            <p>{selectedShow.summary}</p>
            <p>Genres: {selectedShow.genres.join(", ")}</p>
            <p>Rating: {selectedShow.rating?.average || 'N/A'}</p>
        </div>
    );
};

export default ShowDetails;
