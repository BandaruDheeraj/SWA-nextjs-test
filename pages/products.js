// SSR Page
import React from 'react';
import Link from 'next/link';

export async function getServerSideProps() {
    // Mock product data
    const products = [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 },
        // Add more products as needed
    ];

    // Pass data to the page via props
    return { props: { products } };
}

export default function Products({ products }) {
    // Render products on the page
    return (
        <div>
            <h1>Products</h1>
            {products.map(product => (
                <div key={product.id}>
                    <h2>
                        <Link href={`/product/${product.id}`}>
                            {product.name}
                        </Link>
                    </h2>
                    <p>{product.price}</p>
                </div>
            ))}
        </div>
    );
}