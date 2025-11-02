import { NavLink, Routes, Route } from "react-router";
import { Movie_List, Movie_Details, PageNotFound, Search } from "../pages/index.jsx";
export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Movie_List />} />
            <Route path="/movie/:id" element={<Movie_Details />} />
            <Route path="/movies/popular" element={<Movie_List />} />
            <Route path="/movies/top" element={<Movie_List />} />
            <Route path="/movies/upcoming" element={<Movie_List />} />
            <Route path="/search" element={<Search />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
}