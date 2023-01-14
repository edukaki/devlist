import { createBrowserRouter, Navigate } from "react-router-dom";
import Protected from "../common/utils/Protected";
import Home from "../pages/Home";
import Layout from "../Layout/Layout";
import Projects from "../pages/Projects";
import About from "../pages/About";
import SignIn from "../pages/SignIn";
import Faq from "../pages/Faq";
import { ProjectContextProvider } from "../context/ProjectsContext";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/dashboard",
                element: <Navigate replace to="/dashboard/:userid" />,
            },
            {
                path: "/dashboard/:userid",
                element: (
                    <Protected>
                        <ProjectContextProvider>
                            <Projects />
                        </ProjectContextProvider>
                    </Protected>
                ),
            },
            {
                path:"/about",
                element: <About />
            },
            {
                path:"/faq",
                element: <Faq />
            },
            {
                path: "/signin",
                element: <SignIn />,
            },
        ],
    },
]);
