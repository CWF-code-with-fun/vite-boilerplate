import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { useLocation, Navigate, Outlet, Route, Routes } from "react-router-dom";

import { userLoggedIn } from "@/features/auth/authSlice";

import { ROUTES } from "../consts/routes";

const Home = lazy(() => import("@/pages/home"));
const PageLogin = lazy(() => import("@/pages/login"));
const Otp = lazy(() => import("@/pages/otp"));

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
    if (!loggedIn) {
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
                    <Route path={ROUTES.LOGIN} element={<PageLogin>Login Page</PageLogin>} />
                    <Route path={ROUTES.OTP} element={<Otp>Otp Page</Otp>} />
                </Route>

                {/* private routes */}
                <Route element={<PrivateLayout />}>
                    <Route path={ROUTES.ROOT} element={<Home>Home</Home>} />
                </Route>
            </Routes>
        </Suspense>
    );
}
