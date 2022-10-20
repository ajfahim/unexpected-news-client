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
                loader: () => fetch(`http://localhost:5000/news`),
                element: <Home></Home>
            },
            {
                path: "category/:id",
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
                element: <Category></Category>
            },
            {
                path: "news/:id",
                loader: (params) => fetch(`http://localhost:5000/news/${params.id}`),
                element: <News></News>
            },
        ]

    }
])