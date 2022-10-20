import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const categoryNews = useLoaderData();

    return (
        <div>
            <h2>Category</h2>
            <p>{categoryNews.length}</p>
        </div>
    );
};

export default Category;