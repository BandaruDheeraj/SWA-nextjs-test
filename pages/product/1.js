// CSR Version
// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';

// export default function Product() {
//     const router = useRouter();
//     const { id } = router.query;
//     const [product, setProduct] = useState(null);

//     useEffect(() => {
//         // Mock fetch product data
//         const fetchedProduct = {
//             id,
//             name: `Product ${id}`,
//             price: 100 * id,
//         };
//         setProduct(fetchedProduct);
//     }, [id]);

//     // Render product on the page
//     return (
//         <div>
//             <h1>Product Detail</h1>
//             {product && (
//                 <div>
//                     <h2>{product.name}</h2>
//                     <p>{product.price}</p>
//                 </div>
//             )}
//         </div>
//     );
// }

//SSG Page

import React from 'react';

export async function getStaticProps() {
    // Mock fetch product data
    const product = {
        id: 1,
        name: `Product 1`,
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