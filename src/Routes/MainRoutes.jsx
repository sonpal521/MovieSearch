import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Error from '../Pages/Error';
import MovieDetails from '../Pages/MovieDetails';
function MainRoutes() {
    return (
        <Routes> 
            {/* routes contain multiple route */}
            <Route path='/' element={<Home />} />
            <Route path='/movie/:id' element={<MovieDetails/>} />
            <Route path='*' element={<Error />} />
        </Routes>
    )
}

export default MainRoutes;