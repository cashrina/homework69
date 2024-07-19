import {Route, Routes} from "react-router-dom";
import Movies from "./containers/Movies.tsx";
import ShowDetails from "./containers/ShowDetails.tsx";


const App = () => {
  return (
      <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/shows/:id" element={<ShowDetails />} />
      </Routes>
  );
};

export default App;

