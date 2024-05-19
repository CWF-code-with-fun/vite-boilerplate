import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { useLocation, Navigate, Outlet, Route, Routes } from "react-router-dom";

import { userLoggedIn } from "@/features/auth/authSlice";

import { ROUTES } from "../consts/routes";

const Home = lazy(() => import("./home"));
const PageLogin = lazy(() => import("./login"));

function PublicLayout() {
    return <Outlet />;
}

function PrivateLayout() {
    const loggedIn = useSelector(userLoggedIn);
    const location = useLocation();
    if (!loggedIn) {
        return <Navigate to={ROUTES.LOGIN} state={{ from: location }} />;
    }
    return <Outlet />;
}

function PublicOnlyLayout() {
    const loggedIn = useSelector(userLoggedIn);
    const location = useLocation();
    if (loggedIn) {
        return <Navigate to={ROUTES.ROOT} state={{ from: location }} />;
    }
    return <Outlet />;
}

export function RootPath() {
    return (
        <Suspense fallback={<div>loading</div>}>
            <Routes>
                {/* public routes accessible to all */}
                <Route element={<PublicLayout />}>
                    <Route path="/public" element={<div>public</div>} />
                </Route>

                {/* public only routes */}
                <Route element={<PublicOnlyLayout />}>
                    <Route path="/login" element={<PageLogin>Login Page</PageLogin>} />
                </Route>

                {/* private routes */}
                <Route element={<PrivateLayout />}>
                    <Route path="/home" element={<Home>Home</Home>} />
                </Route>
            </Routes>
        </Suspense>
    );
}
