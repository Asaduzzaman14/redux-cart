import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';

const Home = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const state = useSelector((state) => state)
    console.log(state);

    return (
        <div>
            <h2 className='text-2xl py-3'>This is HOME</h2>
            <div className='grid grid-cols-3 gap-3 px-5'>
                {
                    products.map((product) => {
                        return (

                            <ProductCard product={product} />
                        )
                    })

                }
            </div>
        </div>
    );
};

export default Home;