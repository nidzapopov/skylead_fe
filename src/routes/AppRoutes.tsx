import { Route, Routes } from "react-router-dom";
import { RoutesConfig } from "./config.routes";
import HomePage from "../pages/Home/HomePage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={RoutesConfig.Home.fullPath} element={<HomePage />} />
        </Routes>
    );
};

export default AppRoutes;
