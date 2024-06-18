//SSG Page

import React from 'react';

export async function getStaticProps() {
    // Mock fetch product data
    const product = {
        id: 1,
        name: `Azure Static Web Apps`,
        price: 100,
    };

    return { props: { product } };
}

export default function Product({ product }) {
    // Render product on the page
    return (
        <div>
            <h1>Product Detail</h1>
            {product && (
                <div>
                    <h2>{product.name}</h2>
                    <p>{product.price}</p>
                </div>
            )}
        </div>
    );
}