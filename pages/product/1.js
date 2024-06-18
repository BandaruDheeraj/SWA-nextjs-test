//SSG Page

import React from 'react';

export default function Product({ product }) {
    // Render product on the page
    return (
        <div>
            <h1>Product Detail</h1>
            <div>
                <h2>{`Azure Static Web Apps`}</h2>
                <p>{100}</p>
            </div>
        </div>
    );
}