import { createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/SignIn";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <div>Home</div>
    },
    {
        path: '/signin',
        element: <SignIn />
    }
])