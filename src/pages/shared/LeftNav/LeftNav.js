import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://unexpected-news-server.vercel.app/categories')
            .then(result => result.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h4>Categories</h4>
            {
                categories.map(category => <p key={category.id}>
                    <Link to={`/category/${category.id}`}>{category.name}</Link>
                </p>
                )
            }
        </div>
    );
};

export default LeftNav;