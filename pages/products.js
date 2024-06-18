// SSR Page
import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

export async function getServerSideProps() {
    // Mock product data
    const products = [
        { id: 1, name: 'Azure Static Web Apps', price: 100 },
        { id: 2, name: 'Azure Functions', price: 200 },
        // Add more products as needed
    ];

    // Pass data to the page via props
    return { props: { products } };
}

export default function Products({ products }) {
    const [name, setName] = useState('');
    const [response, setResponse] = useState(null);

    const handleSend = async () => {
        try {
            const res = await axios.get(`https://js-test-2-linux.azurewebsites.net/api/whois/${name}`);
            setResponse(res.data);
        } catch (err) {
            console.error(err);
        }
    };

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

            <div>
                <h2>Questions about the product?</h2>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
                <button onClick={handleSend}>Send</button>
                {response && <p>{response}</p>}
            </div>


        </div>
    );
}