import React from 'react'

const Categories = ({ categories }) => {
    return (
        <div>
            <center><h1>Categories</h1></center>
            {categories.map((category) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{category.name}</h5>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Categories