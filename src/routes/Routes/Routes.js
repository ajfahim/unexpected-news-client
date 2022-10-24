import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Category from "../../pages/Category/Category";
import Home from "../../pages/Home/Home";
import Login from "../../pages/LoginAndRegister/Login/Login";
import Register from "../../pages/LoginAndRegister/Register/Register";
import News from "../../pages/News/News";
import Profile from "../../pages/Profile/Profile";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                loader: () => fetch(`https://unexpected-news-server.vercel.app/news`),
                element: <Home></Home>
            },
            {
                path: "category/:id",
                loader: ({ params }) => fetch(`https://unexpected-news-server.vercel.app/category/${params.id}`),
                element: <Category></Category>
            },
            {
                path: "news/:id",
                loader: ({ params }) => fetch(`https://unexpected-news-server.vercel.app/news/${params.id}`),
                element: <PrivateRoutes><News></News></PrivateRoutes>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            },
            {
                path: "profile",
                element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
            }
        ]

    }
])