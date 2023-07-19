import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Loading from "./atoms/Loading.component";
import Weather from "./pages/Weather.pages";
import "./App.css";
import { PublicRoutes } from "../routes";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route
                    path={PublicRoutes.HOME}
                    element={<h1>Hello World</h1>}
                />
                <Route path={PublicRoutes.LOADING} element={<Loading />} />
                <Route path={PublicRoutes.ERROR} element={<h1>Error </h1>} />
                <Route path={PublicRoutes.WEATHER} element={<Weather />} />
                {/* <Link to="/">Home</Link> */}
            </Routes>
        </div>
    );
}

export default App;
