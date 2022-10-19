import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Category from "../../pages/Category/Category";
import Home from "../../pages/Home/Home";
import News from "../../pages/News/News";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "category/:id",
                element: <Category></Category>
            },
            {
                path: "news/:id",
                element: <News></News>
            },
        ]

    }
])