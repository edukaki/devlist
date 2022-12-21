import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <div>Home</div>
    },
    {
        path: '/signin',
        element: <div>Sign In page</div>
    }
])