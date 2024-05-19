import React, { lazy, Suspense, useEffect, useState } from "react";
// import React, { Suspense, useEffect, useState } from 'react';
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { ROUTES } from "../consts/routes";
import { userLoggedIn } from "@/features/auth/authSlice";

const Home = lazy(() => import("./home"));
const PageLogin = lazy(() => import("./login"));

// import { LangsKind } from "../consts";
// import { LayoutKind } from "../design/utils/config";
// import { Loading } from "design/components/atoms/loading/loading";

// export type InnerPageProps = {
//     pageLang?: LangsKind;
//     layout: LayoutKind;
// };

// export type InnerPageLangProps = {
//     pageLang: LangsKind;
//     layout: LayoutKind;
// };

// export type PageProps = {
//     setPageLang: React.Dispatch<React.SetStateAction<any>>;
//     pageLang: LangsKind;
//     layout: LayoutKind;
// };

// my code
function PublicLayout() {
    return <Outlet />;
}

function PrivateLayout() {
    const loggedIn = false;
    // const { loggedIn } = useAuthContext();
    if (!loggedIn) {
        return <Navigate to={ROUTES.LOGIN} />;
    }
    return <Outlet />;
}

// const LoggedInRequired = () => {
//     const [isLoggedIn, setIsLoggedIn] = useState<boolean | undefined>(undefined);

//     useEffect(() => {
//         (async () => {
//             // const isAuthenticated = (await getCurrentUser()) !== null;
//             setIsLoggedIn(isAuthenticated);
//         })();
//     }, []);
//     if (isLoggedIn === undefined) return <></>;
//     return isLoggedIn ? <Outlet /> : <Navigate to={ROUTES.LOGIN} />;
// };

export const RootPath = () => {
    return (
        <Routes>
            {/* public routes */}
            <Route element={<PublicLayout />}>
                <Route path="/login" element={<PageLogin>Login Page</PageLogin>} />
            </Route>
            {/* private routes */}
            <Route element={<PrivateLayout />}>
                <Route path="/home" element={<Home>Home</Home>} />
            </Route>
        </Routes>
    );
};
