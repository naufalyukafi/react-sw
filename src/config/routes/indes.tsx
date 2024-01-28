import { createBrowserRouter } from "react-router-dom";

const routers = createBrowserRouter([{
    path: "/",
    children: [
        {
            path: "/",
            async lazy() {
                const module = await import("../../pages/auth/Login/Signin");
                return { Component: module.default }
            }
        },
        {
            path: "/home",
            async lazy() {
                const module = await import("../../pages/home");
                return { Component: module.default }
            }
        }
    ]
}])

export default routers