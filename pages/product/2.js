//SSG Page

import React from 'react';

export default function Product({ product }) {
    // Render product on the page
    return (
        <div>
            <h1>Product Detail</h1>
            <div>
                <h2>{`Azure Functions`}</h2>
                <p>{200}</p>
            </div>
        </div>
    );
}